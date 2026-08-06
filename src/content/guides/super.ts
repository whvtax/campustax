import type { Guide } from '../types'

const UPDATED = '2 August 2026'

export const superGuides: Guide[] = [
  {
    slug: 'super-refund-leaving-australia',
    title: 'Can I get my superannuation back when I leave Australia?',
    metaTitle: 'Claim Your Super When Leaving Australia',
    description:
      'International students can claim their superannuation after leaving Australia permanently, through a Departing Australia Superannuation Payment.',
    cluster: 'Superannuation',
    updated: UPDATED,
    answer:
      'Yes. Once you have left Australia permanently and your student visa has ended or been cancelled, you can claim your superannuation as a Departing Australia Superannuation Payment, a DASP. For student visa holders the payment is taxed at 35%, so about two thirds of your balance reaches you.',
    shortAnswer:
      'Leaving Australia for good? Your super can come with you. After your visa ends you claim a DASP, taxed at 35% for students, and the rest is paid to you, usually within 28 days.',
    sections: [
      {
        h: 'The money you may not know you have',
        body: [
          'Every legal employer in Australia pays superannuation on top of your wages, 12% of your pay, into a retirement fund in your name. As a temporary visa holder you will probably not retire here, so the system has an exit door: when you leave permanently, you can take the money with you.',
          'Students are often surprised by how much is there. A year of part time work at $18,000 in wages means around $2,160 in super. Two or three years of work, or busy holiday periods, push the number well past that. It is real money, and unclaimed it just sits there.',
        ],
      },
      {
        h: 'The two conditions',
        body: [
          'A DASP claim needs two things to be true. You have physically left Australia, and your visa has ceased, either expired or cancelled. Holding a valid visa, even from overseas, blocks the claim, which is why some leavers ask Home Affairs to cancel a visa that still has time on it.',
          'The smart order is to prepare everything before you fly: identify your fund or funds, gather your documents, and set the claim up so it fires once the visa ends. Doing paperwork from your home country with an Australian fund is possible, just slower and more annoying.',
        ],
      },
      {
        h: 'Finding all of it',
        body: [
          'Students with several jobs often have several super accounts, because an employer who never asked for your fund details simply opened a new one for you. Money also drifts: inactive small accounts get swept to the ATO as unclaimed super, where students rarely think to look.',
          'A proper claim starts with a search. Your payslips name the funds your employers used, and an ATO check surfaces anything already transferred there. Claiming from one fund while two others hold your money is one of the most common ways leavers shortchange themselves.',
        ],
      },
      {
        h: 'What happens after you claim',
        body: [
          'Once the fund has a complete claim and confirmation that you have left and your visa has ended, payment usually arrives within 28 days, to an Australian or overseas account depending on what you set up. The 35% DASP tax is withheld by the fund before payment, so what lands is yours to keep.',
          'The same departure is usually the right moment to lodge a final tax return, which can often go in early when you are leaving permanently. Many leavers collect a wage refund and their super in the same season, and it is worth doing both properly rather than leaving either behind.',
        ],
      },
    ],
    faq: [
      {
        q: 'How long do I have to claim after leaving?',
        a: 'There is no rush that cancels your money, but after six months of inactivity funds may transfer balances to the ATO as unclaimed super. It stays claimable there too, just through a slightly different path.',
      },
      {
        q: 'Can I claim my super while still in Australia?',
        a: 'No. Leaving permanently and the end of your visa are both required. You can and should prepare the claim before flying, but payment happens after both conditions are met.',
      },
      {
        q: 'What if my employer never paid my super?',
        a: 'Check your payslips against your fund balance. Missing super can be reported to the ATO, which chases employers for unpaid amounts. Worth doing before you leave, while evidence is easy to gather.',
      },
    ],
    related: ['how-much-tax-super-leaving-australia', 'tax-refund-international-students', 'do-international-students-pay-tax-in-australia'],
    serviceLink: { href: '/superannuation', label: 'Our super refund service' },
    waContext: 'I am leaving Australia and want to claim my super.',
  },

  {
    slug: 'how-much-tax-super-leaving-australia',
    title: 'How much tax is taken from my super when I leave Australia?',
    metaTitle: 'DASP Tax for Students: 35%, Not 65%',
    description:
      'Students pay 35% DASP tax, not 65%. That higher rate is for working holiday makers only. On $4,000 of student super, about $2,600 comes back to you.',
    cluster: 'Superannuation',
    updated: UPDATED,
    answer:
      'For super earned on a student visa, the DASP tax is 35% of the taxed element of your balance. The 65% rate you may have seen applies only to working holiday visa holders. On a $4,000 student balance, $1,400 goes to tax and about $2,600 is paid to you.',
    shortAnswer:
      'Students pay 35% DASP tax, not 65%. That higher rate is for working holiday makers only. On $4,000 of student super, about $2,600 comes back to you.',
    sections: [
      {
        h: 'The number that scares students off',
        body: [
          'Search for super refunds and you will quickly find the figure 65%, quoted in forums, blog posts and even some professional sites. Students read it, calculate that two thirds of their money is gone, and decide the claim is not worth the effort. That decision costs them real money, because the number does not apply to them.',
          'The 65% DASP rate belongs to working holiday makers, people on 417 and 462 visas. Super earned while you held a student visa is taxed at 35% when paid out as a DASP. Same system, different visa, very different outcome.',
        ],
      },
      {
        h: 'What the numbers look like',
        body: [
          'Take a typical leaver with $4,000 in super earned across two years of student work. The fund withholds 35%, which is $1,400, and pays out $2,600. At $8,000 of super, the payout is $5,200. Compare that with the same balances under the false 65% assumption, $1,400 and $2,800, and you see why the mix up makes people abandon claims.',
          'Technically the 35% applies to the taxed element, which is what almost all ordinary employer super is. Small untaxed elements, rare for students, carry a 45% rate. For a standard student balance, 35% on the lot is the accurate expectation.',
        ],
      },
      {
        h: 'Mixed visas, mixed rates',
        body: [
          'Some people hold more than one visa over their Australian years, for example a working holiday year before starting a degree. In that case the fund applies the working holiday rate to super earned during working holiday periods and the 35% rate to super earned as a student. The claim sorts the periods, you do not lose the student rate because of an earlier visa.',
          'This is exactly the kind of detail worth having handled properly, because a fund that cannot see your visa history clearly may apply the harsher rate across the board. Documentation of your visa periods protects your money.',
        ],
      },
      {
        h: 'Why the tax exists at all',
        body: [
          'Fair question, since you never asked for a retirement fund here. Super contributions were taxed lightly on the way in, at 15%, on the assumption the money stays locked until retirement. Take it out early through a DASP and the concession is clawed back through the exit tax. That is the logic, agree with it or not.',
          'The practical takeaway does not change: the money is yours, most of it survives the exit, and the only way to lose it entirely is to never claim. Two thirds of something beats all of nothing.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the 35% taken before or after I receive the money?',
        a: 'Before. The fund withholds the tax and pays you the rest, so the amount that lands needs no further Australian tax action from you.',
      },
      {
        q: 'I had a working holiday visa before my student visa. Which rate applies?',
        a: 'Each period keeps its own rate: 65% on super from working holiday periods, 35% on super from student periods. Clear visa documentation keeps the split accurate.',
      },
      {
        q: 'Do I also declare the DASP in a tax return?',
        a: 'No. A DASP is taxed finally at payment and does not go into an Australian tax return. Your home country may have its own rules about receiving it, which is worth checking locally.',
      },
    ],
    related: ['super-refund-leaving-australia', 'tax-refund-international-students', 'how-much-tax-do-international-students-pay'],
    serviceLink: { href: '/calculator', label: 'Estimate your payout in the calculator' },
    waContext: 'I have a question about the tax on my super payout.',
  },
]
