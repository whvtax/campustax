/**
 * A mock WhatsApp conversation: the actual product is the chat, so the
 * homepage shows one. Pure CSS card, no screenshots, loads instantly.
 */
export default function WhatsAppMock() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl border border-navy-100 bg-white shadow-xl shadow-navy-800/10 overflow-hidden">
      {/* chat header */}
      <div className="flex items-center gap-3 bg-navy-800 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 font-heading text-sm font-extrabold text-navy-900">
          CT
        </div>
        <div className="leading-tight">
          <p className="text-sm font-bold text-white">CampusTax</p>
          <p className="text-[11px] text-navy-200">usually replies in a few hours</p>
        </div>
      </div>
      {/* messages: staggered entrance once revealed, then a live typing indicator */}
      <div className="space-y-2.5 bg-cream px-4 py-5 text-[13.5px] leading-snug text-ink">
        <div className="wa-msg max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 shadow-sm">
          Hi! I made $16,400 this year at my cafe job and they took out $1,900 tax.
          My friend said students dont pay tax?? 😅
        </div>
        <div className="wa-msg ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-navy-100 px-3.5 py-2.5 shadow-sm">
          Your friend is almost right! Under $18,200 as a student on a long
          course, your tax should be $0.
        </div>
        <div className="wa-msg ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-navy-100 px-3.5 py-2.5 shadow-sm">
          That $1,900 they withheld? It normally comes back to you. Want us to
          check your payslips? 📄
        </div>
        <div className="wa-msg max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 shadow-sm">
          ok and how much do you charge?
        </div>
        <div className="wa-msg ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-gold-100 px-3.5 py-2.5 shadow-sm font-semibold text-navy-900">
          You get the exact price right here, before you send anything. If it is not worth it, you just say no 🎓
        </div>
        <div className="wa-typing flex w-14 items-center justify-center gap-1 rounded-2xl rounded-tl-md bg-white px-3 py-3 shadow-sm" aria-hidden="true">
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-navy-400" />
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-navy-400" />
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-navy-400" />
        </div>
      </div>
      {/* input bar */}
      <div className="flex items-center gap-2 border-t border-navy-100 bg-white px-4 py-3">
        <div className="flex-1 rounded-full bg-navy-50 px-4 py-2 text-[13px] text-ink-muted">Message…</div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 12l18-8-8 18-2.5-7.5L3 12Z" fill="#162044" />
          </svg>
        </div>
      </div>
    </div>
  )
}
