import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Faq from '@/components/Faq'
import Reveal from '@/components/Reveal'
import HeroDecor from '@/components/HeroDecor'
import WhatsAppMock from '@/components/WhatsAppMock'
import { IconReturn, IconSuper, IconTfn, IconAbn } from '@/components/icons'
import StatNumber from '@/components/StatNumber'
import TrustStrip from '@/components/TrustStrip'
import CalcWidget from '@/components/CalcWidget'
import { waLink } from '@/lib/constants'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  title: 'CampusTax | Tax returns for international students in Australia',
  description:
    'Most international students pay no tax on the first $18,200 they earn. Refunds, super and Medicare exemptions, lodged through a registered tax agent.',
}

const stats = [
  { key: 'threshold', value: 18200, prefix: '$', suffix: '', label: 'You usually pay no tax on the first $18,200 you earn each year' },
  { key: 'dasp', value: 65, prefix: '', suffix: '%', label: 'You get 65% of your super back when you leave Australia' },
  { key: 'hours', value: 48, prefix: '', suffix: ' hrs', label: 'You can work 48 hours a fortnight while your course is running' },
]

const services = [
  {
    href: '/tax-return',
    title: 'Tax Return',
    text: 'Lodge your return and claim back tax you did not need to pay. Most working students get money back.',
    icon: <IconReturn />,
  },
  {
    href: '/superannuation',
    title: 'Super Refund (DASP)',
    text: 'Leaving Australia for good? Your super can come with you. Students keep 65% of it after the 35% tax.',
    icon: <IconSuper />,
  },
  {
    href: '/tfn',
    title: 'TFN',
    text: 'Get your tax file number sorted before your first shift. It is free, and doing it late means nearly half your pay is held back until tax time.',
    icon: <IconTfn />,
  },
  {
    href: '/abn',
    title: 'ABN for Delivery Work',
    text: 'Uber Eats and DoorDash pay you as a contractor. Set up your free ABN right and know what to put aside, so tax time brings no shock bill.',
    icon: <IconAbn />,
  },
]

