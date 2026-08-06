// Shared plumbing for the four form API routes. Field mappings live in each
// route and mirror the WHV routes one to one, so the shared CRM sees the same
// data shapes. Every task is tagged source = 'students' (see db.ts).
import { NextRequest, NextResponse } from 'next/server'
import { createTask, findExistingClient, upsertClient, normalisePhone, type NewTask, type TaskType } from '@/lib/db'
import { isRateLimited } from '@/lib/rate-limit'
import { getClientIp } from '@/lib/get-ip'
import { uploadFiles, deleteFiles } from '@/lib/upload'
import { sanitiseShort } from '@/lib/sanitise'
import crypto from 'crypto'

export type LeadContext = {
  formData: FormData
  clientId: string
  isReturning: boolean
  fullName: string
  email: string
  whatsapp: string
}

export async function handleLead(
  req: NextRequest,
  bucket: string,
  opts: {
    taskType: TaskType
    nameFields: [string] | [string, string]
    whatsappField: string
    fileFields: string[]
    build: (ctx: LeadContext) => Omit<NewTask, 'clientId' | 'clientName' | 'taskType' | 'whatsapp' | 'email' | 'submittedAt' | 'fileUrls'>
  },
) {
  try {
    const ip = getClientIp(req)
    if (await isRateLimited(ip, bucket)) {
      return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
    }

    const formData = await req.formData()

    // Honeypot: real users never fill this hidden field. Named so that
    // browser autofill will not touch it, and hits are logged so silent
    // drops stay visible.
    if (sanitiseShort(formData.get('contact_time'))) {
      console.warn(`[${bucket}] honeypot hit`)
      return NextResponse.json({ ok: true })
    }

    const email = sanitiseShort(formData.get('email')).toLowerCase()
    const whatsapp = sanitiseShort(formData.get(opts.whatsappField))
    const fullName = opts.nameFields
      .map((f) => sanitiseShort(formData.get(f)))
      .filter(Boolean)
      .join(' ')
    if (!fullName || (!email && !whatsapp)) {
      return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 })
    }

    const existing = await findExistingClient(email, whatsapp)
    const clientId = existing?.id ?? `CLT-${crypto.randomUUID()}`
    await upsertClient({
      id: clientId,
      fullName,
      email,
      whatsapp: normalisePhone(whatsapp) || whatsapp,
      country: sanitiseShort(formData.get('country') ?? formData.get('passportCountry')),
      dob: sanitiseShort(formData.get('dob')),
      howHeard: sanitiseShort(formData.get('howHeard')),
      isNew: !existing,
    })

    // Files go to the shared PRIVATE bucket, keyed per form and client.
    let fileUrls: string[] = []
    if (opts.fileFields.length) {
      const files = opts.fileFields.map((f) => {
        const v = formData.get(f)
        return v instanceof File ? v : null
      })
      try {
        fileUrls = await uploadFiles(files, `${bucket}/${clientId}`)
      } catch (uploadErr) {
        const msg = uploadErr instanceof Error ? uploadErr.message : 'Upload error'
        return NextResponse.json({ ok: false, error: 'invalid_file', message: msg }, { status: 400 })
      }
    }

    const ctx: LeadContext = { formData, clientId, isReturning: !!existing, fullName, email, whatsapp }
    const rest = opts.build(ctx)

    try {
      await createTask({
        clientId,
        clientName: fullName,
        taskType: opts.taskType,
        whatsapp,
        email,
        submittedAt: new Date().toISOString(),
        fileUrls,
        ...rest,
      })
    } catch (err) {
      // Do not leave identity documents orphaned in the bucket if the task
      // row never made it into the CRM.
      if (fileUrls.length) await deleteFiles(fileUrls).catch(() => {})
      throw err
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(`[${bucket}] FAILED:`, err)
    return NextResponse.json({ ok: false, error: 'submission_failed' }, { status: 500 })
  }
}
