/** Serialize schema JSON safely for inline script tags: escape < so a
 *  string containing </script> can never break out of the tag. */
export function jsonLd(schema: unknown): string {
  return JSON.stringify(schema).replace(/</g, '\\u003c')
}
