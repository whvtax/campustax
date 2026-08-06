export type GuideSection = {
  h: string
  body: string[] // paragraphs
}

export type Guide = {
  slug: string
  title: string // the H1, phrased as the real question
  metaTitle: string
  description: string
  cluster: 'Tax basics and residency' | 'TFN and ABN' | 'Work hours and jobs' | 'Superannuation' | 'Medicare, OSHC and scholarships' | 'Leaving Australia and moving to a 485'
  updated: string // e.g. '5 August 2026'
  published?: string // first publication date; falls back to updated when absent
  answer: string // 40-60 word direct answer, quoted by AI engines
  sections: GuideSection[]
  shortAnswer: string // one or two sentences for the shareable box
  faq: { q: string; a: string }[]
  related: string[] // slugs
  serviceLink?: { href: string; label: string }
  waContext: string
}
