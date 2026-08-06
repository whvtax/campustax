export const runtime = 'nodejs'
export const maxDuration = 60
export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { handleLead } from '@/lib/lead-handler'
import { sanitiseField, sanitiseShort } from '@/lib/sanitise'

export async function POST(req: NextRequest) {
  return handleLead(req, 'tfn-form', {
    taskType: 'tfn',
    nameFields: ['firstName', 'lastName'],
    whatsappField: 'whatsapp',
    fileFields: ['selfiePassport'],
    build: ({ formData, isReturning }) => ({
      country: sanitiseShort(formData.get('country')),
      dob: sanitiseShort(formData.get('dob')),
      taxYear: '',
      address: sanitiseField(formData.get('address')),
      tfn: '',
      bankDetails: '',
      primaryJob: '',
      marital: sanitiseShort(formData.get('marital')),
      taxStatus: 'Student visa',
      howHeard: sanitiseShort(formData.get('howHeard')),
      auPhone: sanitiseShort(formData.get('auPhone')),
      notes: [
        isReturning ? 'Returning client' : '',
        formData.get('passport') ? `Passport No: ${sanitiseShort(formData.get('passport'))}` : '',
        formData.get('gender') ? `Gender: ${sanitiseShort(formData.get('gender'))}` : '',
        formData.get('declared') ? `→ ${sanitiseField(formData.get('declared'))}` : '',
      ].filter(Boolean).join(' | '),
    }),
  })
}
