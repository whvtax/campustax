import Link from 'next/link'
import Image from 'next/image'
import { TAGLINE } from '@/lib/constants'
import TrustStrip from './TrustStrip'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 grid gap-6 sm:grid-cols-4">
        {/* Brand + badges */}
        <div>
          <Image
            src="/logo/campustax-horizontal-dark.svg"
            alt="CampusTax"
            width={150}
            height={23}
          />
          <p className="mt-2 text-xs text-navy-200">{TAGLINE}.</p>
          <div className="mt-3 flex items-center gap-2">
            <a
              href="https://www.tpb.gov.au/public-register"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check the registered tax agent on the TPB public register"
              className="rounded-lg bg-white/95 p-1.5"
            >
              <Image src="/tpb-badge.png" alt="Tax Practitioners Board registered tax agent symbol" width={28} height={35} />
            </a>
            <Image src="/assets/online-badge.svg" alt="100 percent online service" width={32} height={32} />
          </div>
          <div className="mt-3 hidden sm:block">
            <TrustStrip align="start" dark={true} iconsOnly={true} />
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gold-400">Services</h2>
          <ul className="mt-2 space-y-1 text-xs">
            <li><Link href="/tfn" className="inline-block py-0.5 hover:text-gold-400">TFN</Link></li>
            <li><Link href="/abn" className="inline-block py-0.5 hover:text-gold-400">ABN</Link></li>
            <li><Link href="/tax-return" className="inline-block py-0.5 hover:text-gold-400">Tax Return</Link></li>
            <li><Link href="/superannuation" className="inline-block py-0.5 hover:text-gold-400">Super</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gold-400">Contact</h2>
          <ul className="mt-2 space-y-1 text-xs">
            <li>
              <a href="https://wa.me/61424513998" target="_blank" rel="noopener noreferrer" className="inline-block py-0.5 hover:text-gold-400">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:info@campustax.com.au" className="inline-block py-0.5 hover:text-gold-400">
                Email
              </a>
            </li>
            <li>
              <a href="https://instagram.com/campustax" target="_blank" rel="noopener noreferrer" className="inline-block py-0.5 hover:text-gold-400">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://tiktok.com/@campustax" target="_blank" rel="noopener noreferrer" className="inline-block py-0.5 hover:text-gold-400">
                TikTok
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gold-400">CampusTax</h2>
          <ul className="mt-2 space-y-1 text-xs">
            <li><Link href="/guides" className="inline-block py-0.5 hover:text-gold-400">Student Tax Guides</Link></li>
            <li><Link href="/contact" className="inline-block py-0.5 hover:text-gold-400">The Team</Link></li>
            <li><Link href="/client-agreement" className="inline-block py-0.5 hover:text-gold-400">Client Agreement</Link></li>
            <li><Link href="/privacy" className="inline-block py-0.5 hover:text-gold-400">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-700">
        <p className="mx-auto max-w-6xl px-4 sm:px-6 py-3 text-xs text-navy-300">
          © 2026 CampusTax. All rights reserved · ABN 78 679 112 675
        </p>
      </div>
    </footer>
  )
}
