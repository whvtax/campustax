import Link from 'next/link'
import Image from 'next/image'
import { TAGLINE, TPB, waLink } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-2">
        {/* Brand + badges */}
        <div>
          <Image
            src="/logo/campustax-horizontal-dark.svg"
            alt="CampusTax"
            width={180}
            height={28}
          />
          <p className="mt-6 text-sm text-navy-200">{TAGLINE}.</p>
          <div className="mt-5 flex items-center gap-6">
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
          <h2 className="mt-8 text-sm font-bold uppercase tracking-wider text-gold-400">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/tax-return" className="inline-block py-1 hover:text-gold-400">Tax Return</Link></li>
            <li><Link href="/superannuation" className="inline-block py-1 hover:text-gold-400">Super Refund</Link></li>
            <li><Link href="/tfn" className="inline-block py-1 hover:text-gold-400">TFN</Link></li>
            <li><Link href="/abn" className="inline-block py-1 hover:text-gold-400">ABN</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-400">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="mailto:info@campustax.com.au" className="inline-block py-1 hover:text-gold-400">Email</a></li>
            <li><a href={waLink('I have a question.')} target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-gold-400">WhatsApp</a></li>
            <li><a href="https://instagram.com/campustax" target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-gold-400">Instagram</a></li>
            <li><a href="https://tiktok.com/@campustax" target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-gold-400">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-700">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex items-center justify-between text-xs text-navy-200">
          <p>© 2026 CampusTax. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/client-agreement" className="hover:text-gold-400">Client Agreement</Link>
            <Link href="/privacy" className="hover:text-gold-400">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
