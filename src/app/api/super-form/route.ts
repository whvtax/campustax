export const runtime = 'nodejs'
export const maxDuration = 60
export const dynamic = 'force-dynamic'
import { NextRequest } from 'next/server'
import { handleLead } from '@/lib/lead-handler'
import { sanitiseField, sanitiseShort } from '@/lib/sanitise'

export async function POST(req: NextRequest) {
  return handleLead(req, 'super-form', {
    taskType: 'super',
    nameFields: ['firstName', 'lastName'],
    whatsappField: 'smsPhone',
    fileFields: ['selfiePassport'],
    build: ({ formData, isReturning }) => {
      const bankName = sanitiseShort(formData.get('bankName'))
      const bankHolder = sanitiseShort(formData.get('bankHolder'))
      const bankAccount = sanitiseShort(formData.get('bankAccount'))
      const bankBsb = sanitiseShort(formData.get('bankBsb'))
      const hasBank = bankName || bankHolder || bankAccount || bankBsb
      return {
        country: sanitiseShort(formData.get('passportCountry')),
        dob: sanitiseShort(formData.get('dob')),
        taxYear: '',
        address: sanitiseField(formData.get('auAddress')),
        tfn: sanitiseShort(formData.get('tfn')),
        bankDetails: hasBank
          ? `Bank: ${bankName} | Name: ${bankHolder} | Account: ${bankAccount} | BSB: ${bankBsb}`
          : '',
        primaryJob: '',
        marital: '',
        taxStatus: 'Student visa',
        howHeard: sanitiseShort(formData.get('howHeard')),
        auPhone: '',
        notes: [
          isReturning ? 'Returning client' : '',
          formData.get('passport') ? `Passport No: ${sanitiseShort(formData.get('passport'))}` : '',
          formData.get('superFundName') ? `Super Fund Name: ${sanitiseShort(formData.get('superFundName'))}` : '',
          formData.get('superMemberNumber') ? `Super Member Number: ${sanitiseShort(formData.get('superMemberNumber'))}` : '',
          formData.get('superOpeningDate') ? `Super Opening Date: ${sanitiseShort(formData.get('superOpeningDate'))}` : '',
          formData.get('homeAddress') ? `Home Country Address: ${sanitiseField(formData.get('homeAddress'))}` : '',
        ].filter(Boolean).join(' | '),
      }
    },
  })
}
