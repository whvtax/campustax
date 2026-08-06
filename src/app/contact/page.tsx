import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import WaCta from '@/components/WaCta'
import { AGENT_LINE, LEGAL_ENTITY, ABN, TPB } from '@/lib/constants'

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact CampusTax',
  description:
    'Message CampusTax on WhatsApp for help with student tax returns, super refunds, TFN and Medicare levy exemptions. A real person replies.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="Talk to a real person about your tax">
        <p>
          WhatsApp is the fastest way to reach us. Send your question in your own
          words, in any language, and a real person replies. No call centres and no
          forms that disappear.
        </p>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
        <div className="rounded-2xl bg-cream border border-navy-100 p-8">
          <h2 className="font-heading text-xl font-extrabold text-navy-800">WhatsApp</h2>
          <p className="mt-2 text-ink-secondary text-sm">
            Questions cost nothing. Tell us your situation and we will tell you
            exactly what you can claim and what it costs, before anything starts.
          </p>
          <div className="mt-5">
            <WaCta context="I have a question." label="Ask a free question on WhatsApp" />
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-navy-100 p-8">
          <h2 className="font-heading text-xl font-extrabold text-navy-800">Email</h2>
          <p className="mt-2 text-sm text-ink-secondary">
            Prefer email? Write to{' '}
            <a href="mailto:info@campustax.com.au" className="font-bold text-navy-600 hover:underline">
              info@campustax.com.au
            </a>{' '}
            and include your WhatsApp number if you would like a faster reply there.
          </p>
        </div>

        <p className="mt-10 text-xs text-ink-muted">
          {AGENT_LINE}. {LEGAL_ENTITY} · ABN {ABN} · Registered Tax Agent {TPB}
        </p>
      </section>
    </>
  )
}
