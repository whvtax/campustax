import { describe, it, expect } from 'vitest'
import { jsonLd } from '../jsonld'

describe('jsonLd', () => {
  it('should serialize simple object', () => {
    const schema = { name: 'test', value: 123 }
    const result = jsonLd(schema)
    expect(result).toBe('{"name":"test","value":123}')
  })

  it('should escape angle brackets', () => {
    const schema = { text: 'hello < world' }
    const result = jsonLd(schema)
    expect(result).toContain('\\u003c')
    expect(result).not.toContain('<')
  })

  it('should escape closing script tags', () => {
    const schema = { text: '</script>' }
    const result = jsonLd(schema)
    expect(result).not.toContain('</script>')
    expect(result).toContain('\\u003c')
  })

  it('should handle nested objects', () => {
    const schema = {
      type: 'Organization',
      name: 'Company',
      description: 'A < company',
    }
    const result = jsonLd(schema)
    expect(result).toContain('\\u003c')
  })

  it('should handle arrays', () => {
    const schema = ['item1', 'item2 < item3']
    const result = jsonLd(schema)
    expect(result).toContain('\\u003c')
  })

  it('should preserve all other characters', () => {
    const schema = { url: 'https://example.com?a=1&b=2' }
    const result = jsonLd(schema)
    expect(result).toContain('https://example.com?a=1&b=2')
  })

  it('should handle null', () => {
    expect(jsonLd(null)).toBe('null')
  })

  it('should handle strings with multiple angle brackets', () => {
    const schema = { text: '<tag>content</tag>' }
    const result = jsonLd(schema)
    // <tag> and </tag> have 2 opening angle brackets total
    const angleCount = (result.match(/\\u003c/g) || []).length
    expect(angleCount).toBe(2)
  })

  it('should be safe to embed in script tags', () => {
    const schema = { html: '<script>alert("xss")</script>' }
    const result = jsonLd(schema)
    // Should not contain unescaped <
    expect(result).not.toContain('<script>')
  })

  it('should return valid JSON (except for escaped brackets)', () => {
    const schema = { name: 'test', value: 123, nested: { key: 'value' } }
    const result = jsonLd(schema)
    
    // Replace the escaped brackets back to parse
    const parsed = JSON.parse(result.replace(/\\u003c/g, '<'))
    expect(parsed.name).toBe('test')
    expect(parsed.nested.key).toBe('value')
  })

  it('should handle special characters in JSON', () => {
    const schema = { text: 'quotes "test" and \\ backslash' }
    const result = jsonLd(schema)
    expect(result).toContain('quotes')
    expect(result).toContain('test')
  })
})
