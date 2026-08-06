import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import TrustStrip from '@/components/TrustStrip'
import WaCta from '@/components/WaCta'
import Faq from '@/components/Faq'
import { LEGAL_ENTITY, ABN, TPB } from '@/lib/constants'

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: 'About CampusTax: Who Is Behind This',
  description:
    'Tax help for international students, run by The Accounting Academy Pty Ltd with returns lodged through a registered tax agent. Check us yourself.',
}

const faqs = [
  {
    q: 'How do I know this is not a scam?',
    a: `Check us before you trust us. The registered tax agent number ${TPB} is on the public TPB register and the ABN is on ABN Lookup, both linked on this page. Questions cost nothing, you get the exact price in the chat before anything starts, and this site tells you openly that TFN and ABN applications are free from the government.`,
  },
  {
    q: 'Who actually lodges my tax return?',
    a: `Every return is checked and lodged through the registered tax agent, ${LEGAL_ENTITY}, TPB registration ${TPB}. That registration is a legal requirement for lodging returns for other people in Australia, and it comes with professional obligations, including confidentiality.`,
  },
  {
    q: 'Is CampusTax connected to Working Holiday Tax?',
    a: 'Yes, and openly. Both brands are run by the same team and the same registered agent entity. Working Holiday Tax serves working holiday makers, and CampusTax was built separately for students, because student tax rules are completely different from backpacker rules.',
  },
  {
    q: 'What happens to my documents?',
    a: 'Documents are stored securely, are used only to prepare your work, and are handled under the privacy policy. They go to our team, to the registered agent, and to the ATO when your work is lodged. Never sold, never shared for marketing.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About" title="Check who we are before you trust us. Please.">
        <p>
          You send tax services your name, your TFN and a photo of your passport.
          You should absolutely verify who is behind a website before doing that.
          This page exists so you can.
        </p>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-12">
        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            What CampusTax is
          </h2>
          <p className="mt-3 text-ink-secondary">
            CampusTax is a tax help service built only for international students
            in Australia. One audience, one set of rules, explained in plain
            English. The service runs on WhatsApp because that is where students
            already are, and every return is checked and lodged through a
            registered tax agent.
          </p>
          <p className="mt-3 text-ink-secondary">
            The team behind CampusTax also runs Working Holiday Tax, a separate
            brand for working holiday makers. We built a second brand instead of
            one mixed site because student tax and backpacker tax are opposites:
            backpackers pay 15% from the first dollar, while most students pay
            nothing on the first $18,200. Mixing the two confuses people, and
            confused people pay the wrong tax.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            The legal side, checked in two clicks
          </h2>
          <p className="mt-3 text-ink-secondary">
            Services are delivered by {LEGAL_ENTITY}, ABN {ABN}, with returns
            lodged through a registered tax agent, TPB registration {TPB}. In
            Australia, only registered agents may lodge tax returns for other
            people, and the register is public. Do not take our word for any of
            this. Check both registers below. It takes one minute, and a real
            service will never try to stop you.
          </p>
          <div className="mt-8">
            <TrustStrip align="start" />
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-800">
            How a conversation with us works
          </h2>
          <p className="mt-3 text-ink-secondary">
            You message on WhatsApp, in whatever language is easiest. Even just
            hi works. A real person replies, usually within a few hours. You get
            what you can claim and the exact price before you send a single
            document. Then you decide. Saying no thanks is completely fine and
            costs nothing. There are no silly questions here: most of our
            clients have never seen a tax return before, and that is exactly who
            this service was built for.
          </p>
          <div className="mt-6">
            <WaCta context="I found you through the About page." label="Ask a free question on WhatsApp" />
          </div>
        </div>

        <p className="text-sm text-ink-secondary">
          Want the fine print? The{' '}
          <Link href="/client-agreement" className="font-bold text-navy-600 hover:underline">client agreement</Link>{' '}
          and{' '}
          <Link href="/privacy" className="font-bold text-navy-600 hover:underline">privacy policy</Link>{' '}
          are public, in full.
        </p>
      </section>

      <Faq items={faqs} title="Fair questions" />
    </>
  )
}
