'use client'

import { useEffect, useRef, useState } from 'react'

/** Number that counts up when scrolled into view. */
export default function StatNumber({
  value,
  prefix = '',
  suffix = '',
  duration = 1100,
}: {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          setDisplay(0)
          const t0 = performance.now()
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(Math.round(value * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString('en-AU')}
      {suffix}
    </span>
  )
}
