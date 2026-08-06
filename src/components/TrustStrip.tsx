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
      <div className={`flex items-center gap-4 sm:gap-6 ${align === 'start' ? 'justify-start' : 'justify-center'}`}>
        {/* TPB Badge Circle */}
        <a
          href="https://www.tpb.gov.au/public-register"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Check the registered tax agent on the TPB public register"
          className="flex flex-col items-center hover:opacity-80 transition"
        >
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[3px] border-gold-400 bg-transparent">
            <Image src="/tpb-badge.png" alt="Tax Agent" width={36} height={45} />
          </div>
          <p className="mt-2 text-xs font-semibold text-navy-800">Tax Agent</p>
        </a>
        
        {/* Online Circle */}
        <div className="flex flex-col items-center">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[3px] border-gold-400 bg-transparent">
            <Image src="/assets/online-badge.svg" alt="100% Online" width={36} height={36} />
          </div>
          <p className="mt-2 text-xs font-semibold text-navy-800">100% Online</p>
        </div>
        
        {/* Secure Circle */}
        <div className="flex flex-col items-center">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[3px] border-gold-400 bg-transparent font-heading text-xl">
            🔒
          </div>
          <p className="mt-2 text-xs font-semibold text-navy-800">Fully Secure</p>
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
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-[3px] border-gold-400 bg-transparent">
          <Image src="/tpb-badge.png" alt="Tax Practitioners Board registered tax agent symbol" width={40} height={50} />
        </div>
        <span className={`text-left text-xs font-semibold leading-snug ${textClass}`}>
          Supervised by a registered tax agent.
        </span>
      </a>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-[3px] border-gold-400 bg-transparent">
          <Image src="/assets/online-badge.svg" alt="" width={40} height={40} />
        </div>
        <span className={`text-left text-xs font-semibold leading-snug ${textClass}`}>
          No office. No paperwork
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <span className={`flex h-[54px] w-[54px] items-center justify-center rounded-full border-[3px] border-gold-400 bg-transparent font-heading text-2xl`}>
          🔒
        </span>
        <span className={`text-left text-xs font-semibold leading-snug ${textClass}`}>
          Your data is fully secure
        </span>
      </div>
    </div>
  )
}
