import { SITE_URL, LEGAL_ENTITY } from '@/lib/constants'
import { jsonLd } from '@/lib/jsonld'

/**
 * Service structured data for the four service pages. The provider is the
 * legal entity (the registered agent), keeping the indirect wording rule
 * intact: CampusTax is the brand, the entity provides the service.
 */
export default function ServiceSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: 'Tax preparation',
    areaServed: 'AU',
    audience: { '@type': 'Audience', audienceType: 'International students in Australia' },
    provider: { '@type': 'Organization', name: LEGAL_ENTITY },
    brand: { '@type': 'Brand', name: 'CampusTax' },
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
  )
}
