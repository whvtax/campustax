import Image from 'next/image'

/**
 * Verifiable trust signals. Every claim here links to a public register the
 * student can check themselves, which is the strongest anti scam signal a
 * new brand can send.
 */
export default function TrustStrip({ align = 'center', dark = false, iconsOnly = false }: { align?: 'center' | 'start'; dark?: boolean; iconsOnly?: boolean }) {
  const textClass = dark ? 'text-navy-100' : 'text-ink-secondary'
  
  if (iconsOnly) {
    return (
      <div className={`flex items-center gap-6 sm:gap-8 ${align === 'start' ? 'justify-start' : 'justify-center'}`}>
        <a
          href="https://www.tpb.gov.au/public-register"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Check the registered tax agent on the TPB public register"
          className="hover:opacity-80 transition"
        >
          <Image src="/assets/tpb-logo.svg" alt="Tax Practitioners Board registered tax agent symbol" width={64} height={80} />
        </a>
        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border-[4px] border-gold-400 bg-navy-800">
          <Image src="/assets/online-badge.svg" alt="100% online" width={48} height={48} />
        </div>
        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border-[4px] border-gold-400 bg-navy-800 font-heading text-3xl hover:opacity-80 transition">
          🔒
        </div>
      </div>
    )
  }
  
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
        <span className={`text-left text-xs font-semibold leading-snug ${textClass}`}>
          Supervised by a registered tax agent.
        </span>
      </a>
      <div className="flex items-center gap-2 sm:gap-3">
        <Image src="/assets/online-badge.svg" alt="" width={54} height={54} />
        <span className={`text-left text-xs font-semibold leading-snug ${textClass}`}>
          No office. No paperwork
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <span className={`flex h-[54px] w-[54px] items-center justify-center rounded-full border-[3px] ${dark ? 'border-gold-300 bg-navy-700' : 'border-gold-400 bg-navy-800'} font-heading text-2xl`}>
          🔒
        </span>
        <span className={`text-left text-xs font-semibold leading-snug ${textClass}`}>
          Your data is fully secure
        </span>
      </div>
    </div>
  )
}
