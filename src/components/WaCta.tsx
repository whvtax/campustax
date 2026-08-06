import { waLink } from '@/lib/constants'

export default function WaCta({ context, label }: { context: string; label: string }) {
  return (
    <a
      href={waLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-pop inline-block rounded-lg bg-gold-400 px-6 py-3.5 font-bold text-navy-900 hover:bg-gold-500"
    >
      {label}
    </a>
  )
}
