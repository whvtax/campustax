'use client'

/** Shared form primitives, CampusTax design. Field NAMES mirror the WHV forms
 *  exactly so the shared CRM sees identical data shapes. */

const inputCls =
  'mt-2 w-full rounded-lg border-2 border-navy-200 bg-white px-4 py-3 text-base focus:border-navy-600 focus:outline-none'

export function TextField({
  name, label, type = 'text', required, hint, placeholder, minLength,
}: {
  name: string; label: string; type?: string; required?: boolean; hint?: string; placeholder?: string; minLength?: number
}) {
  return (
    <label className="block text-sm font-semibold text-ink">
      {label}{required ? <span className="text-error"> *</span> : null}
      <input type={type} name={name} required={required} placeholder={placeholder} minLength={minLength} className={inputCls} />
      {hint ? <span className="mt-1 block text-xs font-normal text-ink-muted">{hint}</span> : null}
    </label>
  )
}

export function TextArea({ name, label, required, rows = 3 }: { name: string; label: string; required?: boolean; rows?: number }) {
  return (
    <label className="block text-sm font-semibold text-ink">
      {label}{required ? <span className="text-error"> *</span> : null}
      <textarea name={name} required={required} rows={rows} className={inputCls} />
    </label>
  )
}

export function SelectField({
  name, label, options, required, hint,
}: {
  name: string; label: string; options: string[]; required?: boolean; hint?: string
}) {
  return (
    <label className="block text-sm font-semibold text-ink">
      {label}{required ? <span className="text-error"> *</span> : null}
      <select name={name} required={required} defaultValue="" className={inputCls}>
        <option value="" disabled>Choose one</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {hint ? <span className="mt-1 block text-xs font-normal text-ink-muted">{hint}</span> : null}
    </label>
  )
}

export function RadioRow({
  name, label, options, required,
}: {
  name: string; label: string; options: Array<{ val: string; label: string }>; required?: boolean
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-ink">
        {label}{required ? <span className="text-error"> *</span> : null}
      </legend>
      <div className="mt-2 flex flex-wrap gap-3">
        {options.map((o) => (
          <label key={o.val} className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-navy-200 px-4 py-3 text-sm font-semibold text-ink has-[:checked]:border-navy-600 has-[:checked]:bg-navy-50">
            <input type="radio" name={name} value={o.val} required={required} className="accent-navy-600" />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export function CheckboxRow({
  name, label, options,
}: {
  name: string; label: string; options: string[]
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-ink">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-3">
        {options.map((o) => (
          <label key={o} className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-navy-200 px-4 py-3 text-sm font-semibold text-ink has-[:checked]:border-navy-600 has-[:checked]:bg-navy-50">
            <input type="checkbox" name={name} value={o} className="accent-navy-600" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export function FileField({
  name, label, required, hint,
}: {
  name: string; label: string; required?: boolean; hint?: string
}) {
  return (
    <label className="block text-sm font-semibold text-ink">
      {label}{required ? <span className="text-error"> *</span> : null}
      <input
        type="file"
        name={name}
        required={required}
        accept="image/jpeg,image/png,image/webp,image/heic,image/heif,application/pdf"
        className="mt-2 w-full rounded-lg border-2 border-dashed border-navy-200 px-4 py-4 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-navy-100 file:px-3 file:py-1.5 file:text-sm file:font-bold file:text-navy-800"
      />
      <span className="mt-1 block text-xs font-normal text-ink-muted">
        {hint ?? 'Photos of any size work best (we shrink them automatically). PDFs up to 4 MB.'}
      </span>
    </label>
  )
}

export function TermsField() {
  return (
    <label className="flex items-start gap-3 text-sm text-ink">
      <input type="checkbox" name="terms" value="yes" required className="mt-1 accent-navy-600" />
      <span>
        I have read and agree to the{' '}
        <a href="/client-agreement" target="_blank" className="font-bold text-navy-600 hover:underline">client agreement</a>{' '}
        and the{' '}
        <a href="/privacy" target="_blank" className="font-bold text-navy-600 hover:underline">privacy policy</a>.
        <span className="text-error"> *</span>
      </span>
    </label>
  )
}

export function DeclareField({ text }: { text: string }) {
  return (
    <label className="flex items-start gap-3 text-sm text-ink">
      <input type="checkbox" name="declared" value={text} required className="mt-1 accent-navy-600" />
      <span>{text}<span className="text-error"> *</span></span>
    </label>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="pt-4 font-heading text-lg font-extrabold text-navy-800">{children}</h2>
}
