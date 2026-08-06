'use client'

import { useRef, useState } from 'react'
import { waLink } from '@/lib/constants'
import { compressImage, MAX_UPLOAD_BYTES } from '@/lib/compress-image'

export type FormStep = { title: string; content: React.ReactNode }

/**
 * Progressive multi-step form. Step 1 asks only for contact basics, later
 * steps reveal the rest. All steps stay mounted inside ONE form element, so
 * the final submit sends every field (and files) together. Each "Continue"
 * validates only the fields visible in the current step.
 */
export default function FormShell({
  action,
  waContext,
  steps,
  submitLabel = 'Send and continue on WhatsApp',
}: {
  action: string
  waContext: string
  steps: FormStep[]
  submitLabel?: string
}) {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')
  const [step, setStep] = useState(0)
  const stepRefs = useRef<Array<HTMLDivElement | null>>([])

  function validateStep(i: number): boolean {
    const container = stepRefs.current[i]
    if (!container) return true
    const inputs = container.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      'input, select, textarea',
    )
    for (const el of Array.from(inputs)) {
      if (!el.checkValidity()) {
        el.reportValidity()
        return false
      }
    }
    return true
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, steps.length - 1))
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validateStep(step)) return
    setState('sending')
    try {
      const fd = new FormData(e.currentTarget)
      let totalBytes = 0
      // Phone photos are routinely 4 to 9 MB and the hosting platform rejects
      // bodies over ~4.5 MB before our code runs. Compress images client side;
      // non image files that are still too big get a clear error instead of a
      // silent platform failure.
      for (const [key, value] of Array.from(fd.entries())) {
        if (value instanceof File && value.size > 0) {
          const isImage = value.type.startsWith('image/') || /\.(jpe?g|png|webp|heic|heif)$/i.test(value.name)
          const processed = isImage ? await compressImage(value) : value
          totalBytes += processed.size
          if (processed.size > MAX_UPLOAD_BYTES || totalBytes > MAX_UPLOAD_BYTES) {
            setErrMsg('Your files together are too large to send here. Photos work better than scans, or just send the documents to us on WhatsApp instead.')
            setState('error')
            return
          }
          fd.set(key, processed, processed.name)
        }
      }
      const res = await fetch(action, { method: 'POST', body: fd })
      const json = await res.json()
      if (json.ok) {
        setState('done')
      } else if (json.error === 'rate_limited') {
        setErrMsg('Too many attempts from your connection. Please wait 10 minutes, or just message us on WhatsApp.')
        setState('error')
      } else {
        setErrMsg(json.message ?? '')
        setState('error')
      }
    } catch {
      setErrMsg('')
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <div className="rounded-2xl bg-cream border border-navy-100 p-8 text-center">
        <p className="font-heading text-2xl font-extrabold text-navy-800">Got it. Your form is with our team.</p>
        <p className="mt-3 text-ink-secondary">
          We will message you on WhatsApp, usually within a few hours on business
          days. Want to move faster? Start the chat yourself and mention you sent
          the form.
        </p>
        <a
          href={waLink(waContext)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-2xl bg-gold-400 px-6 py-3 font-bold text-navy-900 hover:bg-gold-500"
        >
          Open WhatsApp
        </a>
      </div>
    )
  }

  const isLast = step === steps.length - 1

  function onKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
    if (e.key !== 'Enter') return
    const target = e.target as HTMLElement
    if (target.tagName === 'TEXTAREA' || target.tagName === 'BUTTON') return
    if (!isLast) {
      e.preventDefault()
      next()
    }
  }

  return (
    <form onSubmit={onSubmit} onKeyDown={onKeyDown} className="space-y-6">
      {/* Progress */}
      <div>
        <div className="flex items-center justify-between text-xs font-bold text-ink-secondary">
          <span>
            Step {step + 1} of {steps.length}: {steps[step].title}
          </span>
          <span>{Math.round(((step + 1) / steps.length) * 100)}%</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-navy-100" role="progressbar" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={step + 1}>
          <div
            className="h-2 rounded-full bg-gold-400 transition-all"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="contact_time" tabIndex={-1} autoComplete="one-time-code" />
        </label>
      </div>

      {/* All steps stay mounted; only the active one is visible */}
      {steps.map((s, i) => (
        <div
          key={s.title}
          ref={(el) => {
            stepRefs.current[i] = el
          }}
          className={i === step ? 'space-y-5' : 'hidden'}
        >
          {s.content}
        </div>
      ))}

      {state === 'error' && (
        <p role="alert" className="rounded-2xl bg-error/5 border border-error px-4 py-3 text-sm font-semibold text-error">
          {errMsg || 'Something went wrong on our side. Please try again, or just message us on WhatsApp.'}
        </p>
      )}

      <div className="flex items-center gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="rounded-2xl border-2 border-navy-200 px-5 py-3 text-sm font-bold text-navy-600 hover:border-navy-400"
          >
            Back
          </button>
        )}
        {isLast ? (
          <button
            type="submit"
            disabled={state === 'sending'}
            className="flex-1 rounded-2xl bg-gold-400 px-6 py-3.5 font-bold text-navy-900 hover:bg-gold-500 disabled:opacity-60"
          >
            {state === 'sending' ? 'Sending…' : submitLabel}
          </button>
        ) : (
          <button
            type="button"
            onClick={next}
            className="flex-1 rounded-2xl bg-gold-400 px-6 py-3.5 font-bold text-navy-900 hover:bg-gold-500"
          >
            Continue
          </button>
        )}
      </div>

      {isLast && (
        <p className="text-xs text-ink-muted">
          Your details and documents go only to our team, are stored securely, and
          are handled under our privacy policy. Nothing is lodged and nothing is
          charged until we talk to you first.
        </p>
      )}
    </form>
  )
}
