import Link from 'next/link'
import Image from 'next/image'
import { AGENT_LINE, LEGAL_ENTITY, ABN, TPB, TAGLINE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-3">
        {/* Brand + badges */}
        <div>
          <Image
            src="/logo/campustax-horizontal-dark.svg"
            alt="CampusTax"
            width={180}
            height={28}
          />
          <p className="mt-3 text-sm text-navy-200">{TAGLINE}.</p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://www.tpb.gov.au/public-register"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check the registered tax agent on the TPB public register"
              className="rounded-lg bg-white/95 p-2"
            >
              <Image src="/assets/tpb-logo.svg" alt="Tax Practitioners Board registered tax agent symbol" width={40} height={50} />
            </a>
            <Image src="/assets/online-badge.svg" alt="100 percent online service" width={48} height={48} />
          </div>
          <p className="mt-3 text-xs text-navy-200">
            100% online · lodged through a registered tax agent
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-400">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/tax-return" className="inline-block py-1 hover:text-gold-400">Tax Return</Link></li>
            <li><Link href="/superannuation" className="inline-block py-1 hover:text-gold-400">Superannuation Refund</Link></li>
            <li><Link href="/medicare" className="inline-block py-1 hover:text-gold-400">Medicare Levy Exemption</Link></li>
            <li><Link href="/tfn" className="inline-block py-1 hover:text-gold-400">TFN</Link></li>
            <li><Link href="/abn" className="inline-block py-1 hover:text-gold-400">ABN</Link></li>
            <li><Link href="/calculator" className="inline-block py-1 hover:text-gold-400">Tax Calculator</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-400">CampusTax</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/guides" className="inline-block py-1 hover:text-gold-400">Student Tax Guides</Link></li>
            <li><Link href="/about" className="inline-block py-1 hover:text-gold-400">About</Link></li>
            <li><Link href="/contact" className="inline-block py-1 hover:text-gold-400">Contact</Link></li>
            <li><Link href="/client-agreement" className="inline-block py-1 hover:text-gold-400">Client Agreement</Link></li>
            <li><Link href="/privacy" className="inline-block py-1 hover:text-gold-400">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-700">
        <p className="mx-auto max-w-6xl px-4 sm:px-6 py-5 text-xs text-navy-200">
          {AGENT_LINE}. {LEGAL_ENTITY} · ABN{' '}
          <a href="https://abr.business.gov.au/ABN/View?abn=26669927959" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-400">{ABN}</a>{' '}
          · Registered Tax Agent{' '}
          <a href="https://www.tpb.gov.au/public-register" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-400">{TPB}</a>
          . Check both registers yourself.
        </p>
      </div>
    </footer>
  )
}
