export const SITE_URL = 'https://campustax.com.au'
export const SITE_NAME = 'CampusTax'
export const TAGLINE = 'Helping international students get their tax right'

/**
 * Legal wording rule (do not change):
 * Never write "we are registered tax agents" or any first person claim.
 * Always the indirect form: "lodged through a registered tax agent".
 */
export const AGENT_LINE =
  'Returns lodged through a registered tax agent'
export const LEGAL_ENTITY = 'The Accounting Academy Pty Ltd'
export const ABN = '26 669 927 959'
export const TPB = '26233096'
export const EMAIL = 'info@campustax.com.au'

// Aliases used by the legal pages copied from the legacy codebase.
export const AGENT_NAME = LEGAL_ENTITY
export const AGENT_ABN = ABN
export const AGENT_TPB = TPB

// Same WhatsApp number as the WHV brand. Page context goes in the prefilled
// text so the chat identifies the source without asking.
export const WHATSAPP_NUMBER = '61424513998'
export function waLink(context: string): string {
  const text = encodeURIComponent(`Hi CampusTax! ${context}`)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

// 2025-26 resident tax brackets (stage 3). Source: ATO.
export const TAX_YEAR = '2025-26'
export const BRACKETS: Array<{ upTo: number; rate: number }> = [
  { upTo: 18200, rate: 0 },
  { upTo: 45000, rate: 0.16 },
  { upTo: 135000, rate: 0.3 },
  { upTo: 190000, rate: 0.37 },
  { upTo: Infinity, rate: 0.45 },
]

// DASP tax rate for student visa holders. 35%, never the 65% WHV rate.
export const DASP_STUDENT_RATE = 0.35
