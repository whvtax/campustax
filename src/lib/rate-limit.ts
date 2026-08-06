/**
 * Simple in-memory rate limiter: max N submissions per IP per window.
 * Serverless note: state is per instance, so this is a soft limit. Good
 * enough for launch. If abuse appears, swap for the Upstash Redis limiter
 * used in the WHV codebase (same function signature).
 */
const WINDOW_MS = 10 * 60 * 1000
const MAX_HITS = 5

const hits = new Map<string, number[]>()
const MAX_KEYS = 10_000

export async function isRateLimited(ip: string, bucket: string): Promise<boolean> {
  if (hits.size > MAX_KEYS) {
    // Evict expired entries first; clearing everything would reset the
    // attacker's own counters.
    const cutoff = Date.now() - WINDOW_MS
    for (const [k, v] of Array.from(hits.entries())) {
      if (!v.some((t) => t > cutoff)) hits.delete(k)
    }
    if (hits.size > MAX_KEYS) hits.clear()
  }
  const key = `${bucket}:${ip}`
  const now = Date.now()
  const list = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS)
  if (list.length >= MAX_HITS) {
    hits.set(key, list)
    return true
  }
  list.push(now)
  hits.set(key, list)
  return false
}
