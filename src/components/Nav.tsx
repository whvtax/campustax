'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { waLink } from '@/lib/constants'

// Slim top nav: the four core destinations only. Calculator, About, Contact,
// TFN and ABN live as sections on the home page and as standalone URLs
// reachable from there and from the footer.
const links = [
  { href: '/tax-return', label: 'Tax Return' },
  { href: '/superannuation', label: 'Super Refund' },
  { href: '/medicare', label: 'Medicare' },
  { href: '/guides', label: 'Guides' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-navy-100">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between" aria-label="Main">
        <Link href="/" aria-label="CampusTax home" className="shrink-0">
          <Image
            src="/logo/campustax-horizontal-light.svg"
            alt="CampusTax"
            width={196}
            height={30}
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-semibold text-navy-800 hover:text-navy-600"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={waLink('I have a question about my tax.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pop rounded-2xl bg-gold-400 px-4 py-2 text-[15px] font-bold text-navy-900 hover:bg-gold-500"
          >
            Chat on WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden -mr-1 grid h-11 w-11 place-items-center text-navy-800"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-navy-100 bg-white px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3.5 text-[15px] font-semibold text-navy-800 border-b border-navy-50"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={waLink('I have a question about my tax.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-2xl bg-gold-400 px-4 py-3 text-center font-bold text-navy-900"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
