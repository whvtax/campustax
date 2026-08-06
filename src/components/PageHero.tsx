/**
 * Service page hero. One H1, responsive with clamp. The paragraph under the H1
 * is the "direct answer": it must fully answer the page question in 40 to 60
 * words, because that is the text AI search engines quote.
 */
import HeroDecor from '@/components/HeroDecor'

export default function PageHero({
  kicker,
  title,
  children,
}: {
  kicker: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="relative bg-navy-800 text-white overflow-hidden">
      <HeroDecor />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-gold-400">{kicker}</p>
        <h1 className="mt-3 max-w-2xl font-heading font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,4.5vw,2.9rem)]">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-base sm:text-lg text-navy-200">{children}</div>
      </div>
    </section>
  )
}
