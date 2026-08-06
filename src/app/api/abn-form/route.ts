export const runtime = 'nodejs'
export const maxDuration = 60
export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { handleLead } from '@/lib/lead-handler'
import { sanitiseField, sanitiseShort } from '@/lib/sanitise'

export async function POST(req: NextRequest) {
  return handleLead(req, 'abn-form', {
    taskType: 'abn',
    nameFields: ['firstName', 'lastName'],
    whatsappField: 'whatsapp',
    fileFields: ['selfiePassport'],
    build: ({ formData, isReturning }) => ({
      country: '',
      dob: sanitiseShort(formData.get('dob')),
      taxYear: '',
      address: sanitiseField(formData.get('address')),
      tfn: sanitiseShort(formData.get('tfn')),
      bankDetails: '',
      primaryJob: sanitiseField(formData.get('business')),
      marital: '',
      taxStatus: 'Student visa',
      howHeard: sanitiseShort(formData.get('howHeard')),
      auPhone: sanitiseShort(formData.get('auPhone')),
      notes: [
        isReturning ? 'Returning client' : '',
        formData.get('gender') ? `Gender: ${sanitiseShort(formData.get('gender'))}` : '',
        formData.get('business') ? `ABN Work: ${sanitiseField(formData.get('business'))}` : '',
        formData.get('declared') ? `→ ${sanitiseField(formData.get('declared'))}` : '',
      ].filter(Boolean).join(' | '),
    }),
  })
}
