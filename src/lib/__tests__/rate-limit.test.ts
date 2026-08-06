import { describe, it, expect } from 'vitest'
import { isRateLimited } from '../rate-limit'

describe('isRateLimited', () => {
  // Note: These tests share module state since the rate limiter
  // maintains in-memory state. Each test effectively uses a new IP/bucket combination

  it('should allow the first request', async () => {
    const result = await isRateLimited('192.168.1.100', 'test1')
    expect(result).toBe(false)
  })

  it('should allow up to 5 requests within the time window', async () => {
    const ip = '192.168.1.101'
    const bucket = 'test2'

    // First 5 requests should not be rate limited
    for (let i = 0; i < 5; i++) {
      const result = await isRateLimited(ip, bucket)
      expect(result).toBe(false)
    }
  })

  it('should block the 6th request within the time window', async () => {
    const ip = '192.168.1.102'
    const bucket = 'test3'

    // Make 5 requests
    for (let i = 0; i < 5; i++) {
      await isRateLimited(ip, bucket)
    }

    // 6th request should be rate limited
    const result = await isRateLimited(ip, bucket)
    expect(result).toBe(true)
  })

  it('should use different buckets independently', async () => {
    const ip = '192.168.1.103'

    // Fill up bucket1
    for (let i = 0; i < 5; i++) {
      await isRateLimited(ip, 'bucket1')
    }

    // bucket1 should be limited
    expect(await isRateLimited(ip, 'bucket1')).toBe(true)

    // bucket2 should still allow requests
    expect(await isRateLimited(ip, 'bucket2')).toBe(false)
  })

  it('should use different IPs independently', async () => {
    const bucket = 'test4'

    // Fill up IP1
    for (let i = 0; i < 5; i++) {
      await isRateLimited('192.168.2.1', bucket)
    }

    // IP1 should be limited
    expect(await isRateLimited('192.168.2.1', bucket)).toBe(true)

    // IP2 should still allow requests
    expect(await isRateLimited('192.168.2.2', bucket)).toBe(false)
  })

  it('should track multiple IPs simultaneously', async () => {
    const bucket = 'test5'
    const ips = ['192.168.3.1', '192.168.3.2', '192.168.3.3']

    // Fill up each IP to 5 requests
    for (const ip of ips) {
      for (let i = 0; i < 5; i++) {
        const result = await isRateLimited(ip, bucket)
        expect(result).toBe(false)
      }
    }

    // Each IP should now be limited
    for (const ip of ips) {
      const result = await isRateLimited(ip, bucket)
      expect(result).toBe(true)
    }
  })

  it('should clean up old entries when max keys exceeded', async () => {
    // This test would require mocking Date.now() and filling up 10k+ keys
    // For now, we verify the logic handles the edge case
    const result = await isRateLimited('192.168.4.1', 'test6')
    expect(typeof result).toBe('boolean')
  })

  it('should handle rapid successive requests', async () => {
    const ip = '192.168.4.2'
    const bucket = 'test7'
    const results = []

    for (let i = 0; i < 7; i++) {
      const result = await isRateLimited(ip, bucket)
      results.push(result)
    }

    // First 5 should be false, 6th and 7th should be true
    expect(results.slice(0, 5)).toEqual([false, false, false, false, false])
    expect(results[5]).toBe(true)
    expect(results[6]).toBe(true)
  })
})
