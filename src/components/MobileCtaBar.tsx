'use client'

import { usePathname } from 'next/navigation'
import { waLink } from '@/lib/constants'

/**
 * Sticky bottom WhatsApp bar for mobile: the CTA lives in the thumb zone on
 * every content page, like an app. Hidden on form pages (they have their own
 * submit flow), on legal pages, and on desktop.
 */
const HIDDEN_ON = ['/tax-form', '/super-form', '/tfn-form', '/abn-form', '/client-agreement', '/privacy']

export default function MobileCtaBar() {
  const pathname = usePathname()
  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null

  return (
    <>
      {/* spacer so the fixed bar never covers the footer's last line */}
      <div className="lg:hidden" aria-hidden="true" style={{ height: 'calc(5rem + env(safe-area-inset-bottom))' }} />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/95 backdrop-blur px-4 pt-3 lg:hidden"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <a
          href={waLink('I am on your site and have a question.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pop flex items-center justify-center gap-2 rounded-xl bg-gold-400 px-6 py-3.5 font-bold text-navy-900"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" stroke="#162044" strokeWidth="2" strokeLinejoin="round" />
            <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.5-1.5-2-1.5-1 .7a4.2 4.2 0 0 1-1.7-1.7l.7-1-1.5-2L9 9.5Z" fill="#162044" />
          </svg>
          Ask a free question on WhatsApp
        </a>
      </div>
    </>
  )
}
