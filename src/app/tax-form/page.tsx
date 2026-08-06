import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FormShell from '@/components/form/FormShell'
import {
  TextField, SelectField, RadioRow, CheckboxRow, FileField,
  TermsField, DeclareField,
} from '@/components/form/fields'

export const metadata: Metadata = {
  title: 'Start Your Tax Return',
  robots: { index: false, follow: false },
}

// Same field set as the WHV tax form, revealed progressively:
// contact basics first, then personal details, then tax, then documents.
export default function TaxFormPage() {
  return (
    <>
      <PageHero kicker="Tax return" title="Start your tax return">
        <p>
          Start with just your name and WhatsApp. The rest takes about five
          minutes. Nothing is lodged and nothing is charged until we have talked
          to you first.
        </p>
      </PageHero>
      <section className="mx-auto max-w-xl px-4 sm:px-6 py-12">
        <FormShell
          action="/api/tax-form"
          waContext="I sent the tax return form."
          steps={[
            {
              title: 'How to reach you',
              content: (
                <>
                  <TextField name="fullName" label="Given names" required />
                  <TextField name="lastName" label="Family name" required />
                  <TextField name="email" label="Email" type="email" required />
                  <TextField name="waNumber" label="WhatsApp number" type="tel" required minLength={8} hint="With country code, for example +61 400 000 000" />
                </>
              ),
            },
            {
              title: 'About you',
              content: (
                <>
                  <TextField name="dob" label="Date of birth" type="date" required />
                  <TextField name="country" label="Home country" />
                  <TextField name="auPhone" label="Australian phone number" type="tel" />
                  <TextField name="address" label="Address in Australia" />
                  <RadioRow name="marital" label="Marital status (the ATO form asks for this)" options={[{ val: 'Single', label: 'Single' }, { val: 'Married', label: 'Married' }]} />
                </>
              ),
            },
            {
              title: 'Your tax details',
              content: (
                <>
                  <TextField name="tfn" label="Tax file number (TFN)" hint="9 digits. If you do not have one yet, leave it empty and we will sort it." />
                  <CheckboxRow name="taxYears" label="Which tax years?" options={['2025-26', '2024-25', '2023-24', 'Earlier']} />
                  <RadioRow
                    name="taxStatus"
                    label="How long is your course?"
                    required
                    options={[
                      { val: 'Course longer than 6 months', label: 'Longer than 6 months' },
                      { val: 'Course shorter than 6 months', label: 'Shorter than 6 months' },
                      { val: 'Not sure', label: 'Not sure' },
                    ]}
                  />
                  <RadioRow name="hasMedicare" label="Do you have OSHC health insurance?" options={[{ val: 'yes', label: 'Yes' }, { val: 'no', label: 'No' }]} />
                  <TextField name="primaryJob" label="Your main job this year" placeholder="For example cafe, warehouse, delivery" />
                  <RadioRow name="hasExpenses" label="Do you have work expenses to claim?" options={[{ val: 'yes', label: 'Yes' }, { val: 'no', label: 'No' }]} />
                </>
              ),
            },
            {
              title: 'Documents and finish',
              content: (
                <>
                  <FileField name="bankStatement" label="Bank statement (optional)" hint="Optional. You can send this on WhatsApp after you know the price. A recent statement showing your name and account, a photo or screenshot is fine." />
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
