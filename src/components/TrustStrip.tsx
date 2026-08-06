import Image from 'next/image'
import { TPB, ABN } from '@/lib/constants'

/**
 * Verifiable trust signals. Every claim here links to a public register the
 * student can check themselves, which is the strongest anti scam signal a
 * new brand can send.
 */
export default function TrustStrip({ align = 'center' }: { align?: 'center' | 'start' }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-10 gap-y-6 ${align === 'start' ? 'justify-start' : 'justify-center'}`}>
      <a
        href="https://www.tpb.gov.au/public-register"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3"
        aria-label="Check the registered tax agent on the TPB public register"
      >
        <Image src="/assets/tpb-logo.svg" alt="Tax Practitioners Board registered tax agent symbol" width={54} height={67} />
        <span className="text-left text-xs font-semibold leading-snug text-ink-secondary">
          Lodged through a<br />registered tax agent<br />
          <span className="text-navy-600 underline">search the register for {TPB}</span>
        </span>
      </a>
      <div className="flex items-center gap-3">
        <Image src="/assets/online-badge.svg" alt="" width={54} height={54} />
        <span className="text-left text-xs font-semibold leading-snug text-ink-secondary">
          100% online<br />
          WhatsApp, in your language<br />
          Everything from your phone
        </span>
      </div>
      <a
        href="https://abr.business.gov.au/ABN/View?abn=26669927959"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3"
        aria-label="Check the ABN on the Australian Business Register"
      >
        <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-[3px] border-gold-400 bg-navy-800 font-heading text-sm font-extrabold text-white">
          ABN
        </span>
        <span className="text-left text-xs font-semibold leading-snug text-ink-secondary">
          Run by The Accounting Academy Pty Ltd<br />
          ABN {ABN}<br />
          <span className="text-navy-600 underline">check it on ABN Lookup</span>
        </span>
      </a>
    </div>
  )
}
