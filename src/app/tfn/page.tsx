import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ServiceSchema from '@/components/ServiceSchema'
import Faq from '@/components/Faq'
import GuideLinks from '@/components/GuideLinks'

export const metadata: Metadata = {
  alternates: { canonical: '/tfn' },
  title: 'TFN for International Students in Australia',
  description:
    'How students get a TFN: free, online, after you arrive, done in ten minutes. Plus what happens if you start work before it arrives.',
}

const faqs = [
  {
    q: 'Is applying for a TFN free?',
    a: 'Yes, completely free on the ATO website. If a website asks you to pay for a TFN application, leave it. You would be paying for something the government gives you for free.',
  },
  {
    q: 'Can I work two jobs with one TFN?',
    a: 'Yes. Your TFN is yours for life and covers every job you ever have in Australia. Just claim the tax free threshold with one employer only, usually the one that pays you the most.',
  },
  {
    q: 'How long does the TFN take to arrive?',
    a: 'Up to 28 days by post, usually faster. Apply in your first week in Australia so the number is ready before your first job asks for it.',
  },
  {
    q: 'I lost my TFN letter. Is the number gone?',
    a: 'No, the number is yours for life. It can be recovered through myGov linked to the ATO, by calling the ATO with identity documents, or through a tax agent handling your return.',
  },
]

export default function TfnPage() {
  return (
    <>
      <ServiceSchema name="TFN Setup for International Students" description="Tax file number guidance for international students in Australia, from application to giving the number to your employer." path="/tfn" />
      <PageHero kicker="Tax file number" title="Get your TFN sorted before your first shift">
        <p>
          A tax file number is your personal number in the Australian tax system,
          and almost every student job needs one. It is free, you apply online
          after you arrive, and it takes about ten minutes. Here is how to do it
          right the first time.
        </p>
      </PageHero>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cream border border-blue-200 p-6 sm:p-8">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-wide">Timeline to remember</p>
          <p className="mt-2 font-heading text-4xl font-extrabold text-navy-800">10 minutes</p>
          <p className="mt-1 text-sm text-ink-secondary">Application time</p>
          <p className="mt-4 font-bold text-navy-800">+ up to 28 days for arrival</p>
          <p className="mt-1 text-sm text-ink-secondary">Usually much faster (apply in your first week)</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-16">
        {/* Step 1 */}
        <div className="pb-12 border-b border-navy-100">
          <div className="flex gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white font-bold text-lg">1</div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-800">
                Apply AFTER you arrive in Australia
              </h2>
            </div>
          </div>
          <p className="mt-4 text-ink-secondary max-w-2xl">
            Wait until you&apos;re physically in Australia—the online form checks that you&apos;ve arrived.
          </p>
          <div className="mt-4 rounded-xl bg-navy-50 p-4 border border-navy-200">
            <p className="text-sm"><strong>Go to:</strong> <span className="font-mono text-blue-600">ato.gov.au</span></p>
            <p className="mt-2 text-sm"><strong>You need:</strong> Passport + visa details</p>
            <p className="mt-2 text-sm"><strong>Time:</strong> About 10 minutes</p>
            <p className="mt-2 text-sm"><strong>Cost:</strong> Free (always free)</p>
          </div>
          <div className="mt-4 rounded-xl bg-red-50 p-4 border-l-4 border-red-500">
            <p className="text-sm font-bold text-red-900">🚨 Scam Alert</p>
            <p className="mt-1 text-sm text-red-800">Fake websites charge fees to submit the same free application. The ONLY official source is ato.gov.au</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="pb-12 border-b border-navy-100">
          <div className="flex gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white font-bold text-lg">2</div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-800">
                Wait for your number (timing is everything)
              </h2>
            </div>
          </div>
          <p className="mt-4 text-ink-secondary max-w-2xl">
            Your TFN arrives by post within 28 days, usually much faster.
          </p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-xl bg-green-50 p-4 border border-green-200">
              <p className="font-bold text-green-900">✓ Apply in your FIRST WEEK</p>
              <p className="mt-2 text-sm text-green-800">Number ready before your first job asks for it</p>
            </div>
            <div className="rounded-xl bg-red-50 p-4 border border-red-200">
              <p className="font-bold text-red-900">✗ Apply when you find a job</p>
              <p className="mt-2 text-sm text-red-800">Risk: Employer must take tax at top rate (≈50%) until it arrives</p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="pb-12 border-b border-navy-100">
          <div className="flex gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white font-bold text-lg">3</div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-navy-800">
                Give it to your employer + claim the threshold correctly
              </h2>
            </div>
          </div>
          <p className="mt-4 text-ink-secondary">
            You have 28 days from starting a job to give your TFN. Important: claim the tax free threshold with only ONE employer (pick the one that pays you most).
          </p>
          <div className="mt-4 rounded-xl bg-blue-50 p-4">
            <p className="text-sm"><strong>Your TFN is for life.</strong> One number covers every job you ever have in Australia.</p>
          </div>
        </div>

        {/* What if late */}
        <div className="pb-12 border-b border-navy-100">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800 mb-6">
            Started work before your TFN arrived?
          </h2>
          <p className="mt-4 text-ink-secondary">
            Allowed. You have 28 days from starting a job to provide it. If you miss that window, your employer must take tax at the top rate (≈50% of pay). Don&apos;t panic—this tax is not lost.
          </p>
          <div className="mt-6 rounded-xl bg-gold-50 p-6 border border-gold-200">
            <p className="font-bold text-navy-800">The fix:</p>
            <p className="mt-2 text-sm text-ink-secondary">When you lodge your tax return, the overpaid tax comes back automatically. Fixing this is one of the most common things we do for first-year students.</p>
          </div>
        </div>

        {/* Lost TFN */}
        <div className="pb-12 border-b border-navy-100">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800 mb-6">
            Lost your TFN letter?
          </h2>
          <p className="mt-4 text-ink-secondary">
            The number is yours for life—the letter is just a record. You can recover it:
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="text-navy-800 font-bold">•</span>
              <span>Through myGov linked to the ATO</span>
            </li>
            <li className="flex gap-3">
              <span className="text-navy-800 font-bold">•</span>
              <span>By calling the ATO with ID documents</span>
            </li>
            <li className="flex gap-3">
              <span className="text-navy-800 font-bold">•</span>
              <span>Through a tax agent handling your return</span>
            </li>
          </ul>
        </div>

        <div className="pt-8 border-t border-navy-100">
          <p className="text-sm text-ink-secondary">
            <strong>Next step:</strong> Got your TFN? Interested in{' '}
            <Link href="/abn" className="font-bold text-navy-600 hover:underline">
              delivery work (ABN)
            </Link>
            ? Check if you need one first.
          </p>
        </div>
      </section>

      <GuideLinks slugs={['how-to-get-tfn-international-student', 'work-before-tfn-arrives', 'tfn-or-abn-which-one']} />

      <Faq items={faqs} />
    </>
  )
}
