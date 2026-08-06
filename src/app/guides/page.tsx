'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import PageHero from '@/components/PageHero'
import WaCta from '@/components/WaCta'
import { guides } from '@/content/guides'

const allClusters = [
  {
    title: 'Tax basics and residency',
    blurb: 'Who pays what, the $18,200 threshold, and why student tax is not backpacker tax.',
    icon: '📚',
  },
  {
    title: 'TFN and ABN',
    blurb: 'Getting your tax file number, working before it arrives, and when delivery work needs an ABN.',
    icon: '🏷️',
  },
  {
    title: 'Work hours and jobs',
    blurb: 'The 48 hour rule, second jobs, and what to do when a payslip looks wrong.',
    icon: '⏰',
  },
  {
    title: 'Superannuation',
    blurb: 'What your employer must pay, and how to take your super with you when you leave.',
    icon: '💰',
  },
  {
    title: 'Medicare, OSHC and scholarships',
    blurb: 'The 2% levy most students should not pay, and when a scholarship is tax free.',
    icon: '🏥',
  },
  {
    title: 'Leaving Australia and moving to a 485',
    blurb: 'Final returns, early lodgment, and what changes when you switch to a graduate visa.',
    icon: '✈️',
  },
]

export default function GuidesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null)

  // Filter guides based on search and cluster
  const filteredGuides = useMemo(() => {
    return guides.filter((g) => {
      const matchesSearch =
        g.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCluster = selectedCluster ? g.cluster === selectedCluster : true
      return matchesSearch && matchesCluster
    })
  }, [searchTerm, selectedCluster])

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

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="rounded-2xl bg-navy-50 border border-navy-200 p-6 sm:p-8">
            <label className="block text-sm font-bold text-navy-800">
              Search guides
              <input
                type="text"
                placeholder="E.g. 'refund', 'residency', 'hours'..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-3 w-full rounded-lg border-2 border-navy-200 bg-white px-4 py-3 text-base focus:border-navy-600 focus:outline-none"
              />
            </label>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <p className="text-sm font-bold text-navy-800 mb-3">Filter by category:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCluster(null)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                selectedCluster === null
                  ? 'bg-navy-800 text-white'
                  : 'border-2 border-navy-200 text-navy-800 hover:border-navy-800'
              }`}
            >
              All guides
            </button>
            {allClusters.map((c) => (
              <button
                key={c.title}
                onClick={() => setSelectedCluster(c.title)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  selectedCluster === c.title
                    ? 'bg-navy-800 text-white'
                    : 'border-2 border-navy-200 text-navy-800 hover:border-navy-800'
                }`}
              >
                {c.icon} {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filteredGuides.length > 0 ? (
          <>
            <p className="text-sm text-ink-secondary mb-6">
              Found <strong>{filteredGuides.length}</strong> guide{filteredGuides.length !== 1 ? 's' : ''}
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredGuides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="card-lift block h-full rounded-xl border-2 border-navy-100 p-6 hover:border-navy-300 hover:shadow-lg transition"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-heading text-[15.5px] font-extrabold text-navy-800 flex-1">
                        {g.title}
                      </p>
                      <span className="text-lg">→</span>
                    </div>
                    <p className="mt-3 text-sm text-ink-secondary line-clamp-2">{g.description}</p>
                    <div className="mt-4 inline-block rounded-full bg-navy-50 px-3 py-1">
                      <p className="text-xs font-bold text-navy-700">{g.cluster}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg font-bold text-navy-800">No guides found</p>
            <p className="mt-2 text-sm text-ink-secondary">
              Try a different search or{' '}
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCluster(null)
                }}
                className="font-bold text-navy-600 hover:underline"
              >
                clear all filters
              </button>
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-50 to-cream border border-blue-200 p-8 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            Question not answered?
          </h2>
          <p className="mt-2 text-ink-secondary">
            Ask us anything on WhatsApp. A real person replies (usually within hours), in any language.
          </p>
          <div className="mt-6 flex justify-center">
            <WaCta context="I have a tax question that is not on the site." label="Ask us anything on WhatsApp" />
          </div>
        </div>
      </section>
    </>
  )
}