const steps = [
  { n: '1', title: 'Message us on WhatsApp', text: 'Even just hi works, in any language. A real person replies, usually within a few hours.' },
  { n: '2', title: 'We check your details', text: 'Payslips, visa dates and work history. We find what you can claim.' },
  { n: '3', title: 'Your return is lodged', text: 'Everything goes through a registered tax agent and your refund goes to your bank.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 text-white">
        <HeroDecor />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4">
          <div className="grid items-center gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="hero-in-1 text-xs font-bold uppercase tracking-[0.14em] text-gold-400">
                For international students in Australia
              </p>
              <h1 className="hero-in-2 mt-1 font-heading font-extrabold leading-[1.12] tracking-tight text-[clamp(1.3rem,3vw,1.8rem)]">
                Earn up to <span className="text-gold-400">$18,200 tax free.</span>
                <br />
                Most international students qualify.
              </h1>
              <p className="hero-in-3 mt-2 max-w-xl text-sm text-navy-200">
                Get your tax refund estimate within 3 hours.
              </p>
              <div className="hero-in-4 mt-4 flex flex-col sm:flex-row gap-2">
                <a
                  href={waLink('I want to check my tax refund.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pop rounded-2xl bg-gold-400 px-5 py-2.5 font-bold text-sm text-navy-900 hover:bg-gold-500 text-center"
                >
                  Check my refund on WhatsApp
                </a>
                <Link
                  href="/#calculator"
                  className="btn-pop rounded-2xl border-2 border-white/25 px-5 py-2.5 font-bold text-sm text-white hover:bg-navy-700 text-center"
                >
                  Try the calculator
                </Link>
              </div>
              <div className="mt-6 flex justify-center">
                <div className="inline-block">
                  <TrustStrip align="center" iconsOnly={true} />
                </div>
              </div>
            </div>
            {/* 99.9% of visitors are on mobile, so the chat mock shows there too */}
            <Reveal delay={150}>
              <WhatsAppMock />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.key} delay={i * 90}>
              <div className="card-lift h-full rounded-xl bg-white border border-navy-100 p-6">
                <p className="font-heading text-3xl font-extrabold text-navy-800">
                  <span className="border-b-4 border-gold-400 pb-0.5">
                    <StatNumber value={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </span>
                </p>
                <p className="mt-3 text-sm text-ink-secondary">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About + verifiable trust */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <Reveal>
          <div className="text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-800">
              Who is behind CampusTax
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-ink-secondary">
              Built by former international students, for international students. Simple advice, clear answers, and every return checked and lodged by a registered tax agent.
            </p>
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-lg mx-auto w-3/4">
            <Image
              src="/team.jpg"
              alt="CampusTax Team"
              width={600}
              height={375}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-8">
            <TrustStrip />
          </div>
        </Reveal>
      </section>

      {/* Difference block */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Reveal>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-800 max-w-2xl">
            Student tax works in your favour.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-secondary">
            If you&apos;re studying a course longer than 6 months, you&apos;re usually considered a resident for tax purposes. This means you generally don&apos;t pay tax until you earn more than $18,200 in a financial year. If tax has already been taken from your pay and you earned less than that, you can usually claim it back.
          </p>
        </Reveal>

        {/* Calculator - Featured in Phone Mock */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 p-8 sm:p-12 border border-gold-400/20">
          <Reveal>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Check your numbers right now
            </h3>
            <p className="mt-3 text-base text-navy-100">
              Two numbers in, estimate out. No email, no signup, nothing saved.
            </p>
          </Reveal>
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-sm rounded-3xl border-[8px] border-navy-900 bg-white shadow-2xl overflow-hidden">
              {/* Phone Header */}
              <div className="flex items-center gap-2 bg-navy-800 px-4 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 font-heading text-xs font-extrabold text-navy-900">
                  CT
                </div>
                <div className="leading-tight flex-1">
                  <p className="text-sm font-bold text-white">CampusTax</p>
                  <p className="text-[11px] text-navy-200">Calculator</p>
                </div>
              </div>
              {/* Calculator Content */}
              <div className="p-4 sm:p-6 bg-white min-h-[400px] overflow-y-auto">
                <CalcWidget />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.href} delay={i * 80}>
              <Link
                href={s.href}
                className="card-lift group flex h-full gap-5 rounded-xl border border-navy-100 p-6 hover:border-navy-300"
              >
                <div className="shrink-0">{s.icon}</div>
                <div>
                  <h3 className="font-heading text-lg font-extrabold text-navy-800 group-hover:text-navy-600">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-secondary">{s.text}</p>
                  <p className="mt-3 text-sm font-bold text-navy-600">
                    Learn more <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-navy-800 text-white overflow-hidden">
        <HeroDecor />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <Reveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold">How it works</h2>
          </Reveal>
          <div className="relative mt-10 grid gap-10 sm:grid-cols-3">
            {/* connector line */}
            <div aria-hidden="true" className="absolute left-0 right-0 top-5 hidden sm:block">
              <div className="mx-16 border-t-2 border-dashed border-navy-500" />
            </div>
            {steps.map((st, i) => (
              <Reveal key={st.n} delay={i * 110}>
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-heading text-lg font-extrabold text-navy-900 shadow-lg shadow-gold-400/30">
                    {st.n}
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-extrabold">{st.title}</h3>
                  <p className="mt-2 text-sm text-navy-200">{st.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <a
              href={waLink('I have a question.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pop inline-block rounded-2xl bg-gold-400 px-6 py-3.5 font-bold text-navy-900 hover:bg-gold-500"
            >
              Ask a free question on WhatsApp
            </a>
          </div>
        </div>
      </section>


      {/* Reassurance - Before Contact */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Reveal>
          <div className="rounded-2xl bg-gold-50 border border-gold-200 p-8 sm:p-10">
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-800 max-w-2xl">
              New to Australian tax? That is exactly who we work with.
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-ink-secondary">
              First payslip, first tax file number, first tax return. We explain
              everything in plain English, answer on WhatsApp in hours, and every
              return for the 2025-26 year is checked and lodged through a
              registered tax agent. No tax words you need a dictionary for.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 text-center">
          <Reveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold">
              Talk to a real person
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-navy-200">
              Questions cost nothing, in any language. You get the exact price in
              the chat before anything starts.
            </p>
            <div className="mt-7">
              <a
                href={waLink('I have a question.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop inline-block rounded-2xl bg-gold-400 px-7 py-3.5 font-bold text-navy-900 hover:bg-gold-500"
              >
                Ask a free question on WhatsApp
              </a>
            </div>
            <p className="mt-5 text-sm text-navy-200">
              Prefer email?{' '}
              <a href="mailto:info@campustax.com.au" className="font-bold text-gold-400 hover:underline">
                info@campustax.com.au
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <Faq
        title="Quick answers"
        items={[
          {
            q: 'Will I pay tax while studying in Australia?',
            a: 'Yes, but usually less than you think. Most students are residents for tax purposes, so the first $18,200 earned each tax year is tax free. Tax withheld from pay below that level normally comes back as a refund.',
          },
          {
            q: 'How do I know if I am a resident for tax purposes?',
            a: 'If your course runs longer than 6 months, the ATO usually treats you as a resident for tax purposes. It has nothing to do with citizenship or permanent residency. Short course students are usually not residents and different rates apply.',
          },
          {
            q: 'How much does it cost?',
            a: 'You get the exact price in the chat, before you send a single document and before anything starts. If it is not worth it for you, you say no and that is that. Questions are always free.',
          },
          {
            q: 'When is the tax return deadline?',
            a: 'The tax year ends on 30 June and self lodged returns are due by 31 October. Lodging through a registered tax agent usually gives you longer.',
          },
          {
            q: 'How do I know this is not a scam?',
            a: 'Check us yourself, we prefer it. The registered tax agent number 26233096 is on the public TPB register and the ABN is on ABN Lookup, both linked in the footer and on the About page. Also, this site tells you again and again that the TFN and the ABN are free from the government. A scam would hide that.',
          },
          {
            q: 'Can you help me in my language?',
            a: 'Yes. WhatsApp us in whatever language is easiest for you and we will make it work. Many of our clients are asking about Australian tax for the first time, and that is exactly what we are here for.',
          },
        ]}
      />
    </>
  )
}
