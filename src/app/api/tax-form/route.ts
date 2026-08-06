export const runtime = 'nodejs'
export const maxDuration = 60
export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { handleLead } from '@/lib/lead-handler'
import { sanitiseField, sanitiseShort } from '@/lib/sanitise'

export async function POST(req: NextRequest) {
  return handleLead(req, 'tax-form', {
    taskType: 'tax-return',
    nameFields: ['fullName', 'lastName'],
    whatsappField: 'waNumber',
    fileFields: ['bankStatement', 'selfiePassport'],
    build: ({ formData, isReturning }) => ({
      country: sanitiseShort(formData.get('country')),
      dob: sanitiseShort(formData.get('dob')),
      taxYear: formData.getAll('taxYears').map((v) => sanitiseShort(v)).filter(Boolean).join(', '),
      address: sanitiseField(formData.get('address')),
      tfn: sanitiseShort(formData.get('tfn')),
      bankDetails: '',
      primaryJob: sanitiseField(formData.get('primaryJob')),
      marital: sanitiseShort(formData.get('marital')),
      taxStatus: sanitiseShort(formData.get('taxStatus')),
      howHeard: sanitiseShort(formData.get('howHeard')),
      auPhone: sanitiseShort(formData.get('auPhone')),
      notes: [
        isReturning ? 'Returning client' : '',
        formData.get('hasMedicare') ? `OSHC: ${sanitiseShort(formData.get('hasMedicare'))}` : '',
        formData.get('hasExpenses') ? `Expenses: ${sanitiseShort(formData.get('hasExpenses'))}` : '',
        formData.get('declared') ? `→ ${sanitiseField(formData.get('declared'))}` : '',
      ].filter(Boolean).join(' | '),
    }),
  })
}
