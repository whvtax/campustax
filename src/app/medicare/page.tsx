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

      {/* Savings Stat */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <div className="rounded-2xl bg-gradient-to-br from-green-50 to-cream border border-green-200 p-6 sm:p-8">
          <p className="text-sm font-bold text-green-600 uppercase tracking-wide">What students miss</p>
          <p className="mt-2 font-heading text-4xl font-extrabold text-navy-800">$600</p>
          <p className="mt-1 text-sm text-ink-secondary">Typical annual savings (on $30,000 income)</p>
          <p className="mt-4 text-sm text-ink-secondary">
            Over a 3-year degree = $1,800+ gone if you miss this.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-16">
        {/* Why It Matters */}
        <div className="pb-12 border-b border-navy-100">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800 mb-6">
            Why the 2% matters
          </h2>
          <p className="mt-4 text-ink-secondary max-w-2xl">
            The Medicare levy funds Australian public healthcare. You don&apos;t get that—your visa requires OSHC insurance instead.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-red-50 p-4 border border-red-200">
              <p className="text-sm font-bold text-red-900">Without exemption</p>
              <p className="mt-2 text-sm text-red-800">Pay 2% Medicare levy you don&apos;t use</p>
              <p className="mt-3 font-bold text-red-900">$30,000 income → $600 gone</p>
            </div>
            <div className="rounded-xl bg-green-50 p-4 border border-green-200">
              <p className="text-sm font-bold text-green-900">With exemption (you claim)</p>
              <p className="mt-2 text-sm text-green-800">Skip the levy, keep the money</p>
              <p className="mt-3 font-bold text-green-900">$30,000 income → $600 stays</p>
            </div>
          </div>
        </div>

        {/* The Document */}
        <div className="pb-12 border-b border-navy-100">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800 mb-6">
            The document that unlocks it
          </h2>
          <p className="mt-4 text-ink-secondary max-w-2xl">
            The exemption needs proof: a <strong>Medicare Entitlement Statement</strong>
          </p>
          <div className="mt-6 rounded-xl bg-navy-50 p-6 border border-navy-200">
            <p className="font-bold text-navy-800">Where to get it:</p>
            <p className="mt-2 text-sm text-ink-secondary">Services Australia (NOT the ATO)</p>
            <p className="mt-3 text-sm text-ink-secondary">You need: Passport + visa details</p>
            <p className="mt-3 text-sm text-ink-secondary">Processing: Several weeks</p>
            <p className="mt-4 text-sm font-bold text-gold-600">⏰ Best time: May or June (before July tax rush)</p>
          </div>
          <div className="mt-4 rounded-xl bg-blue-50 p-4 border border-blue-200">
            <p className="text-sm"><strong>What it does:</strong> Confirms you weren&apos;t entitled to Medicare for the year. With it in hand, your exemption goes into your tax return and the levy disappears.</p>
          </div>
        </div>

        {/* Special Cases */}
        <div className="pb-12 border-b border-navy-100">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800 mb-6">
            Special case: Reciprocal healthcare countries
          </h2>
          <p className="mt-4 text-ink-secondary">
            Students from certain countries may be entitled to Medicare (UK, NZ, Ireland, Sweden). If that&apos;s you, you generally can&apos;t claim the exemption. We check this automatically.
          </p>
        </div>

        {/* Past Years */}
        <div className="pb-12 border-b border-navy-100">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800 mb-6">
            Already lodged without the exemption?
          </h2>
          <p className="mt-4 text-ink-secondary">
            This is incredibly common, especially if you lodged your own first-year return. Good news: it&apos;s fixable.
          </p>
          <div className="mt-6 rounded-xl bg-gold-50 p-6 border border-gold-200">
            <p className="text-sm font-bold text-navy-800">How amendments work:</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
              <li>• One Medicare Entitlement Statement can cover multiple years</li>
              <li>• Past returns get amended, levy refunded</li>
              <li>• Bring your old Notices of Assessment—we can check quickly what&apos;s owed</li>
            </ul>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <WaCta context="I want to claim the Medicare levy exemption." label="Start on WhatsApp" />
            <Link href="/tax-return" className="inline-flex items-center justify-center rounded-2xl border-2 border-navy-600 px-6 py-3 text-sm font-bold text-navy-600 hover:bg-navy-50">
              Check my tax return
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-100">
          <p className="text-sm text-ink-secondary">
            <strong>Connected:</strong> The exemption is claimed inside your{' '}
            <Link href="/tax-return" className="font-bold text-navy-600 hover:underline">
              tax return
            </Link>
            , so they usually happen together. Also check if you qualify for the{' '}
            <Link href="/guides" className="font-bold text-navy-600 hover:underline">
              other hidden refunds
            </Link>
            .
          </p>
        </div>
      </section>

      <GuideLinks slugs={['medicare-levy-exemption-international-students', 'is-oshc-tax-deductible', 'tax-refund-international-students']} />

      <Faq items={faqs} />
    </>
  )
}
