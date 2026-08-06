import { guides } from '@/content/guides'
import { SITE_URL, TAGLINE, AGENT_LINE, TPB } from '@/lib/constants'

export const dynamic = 'force-static'

// llms.txt: a concise, machine-friendly map of the site for AI crawlers.
// Same architecture as the WHV site, generated from the content registry so
// it can never drift from the real pages.
export async function GET() {
  const lines: string[] = [
    '# CampusTax',
    '',
    `> ${TAGLINE}. Tax returns, superannuation refunds (DASP at the 35% student rate), TFN and ABN setup, and Medicare levy exemptions for international students in Australia. ${AGENT_LINE} (TPB ${TPB}).`,
    '',
    'Key facts:',
    '- Most international students on courses longer than 6 months are Australian residents for tax purposes',
    '- Residents pay no tax on the first $18,200 earned each tax year (2025-26)',
    '- Student DASP super payments are taxed at 35%, not the 65% working holiday rate',
    '- Students can work 48 hours per fortnight in session, unlimited during official course breaks',
    '- Students with OSHC can usually claim a full Medicare levy exemption with a Medicare Entitlement Statement',
    `- Full guide text for AI systems: ${SITE_URL}/llms-full.txt`,
    '',
    '## Services',
    `- [Tax Return](${SITE_URL}/tax-return): Returns for international students, arrival and departure years, multiple employers`,
    `- [Superannuation Refund](${SITE_URL}/superannuation): DASP claims when leaving Australia, 35% student rate`,
    `- [TFN](${SITE_URL}/tfn): Tax file number setup for students`,
    `- [ABN](${SITE_URL}/abn): ABN setup for delivery and freelance work`,
    `- [Medicare Levy Exemption](${SITE_URL}/medicare): OSHC based exemption worth 2% of income`,
    `- [Calculator](${SITE_URL}/calculator): Refund and DASP estimates`,
    '',
    '## Guides',
    ...guides.map((g) => `- [${g.title}](${SITE_URL}/guides/${g.slug}): ${g.shortAnswer}`),
    '',
    '## Contact',
    `- [Contact](${SITE_URL}/contact): WhatsApp first, replies from a real person`,
  ]
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
