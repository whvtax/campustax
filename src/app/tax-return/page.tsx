import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ServiceSchema from '@/components/ServiceSchema'
import Faq from '@/components/Faq'
import GuideLinks from '@/components/GuideLinks'
import WaCta from '@/components/WaCta'
import { TAX_YEAR } from '@/lib/constants'

export const metadata: Metadata = {
  alternates: { canonical: '/tax-return' },
  title: 'Tax Returns for International Students in Australia',
  description:
    'Most students pay no tax on the first $18,200. If tax was taken from your pay, a return usually brings it back. Lodged through a registered tax agent.',
}

const faqs = [
  {
    q: 'Do I need to lodge a tax return if I earned less than $18,200?',
    a: 'Usually yes, and it works in your favour. If any tax was taken from your pay and you earned under the threshold, the full amount normally comes back to you. If you earned nothing at all, a short non lodgment advice to the ATO is often enough.',
  },
  {
    q: 'Can I lodge my tax return after I leave Australia?',
    a: 'Yes. You can lodge from overseas, and if you are leaving Australia permanently before 30 June you may be able to lodge early. This is also the right time to claim your superannuation.',
  },
  {
    q: 'How long does the refund take?',
    a: 'Most refunds from the ATO arrive within about two weeks of lodgment. Returns lodged in the first days of July can take a little longer because employer data is still coming in.',
  },
  {
    q: 'I have never lodged before and I missed past years. Is that a problem?',
    a: 'It is fixable. Past year returns can be lodged late, and if refunds are waiting in those years you can still claim them. Sorting it out early is better for your record and any future visa.',
  },
]

