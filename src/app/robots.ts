import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

// Admin and form endpoints stay out of the index. Legal pages are noindex via
// page metadata instead, so crawlers can still read the terms if they follow a link.
// Form pages use meta noindex instead of disallow, so crawlers can see the
// noindex. Only machine endpoints stay disallowed.
const DISALLOWED_PATHS = ['/api/']

// Major AI crawlers, each listed explicitly so every engine gets the same
// allow rules and shows up clearly in logs. Same architecture as the WHV site.
const AI_USER_AGENTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'GoogleOther',
  'Bingbot',
  'CCBot',
  'FacebookBot',
  'Meta-ExternalAgent',
  'Applebot',
  'Applebot-Extended',
  'Bytespider',
  'YouBot',
  'DuckAssistBot',
  'Amazonbot',
  'Cohere-AI',
  'Diffbot',
  'ImagesiftBot',
  'Omgilibot',
  'Omgili',
  'Webzio-Extended',
]

export default function robots(): MetadataRoute.Robots {
  const baseRules = {
    userAgent: '*',
    allow: '/',
    disallow: DISALLOWED_PATHS,
  }

  const aiRules = AI_USER_AGENTS.map((ua) => ({
    userAgent: ua,
    allow: '/',
    disallow: DISALLOWED_PATHS,
  }))

  return {
    rules: [baseRules, ...aiRules],
    sitemap: [`${SITE_URL}/sitemap.xml`],
    host: SITE_URL,
  }
}
