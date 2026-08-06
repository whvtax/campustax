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

      {/* The Danger */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <div className="rounded-2xl bg-gradient-to-br from-red-50 to-cream border border-red-200 p-6 sm:p-8">
          <p className="text-sm font-bold text-red-600 uppercase tracking-wide">The trap that catches riders</p>
          <p className="mt-2 font-heading text-3xl font-extrabold text-navy-800">Nobody takes tax out</p>
          <p className="mt-2 text-sm text-ink-secondary">The platform pays you gross. The tax bill arrives at tax time, not weekly.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-16">
        {/* Step 1 */}
        <div className="pb-12 border-b border-navy-100">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800 mb-6">
            When you actually need an ABN
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-green-50 p-4 border border-green-200">
              <p className="font-bold text-green-900">✓ You need ABN for:</p>
              <ul className="mt-3 space-y-2 text-sm text-green-800">
                <li>• Delivery (Uber Eats, DoorDash)</li>
                <li>• Freelance work you arrange</li>
                <li>• Any self-employed income</li>
              </ul>
            </div>
            <div className="rounded-xl bg-red-50 p-4 border border-red-200">
              <p className="font-bold text-red-900">✗ You do NOT need ABN:</p>
              <ul className="mt-3 space-y-2 text-sm text-red-800">
                <li>• Regular job with shifts</li>
                <li>• Boss on payroll</li>
                <li>• Super + entitlements provided</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-xl bg-orange-50 p-4 border-l-4 border-orange-500">
            <p className="text-sm font-bold text-orange-900">⚠️ Red flag:</p>
            <p className="mt-1 text-sm text-orange-800">If a boss tells you to get an ABN for what&apos;s clearly a regular job, they&apos;re dodging super. Walk away.</p>
          </div>
          <p className="mt-6 text-sm text-ink-secondary">
            The ABN is <strong>free</strong> from the Australian Business Register (takes minutes once you have a TFN). Paid middleman websites add only their fee.
          </p>
        </div>

        {/* The Calculation */}
        <div className="pb-12 border-b border-navy-100">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800 mb-6">
            The math: Gross vs Net
          </h2>
          <p className="mt-4 text-ink-secondary mb-6">
            In a wage job, tax comes out before you see it. On ABN, the platform pays you everything—which feels like a raise, but isn&apos;t.
          </p>

          <div className="rounded-2xl bg-navy-50 p-6 sm:p-8 border border-navy-200">
            <p className="text-sm font-bold text-navy-800 uppercase">Example: $1,000 delivery earnings</p>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-navy-200">
                <span className="text-sm text-ink-secondary">Gross from platform:</span>
                <span className="font-bold text-lg text-navy-800">$1,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-navy-200">
                <span className="text-sm text-ink-secondary">Put aside 20% now (tax estimate):</span>
                <span className="font-bold text-lg text-red-600">-$200</span>
              </div>
              <div className="flex justify-between items-center py-3 rounded-lg bg-gold-100 px-3">
                <span className="text-sm font-bold text-navy-800">Available to spend:</span>
                <span className="font-bold text-lg text-navy-800">$800</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-ink-secondary">At tax time: Whatever you didn&apos;t use from the $200 is a bonus.</p>
          </div>

          <div className="mt-6 rounded-xl bg-blue-50 p-4">
            <p className="text-sm"><strong>The habit that works:</strong> Every payout lands, move ~20% into a separate account and forget it. Tax season = boring (exactly the goal).</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="pb-12 border-b border-navy-100">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800 mb-6">
            What you can claim to reduce tax
          </h2>
          <p className="mt-4 text-ink-secondary mb-4">
            Business expenses reduce your taxable income.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-navy-50 p-4">
              <p className="font-bold text-navy-800">Claimable:</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
                <li>✓ Bike/scooter + repairs</li>
                <li>✓ Helmet, safety gear</li>
                <li>✓ Insulated bags</li>
                <li>✓ Phone plan (delivery share)</li>
                <li>✓ Wear & tear</li>
              </ul>
            </div>
            <div className="rounded-xl bg-navy-50 p-4">
              <p className="font-bold text-navy-800">Pro tip:</p>
              <p className="mt-2 text-sm text-ink-secondary">Keep receipts as you go. Phone photos in a folder work fine.</p>
              <p className="mt-3 text-sm text-navy-800"><strong>Adds up quickly.</strong> $500 in expenses = ~$100 tax saved.</p>
            </div>
          </div>
        </div>

        {/* GST */}
        <div className="pb-12 border-b border-navy-100">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800 mb-6">
            GST: The simple answer
          </h2>
          <div className="rounded-xl bg-green-50 p-4 border border-green-200">
            <p className="text-sm"><strong>Food delivery:</strong> No GST until $75,000 turnover (almost no students hit this)</p>
            <p className="mt-2 text-sm text-ink-secondary">Keep it simple, no registration needed</p>
          </div>
          <div className="mt-4 rounded-xl bg-orange-50 p-4 border border-orange-200">
            <p className="text-sm"><strong>Passenger rideshare:</strong> GST from dollar one (much more complex)</p>
            <p className="mt-2 text-sm text-ink-secondary">Stick with delivery—simpler tax</p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <WaCta context="I do delivery work and need help with my ABN." label="Set up my ABN on WhatsApp" />
            <Link href="/abn-form" className="inline-flex items-center justify-center rounded-2xl border-2 border-navy-600 px-6 py-3 text-sm font-bold text-navy-600 hover:bg-navy-50">
              Prefer a form? Start here
            </Link>
          </div>

          <p className="text-sm text-ink-secondary">
            <strong>Prerequisites:</strong> Get a{' '}
            <Link href="/tfn" className="font-bold text-navy-600 hover:underline">
              TFN first
            </Link>
            . At year end, delivery income and wage job income meet in{' '}
            <Link href="/tax-return" className="font-bold text-navy-600 hover:underline">
              one tax return
            </Link>
            .
          </p>
        </div>
      </section>

      <GuideLinks slugs={['abn-for-delivery-riders-students', 'tax-on-abn-income-students', 'tfn-or-abn-which-one', 'how-many-hours-can-international-students-work']} />

      <Faq items={faqs} />
    </>
  )
}
