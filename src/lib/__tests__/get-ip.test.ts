import { describe, it, expect } from 'vitest'
import { getClientIp } from '../get-ip'
import type { NextRequest } from 'next/server'

// Helper to create a mock NextRequest
function createMockRequest(headers: Record<string, string>): NextRequest {
  const headerMap = new Map(Object.entries(headers))
  return {
    headers: {
      get: (key: string) => headerMap.get(key.toLowerCase()) || null,
    } as any,
  } as NextRequest
}

describe('getClientIp', () => {
  it('should return Vercel forwarded header if present', () => {
    const req = createMockRequest({
      'x-vercel-forwarded-for': '203.0.113.1',
    })
    expect(getClientIp(req)).toBe('203.0.113.1')
  })

  it('should trim whitespace from Vercel header', () => {
    const req = createMockRequest({
      'x-vercel-forwarded-for': '  203.0.113.1  ',
    })
    expect(getClientIp(req)).toBe('203.0.113.1')
  })

  it('should use last IP from Vercel header with multiple IPs', () => {
    const req = createMockRequest({
      'x-vercel-forwarded-for': '203.0.113.1, 203.0.113.2, 203.0.113.3',
    })
    expect(getClientIp(req)).toBe('203.0.113.3')
  })

  it('should fall back to x-forwarded-for if Vercel header absent', () => {
    const req = createMockRequest({
      'x-forwarded-for': '203.0.113.4',
    })
    expect(getClientIp(req)).toBe('203.0.113.4')
  })

  it('should use last IP from x-forwarded-for with multiple IPs', () => {
    const req = createMockRequest({
      'x-forwarded-for': '203.0.113.1, 203.0.113.2, 203.0.113.3',
    })
    expect(getClientIp(req)).toBe('203.0.113.3')
  })

  it('should trim whitespace from x-forwarded-for', () => {
    const req = createMockRequest({
      'x-forwarded-for': '203.0.113.1 , 203.0.113.2 , 203.0.113.3 ',
    })
    expect(getClientIp(req)).toBe('203.0.113.3')
  })

  it('should fall back to x-real-ip if other headers absent', () => {
    const req = createMockRequest({
      'x-real-ip': '203.0.113.5',
    })
    expect(getClientIp(req)).toBe('203.0.113.5')
  })

  it('should trim whitespace from x-real-ip', () => {
    const req = createMockRequest({
      'x-real-ip': '  203.0.113.5  ',
    })
    expect(getClientIp(req)).toBe('203.0.113.5')
  })

  it('should return unknown if no IP headers present', () => {
    const req = createMockRequest({})
    expect(getClientIp(req)).toBe('unknown')
  })

  it('should prioritize Vercel over x-forwarded-for', () => {
    const req = createMockRequest({
      'x-vercel-forwarded-for': '203.0.113.1',
      'x-forwarded-for': '203.0.113.2',
      'x-real-ip': '203.0.113.3',
    })
    expect(getClientIp(req)).toBe('203.0.113.1')
  })

  it('should prioritize x-forwarded-for over x-real-ip', () => {
    const req = createMockRequest({
      'x-forwarded-for': '203.0.113.2',
      'x-real-ip': '203.0.113.3',
    })
    expect(getClientIp(req)).toBe('203.0.113.2')
  })

  it('should handle IPv6 addresses', () => {
    const req = createMockRequest({
      'x-forwarded-for': '2001:db8::1',
    })
    expect(getClientIp(req)).toBe('2001:db8::1')
  })

  it('should handle localhost', () => {
    const req = createMockRequest({
      'x-forwarded-for': '127.0.0.1',
    })
    expect(getClientIp(req)).toBe('127.0.0.1')
  })

  it('should handle single space in comma-separated list', () => {
    const req = createMockRequest({
      'x-forwarded-for': '203.0.113.1, 203.0.113.2',
    })
    expect(getClientIp(req)).toBe('203.0.113.2')
  })

  it('should handle no space after comma', () => {
    const req = createMockRequest({
      'x-forwarded-for': '203.0.113.1,203.0.113.2',
    })
    expect(getClientIp(req)).toBe('203.0.113.2')
  })
})
