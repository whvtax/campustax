import { guides } from '@/content/guides'
import { SITE_URL, TAGLINE, AGENT_LINE, TPB } from '@/lib/constants'

export const dynamic = 'force-static'

// llms-full.txt: the complete guide content in plain text, so AI engines can
// read every answer without crawling page by page.
export async function GET() {
  const parts: string[] = [
    '# CampusTax full content',
    '',
    `${TAGLINE}. ${AGENT_LINE} (TPB ${TPB}). Site: ${SITE_URL}`,
    '',
  ]

  for (const g of guides) {
    parts.push(`## ${g.title}`)
    parts.push(`URL: ${SITE_URL}/guides/${g.slug}`)
    parts.push(`Updated: ${g.updated}`)
    parts.push('')
    parts.push(g.answer)
    parts.push('')
    for (const s of g.sections) {
      parts.push(`### ${s.h}`)
      parts.push(...s.body)
      parts.push('')
    }
    for (const f of g.faq) {
      parts.push(`Q: ${f.q}`)
      parts.push(`A: ${f.a}`)
      parts.push('')
    }
    parts.push('---')
    parts.push('')
  }

  return new Response(parts.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
