import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FormShell from '@/components/form/FormShell'
import {
  TextField, SelectField, RadioRow, FileField, TermsField, DeclareField,
} from '@/components/form/fields'

export const metadata: Metadata = {
  title: 'Get Your ABN',
  robots: { index: false, follow: false },
}

// Same field set as the WHV ABN form, revealed progressively.
export default function AbnFormPage() {
  return (
    <>
      <PageHero kicker="ABN" title="Get your ABN for delivery and freelance work">
        <p>
          Working for yourself, like food delivery, needs an ABN. Start with your
          name and WhatsApp and we will set it up properly.
        </p>
      </PageHero>
      <section className="mx-auto max-w-xl px-4 sm:px-6 py-12">
        <FormShell
          action="/api/abn-form"
          waContext="I sent the ABN form."
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
                  <RadioRow name="gender" label="Gender (the ATO application form asks for this)" options={[{ val: 'Male', label: 'Male' }, { val: 'Female', label: 'Female' }, { val: 'Other', label: 'Other' }]} />
                  <TextField name="auPhone" label="Australian phone number" type="tel" />
                  <TextField name="address" label="Address in Australia" required />
                </>
              ),
            },
            {
              title: 'Your work, identity and finish',
              content: (
                <>
                  <TextField name="tfn" label="Tax file number (TFN)" required hint="An ABN application needs your TFN. No TFN yet? Do that first, it is free." />
                  <TextField name="business" label="What will you do with the ABN?" placeholder="For example Uber Eats delivery" />
                  <FileField name="selfiePassport" label="Selfie holding your passport (optional)" hint="Optional. You can send this on WhatsApp after you know the price. Your face and the passport photo page in one photo. This is the identity check the registered tax agent must do before lodging anything under your TFN. Only our team and the agent see it." />
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
