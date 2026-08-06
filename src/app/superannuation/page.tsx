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

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-12">
        <div className="rounded-2xl bg-gold-50 border border-gold-200 p-6 sm:p-8">
          <h2 className="font-heading text-xl font-extrabold text-navy-800">
            35%, not 65%. This mistake costs students real money.
          </h2>
          <p className="mt-3 text-ink-secondary">
            Half the internet will tell you that super refunds are taxed at 65%.
            That is the rate for working holiday visas. If your super was earned
            while you held a student visa, the DASP tax is 35%. Some students never
            claim because they think most of the money is gone. It is not. On a
            typical balance of $4,000, around $2,600 is yours.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            First, check the money is actually there
          </h2>
          <p className="mt-3 text-ink-secondary">
            Super only exists if your employer really paid it. Cash in hand work
            usually means no super, and even regular employers sometimes fall
            behind. Your payslip shows what should have been paid. Your super fund
            account shows what actually was. If you worked several jobs you may have
            several funds, and the ATO may be holding unclaimed money for you as
            well. We search all of it as part of the claim.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            When and how you can claim
          </h2>
          <p className="mt-3 text-ink-secondary">
            You can claim once two things are true: you have left Australia, and
            your visa has ended or been cancelled. Prepare the paperwork before
            you fly. Chasing documents from overseas is much harder. After the claim is approved, funds usually pay out
            within 28 days. If you are leaving permanently, your final tax return
            can often be lodged early at the same time, so both refunds travel
            together.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <WaCta context="I want to claim my super. I am leaving Australia." label="Claim my super on WhatsApp" />
            <Link href="/super-form" className="text-sm font-bold text-navy-600 hover:underline">
              Prefer a form? Start here
            </Link>
          </div>
        </div>

        <p className="text-sm text-ink-secondary">
          Planning your exit?{' '}
          <Link href="/tax-return" className="font-bold text-navy-600 hover:underline">
            Your final tax return
          </Link>{' '}
          and your super claim belong together. Try the{' '}
          <Link href="/calculator" className="font-bold text-navy-600 hover:underline">
            calculator
          </Link>{' '}
          to see your estimated payout.
        </p>
      </section>

      <GuideLinks slugs={['super-refund-leaving-australia', 'how-much-tax-super-leaving-australia', 'how-to-claim-dasp', 'do-international-students-get-superannuation']} />

      <Faq items={faqs} />
    </>
  )
}
