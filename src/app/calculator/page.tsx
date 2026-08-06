import type { Metadata } from 'next'
import Calculator from './Calculator'

export const metadata: Metadata = {
  alternates: { canonical: '/calculator' },
  title: 'Student Tax Refund and Super Calculator',
  description:
    'Free student tax calculator. Estimate your refund with the $18,200 threshold, or your super payout at the 35% student DASP rate.',
}

export default function CalculatorPage() {
  return <Calculator />
}
