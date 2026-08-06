import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { guides } from '@/content/guides'

const routes: Array<{ path: string; priority: number; changeFrequency: 'monthly' | 'monthly' }> = [
  { path: '', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/tax-return', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/superannuation', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/tfn', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/abn', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/medicare', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/calculator', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
]

const MONTHS: Record<string, string> = {
  January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
  July: '07', August: '08', September: '09', October: '10', November: '11', December: '12',
}

function toIso(updated: string): string {
  const [d, m, y] = updated.split(' ')
  return `${y}-${MONTHS[m] ?? '01'}-${d.padStart(2, '0')}`
}

const CORE_UPDATED = new Date('2026-08-06')

export default function sitemap(): MetadataRoute.Sitemap {
  const core = routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: CORE_UPDATED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
  const guidePages = guides.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: new Date(toIso(g.updated)),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  return [...core, ...guidePages]
}
