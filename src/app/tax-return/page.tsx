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

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-12">
        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            Why students get money back
          </h2>
          <p className="mt-3 text-ink-secondary">
            Employers take tax out of every payslip as if you will earn the same
            amount all year. Students rarely do. You work part time in the semester,
            more in the holidays, and maybe not at all around exams. When the tax
            year ends on 30 June, your return compares what was taken out with what
            you actually owed. For most working students the answer is simple: too
            much was taken, and the difference is refunded to your bank account.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            Are you a resident for tax purposes?
          </h2>
          <p className="mt-3 text-ink-secondary">
            This is the question that decides everything, and it has nothing to do
            with citizenship or permanent residency. If you are enrolled in a course
            that runs longer than 6 months, the ATO usually treats you as an
            Australian resident for tax purposes. That gives you the $18,200 tax free
            threshold and the lower resident tax rates. Students on short courses
            under 6 months are usually not residents, and different rates apply, so
            it is worth checking your situation before you lodge.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            Arrived or leaving part way through the year?
          </h2>
          <p className="mt-3 text-ink-secondary">
            The tax year runs from 1 July to 30 June. If you arrived part way
            through, your tax free threshold is adjusted for the months you were
            here, and your return needs to say so. The same applies in your final
            year when you leave. These part year returns are where students most
            often pay too much or claim too little, and they are exactly the returns
            we check most carefully.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            Two jobs? Scholarship? Delivery work?
          </h2>
          <p className="mt-3 text-ink-secondary">
            All of it comes together in one return. If you had several employers,
            the return adds everything up and fixes any over withholding from second
            jobs. Most full time student scholarships are tax free and stay out of
            the numbers. Money from delivery apps on an ABN goes in as business
            income, and expenses like your bike or phone can reduce the tax on it.
            One return, everything reconciled.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            What you need to get started
          </h2>
          <p className="mt-3 text-ink-secondary">
            Your TFN, your visa dates, and your bank details. Income statements come
            to us through the tax system once your employer finalises them in July.
            If you have payslips, receipts for work expenses, or your OSHC details
            for the Medicare levy exemption, they help us find more for you. The
            deadline for lodging on your own is 31 October. Lodging through a
            registered tax agent usually gives you longer.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <WaCta context={`I want help with my ${TAX_YEAR} tax return.`} label="Start my tax return on WhatsApp" />
            <Link href="/tax-form" className="text-sm font-bold text-navy-600 hover:underline">
              Prefer a form? Start here
            </Link>
          </div>
        </div>

        <p className="text-sm text-ink-secondary">
          Related reading:{' '}
          <Link href="/medicare" className="font-bold text-navy-600 hover:underline">
            the Medicare levy exemption
          </Link>{' '}
          most students can claim, and{' '}
          <Link href="/superannuation" className="font-bold text-navy-600 hover:underline">
            getting your super back
          </Link>{' '}
          when you leave.
        </p>
      </section>

      <GuideLinks slugs={['do-international-students-pay-tax-in-australia', 'tax-refund-international-students', 'lodge-tax-return-under-18200', 'when-is-the-tax-deadline-australia', 'what-can-international-students-claim-on-tax']} />

      <Faq items={faqs} />
    </>
  )
}
