import type { Guide } from '../types'

const UPDATED = '5 August 2026'

export const tfnGuides: Guide[] = [
  {
    slug: 'how-to-get-tfn-international-student',
    title: 'How do international students get a TFN in Australia?',
    metaTitle: 'How to Get a TFN as an International Student',
    description:
      'A TFN is free, applied for online on the ATO site after you land, and arrives by post within 28 days. Do it in your first week, before you need it for a job.',
    cluster: 'TFN and ABN',
    updated: UPDATED,
    answer:
      'Apply online on the ATO website after you arrive in Australia, using your passport and visa details. It is completely free, takes about ten minutes, and the number arrives by post within 28 days. Apply in your first week, because employers ask for the number when you start work.',
    shortAnswer:
      'A TFN is free, applied for online on the ATO site after you land, and arrives by post within 28 days. Do it in your first week, before you need it for a job.',
    sections: [
      {
        h: 'What a TFN is and why every job asks for it',
        body: [
          'A tax file number is your personal number in the Australian tax system, and it stays yours for life, across every job and every visa you will ever have here. Employers need it to report your wages, banks ask for it so your interest is taxed correctly, and your tax return is built around it.',
          'Without a TFN on file, an employer must withhold tax from your pay at the top rate, which is close to half. That alone is the reason to sort the number out early, before the first shift rather than after.',
        ],
      },
      {
        h: 'The application, step by step',
        body: [
          'Wait until you are physically in Australia, because the online system checks that your visa shows you have arrived. Then go to the ATO website and choose the application for foreign passport holders. You enter your passport details, your visa details and an Australian postal address. That is the whole form, and it takes about ten minutes.',
          'The number is sent by letter to the address you gave, within 28 days and usually faster. Keep the letter. And be careful with the address: student houses with many tenants lose mail, so use an address where someone actually checks the box.',
        ],
      },
      {
        h: 'It is free. Never pay for a TFN.',
        body: [
          'The government charges nothing for a TFN. Websites exist that look official and charge students a fee to submit the same free application. They add nothing except the fee.',
          'The only address you need is the ATO website itself, ato.gov.au. If a site asks for payment before giving you a TFN application, close it.',
        ],
      },
      {
        h: 'After the number arrives',
        body: [
          'Give the TFN to your employer by filling in the TFN declaration they hand you when you start, and claim the tax free threshold on the same form if it is your main job. Give it to your bank too, so your interest is not taxed at the top rate.',
          'Guard it like a password. A TFN in the wrong hands is used for identity fraud. Share it only with employers after you accept a job, your bank, the ATO, and a tax agent handling your return. Nobody legitimate will ever ask for your TFN by WhatsApp message out of nowhere or in a job interview before you are hired.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I apply for a TFN before arriving in Australia?',
        a: 'The standard online application for visa holders works after you arrive, because it checks your arrival against your visa. Plan to do it in your first week here.',
      },
      {
        q: 'I lost my TFN letter. What now?',
        a: 'Your number has not changed. You can recover it through your myGov account linked to the ATO, or by calling the ATO with identity documents. A tax agent handling your return can also help you locate it.',
      },
      {
        q: 'Does a TFN expire when my visa changes?',
        a: 'No. The same number follows you from student visa to 485 to anything after. One TFN for life.',
      },
    ],
    related: ['work-before-tfn-arrives', 'do-international-students-pay-tax-in-australia', 'tax-free-threshold-international-students'],
    serviceLink: { href: '/tfn', label: 'Our TFN service' },
    waContext: 'I need help getting my TFN.',
  },

  {
    slug: 'work-before-tfn-arrives',
    title: 'Can I start working before my TFN arrives?',
    metaTitle: 'Working Before Your TFN Arrives',
    description:
      'Yes, you can start work while waiting for your tax file number. You have 28 days to give it to your employer.',
    cluster: 'TFN and ABN',
    updated: UPDATED,
    answer:
      'Yes. You can start a job while your TFN application is processing. You have 28 days from starting work to give the number to your employer. Miss the deadline and your employer must withhold tax at the top rate, but that extra tax is recoverable through your tax return.',
    shortAnswer:
      'You can work while waiting for your TFN. Hand the number to your employer within 28 days of starting. If the top rate was withheld in the gap, the extra comes back in your tax return.',
    sections: [
      {
        h: 'The 28 day window',
        body: [
          'The system expects the gap. When you start a job you fill in a TFN declaration, and there is a box for exactly this situation: I have applied for a TFN and am waiting for it. Tick it and your employer withholds tax at the normal rates for 28 days as if you already had the number.',
          'That window lines up with the TFN processing time, which is also up to 28 days. Apply for the TFN in your first week in Australia and the number almost always arrives before the window closes.',
        ],
      },
      {
        h: 'What happens if the window closes',
        body: [
          'If 28 days pass and your employer still has no TFN from you, they are required to withhold at the top rate, 45 cents from every dollar. Your take home pay roughly halves overnight. Employers are not being cruel, the law gives them no choice.',
          'Two things fix it. Hand over the number as soon as it arrives and normal withholding resumes from the next pay. And the extra tax that was withheld in the meantime is not gone. It sits with the ATO and comes back to you when you lodge your tax return after 30 June.',
        ],
      },
      {
        h: 'If it already happened to you',
        body: [
          'Plenty of students discover the 45% surprise on a payslip, sometimes months later. The recovery is the tax return. The return compares everything withheld across the year with what you actually owed, and for a student under or near the tax free threshold, heavy withholding usually means a large refund.',
          'Bring your payslips from the affected weeks so nothing gets missed. This exact situation, the first year student with a few weeks of top rate withholding, is one of the most common and most satisfying refunds we prepare.',
        ],
      },
      {
        h: 'One warning about cash offers',
        body: [
          'Some employers offer to pay cash while you wait for your TFN. It sounds helpful and it is not. Cash in hand usually means no payslips, no superannuation and no proof of income, and it puts you outside the protections that cover every legal worker in Australia, including minimum wage.',
          'The legal route costs you nothing extra. Tick the waiting for TFN box, work normally, hand the number over when it arrives. Everything stays on the record, and the record is what gets you your refund later.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can an employer refuse to hire me because my TFN has not arrived?',
        a: 'They should not. The TFN declaration form officially covers the waiting period, and hiring you while you wait is completely normal and legal.',
      },
      {
        q: 'What is withheld during the 28 days?',
        a: 'Normal rates, as if you had the number, provided you ticked the box saying you have applied. The top rate only starts if the window closes with no number provided.',
      },
      {
        q: 'My TFN arrived. Do I need to do anything at work?',
        a: 'Yes, actually give it to your employer, usually by updating your TFN declaration. The withholding does not fix itself until the number is in their payroll system.',
      },
    ],
    related: ['how-to-get-tfn-international-student', 'tax-refund-international-students', 'tax-free-threshold-international-students'],
    serviceLink: { href: '/tfn', label: 'Our TFN service' },
    waContext: 'I started working before my TFN arrived and have a question.',
  },
]
