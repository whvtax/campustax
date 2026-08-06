'use client'

import { TAX_YEAR } from '@/lib/constants'
import HeroDecor from '@/components/HeroDecor'
import CalcWidget from '@/components/CalcWidget'

export default function Calculator() {
  return (
    <>
      <section className="relative bg-navy-800 text-white overflow-hidden">
        <HeroDecor />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-gold-400">Calculator</p>
          <h1 className="mt-3 font-heading font-extrabold tracking-tight text-[clamp(1.7rem,4.5vw,2.6rem)]">
            Student tax calculator
          </h1>
          <p className="mt-3 max-w-xl text-navy-200">
            Estimates for international students for the {TAX_YEAR} tax year. If your
            course is longer than 6 months, you are usually a resident for tax
            purposes and these numbers apply to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <CalcWidget />
      </section>
    </>
  )
}
