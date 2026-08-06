'use client'

import { useState } from 'react'
import { BRACKETS, DASP_STUDENT_RATE, waLink, AGENT_LINE, TPB } from '@/lib/constants'

/** Income tax for a resident, 2025-26 brackets. */
function taxOnIncome(income: number): number {
  let tax = 0
  let prev = 0
  for (const b of BRACKETS) {
    if (income <= prev) break
    const inBracket = Math.min(income, b.upTo) - prev
    tax += inBracket * b.rate
    prev = b.upTo
  }
  return tax
}

/** Low income tax offset, 2025-26. Up to $700, tapers out at $66,667. */
function lito(income: number): number {
  if (income <= 37500) return 700
  if (income <= 45000) return 700 - (income - 37500) * 0.05
  if (income <= 66667) return Math.max(0, 325 - (income - 45000) * 0.015)
  return 0
}

const fmt = (n: number) =>
  n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 })

/** The calculator itself, embeddable anywhere: home page section and the
 *  standalone /calculator page both render this. */
export default function CalcWidget() {
  const [tab, setTab] = useState<'refund' | 'super'>('refund')
  const [income, setIncome] = useState('')
  const [withheld, setWithheld] = useState('')
  const [superBalance, setSuperBalance] = useState('')

  const incomeN = Math.max(0, Number(income) || 0)
  const withheldN = Math.max(0, Number(withheld) || 0)
  const gross = taxOnIncome(incomeN)
  const owed = Math.max(0, gross - lito(incomeN))
  const refund = withheldN - owed
  const showRefund = income !== '' && withheld !== ''

  const superN = Math.max(0, Number(superBalance) || 0)
  const daspTax = superN * DASP_STUDENT_RATE
  const daspPayout = superN - daspTax
  const showSuper = superBalance !== ''

  return (
    <div>
      <div className="flex rounded-xl border border-navy-100 p-1 bg-navy-50" role="tablist" aria-label="Calculator type">
        <button
          role="tab"
          aria-selected={tab === 'refund'}
          onClick={() => setTab('refund')}
          className={`flex-1 rounded-xl py-3 text-sm font-bold ${
            tab === 'refund' ? 'bg-white text-navy-800 shadow-sm' : 'text-ink-secondary'
          }`}
        >
          Tax refund
        </button>
        <button
          role="tab"
          aria-selected={tab === 'super'}
          onClick={() => setTab('super')}
          className={`flex-1 rounded-xl py-3 text-sm font-bold ${
            tab === 'super' ? 'bg-white text-navy-800 shadow-sm' : 'text-ink-secondary'
          }`}
        >
          Super refund (DASP)
        </button>
      </div>

      {tab === 'refund' && (
        <div className="mt-8">
          <label className="block text-sm font-semibold text-ink">
            How much did you earn this tax year, before tax?
            <input
              type="number"
              inputMode="numeric"
              min={0}
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="For example 22000"
              className="mt-2 w-full rounded-lg border-2 border-navy-200 bg-white px-4 py-3 text-base focus:border-navy-600 focus:outline-none"
            />
          </label>
          <label className="mt-5 block text-sm font-semibold text-ink">
            How much tax did your employers take out? It is on your payslips and income statement.
            <input
              type="number"
              inputMode="numeric"
              min={0}
              value={withheld}
              onChange={(e) => setWithheld(e.target.value)}
              placeholder="For example 2400"
              className="mt-2 w-full rounded-lg border-2 border-navy-200 bg-white px-4 py-3 text-base focus:border-navy-600 focus:outline-none"
            />
          </label>

          {showRefund && (
            <div className="result-in mt-8 rounded-2xl bg-cream border border-navy-100 p-6 sm:p-8">
              {refund >= 0 ? (
                <>
                  <p className="text-sm font-semibold text-ink-secondary">Your estimated refund</p>
                  <p className="mt-1 font-heading text-4xl font-extrabold text-navy-800">{fmt(refund)}</p>
                  <p className="mt-3 text-sm text-ink-secondary">
                    Tax on {fmt(incomeN)} for a resident is about {fmt(owed)}. Your
                    employers took out {fmt(withheldN)}, so the difference normally
                    comes back to you. Deductions and the Medicare levy exemption can
                    change the final number.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm font-semibold text-ink-secondary">Estimated amount still to pay</p>
                  <p className="mt-1 font-heading text-4xl font-extrabold text-navy-800">{fmt(-refund)}</p>
                  <p className="mt-3 text-sm text-ink-secondary">
                    It looks like not enough tax was taken out during the year. This
                    often happens with ABN income or a second job. Deductions can
                    bring this number down, so it is worth checking before you lodge.
                  </p>
                </>
              )}
              <a
                href={waLink(
                  `I used the refund calculator. My estimate was ${fmt(refund >= 0 ? refund : -refund)} ${refund >= 0 ? 'refund' : 'to pay'}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop mt-5 inline-block rounded-2xl bg-gold-400 px-6 py-3 font-bold text-navy-900 hover:bg-gold-500"
              >
                Get the exact number on WhatsApp
              </a>
            </div>
          )}
        </div>
      )}

      {tab === 'super' && (
        <div className="mt-8">
          <label className="block text-sm font-semibold text-ink">
            How much is in your super account?
            <input
              type="number"
              inputMode="numeric"
              min={0}
              value={superBalance}
              onChange={(e) => setSuperBalance(e.target.value)}
              placeholder="For example 4500"
              className="mt-2 w-full rounded-lg border-2 border-navy-200 bg-white px-4 py-3 text-base focus:border-navy-600 focus:outline-none"
            />
          </label>

          {showSuper && (
            <div className="result-in mt-8 rounded-2xl bg-cream border border-navy-100 p-6 sm:p-8">
              <p className="text-sm font-semibold text-ink-secondary">Your estimated payout after you leave Australia</p>
              <p className="mt-1 font-heading text-4xl font-extrabold text-navy-800">{fmt(daspPayout)}</p>
              <p className="mt-3 text-sm text-ink-secondary">
                Student visa super payouts are taxed at 35%, so {fmt(daspTax)} goes
                to tax and {fmt(daspPayout)} comes to you. If you read somewhere that
                the tax is 65%, that is the working holiday rate, not yours.
              </p>
              <a
                href={waLink(`I used the super calculator. My estimated payout was ${fmt(daspPayout)}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop mt-5 inline-block rounded-2xl bg-gold-400 px-6 py-3 font-bold text-navy-900 hover:bg-gold-500"
              >
                Claim my super on WhatsApp
              </a>
            </div>
          )}
        </div>
      )}

      <p className="mt-10 text-xs text-ink-muted">
        These are estimates only and are not tax advice. Your final result depends on
        your full situation. {AGENT_LINE} (TPB {TPB}).
      </p>
    </div>
  )
}
