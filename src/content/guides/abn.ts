import type { Guide } from '../types'
const UPDATED = '12 July 2026'
export const abnGuides: Guide[] = [
  {
    slug: 'abn-for-delivery-riders-students',
    title: 'Do I need an ABN to work for Uber Eats or DoorDash as a student?',
    metaTitle: 'ABN for Uber Eats and DoorDash: Student Guide',
    description:
      'Yes, delivery platforms treat riders as contractors, so students need a free ABN. The real trap is that no tax is withheld from your pay.',
    cluster: 'TFN and ABN',
    updated: UPDATED,
    answer:
      'Yes. Uber Eats, DoorDash and similar platforms treat riders as independent contractors, so you need an ABN to work for them. The ABN is free from the government. The important part: nobody withholds tax from your delivery pay, so you must put money aside yourself for tax time.',
    shortAnswer:
      'Delivery work needs a free ABN because platforms pay you as a contractor. No tax is withheld, so put a slice of every payout aside. The bill arrives with your tax return.',
    sections: [
      {
        h: 'Why delivery apps demand an ABN',
        body: [
          'When you deliver for a platform you are not their employee. You are a tiny business selling delivery services, and Australian businesses are identified by an Australian Business Number. That is the whole story behind the app asking for an ABN before you can go online.',
          'The ABN itself is free and the application takes minutes once you have a TFN. Like the TFN, it is issued by the government at no charge, and websites charging fees to arrange one are selling you nothing. One warning: an ABN is for genuine work for yourself. A boss with shifts and a roster who tells you to get an ABN is usually trying to dodge paying your super and entitlements, and that arrangement can hurt you.',
        ],
      },
      {
        h: 'The trap: gross pay feels like net pay',
        body: [
          'In a wage job, tax comes out before money reaches you. On an ABN the platform pays you everything, and it feels like a pay rise. It is not. The tax on that income still exists, it just has no one collecting it during the year.',
          'The habit that saves delivery riders: every time a payout lands, move a slice into a separate account and pretend it is not yours. For a student who also has a wage job, putting aside around 20 cents per dollar of delivery income is a sensible cushion. Whatever is left over after the return is a bonus, which beats a surprise bill every time.',
        ],
      },
      {
        h: 'What you can claim against delivery income',
        body: [
          'Business income comes with business expenses. The work share of your costs reduces the taxable amount: your bike or scooter and its repairs, a helmet and safety gear, insulated delivery bags, the delivery share of your phone plan, and if you drive, a logbook share of car costs.',
          'Keep receipts as you go, not in a July panic. Photos in a folder on your phone are enough. And be honest about the work share: the phone you also use all day for life is partly private, and claiming 100% of it invites questions.',
        ],
      },
      {
        h: 'GST, income tax and how it all lands in your return',
        body: [
          'Two different taxes confuse riders. GST registration is only compulsory once your turnover passes $75,000 a year, which almost no student reaches, so most delivery riders do not register or charge GST. Note that this is specific to deliveries: driving passengers for a rideshare service requires GST registration from the first dollar, which is one reason delivery is simpler for students.',
          'Income tax is the one that always applies. Your delivery profit, income minus expenses, is added to any wages in your tax return, and the $18,200 threshold applies to the combined total. Wage withholding may cover some of the bill, the rest is payable at lodgment, which is exactly what the money you put aside is for.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is getting an ABN free?',
        a: 'Yes, free from the Australian Business Register. You need a TFN first. If a website wants payment to get you an ABN, it is a middleman you do not need.',
      },
      {
        q: 'Do delivery hours count toward my 48 hour work limit?',
        a: 'Yes. During session time, delivery hours count together with any wage job toward the 48 hours per fortnight visa condition.',
      },
      {
        q: 'Do I charge GST on deliveries?',
        a: 'Not unless your turnover passes $75,000 a year. Passenger rideshare is the exception where GST applies from the first dollar, but food and parcel delivery is not.',
      },
    ],
    related: ['how-to-get-tfn-international-student', 'two-jobs-international-student', 'how-many-hours-can-international-students-work'],
    serviceLink: { href: '/abn', label: 'Our ABN service' },
    waContext: 'I do delivery work and have a question about my ABN and tax.',
  },
]
