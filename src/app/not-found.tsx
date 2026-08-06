import Link from 'next/link'
import { waLink } from '@/lib/constants'

export default function NotFound() {
  return (
    <section className="bg-navy-800 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
        <p className="font-heading text-6xl font-extrabold text-gold-400">404</p>
        <h1 className="mt-4 font-heading text-2xl font-extrabold">
          This page moved on, like a student after graduation.
        </h1>
        <p className="mt-3 text-navy-200">
          The page you are looking for does not exist. Your tax questions still
          have answers though.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-lg bg-gold-400 px-6 py-3 font-bold text-navy-900 hover:bg-gold-500">
            Back to the homepage
          </Link>
          <Link href="/guides" className="rounded-lg border border-navy-500 px-6 py-3 font-bold text-white hover:bg-navy-700">
            Browse the guides
          </Link>
        </div>
        <p className="mt-8 text-sm text-navy-200">
          Or just{' '}
          <a href={waLink('I got lost on the site.')} target="_blank" rel="noopener noreferrer" className="font-bold text-gold-400 hover:underline">
            ask us on WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  )
}
