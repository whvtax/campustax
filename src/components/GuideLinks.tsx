import Link from 'next/link'
import { getGuide } from '@/content/guides'

/** "Guides that answer your questions" block for service pages, so authority
 *  flows both ways between services and the guide library. */
export default function GuideLinks({ slugs }: { slugs: string[] }) {
  const items = slugs.map(getGuide).filter(Boolean)
  if (!items.length) return null
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-14">
      <h2 className="font-heading text-2xl font-extrabold text-navy-800">
        Guides that answer your questions
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((g) => (
          <li key={g!.slug}>
            <Link href={`/guides/${g!.slug}`} className="inline-block py-1.5 -my-1 font-semibold text-navy-600 hover:underline">
              {g!.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
