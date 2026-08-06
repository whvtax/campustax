import { describe, it, expect } from 'vitest'
import {
  SITE_URL,
  SITE_NAME,
  TAGLINE,
  AGENT_LINE,
  LEGAL_ENTITY,
  ABN,
  TPB,
  EMAIL,
  AGENT_NAME,
  AGENT_ABN,
  AGENT_TPB,
  WHATSAPP_NUMBER,
  waLink,
  TAX_YEAR,
  BRACKETS,
  DASP_STUDENT_RATE,
} from '../constants'

describe('Constants', () => {
  describe('Site information', () => {
    it('should have valid SITE_URL', () => {
      expect(SITE_URL).toBe('https://campustax.com.au')
    })

    it('should have SITE_NAME defined', () => {
      expect(SITE_NAME).toBe('CampusTax')
    })

    it('should have TAGLINE defined', () => {
      expect(TAGLINE).toBe('Helping international students get their tax right')
    })
  })

  describe('Legal information', () => {
    it('should not claim to be registered directly', () => {
      expect(AGENT_LINE).not.toContain('we are registered')
      expect(AGENT_LINE).toBe('Lodged through a registered tax agent')
    })

    it('should have LEGAL_ENTITY defined', () => {
      expect(LEGAL_ENTITY).toBe('The Accounting Academy Pty Ltd')
    })

    it('should have valid ABN format', () => {
      // ABN should be 11 digits
      expect(ABN).toMatch(/^\d{2} \d{3} \d{3} \d{3}$/)
      expect(ABN).toBe('26 669 927 959')
    })

    it('should have TPB number defined', () => {
      expect(TPB).toBe('26233096')
    })

    it('should have valid email', () => {
      expect(EMAIL).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      expect(EMAIL).toBe('info@campustax.com.au')
    })
  })

  describe('Agent aliases', () => {
    it('AGENT_NAME should match LEGAL_ENTITY', () => {
      expect(AGENT_NAME).toBe(LEGAL_ENTITY)
    })

    it('AGENT_ABN should match ABN', () => {
      expect(AGENT_ABN).toBe(ABN)
    })

    it('AGENT_TPB should match TPB', () => {
      expect(AGENT_TPB).toBe(TPB)
    })
  })

  describe('WhatsApp integration', () => {
    it('should have valid WHATSAPP_NUMBER', () => {
      expect(WHATSAPP_NUMBER).toBe('61424513998')
    })

    it('should generate valid WhatsApp link', () => {
      const link = waLink('test context')
      expect(link).toContain('https://wa.me/61424513998')
      expect(link).toContain('text=')
    })

    it('should encode context in WhatsApp link', () => {
      const context = 'Hello World!'
      const link = waLink(context)
      expect(link).toContain('Hi%20CampusTax!')
      expect(link).toContain('Hello%20World!')
    })

    it('should handle special characters in context', () => {
      const context = 'Test & verify'
      const link = waLink(context)
      expect(link).toContain('Test%20%26%20verify')
    })

    it('should include prefilled message format', () => {
      const link = waLink('test')
      expect(link).toContain('Hi%20CampusTax!')
    })
  })

  describe('Tax information', () => {
    it('should have correct TAX_YEAR', () => {
      expect(TAX_YEAR).toBe('2025-26')
    })

    it('should have valid tax brackets', () => {
      expect(Array.isArray(BRACKETS)).toBe(true)
      expect(BRACKETS.length).toBeGreaterThan(0)
    })

    it('should have 5 tax brackets', () => {
      expect(BRACKETS.length).toBe(5)
    })

    it('should have correct bracket thresholds', () => {
      expect(BRACKETS[0].upTo).toBe(18200)
      expect(BRACKETS[1].upTo).toBe(45000)
      expect(BRACKETS[2].upTo).toBe(135000)
      expect(BRACKETS[3].upTo).toBe(190000)
      expect(BRACKETS[4].upTo).toBe(Infinity)
    })

    it('should have correct tax rates', () => {
      expect(BRACKETS[0].rate).toBe(0)
      expect(BRACKETS[1].rate).toBe(0.16)
      expect(BRACKETS[2].rate).toBe(0.3)
      expect(BRACKETS[3].rate).toBe(0.37)
      expect(BRACKETS[4].rate).toBe(0.45)
    })

    it('should have correct DASP student rate', () => {
      expect(DASP_STUDENT_RATE).toBe(0.35)
    })

    it('should use student rate not WHV rate', () => {
      expect(DASP_STUDENT_RATE).not.toBe(0.65)
      expect(DASP_STUDENT_RATE).toBe(0.35)
    })

    it('brackets should be in ascending order', () => {
      for (let i = 0; i < BRACKETS.length - 1; i++) {
        expect(BRACKETS[i].upTo).toBeLessThan(BRACKETS[i + 1].upTo)
      }
    })
  })
})
