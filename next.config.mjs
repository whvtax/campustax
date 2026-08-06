/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Force HTTPS for a year, include subdomains
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  // Never render inside iframes (clickjacking)
  { key: 'X-Frame-Options', value: 'DENY' },
  // Browsers must respect declared content types
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Send origin only when crossing origins
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // We use no camera/mic/geolocation anywhere
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  // Second line of defence on a site that collects identity documents.
  // unsafe-inline is required by Next.js runtime scripts and inline JSON-LD.
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // unsafe-eval only outside production (next dev source maps);
      // vercel.live is the preview toolbar.
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV !== 'production' || process.env.VERCEL_ENV === 'preview' ? " 'unsafe-eval' https://vercel.live" : ''}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  async redirects() {
    // The combined page was split into /tfn and /abn
    return [{ source: '/tfn-abn', destination: '/tfn', permanent: true }]
  },
}

export default nextConfig
