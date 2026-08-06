import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import WaCta from '@/components/WaCta'
import { guides } from '@/content/guides'

export const metadata: Metadata = {
  alternates: { canonical: '/guides' },
  title: 'Student Tax Guides',
  description:
    'Plain English answers to the tax questions international students in Australia actually ask. Residency, refunds, TFN, ABN, super, Medicare and more.',
}

const allClusters = [
  {
    title: 'Tax basics and residency',
    blurb: 'Who pays what, the $18,200 threshold, and why student tax is not backpacker tax.',
  },
  {
    title: 'TFN and ABN',
    blurb: 'Getting your tax file number, working before it arrives, and when delivery work needs an ABN.',
  },
  {
    title: 'Work hours and jobs',
    blurb: 'The 48 hour rule, second jobs, and what to do when a payslip looks wrong.',
  },
  {
    title: 'Superannuation',
    blurb: 'What your employer must pay, and how to take your super with you when you leave.',
  },
  {
    title: 'Medicare, OSHC and scholarships',
    blurb: 'The 2% levy most students should not pay, and when a scholarship is tax free.',
  },
  {
    title: 'Leaving Australia and moving to a 485',
    blurb: 'Final returns, early lodgment, and what changes when you switch to a graduate visa.',
  },
]

export default function GuidesPage() {
  return (
    <>
      <PageHero kicker="Guides" title="Student tax, answered in plain English">
        <p>
          Real answers to the questions students actually ask, written for people
          whose first tax return is their first ever. New guides are published
          every week. If your question is not here yet, WhatsApp us and a person
          will answer it today.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 space-y-12">
        {allClusters.map((c) => {
          const items = guides.filter((g) => g.cluster === c.title)
          return (
            <div key={c.title}>
              <h2 className="font-heading text-xl font-extrabold text-navy-800">{c.title}</h2>
              <p className="mt-1 text-sm text-ink-secondary">{c.blurb}</p>
              {items.length > 0 ? (
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {items.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/guides/${g.slug}`}
                        className="card-lift block h-full rounded-xl border border-navy-100 p-5 hover:border-navy-300"
                      >
                        <p className="font-heading text-[15.5px] font-extrabold text-navy-800">{g.title}</p>
                        <p className="mt-2 text-sm text-ink-secondary line-clamp-2">{g.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 inline-block rounded-full bg-gold-100 px-3 py-1 text-xs font-bold text-navy-800">Guides coming soon</p>
              )}
            </div>
          )
        })}

        <div className="text-center pt-4">
          <WaCta context="I have a tax question that is not on the site." label="Ask us anything on WhatsApp" />
        </div>
      </section>
    </>
  )
}
