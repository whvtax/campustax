import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ServiceSchema from '@/components/ServiceSchema'
import Faq from '@/components/Faq'
import GuideLinks from '@/components/GuideLinks'
import WaCta from '@/components/WaCta'

export const metadata: Metadata = {
  alternates: { canonical: '/abn' },
  title: 'ABN for International Students: Uber Eats, DoorDash and Freelance',
  description:
    'Delivery platforms pay students as contractors, so riders need a free ABN. No tax is withheld from delivery pay. Setup, and what to put aside.',
}

const faqs = [
  {
    q: 'Is getting an ABN free?',
    a: 'Yes, free from the Australian Business Register. You need a TFN first. If a website wants payment to get you an ABN, it is a middleman you do not need.',
  },
  {
    q: 'Do delivery hours count toward my 48 hour work limit?',
    a: 'Yes. During session time, delivery hours count together with any wage job toward the 48 hours per fortnight visa condition.',
  },
  {
    q: 'Do I charge GST on deliveries?',
    a: 'Not unless your turnover passes $75,000 a year, which almost no student reaches. Passenger rideshare is different and requires GST from the first dollar.',
  },
  {
    q: 'How much should I put aside for tax?',
    a: 'For a student who also has a wage job, around 20 cents of every delivery dollar is a sensible cushion. Whatever is left after your return is a bonus, which beats a surprise bill.',
  },
]

export default function AbnPage() {
  return (
    <>
      <ServiceSchema name="ABN Setup for Student Delivery and Freelance Work" description="ABN setup and tax guidance for international students doing delivery platform or freelance work in Australia." path="/abn" />
      <PageHero kicker="ABN" title="Delivery work needs an ABN. Set it up right and skip the surprise tax bill.">
        <p>
          Uber Eats, DoorDash and similar platforms pay you as an independent
          contractor, not an employee. That means you need an ABN, it is free, and
          most importantly: nobody takes tax out of your pay, so the tax bill
          arrives later. Done right, it is simple.
        </p>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-12">
        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            When you actually need an ABN
          </h2>
          <p className="mt-3 text-ink-secondary">
            You need an ABN when you work for yourself: food delivery, freelance
            design, tutoring you arrange on your own. You do not need one as an
            employee with shifts and a boss. And a boss who tells you to get an ABN
            for what is clearly a normal job is usually trying to dodge paying your
            super and entitlements. That arrangement hurts you, and it is worth
            walking away from.
          </p>
          <p className="mt-3 text-ink-secondary">
            The ABN itself is free from the Australian Business Register and takes
            minutes once you have a TFN. Like the TFN, paid middleman websites add
            nothing except their fee.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            The trap: gross pay feels like net pay
          </h2>
          <p className="mt-3 text-ink-secondary">
            In a wage job, tax comes out before money reaches you. On an ABN the
            platform pays you everything, and it feels like a raise. It is not. The
            tax on that income still exists, it just has no one collecting it
            during the year, and it lands as one bill with your tax return.
          </p>
          <p className="mt-3 text-ink-secondary">
            The habit that saves riders: every time a payout lands, move a slice
            into a separate account and treat it as not yours. Around 20 cents per
            dollar is a sensible cushion for a student who also has a wage job.
            Riders who do this find tax season boring, which is exactly the goal.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            What you can claim against delivery income
          </h2>
          <p className="mt-3 text-ink-secondary">
            Business income comes with business expenses. The work share of your
            costs reduces the taxable amount: your bike or scooter and its repairs,
            helmet and safety gear, insulated bags, and the delivery share of your
            phone plan. Keep receipts as you go, photos in a folder on your phone
            are enough.
          </p>
          <p className="mt-3 text-ink-secondary">
            GST is a separate question with a simple student answer: food delivery
            does not require GST registration until $75,000 of turnover, so almost
            no student rider registers. Driving passengers is different, GST
            applies from the first dollar, which is one reason delivery stays
            simpler.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <WaCta context="I do delivery work and need help with my ABN." label="Set up my ABN on WhatsApp" />
            <Link href="/abn-form" className="text-sm font-bold text-navy-600 hover:underline">
              Prefer a form? Start here
            </Link>
          </div>
        </div>

        <p className="text-sm text-ink-secondary">
          No TFN yet? Do{' '}
          <Link href="/tfn" className="font-bold text-navy-600 hover:underline">
            that first, it is free
          </Link>
          . And at year end, delivery income and wages meet in{' '}
          <Link href="/tax-return" className="font-bold text-navy-600 hover:underline">
            one tax return
          </Link>
          .
        </p>
      </section>

      <GuideLinks slugs={['abn-for-delivery-riders-students', 'tax-on-abn-income-students', 'tfn-or-abn-which-one', 'how-many-hours-can-international-students-work']} />

      <Faq items={faqs} />
    </>
  )
}
