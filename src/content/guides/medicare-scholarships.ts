import type { Guide } from '../types'
const UPDATED = '27 July 2026'
export const medicareScholarshipGuides: Guide[] = [
  {
    slug: 'medicare-levy-exemption-international-students',
    title: 'Do international students pay the Medicare levy?',
    metaTitle: 'Medicare Levy Exemption for Students',
    description:
      'Most international students should not pay the 2% Medicare levy, because OSHC holders are usually not entitled to Medicare.',
    cluster: 'Medicare, OSHC and scholarships',
    updated: UPDATED,
    answer:
      'Usually not, but you must claim it. The Medicare levy is 2% of income and funds the public health system you are not entitled to use. With a Medicare Entitlement Statement from Services Australia, the exemption goes into your tax return and the 2% stays with you.',
    shortAnswer:
      'Students with OSHC can usually skip the 2% Medicare levy, but only by claiming the exemption with a Medicare Entitlement Statement. It is not automatic, and it is worth hundreds of dollars.',
    sections: [
      {
        h: 'A tax for a system you cannot use',
        body: [
          'Medicare is the public health system for Australian residents, funded by a 2% levy on income. Your visa requires you to hold OSHC, private student health insurance, precisely because you are not entitled to Medicare. Paying for the public system on top of your compulsory private cover would be paying twice.',
          'The tax law agrees, which is why a full exemption exists for people not entitled to Medicare benefits. Most international students qualify for it. What trips everyone up is that the tax system does not know you qualify until you prove it.',
        ],
      },
      {
        h: 'The proof: a Medicare Entitlement Statement',
        body: [
          'The exemption runs on one document, a Medicare Entitlement Statement, an MES, issued by Services Australia. It certifies that you were not entitled to Medicare for a period. You apply with your passport and visa details, and processing takes several weeks, longer in the July rush.',
          'Note who issues it: Services Australia, not the tax office and not your OSHC insurer. Your OSHC certificate alone does not unlock the exemption, a mistake that appears on thousands of student returns every year. Apply for the MES in May or June and it is ready when tax season opens.',
        ],
      },
      {
        h: 'What it is worth',
        body: [
          'The levy is 2% of taxable income, so the exemption is worth exactly that. A student earning $25,000 saves $500. Earning $35,000, the saving is $700. Across a three year degree with steady part time work, the exemption easily passes a thousand dollars, all of it money that arrives as a bigger refund.',
          'For low earners the levy already phases out on its own, so the exemption matters most once your income passes roughly the tax free threshold. That is exactly the range where most working students sit.',
        ],
      },
      {
        h: 'Claiming it, this year and past years',
        body: [
          'With the MES in hand, the exemption is claimed inside your tax return for the full number of days it covers. Lodge with the exemption included and the levy simply never appears in your assessment.',
          'Paid the levy in earlier years without knowing any of this? Those returns can be amended. One statement can cover past periods, the amendments go in, and the levy you paid comes back. Bring your old notices of assessment and the check takes minutes.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is my OSHC certificate enough to claim the exemption?',
        a: 'No. The tax return exemption needs a Medicare Entitlement Statement from Services Australia. OSHC explains why you qualify, the MES is the document that proves it.',
      },
      {
        q: 'When should I apply for the MES?',
        a: 'Before tax season, ideally May or June. Processing takes weeks and July is their busiest month. The statement then covers the whole year just ended.',
      },
      {
        q: 'I am from the UK, NZ, Ireland or Sweden. Does the exemption still apply?',
        a: 'Maybe not. Some countries have reciprocal healthcare agreements with Australia that give their citizens Medicare access, and people entitled to Medicare generally cannot claim the exemption. Check your own case before claiming.',
      },
      {
        q: 'Is OSHC itself tax deductible?',
        a: 'No, OSHC premiums are a private cost and not deductible. Their tax value comes indirectly, through the Medicare levy exemption they support.',
      },
    ],
    related: ['tax-refund-international-students', 'how-much-tax-do-international-students-pay', 'are-scholarships-taxable-australia'],
    serviceLink: { href: '/medicare', label: 'Our Medicare exemption service' },
    waContext: 'I want to claim the Medicare levy exemption.',
  },
  {
    slug: 'are-scholarships-taxable-australia',
    title: 'Are scholarships taxable in Australia?',
    metaTitle: 'Scholarship Tax Rules for International Students',
    description:
      'Scholarships for full time students in Australia are usually tax free.',
    cluster: 'Medicare, OSHC and scholarships',
    updated: UPDATED,
    answer:
      'Usually not. A scholarship paid to a full time student for education purposes is generally exempt from Australian tax and stays out of your tax return. The main exceptions are scholarships for part time study and payments that are really wages for work you do for the provider.',
    shortAnswer:
      'Full time student scholarships are generally tax free in Australia. Watch the exceptions: part time study, work disguised as a scholarship, and bonded deals with strings attached.',
    sections: [
      {
        h: 'The general rule is kind',
        body: [
          'Australia does not want to tax genuine education support. A scholarship, bursary or educational allowance paid to a full time student is exempt income. It does not go into your tax return, it does not eat your $18,200 threshold, and it does not affect the tax on your part time wages.',
          'That covers the common cases: a university excellence scholarship, a tuition discount, a living stipend attached to full time study, a research stipend for a full time research degree. For most international students the answer really is that simple.',
        ],
      },
      {
        h: 'Exception one: part time study',
        body: [
          'The exemption is written for full time students. Study part time and the same scholarship generally becomes taxable income, counted with your wages in the tax return.',
          'The line matters most for students who drop to part time mid degree, sometimes for health or family reasons. The scholarship keeps arriving, its tax character quietly changes, and nobody sends a warning. Change your study load while holding a scholarship and it is worth checking the tax side in the same week.',
        ],
      },
      {
        h: 'Exception two: payment for work in disguise',
        body: [
          'Some payments wear the scholarship label but behave like wages. Money conditional on doing work for the provider, tutoring, research output owned by them, or an arrangement that binds you to work for them later, points toward taxable income rather than an exempt scholarship.',
          'The test is what the money buys. Supporting your education, exempt. Buying your labour, taxable, whatever the letterhead says. Prize money for winning a competition sits near this line too, and depends on its own facts.',
        ],
      },
      {
        h: 'What to do with yours',
        body: [
          'First, read the scholarship letter, because it usually answers everything: full time condition, any work obligations, any bond. Second, apply the two questions, am I full time, and is this payment for my education or my labour. Clear answers mean a clear tax outcome.',
          'Genuinely unclear, or a provider withholding tax from something you believe is exempt? That is worth a proper look before lodgment, not after. The ATO also runs a scholarship decision tool, and we are happy to walk your letter through it with you on WhatsApp.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does my scholarship count toward the $18,200 threshold?',
        a: 'An exempt scholarship does not. It stays outside your taxable income entirely, leaving the full threshold for your wages.',
      },
      {
        q: 'My stipend is my only income. Do I need to lodge a return?',
        a: 'If the stipend is exempt and you had no other income, often a non lodgment advice to the ATO is enough. Worth confirming your situation once rather than guessing annually.',
      },
      {
        q: 'Are prizes and one off awards taxable?',
        a: 'It depends on the facts. Academic prizes tied to your studies are often exempt, while prizes connected to work or business activity can be taxable. The award letter is the place to start.',
      },
    ],
    related: ['do-international-students-pay-tax-in-australia', 'tax-free-threshold-international-students', 'medicare-levy-exemption-international-students'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I have a scholarship and a question about tax.',
  },
]
