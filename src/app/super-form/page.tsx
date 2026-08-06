import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FormShell from '@/components/form/FormShell'
import {
  TextField, SelectField, FileField, TermsField,
} from '@/components/form/fields'

export const metadata: Metadata = {
  title: 'Claim Your Super',
  robots: { index: false, follow: false },
}

// Same field set as the WHV super form, revealed progressively.
export default function SuperFormPage() {
  return (
    <>
      <PageHero kicker="Superannuation" title="Claim your super">
        <p>
          Start with just your name and contact. If you do not know some of the
          later details, leave them empty. Finding lost accounts is part of what
          we do.
        </p>
      </PageHero>
      <section className="mx-auto max-w-xl px-4 sm:px-6 py-12">
        <FormShell
          action="/api/super-form"
          waContext="I sent the super claim form."
          steps={[
            {
              title: 'How to reach you',
              content: (
                <>
                  <TextField name="firstName" label="Given names" required />
                  <TextField name="lastName" label="Family name" required />
                  <TextField name="email" label="Email" type="email" required />
                  <TextField name="smsPhone" label="Phone number for SMS codes" type="tel" required minLength={8} hint="With country code. Super funds send verification codes here." />
                </>
              ),
            },
            {
              title: 'About you',
              content: (
                <>
                  <TextField name="dob" label="Date of birth" type="date" required />
                  <TextField name="passport" label="Passport number" />
                  <TextField name="passportCountry" label="Passport country" />
                  <TextField name="auAddress" label="Your last address in Australia" />
                  <TextField name="homeAddress" label="Your address in your home country" />
                </>
              ),
            },
            {
              title: 'Your super and bank details',
              content: (
                <>
                  <TextField name="tfn" label="Tax file number (TFN)" />
                  <TextField name="superFundName" label="Super fund name" hint="It is on your payslip, for example Hostplus, Rest, AustralianSuper." />
                  <TextField name="superMemberNumber" label="Super member number" />
                  <TextField name="superOpeningDate" label="When was the account opened?" hint="Roughly is fine, for example March 2024." />
                  <TextField name="bankName" label="Bank name" />
                  <TextField name="bankHolder" label="Account holder name" />
                  <TextField name="bankAccount" label="Account number or IBAN" />
                  <TextField name="bankBsb" label="BSB or SWIFT code" />
                </>
              ),
            },
            {
              title: 'Identity and finish',
              content: (
                <>
                  <FileField name="selfiePassport" label="Selfie holding your passport (optional)" hint="Optional. You can send this on WhatsApp after you know the price. Your face and the passport photo page in one photo. This is the identity check the registered tax agent must do before lodging anything under your TFN. Only our team and the agent see it." />
                  <SelectField name="howHeard" label="How did you hear about us?" options={['Google', 'TikTok', 'Instagram', 'A friend', 'WeChat or RedNote', 'Other']} />
                  <TermsField />
                </>
              ),
            },
          ]}
        />
      </section>
    </>
  )
}
