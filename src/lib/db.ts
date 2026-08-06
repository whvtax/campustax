// CRM data access. Writes to the SAME Supabase tables as the WHV brand
// (crm_clients / crm_tasks), always with source = 'students' so the shared
// dashboard can filter by brand. Requires migration 013_add_source_column.sql
// to have run on the shared project first.
import { getSupabase } from '@/lib/supabase'
import crypto from 'crypto'

export const SOURCE = 'students'

export type TaskType = 'tax-return' | 'super' | 'tfn' | 'abn'

export type NewTask = {
  clientId: string
  clientName: string
  taskType: TaskType
  whatsapp: string
  email: string
  country: string
  dob: string
  taxYear: string
  submittedAt: string
  address: string
  tfn: string
  bankDetails: string
  primaryJob: string
  marital: string
  taxStatus: string
  howHeard: string
  auPhone: string
  notes: string
  fileUrls: string[]
  refCode?: string
}

/** Normalise a phone number to bare digits for reliable matching
 *  (+61 400 000 000, 0400000000 and 61400000000 all become comparable). */
export function normalisePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  if (!digits) return ''
  // Australian numbers: drop leading 0, ensure 61 prefix for comparison
  if (digits.startsWith('0')) return `61${digits.slice(1)}`
  return digits
}

export async function findExistingClient(
  email: string,
  whatsapp: string,
): Promise<{ id: string } | null> {
  const sb = getSupabase()
  // SECURITY: never interpolate user input into PostgREST filter strings.
  // Two separate parameterised equality queries instead of a built .or().
  if (email) {
    const { data, error } = await sb.from('crm_clients').select('id').eq('email', email).limit(1)
    if (error) console.error('[findExistingClient] email lookup failed:', error.code)
    if (data?.[0]) return data[0]
  }
  const phone = normalisePhone(whatsapp)
  const suffix = phone.slice(-9)
  // Short inputs like "+1" would match a random client's number ending.
  // Only match on a meaningful suffix.
  if (suffix.length >= 8) {
    const { data, error } = await sb.from('crm_clients').select('id, whatsapp').ilike('whatsapp', `%${suffix}`).limit(1)
    if (error) console.error('[findExistingClient] phone lookup failed:', error.code)
    if (data?.[0]) return { id: data[0].id }
  }
  return null
}

/** Ensure a crm_clients row exists so tasks never reference an orphan client
 *  and returning students actually match on their next submission. */
export async function upsertClient(row: {
  id: string
  fullName: string
  email: string
  whatsapp: string
  country: string
  dob: string
  howHeard: string
  isNew: boolean
}): Promise<void> {
  if (!row.isNew) return
  const sb = getSupabase()
  const { error } = await sb.from('crm_clients').insert({
    id: row.id,
    full_name: row.fullName,
    dob: row.dob,
    whatsapp: row.whatsapp,
    email: row.email,
    country: row.country,
    how_heard: row.howHeard,
    created_at: new Date().toISOString(),
    source: SOURCE,
  })
  if (error) {
    console.error('[upsertClient] insert failed:', error.code)
    // Fail loudly: a task pointing at a client row that does not exist is an
    // orphan nobody can open from the dashboard client list.
    throw new Error('client_insert_failed')
  }
}

export async function createTask(data: NewTask): Promise<{ id: string }> {
  const sb = getSupabase()
  const id = `TASK-${crypto.randomUUID()}`
  const row = {
    id,
    client_id: data.clientId,
    client_name: data.clientName,
    task_type: data.taskType,
    whatsapp: data.whatsapp,
    email: data.email,
    country: data.country,
    dob: data.dob,
    tax_year: data.taxYear,
    submitted_at: data.submittedAt,
    done: false,
    address: data.address,
    tfn: data.tfn,
    bank_details: data.bankDetails,
    primary_job: data.primaryJob,
    marital: data.marital,
    tax_status: data.taxStatus,
    how_heard: data.howHeard,
    au_phone: data.auPhone,
    notes: data.notes,
    file_urls: JSON.stringify(data.fileUrls ?? []),
    ref_code: data.refCode ?? null,
    review_status: 'pending',
    reviewer_note: '',
    reviewed_at: '',
    source: SOURCE,
  }
  const { error } = await sb.from('crm_tasks').insert(row)
  if (error) {
    // Log the code only. The row contains TFN, DOB and bank details and must
    // never reach logs.
    console.error('[createTask] insert failed:', error.code)
    throw new Error('db_insert_failed')
  }
  return { id }
}
