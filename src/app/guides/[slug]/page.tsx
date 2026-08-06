import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { guides, getGuide } from '@/content/guides'
import Faq from '@/components/Faq'
import HeroDecor from '@/components/HeroDecor'
import WaCta from '@/components/WaCta'
import { SITE_URL, AGENT_LINE, TPB } from '@/lib/constants'
import { jsonLd } from '@/lib/jsonld'

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug)
  if (!g) return {}
  return {
    title: g.metaTitle,
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}` },
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug)
  if (!g) notFound()

  // Schema wants ISO dates; the display string stays human friendly.
  const months: Record<string, string> = {
    January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
    July: '07', August: '08', September: '09', October: '10', November: '11', December: '12',
  }
  const toIso = (v: string) => {
    const [d, mName, y] = v.split(' ')
    return `${y}-${months[mName] ?? '01'}-${d.padStart(2, '0')}`
  }
  const updatedISO = toIso(g.updated)
  const publishedISO = toIso(g.published ?? g.updated)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.description,
    datePublished: publishedISO,
    dateModified: updatedISO,
    image: [`${SITE_URL}/og-image.png`],
    author: { '@type': 'Organization', name: 'CampusTax', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'CampusTax', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/guides/${g.slug}`,
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
      { '@type': 'ListItem', position: 3, name: g.title, item: `${SITE_URL}/guides/${g.slug}` },
    ],
  }

  const related = g.related.map(getGuide).filter(Boolean)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />

      <section className="relative bg-navy-800 text-white overflow-hidden">
        <HeroDecor />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-xs text-navy-300">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/guides" className="hover:text-gold-400">Guides</Link>
          </nav>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-gold-400">{g.cluster}</p>
          <h1 className="mt-3 font-heading font-extrabold leading-[1.18] tracking-tight text-[clamp(1.6rem,4vw,2.4rem)]">
            {g.title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-navy-100">{g.answer}</p>
          <p className="mt-5 text-xs text-navy-300">Updated {g.updated} · Checked against current ATO guidance</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
        {g.sections.map((s) => (
          <section key={s.h} className="mb-10">
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-800">{s.h}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="mt-3 text-[15.5px] leading-relaxed text-ink-secondary">{p}</p>
            ))}
          </section>
        ))}

        {/* Shareable short answer */}
        <div className="rounded-2xl bg-navy-800 p-6 sm:p-8 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">The short answer</p>
          <p className="mt-2 font-heading text-lg font-extrabold leading-snug">{g.shortAnswer}</p>
          <p className="mt-4 text-xs text-navy-200">campustax.com.au · {AGENT_LINE} (TPB {TPB})</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <WaCta context={g.waContext} label="Ask us on WhatsApp" />
          <Link href={g.serviceLink.href} className="text-sm font-bold text-navy-600 hover:underline">
            {g.serviceLink.label}
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-12 border-t border-navy-100 pt-8">
            <h2 className="font-heading text-lg font-extrabold text-navy-800">Keep reading</h2>
            <ul className="mt-4 space-y-3">
              {related.map((r) => (
                <li key={r!.slug}>
                  <Link href={`/guides/${r!.slug}`} className="font-semibold text-navy-600 hover:underline">
                    {r!.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <Faq items={g.faq} title="Related questions" />
    </>
  )
}
