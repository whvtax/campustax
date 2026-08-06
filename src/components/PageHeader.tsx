import React from 'react'
import Link from 'next/link'

/**
 * Compatibility header for pages copied from the legacy codebase
 * (legal pages keep their wording; only the shell is CampusTax design).
 * Renders an h1, so pages using it must not add another one.
 */
interface BC { label: string; href?: string }
interface Props {
  kicker?: string
  title: string
  titleEm?: string
  sub: React.ReactNode
  breadcrumbs?: BC[]
  cta?: { label: string; href?: string }
}

export function PageHeader({ kicker, title, titleEm, sub, breadcrumbs }: Props) {
  return (
    <section className="bg-navy-800 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-navy-300">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {b.href ? (
                  <Link href={b.href} className="hover:text-gold-400">{b.label}</Link>
                ) : (
                  <span aria-current="page">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {kicker && (
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-gold-400">{kicker}</p>
        )}
        <h1 className="mt-3 font-heading font-extrabold leading-[1.15] tracking-tight text-[clamp(1.7rem,4vw,2.5rem)]">
          {title}
          {titleEm ? <span className="text-gold-400"> {titleEm}</span> : null}
        </h1>
        <div className="mt-4 max-w-2xl text-sm sm:text-base text-navy-200">{sub}</div>
      </div>
    </section>
  )
}
