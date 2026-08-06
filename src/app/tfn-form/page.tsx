import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FormShell from '@/components/form/FormShell'
import {
  TextField, SelectField, RadioRow, FileField, TermsField, DeclareField,
} from '@/components/form/fields'

export const metadata: Metadata = {
  title: 'Get Your TFN',
  robots: { index: false, follow: false },
}

// Same field set as the WHV TFN form, revealed progressively.
export default function TfnFormPage() {
  return (
    <>
      <PageHero kicker="Tax file number" title="Get your TFN sorted">
        <p>
          A tax file number is free and every student job needs one. Start with
          your name and WhatsApp, and we will guide you through the rest.
        </p>
      </PageHero>
      <section className="mx-auto max-w-xl px-4 sm:px-6 py-12">
        <FormShell
          action="/api/tfn-form"
          waContext="I sent the TFN form."
          steps={[
            {
              title: 'How to reach you',
              content: (
                <>
                  <TextField name="firstName" label="Given names" required />
                  <TextField name="lastName" label="Family name" required />
                  <TextField name="email" label="Email" type="email" required />
                  <TextField name="whatsapp" label="WhatsApp number" type="tel" required minLength={8} hint="With country code" />
                </>
              ),
            },
            {
              title: 'About you',
              content: (
                <>
                  <TextField name="dob" label="Date of birth" type="date" required />
                  <TextField name="country" label="Home country" />
                  <TextField name="passport" label="Passport number" required />
                  <TextField name="auPhone" label="Australian phone number" type="tel" />
                  <RadioRow name="gender" label="Gender (the ATO application form asks for this)" options={[{ val: 'Male', label: 'Male' }, { val: 'Female', label: 'Female' }, { val: 'Other', label: 'Other' }]} />
                  <RadioRow name="marital" label="Marital status (the ATO form asks for this)" options={[{ val: 'Single', label: 'Single' }, { val: 'Married', label: 'Married' }]} />
                </>
              ),
            },
            {
              title: 'Address, identity and finish',
              content: (
                <>
                  <TextField name="address" label="Address in Australia" required hint="The TFN letter is posted here, so it must be right." />
                  <FileField name="selfiePassport" label="Selfie holding your passport (optional)" hint="Optional. You can send this on WhatsApp after you know the price. Your face and the passport photo page in one photo. This is the identity check the registered tax agent must do before applying for your TFN. Only our team and the agent see it." />
                  <SelectField name="howHeard" label="How did you hear about us?" options={['Google', 'TikTok', 'Instagram', 'A friend', 'WeChat or RedNote', 'Other']} />
                  <DeclareField text="I confirm the information I provided is true and complete." />
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
