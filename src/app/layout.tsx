import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileCtaBar from '@/components/MobileCtaBar'
import { SITE_NAME, SITE_URL, TAGLINE } from '@/lib/constants'
import { jsonLd } from '@/lib/jsonld'

const manrope = localFont({
  src: [
    { path: '../fonts/manrope-latin-700-normal.woff2', weight: '700' },
    { path: '../fonts/manrope-latin-800-normal.woff2', weight: '800' },
  ],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = localFont({
  src: [
    { path: '../fonts/inter-latin-400-normal.woff2', weight: '400' },
    { path: '../fonts/inter-latin-600-normal.woff2', weight: '600' },
    { path: '../fonts/inter-latin-700-normal.woff2', weight: '700' },
  ],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Tax returns for international students in Australia`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${TAGLINE}. Tax returns, superannuation refunds, TFN and Medicare levy exemptions for international students in Australia.`,
  icons: {
    icon: [
      { url: '/logo/campustax-favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192' },
    ],
    apple: '/icon-512.png',
  },
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'CampusTax. Tax help for international students in Australia.' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${SITE_URL}/og-image.png`],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  slogan: TAGLINE,
  description:
    'Tax help for international students in Australia. Tax returns, superannuation refunds, TFN and Medicare levy exemptions, lodged through a registered tax agent.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'The Accounting Academy Pty Ltd',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'ABN',
      value: '26 669 927 959',
    },
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'info@campustax.com.au',
    availableLanguage: ['English'],
  },
  areaServed: 'AU',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} font-body text-ink bg-white antialiased`}>
        {/* JS detection: animation hidden-states only apply when JS runs */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(orgSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  )
}
