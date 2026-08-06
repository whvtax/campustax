import type { NextRequest } from 'next/server'

/**
 * Client IP for rate limiting. SECURITY: the leftmost x-forwarded-for entry
 * is client controlled and trivially spoofable. Trust platform headers first,
 * then the LAST entry of x-forwarded-for (appended by the trusted proxy).
 */
export function getClientIp(req: NextRequest): string {
  const vercel = req.headers.get('x-vercel-forwarded-for')
  if (vercel) return vercel.split(',').pop()!.trim()
  // Last XFF entry is appended by the trusted proxy. x-real-ip only as a
  // final fallback, since some hosts pass it through from the client.
  const xff = req.headers.get('x-forwarded-for')
  if (xff) return xff.split(',').pop()!.trim()
  const real = req.headers.get('x-real-ip')
  if (real) return real.trim()
  return 'unknown'
}
