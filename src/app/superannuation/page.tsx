import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ServiceSchema from '@/components/ServiceSchema'
import Faq from '@/components/Faq'
import GuideLinks from '@/components/GuideLinks'
import WaCta from '@/components/WaCta'

export const metadata: Metadata = {
  alternates: { canonical: '/superannuation' },
  title: 'Superannuation Refund for International Students (DASP)',
  description:
    'Leaving Australia? Students can claim their super as a DASP, taxed at 35%, not the 65% backpacker rate. Handled through a registered tax agent.',
}

const faqs = [
  {
    q: 'How much tax is taken from my super when I leave Australia?',
    a: 'For student visa holders the DASP tax is 35% on the taxed part of your super. The 65% rate you may have read about applies to working holiday makers, not students. On a $4,000 balance a student receives about $2,600.',
  },
  {
    q: 'Can I claim my super while I am still in Australia?',
    a: 'No. You can prepare everything in advance, but the payment can only be made after you have left Australia and your visa has ended or been cancelled.',
  },
  {
    q: 'I had a few jobs. Do I have more than one super account?',
    a: 'Very possibly. Employers sometimes open a new account instead of paying into your existing one. Part of the claim process is finding every account, including money the ATO may already be holding for you.',
  },
  {
    q: 'How long does a DASP claim take?',
    a: 'Once the claim is complete and your visa has ended, funds usually pay out within 28 days. Finding lost accounts or chasing an employer who did not pay can add time, which is why starting before you fly helps.',
  },
]

export default function SuperPage() {
  return (
    <>
      <ServiceSchema name="Superannuation Refund (DASP) for Students" description="Departing Australia Superannuation Payment claims for international students, taxed at the 35% student rate." path="/superannuation" />
      <PageHero kicker="Superannuation" title="Get your super back when you leave Australia">
        <p>
          Your employer has been paying 12% of your wage into a superannuation fund.
          When you leave Australia for good and your visa ends, you can claim that
          money as a Departing Australia Superannuation Payment. For students the tax
          on it is 35%, so about two thirds of your super comes home with you.
        </p>
      </PageHero>

      {/* Tax Rate Comparison */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <div className="rounded-2xl bg-gradient-to-r from-green-50 to-cream border border-green-200 p-6 sm:p-8">
          <p className="text-sm font-bold text-green-600 uppercase tracking-wide">The rate that matters</p>
          <p className="mt-2 font-heading text-4xl font-extrabold text-navy-800">35%</p>
          <p className="mt-1 text-sm text-ink-secondary"><strong>Student visa tax rate</strong> on superannuation payout</p>
          <p className="mt-4 text-sm text-ink-secondary">
            (Not 65%—that&apos;s the working holiday rate. Don&apos;t let this mistake cost you real money.)
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-16">
        {/* Comparison */}
        <div className="pb-12 border-b border-navy-100">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800 mb-6">
            35% vs 65% — Know the difference
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-green-50 border-2 border-green-300 p-6">
              <p className="font-bold text-green-900">✓ Student Visa</p>
              <p className="mt-1 text-4xl font-extrabold text-green-600">35%</p>
              <p className="mt-3 text-sm text-green-900">Tax on super payout</p>
              <p className="mt-4 text-sm text-green-800">
                On $4,000 balance → You keep $2,600
              </p>
            </div>
            <div className="rounded-xl bg-red-50 border-2 border-red-300 p-6">
              <p className="font-bold text-red-900">✗ Working Holiday Visa</p>
              <p className="mt-1 text-4xl font-extrabold text-red-600">65%</p>
              <p className="mt-3 text-sm text-red-900">Tax on super payout</p>
              <p className="mt-4 text-sm text-red-800">
                On $4,000 balance → You keep $1,400
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-xl bg-blue-50 p-4 border border-blue-200">
            <p className="text-sm"><strong>Why?</strong> Students have lower income and fewer tax benefits, but the rate still beats working holiday makers. Don&apos;t leave money on the table.</p>
          </div>
        </div>

        {/* Step 1 */}
        <div className="pb-12 border-b border-navy-100">
          <div className="flex gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white font-bold text-lg">1</div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-800">
                First, check the money is actually there
              </h2>
            </div>
          </div>
          <p className="mt-4 text-ink-secondary max-w-2xl">
            Super only exists if your employer paid it. Not every employer does—check your accounts:
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex gap-3">
              <span className="text-navy-800 font-bold">•</span>
              <span><strong>Your payslips</strong> — Shows what should have been paid</span>
            </div>
            <div className="flex gap-3">
              <span className="text-navy-800 font-bold">•</span>
              <span><strong>Super fund accounts</strong> — Shows what actually was paid</span>
            </div>
            <div className="flex gap-3">
              <span className="text-navy-800 font-bold">•</span>
              <span><strong>ATO records</strong> — May be holding unclaimed money from multiple jobs</span>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-orange-50 p-4 border-l-4 border-orange-500">
            <p className="text-sm text-orange-900"><strong>⚠ Heads up:</strong> Multiple jobs = multiple super accounts. We search all of them as part of the claim.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="pb-12 border-b border-navy-100">
          <div className="flex gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white font-bold text-lg">2</div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-800">
                Timing: When you can actually claim
              </h2>
            </div>
          </div>
          <p className="mt-4 text-ink-secondary max-w-2xl">
            Two things must be true before you can claim:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-navy-50 p-4">
              <p className="font-bold text-navy-800">✓ You left Australia</p>
              <p className="mt-2 text-sm text-ink-secondary">Physically departed the country</p>
            </div>
            <div className="rounded-xl bg-navy-50 p-4">
              <p className="font-bold text-navy-800">✓ Your visa ended</p>
              <p className="mt-2 text-sm text-ink-secondary">Cancelled or expired after departure</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-gold-50 p-4 border border-gold-200">
            <p className="text-sm"><strong>Pro tip:</strong> Prepare all paperwork BEFORE you fly. Chasing documents from overseas is much harder.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="pb-12 border-b border-navy-100">
          <div className="flex gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white font-bold text-lg">3</div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-800">
                Processing & payment
              </h2>
            </div>
          </div>
          <p className="mt-4 text-ink-secondary">
            After your claim is approved, funds usually pay out within 28 days.
          </p>
          <div className="mt-4 rounded-xl bg-blue-50 p-4">
            <p className="text-sm"><strong>📌 Bundle your exit:</strong> If you&apos;re leaving permanently, lodge your final tax return at the same time. Both refunds travel together and arrive faster.</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <WaCta context="I want to claim my super. I am leaving Australia." label="Claim my super on WhatsApp" />
            <Link href="/super-form" className="inline-flex items-center justify-center rounded-2xl border-2 border-navy-600 px-6 py-3 text-sm font-bold text-navy-600 hover:bg-navy-50">
              Prefer a form? Start here
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-100">
          <p className="text-sm text-ink-secondary">
            <strong>Connected:</strong> Your{' '}
            <Link href="/tax-return" className="font-bold text-navy-600 hover:underline">
              final tax return
            </Link>{' '}
            and super claim work together. Try the{' '}
            <Link href="/calculator" className="font-bold text-navy-600 hover:underline">
              calculator
            </Link>{' '}
            to see your estimated payout right now.
          </p>
        </div>
      </section>

      <GuideLinks slugs={['super-refund-leaving-australia', 'how-much-tax-super-leaving-australia', 'how-to-claim-dasp', 'do-international-students-get-superannuation']} />

      <Faq items={faqs} />
    </>
  )
}