export default function TaxReturnPage() {
  return (
    <>
      <ServiceSchema name="Tax Return for International Students" description="Tax returns prepared for international students in Australia, including arrival and departure years, multiple employers and the Medicare levy exemption." path="/tax-return" />
      <PageHero kicker="Tax returns" title="Tax returns for international students">
        <p>
          Most international students in Australia are residents for tax purposes.
          That means you pay no tax on the first $18,200 you earn in a tax year. If
          your employer took tax out of your pay and you earned less than that, a tax
          return usually brings the money back to you.
        </p>
      </PageHero>

      {/* Key Stat */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <div className="rounded-2xl bg-gradient-to-br from-gold-50 to-cream border border-gold-200 p-6 sm:p-8">
          <p className="text-sm font-bold text-gold-600 uppercase tracking-wide">The threshold that matters</p>
          <p className="mt-2 font-heading text-4xl font-extrabold text-navy-800">$18,200</p>
          <p className="mt-2 text-ink-secondary">Most international students pay no tax on the first $18,200 they earn each year.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-16">
        {/* Section 1 */}
        <div className="pb-12 border-b border-navy-100">
          <div className="flex gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white font-bold text-lg">1</div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-800">
                Why students get money back
              </h2>
            </div>
          </div>
          <p className="mt-4 text-ink-secondary max-w-2xl">
            Employers take tax out of every payslip as if you will earn the same
            amount all year. Students rarely do. You work part time in the semester,
            more in the holidays, and maybe not at all around exams.
          </p>
          <div className="mt-4 rounded-xl bg-navy-50 p-4 border-l-4 border-gold-400">
            <p className="text-sm font-bold text-navy-800">The math is simple:</p>
            <p className="mt-2 text-sm text-ink-secondary">Too much tax taken out → Your return brings it back to your bank account</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="pb-12 border-b border-navy-100">
          <div className="flex gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white font-bold text-lg">2</div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-800">
                Are you a resident for tax purposes?
              </h2>
            </div>
          </div>
          <p className="mt-4 text-ink-secondary max-w-2xl">
            This is the question that decides everything. If you&apos;re enrolled in a course
            that runs longer than 6 months, the ATO treats you as an Australian resident.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-green-50 p-4 border border-green-200">
              <p className="text-sm font-bold text-green-900">✓ Resident (6+ months)</p>
              <p className="mt-2 text-sm text-green-800">$18,200 threshold + lower tax rates</p>
            </div>
            <div className="rounded-xl bg-orange-50 p-4 border border-orange-200">
              <p className="text-sm font-bold text-orange-900">⚠ Non-resident (under 6 months)</p>
              <p className="mt-2 text-sm text-orange-800">Different rates apply—worth checking</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="pb-12 border-b border-navy-100">
          <div className="flex gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white font-bold text-lg">3</div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-800">
                Arrived or leaving part way through the year?
              </h2>
            </div>
          </div>
          <p className="mt-4 text-ink-secondary max-w-2xl">
            The tax year runs 1 July to 30 June. If you arrived or left part way through, your threshold is adjusted proportionally.
          </p>
          <div className="mt-4 rounded-xl bg-red-50 p-4 border-l-4 border-red-500">
            <p className="text-sm font-bold text-red-900">⚠️ Most common mistake:</p>
            <p className="mt-1 text-sm text-red-800">Part-year returns are where students most often pay too much or claim too little.</p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="pb-12 border-b border-navy-100">
          <div className="flex gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white font-bold text-lg">4</div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-800">
                Multiple income sources? No problem.
              </h2>
            </div>
          </div>
          <p className="mt-4 text-ink-secondary max-w-2xl">
            All income comes together in one return.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex gap-3">
              <span className="text-gold-400">✓</span>
              <span className="text-ink-secondary"><strong>Multiple jobs:</strong> Return fixes over-withholding from second jobs</span>
            </div>
            <div className="flex gap-3">
              <span className="text-gold-400">✓</span>
              <span className="text-ink-secondary"><strong>Scholarships:</strong> Usually tax free, stay out of calculations</span>
            </div>
            <div className="flex gap-3">
              <span className="text-gold-400">✓</span>
              <span className="text-ink-secondary"><strong>Delivery work (ABN):</strong> Business income with deductible expenses (bike, phone, etc.)</span>
            </div>
          </div>
        </div>

        {/* Section 5 - CTA */}
        <div>
          <div className="flex gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white font-bold text-lg">5</div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-800">
                What you need to get started
              </h2>
            </div>
          </div>
          <p className="mt-4 text-ink-secondary max-w-2xl">
            Have these ready:
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="text-navy-800 font-bold">•</span>
              <span><strong>TFN</strong> — Your tax file number</span>
            </li>
            <li className="flex gap-3">
              <span className="text-navy-800 font-bold">•</span>
              <span><strong>Visa dates</strong> — Arrival and departure</span>
            </li>
            <li className="flex gap-3">
              <span className="text-navy-800 font-bold">•</span>
              <span><strong>Bank details</strong> — For your refund</span>
            </li>
            <li className="flex gap-3">
              <span className="text-navy-800 font-bold">•</span>
              <span><strong>Optional but helpful:</strong> Payslips, work expenses, OSHC details</span>
            </li>
          </ul>
          <div className="mt-6 rounded-xl bg-blue-50 p-4 border border-blue-200">
            <p className="text-sm text-blue-900"><strong>Important dates:</strong> Self-lodge by 31 October. Through a tax agent, you usually get longer.</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <WaCta context={`I want help with my ${TAX_YEAR} tax return.`} label="Start my tax return on WhatsApp" />
            <Link href="/tax-form" className="inline-flex items-center justify-center rounded-2xl border-2 border-navy-600 px-6 py-3 text-sm font-bold text-navy-600 hover:bg-navy-50">
              Prefer a form? Start here
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-100">
          <p className="text-sm text-ink-secondary">
            <strong>Related:</strong>{' '}
            <Link href="/medicare" className="font-bold text-navy-600 hover:underline">
              Medicare levy exemption
            </Link>{' '}
            (worth ~$600/year) and{' '}
            <Link href="/superannuation" className="font-bold text-navy-600 hover:underline">
              getting your super back
            </Link>{' '}
            when you leave.
          </p>
        </div>
      </section>

      <GuideLinks slugs={['do-international-students-pay-tax-in-australia', 'tax-refund-international-students', 'lodge-tax-return-under-18200', 'when-is-the-tax-deadline-australia', 'what-can-international-students-claim-on-tax']} />

      <Faq items={faqs} />
    </>
  )
}
