/**
 * Custom service icon set, one visual language: navy strokes, gold accent.
 * Drawn for this brand, not a generic icon pack.
 */

const base = {
  width: 44,
  height: 44,
  viewBox: '0 0 48 48',
  fill: 'none' as const,
  'aria-hidden': true as const,
}

export function IconReturn() {
  return (
    <svg {...base}>
      <rect x="10" y="6" width="28" height="36" rx="4" stroke="#1E2A5A" strokeWidth="2.6" />
      <path d="M16 15h16M16 22h16M16 29h9" stroke="#1E2A5A" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="33" cy="33" r="9" fill="#E3B93C" />
      <path d="M29.5 33l2.5 2.5 5-5" stroke="#162044" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconSuper() {
  return (
    <svg {...base}>
      <circle cx="20" cy="22" r="12" stroke="#1E2A5A" strokeWidth="2.6" />
      <path d="M20 16v12M16.5 19.5c0-1.4 1.6-2.5 3.5-2.5s3.5 1.1 3.5 2.5c0 3.5-7 1.5-7 5 0 1.4 1.6 2.5 3.5 2.5s3.5-1.1 3.5-2.5" stroke="#1E2A5A" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M31 38h10M36 33l5 5-5 5" stroke="#C9A227" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconTfn() {
  return (
    <svg {...base}>
      <rect x="6" y="12" width="36" height="24" rx="4" stroke="#1E2A5A" strokeWidth="2.6" />
      <circle cx="16" cy="24" r="4.5" stroke="#1E2A5A" strokeWidth="2.4" />
      <path d="M26 20h10M26 25h10M26 30h6" stroke="#1E2A5A" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="28" y="8" width="14" height="8" rx="2" fill="#E3B93C" />
      <path d="M31 12h8" stroke="#162044" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconMedicare() {
  return (
    <svg {...base}>
      <path d="M24 6l16 5v12c0 9.5-6.7 16.4-16 20C14.7 39.4 8 32.5 8 23V11l16-5Z" stroke="#1E2A5A" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M24 17v12M18 23h12" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function IconCalc() {
  return (
    <svg {...base}>
      <rect x="10" y="6" width="28" height="36" rx="4" stroke="#1E2A5A" strokeWidth="2.6" />
      <rect x="15" y="11" width="18" height="8" rx="1.5" fill="#E3B93C" />
      <circle cx="18" cy="26" r="2.2" fill="#1E2A5A" />
      <circle cx="24" cy="26" r="2.2" fill="#1E2A5A" />
      <circle cx="30" cy="26" r="2.2" fill="#1E2A5A" />
      <circle cx="18" cy="34" r="2.2" fill="#1E2A5A" />
      <circle cx="24" cy="34" r="2.2" fill="#1E2A5A" />
      <rect x="27.8" y="31.8" width="4.4" height="4.4" rx="1" fill="#C9A227" />
    </svg>
  )
}

export function IconAbn() {
  return (
    <svg {...base}>
      {/* delivery backpack */}
      <rect x="10" y="14" width="28" height="28" rx="6" stroke="#1E2A5A" strokeWidth="2.6" />
      <path d="M17 14v-3a7 7 0 0 1 14 0v3" stroke="#1E2A5A" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M10 24h28" stroke="#1E2A5A" strokeWidth="2.4" />
      <rect x="19" y="20" width="10" height="8" rx="2" fill="#E3B93C" />
      <circle cx="33" cy="35" r="3" fill="#C9A227" />
    </svg>
  )
}

export function IconChat() {
  return (
    <svg {...base}>
      <path d="M8 12a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H20l-9 8v-8h-3V12Z" transform="translate(0 2) scale(.92)" stroke="#1E2A5A" strokeWidth="2.8" strokeLinejoin="round" fill="none" />
      <circle cx="18" cy="20" r="2.1" fill="#C9A227" />
      <circle cx="25" cy="20" r="2.1" fill="#C9A227" />
      <circle cx="32" cy="20" r="2.1" fill="#C9A227" />
    </svg>
  )
}
