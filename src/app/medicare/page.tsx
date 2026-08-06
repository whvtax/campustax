import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ServiceSchema from '@/components/ServiceSchema'
import Faq from '@/components/Faq'
import GuideLinks from '@/components/GuideLinks'
import WaCta from '@/components/WaCta'

export const metadata: Metadata = {
  alternates: { canonical: '/medicare' },
  title: 'Medicare Levy Exemption for International Students',
  description:
    'Students with OSHC usually should not pay the 2% Medicare levy, but the exemption is not automatic. You need a Medicare Entitlement Statement.',
}

const faqs = [
  {
    q: 'Is the Medicare levy exemption automatic for international students?',
    a: 'No, and this is the detail most students miss. You need a Medicare Entitlement Statement from Services Australia proving you were not entitled to Medicare. Without it, the levy stays in your tax return.',
  },
  {
    q: 'What is the difference between OSHC and Medicare?',
    a: 'Medicare is the public health system for Australians. OSHC is the private insurance your visa requires because you are not covered by Medicare. Since you pay for OSHC instead, the tax system lets you claim back the levy that funds Medicare.',
  },
  {
    q: 'When should I apply for the Medicare Entitlement Statement?',
    a: 'Before tax time. Processing takes weeks, and July is their busiest period. Applying in May or June means the statement is ready when your return is.',
  },
  {
    q: 'Does the exemption apply to students from every country?',
    a: 'Almost every country, with one exception. Students from reciprocal healthcare countries like the UK, New Zealand, Ireland and Sweden may be entitled to Medicare, and people entitled to Medicare generally cannot claim the exemption. We check this as part of your return.',
  },
  {
    q: 'Can I claim the exemption for past years?',
    a: 'Yes. If you paid the levy in earlier returns without claiming the exemption, those returns can be amended with a statement covering those years, and the levy comes back as a refund.',
  },
]

export default function MedicarePage() {
  return (
    <>
      <ServiceSchema name="Medicare Levy Exemption for Students" description="Medicare levy exemption claims for international students with OSHC, using a Medicare Entitlement Statement." path="/medicare" />
      <PageHero kicker="Medicare levy" title="Most international students should not pay the Medicare levy">
        <p>
          The Medicare levy is 2% of your income and it funds Australian public
          healthcare. As a student you are usually not entitled to Medicare, which is
          exactly why your visa requires OSHC insurance. So you can claim an
          exemption from the levy. It is not automatic, and that is where students
          lose money.
        </p>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-12">
        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            What the exemption is worth
          </h2>
          <p className="mt-3 text-ink-secondary">
            Two percent sounds small until you put numbers on it. A student who
            earned $30,000 in the tax year would pay a $600 levy. Claim the
            exemption and that $600 stays in the refund. Over a three year degree
            with part time work, the exemption is easily worth over a thousand
            dollars. It is the single most missed item on student tax returns.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            The document that unlocks it
          </h2>
          <p className="mt-3 text-ink-secondary">
            The exemption needs proof, and the proof is called a Medicare
            Entitlement Statement. You apply for it from Services Australia, not
            the ATO, with your passport and visa details. It confirms you were not
            entitled to Medicare for the year. Processing takes several weeks, so
            the right time to apply is before tax season, in May or June. With the
            statement in hand, the exemption goes into your return and the levy
            comes off your bill.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            Already lodged past returns without it?
          </h2>
          <p className="mt-3 text-ink-secondary">
            This happens all the time, especially to students who lodged on their
            own in first year. The good news: past returns can be amended. One
            statement can cover several years, the amendments go in, and the levy
            you paid comes back. Bring your old notices of assessment and we can
            check quickly whether there is money sitting there.
          </p>
          <div className="mt-6">
            <WaCta context="I want to claim the Medicare levy exemption." label="Claim my exemption on WhatsApp" />
          </div>
        </div>

        <p className="text-sm text-ink-secondary">
          The exemption is claimed inside{' '}
          <Link href="/tax-return" className="font-bold text-navy-600 hover:underline">
            your tax return
          </Link>
          , so the two usually happen together.
        </p>
      </section>

      <GuideLinks slugs={['medicare-levy-exemption-international-students', 'is-oshc-tax-deductible', 'tax-refund-international-students']} />

      <Faq items={faqs} />
    </>
  )
}
