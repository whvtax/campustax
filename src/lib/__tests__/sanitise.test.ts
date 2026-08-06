import { describe, it, expect } from 'vitest'
import { sanitiseField, sanitiseShort } from '../sanitise'

describe('sanitiseField', () => {
  it('should return empty string for null', () => {
    expect(sanitiseField(null)).toBe('')
  })

  it('should return empty string for undefined', () => {
    expect(sanitiseField(undefined)).toBe('')
  })

  it('should trim whitespace', () => {
    expect(sanitiseField('  hello  ')).toBe('hello')
  })

  it('should remove HTML tags', () => {
    expect(sanitiseField('hello <b>world</b>')).toBe('hello world')
  })

  it('should remove multiple HTML tags', () => {
    expect(sanitiseField('<p>hello</p><span>world</span>')).toBe('helloworld')
  })

  it('should handle self-closing tags', () => {
    expect(sanitiseField('hello<br/>world')).toBe('helloworld')
  })

  it('should handle HTML entities in tags', () => {
    expect(sanitiseField('test <a href="test&quot;test">link</a>')).toBe('test link')
  })

  it('should truncate to default 500 chars', () => {
    const longString = 'a'.repeat(600)
    const result = sanitiseField(longString)
    expect(result.length).toBe(500)
  })

  it('should truncate to custom maxLength', () => {
    const string = 'abcdefghij'
    expect(sanitiseField(string, 5)).toBe('abcde')
  })

  it('should handle numbers', () => {
    expect(sanitiseField(12345)).toBe('12345')
  })

  it('should handle booleans', () => {
    expect(sanitiseField(true)).toBe('true')
    expect(sanitiseField(false)).toBe('false')
  })

  it('should trim and remove HTML together', () => {
    expect(sanitiseField('  <b>hello</b>  ')).toBe('hello')
  })

  it('should truncate after removing HTML', () => {
    const input = '  ' + 'a'.repeat(600) + '  '
    const result = sanitiseField(input)
    expect(result.length).toBe(500)
  })

  it('should handle nested tags', () => {
    expect(sanitiseField('<div><b>hello</b></div>')).toBe('hello')
  })

  it('should preserve text between tags', () => {
    expect(sanitiseField('hello<b>bold</b>world')).toBe('helloboldworld')
  })
})

describe('sanitiseShort', () => {
  it('should truncate to 100 characters', () => {
    const longString = 'a'.repeat(150)
    const result = sanitiseShort(longString)
    expect(result.length).toBe(100)
    expect(result).toBe('a'.repeat(100))
  })

  it('should also remove HTML tags', () => {
    expect(sanitiseShort('<b>hello</b>')).toBe('hello')
  })

  it('should also trim whitespace', () => {
    expect(sanitiseShort('  hello  ')).toBe('hello')
  })

  it('should handle null', () => {
    expect(sanitiseShort(null)).toBe('')
  })

  it('should handle short strings without truncation', () => {
    expect(sanitiseShort('hello')).toBe('hello')
  })

  it('should combine all sanitisation', () => {
    const input = '  ' + 'a'.repeat(150) + '<b>test</b>  '
    const result = sanitiseShort(input)
    expect(result.length).toBe(100)
  })
})
