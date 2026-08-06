import { jsonLd } from '@/lib/jsonld'
/**
 * FAQ block with FAQPage JSON-LD.
 * The visible text and the schema come from the same data so they never drift.
 */
export type FaqItem = { q: string; a: string }

export default function Faq({ items, title = 'Common questions' }: { items: FaqItem[]; title?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <h2 className="font-heading text-2xl font-extrabold text-navy-800">{title}</h2>
      <div className="mt-6 divide-y divide-navy-100">
        {items.map((i) => (
          <details key={i.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-[15.5px] font-bold text-navy-800">
              {i.q}
              <span aria-hidden="true" className="text-navy-400 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <p className="mt-3 text-[15px] text-ink-secondary">{i.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
