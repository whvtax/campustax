import Image from 'next/image'
import { TPB } from '@/lib/constants'

/**
 * Verifiable trust signals. Every claim here links to a public register the
 * student can check themselves, which is the strongest anti scam signal a
 * new brand can send.
 */
export default function TrustStrip({ align = 'center' }: { align?: 'center' | 'start' }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 sm:gap-x-6 md:gap-x-10 gap-y-4 sm:gap-y-6 ${align === 'start' ? 'justify-start' : 'justify-center'}`}>
      <a
        href="https://www.tpb.gov.au/public-register"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 sm:gap-3"
        aria-label="Check the registered tax agent on the TPB public register"
      >
        <Image src="/assets/tpb-logo.svg" alt="Tax Practitioners Board registered tax agent symbol" width={54} height={67} />
        <span className="text-left text-xs font-semibold leading-snug text-ink-secondary">
          Under registered tax agent<br />
          <span className="text-navy-600 underline">supervision (TPB {TPB})</span>
        </span>
      </a>
      <div className="flex items-center gap-2 sm:gap-3">
        <Image src="/assets/online-badge.svg" alt="" width={54} height={54} />
        <span className="text-left text-xs font-semibold leading-snug text-ink-secondary">
          No office. No paperwork
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-[3px] border-gold-400 bg-navy-800 font-heading text-2xl">
          🔒
        </span>
        <span className="text-left text-xs font-semibold leading-snug text-ink-secondary">
          Your data is fully secure
        </span>
      </div>
    </div>
  )
}
