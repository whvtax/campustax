import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ServiceSchema from '@/components/ServiceSchema'
import Faq from '@/components/Faq'
import GuideLinks from '@/components/GuideLinks'
import WaCta from '@/components/WaCta'

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

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-12">
        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            Getting your TFN, step by step
          </h2>
          <p className="mt-3 text-ink-secondary">
            Wait until you are physically in Australia, because the online form
            checks that you have arrived. Then apply on the ATO website with your
            passport and visa details. It takes about ten minutes and costs nothing.
            The number arrives by post within 28 days, usually faster. Apply in your
            first week, not when you find a job. The number takes time to arrive and
            employers will ask for it on day one.
          </p>
          <p className="mt-3 text-ink-secondary">
            One warning that saves students money: the TFN is free from the
            government, always. Websites exist that look official and charge a fee
            to submit the same free application. The only address you need is
            ato.gov.au.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            Started working before your TFN arrived?
          </h2>
          <p className="mt-3 text-ink-secondary">
            That is allowed. You have 28 days from starting a job to give your
            employer the number. If the 28 days pass without it, your employer must
            take tax out at the top rate, which is nearly half your pay. Do not
            panic if that happened to you. The extra tax is not lost. It comes back
            through your tax return, and fixing it is one of the most common things
            we do for first year students.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            When the number arrives
          </h2>
          <p className="mt-3 text-ink-secondary">
            Give the TFN to your employer through the declaration form they gave
            you on day one, and claim the tax free threshold there if it is your
            main job. Give it to your bank too, so your interest is not taxed at
            the top rate. Then guard it like a password: employers after you accept
            a job, your bank, the ATO and your tax agent. Nobody else needs it, and
            anyone else asking for it is a red flag.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <WaCta context="I need help with my TFN." label="Sort my TFN on WhatsApp" />
            <Link href="/tfn-form" className="text-sm font-bold text-navy-600 hover:underline">
              Prefer a form? Start here
            </Link>
          </div>
        </div>

        <p className="text-sm text-ink-secondary">
          Doing delivery work too? That needs an{' '}
          <Link href="/abn" className="font-bold text-navy-600 hover:underline">
            ABN, which is a different thing
          </Link>
          . And once you are earning, see{' '}
          <Link href="/tax-return" className="font-bold text-navy-600 hover:underline">
            how your tax return works
          </Link>
          .
        </p>
      </section>

      <GuideLinks slugs={['how-to-get-tfn-international-student', 'work-before-tfn-arrives', 'tfn-or-abn-which-one']} />

      <Faq items={faqs} />
    </>
  )
}
