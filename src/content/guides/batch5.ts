import type { Guide } from '../types'
const UPDATED = '21 July 2026'
export const batch5Guides: Guide[] = [
  {
    slug: 'is-oshc-tax-deductible',
    title: 'Is OSHC tax deductible for international students?',
    metaTitle: 'OSHC and Tax: Deduction No, Exemption Yes',
    description:
      'OSHC premiums are not tax deductible, but OSHC is the reason students can claim the Medicare levy exemption, which is worth more than a deduction.',
    cluster: 'Medicare, OSHC and scholarships',
    updated: UPDATED,
    answer:
      'No, OSHC premiums are a private cost and not deductible. But OSHC matters for tax anyway: it reflects that you are not entitled to Medicare, which is the basis for claiming a full exemption from the 2% Medicare levy. The exemption is usually worth more than a deduction of the premium would be.',
    shortAnswer:
      'You cannot deduct OSHC, but the exemption it points to, skipping the 2% Medicare levy, is worth real money. Claim that instead, with a Medicare Entitlement Statement.',
    sections: [
      {
        h: 'Why the deduction fails',
        body: [
          'Deductions must connect to earning income. OSHC connects to holding a visa and staying healthy, both private matters in tax terms, the same category as rent and groceries. That your visa forces the purchase does not change its character. Visa costs themselves are not deductible either.',
          'So the premium, often a thousand dollars or more per year, sits outside the tax return entirely. Annoying, and universal: no international student deducts OSHC, whatever a forum post claimed.',
        ],
      },
      {
        h: 'The consolation prize is bigger',
        body: [
          'The tax system does notice your OSHC situation, just through a different door. The 2% Medicare levy funds a public health system you are not entitled to use, which is exactly why the visa requires OSHC. People not entitled to Medicare can claim a full exemption from the levy.',
          'On $30,000 of income the exemption saves $600, year after year. Compare that with what deducting a $600 premium would return at student tax rates, roughly $96, and the exemption is clearly the prize worth chasing.',
        ],
      },
      {
        h: 'How to actually collect it',
        body: [
          'The exemption needs a Medicare Entitlement Statement from Services Australia, applied for with your passport and visa details, ideally in May or June so it is ready for tax season. Your OSHC certificate alone does not do it.',
          'With the statement, the exemption goes into your return and the levy disappears from the assessment. Paid the levy in past years without knowing? Those returns can be amended, and the levy comes back. That recovery is often worth several OSHC premiums.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I claim OSHC as a medical expense?',
        a: 'No. The old medical expenses offset was abolished years ago, and OSHC premiums have no deduction path of their own.',
      },
      {
        q: 'Does having OSHC automatically remove the Medicare levy?',
        a: 'No, the exemption must be claimed in your return, backed by a Medicare Entitlement Statement from Services Australia. Without the statement the levy applies by default.',
      },
      {
        q: 'Is private health insurance different from OSHC for tax?',
        a: 'Regular Australian private cover has its own rebate system for residents entitled to Medicare. OSHC sits outside that, its tax meaning runs entirely through the levy exemption.',
      },
    ],
    related: ['medicare-levy-exemption-international-students', 'what-can-international-students-claim-on-tax', 'tax-refund-international-students'],
    serviceLink: { href: '/medicare', label: 'Our Medicare exemption service' },
    waContext: 'I have a question about OSHC and tax.',
  },
  {
    slug: 'can-i-claim-tuition-fees',
    title: 'Can I claim my tuition fees on tax as an international student?',
    metaTitle: 'Tuition Fees and Tax Deductions for Students',
    description:
      'Generally no. Course fees for the degree that brought you to Australia do not pass the self education test. The narrow exceptions, explained simply.',
    cluster: 'Medicare, OSHC and scholarships',
    updated: UPDATED,
    answer:
      'Generally no. Self education expenses only deduct when the study maintains or improves skills for your current job. A degree that prepares you for a future career, while you fund it with cafe or delivery work, fails that test. The genuine exceptions for students are rare.',
    shortAnswer:
      'Tuition for your degree is almost never deductible against student job income. The study must upgrade your current job, not build a future career, and that test is strict.',
    sections: [
      {
        h: 'The connection test',
        body: [
          'Self education deducts when it is part of doing your current job better: a nurse studying advanced nursing while working as a nurse, an accountant adding a tax specialisation while employed in accounting. The study and the income belong to the same career, running at the same time.',
          'An international student mostly runs the opposite pattern: the degree builds a future career, while the income comes from hospitality, retail or delivery. Commerce lectures do not upgrade barista skills, so the connection fails and the fees stay private. It feels unfair given the size of international fees, and it is uniformly how the rule works.',
        ],
      },
      {
        h: 'The narrow exceptions',
        body: [
          'The door opens only when study and current work genuinely line up. A software engineering student already employed part time as a developer, studying subjects that deepen exactly that work, has an argument. A masters student working professionally in the same field mid degree may too.',
          'Two cautions before claiming: the work must be real employment in the field, not aspiration, and the deduction belongs to the connected study costs, not automatically the whole degree. These claims attract attention, so documentation of the job and the study link matters.',
        ],
      },
      {
        h: 'What is still worth claiming',
        body: [
          'Failing the tuition test does not empty the return. The work costs of your actual jobs deduct as normal: uniforms, safety gear, tools, the work share of your phone, travel between two jobs. Delivery riders add bike, helmet and bags.',
          'And the items bigger than any deduction remain: the tax free threshold doing its work, the Medicare levy exemption backed by an entitlement statement, and refunds of over withheld tax. A student return built on those, with honest small deductions on top, collects everything the law actually offers.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I claim textbooks and a laptop for my course?',
        a: 'Course materials follow the same test as fees: connected to a future career rather than a current job, they stay private. A laptop share used for paid work can deduct on that basis instead.',
      },
      {
        q: 'What about English courses to improve my job prospects?',
        a: 'General skill building for future or better work is not deductible. The study must service the job you already hold.',
      },
      {
        q: 'My employer pays part of my course. Does that change things?',
        a: 'Employer funded study is its own arrangement, often with fringe benefits rules on the employer side. Your own deduction picture still runs on the connection test for what you personally paid.',
      },
    ],
    related: ['what-can-international-students-claim-on-tax', 'are-scholarships-taxable-australia', 'tax-refund-international-students'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I have a question about claiming study costs.',
  },
  {
    slug: 'tax-on-money-from-parents',
    title: 'Do I pay tax on money my parents send me?',
    metaTitle: 'Money From Home and Australian Tax',
    description:
      'Family support from home is not income and carries no Australian tax, at any amount. Only the interest it earns in your account is taxable.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'No. Money your family sends to support you, for rent, food, fees or anything else, is not income and is not taxed in Australia, regardless of amount. Banks may ask about large transfers for anti money laundering reasons, which is a different system from tax. Interest the money earns here is taxable.',
    shortAnswer:
      'Family support from home is not income and carries no Australian tax, at any amount. Only the interest it earns in your account is taxable.',
    sections: [
      {
        h: 'Why gifts are not income',
        body: [
          'Australian tax runs on income: money earned from work, business or investments. Support from family is a gift, and genuine gifts sit outside the income net entirely. There is no gift tax in Australia, and the amount does not change the answer. A monthly allowance and a one off transfer for a year of fees are equally untaxed.',
          'This worry sends a surprising number of students into a quiet panic each tax season, sometimes to the point of hiding transfers or splitting them into small pieces. There is nothing to hide, and splitting transfers is exactly the behaviour that looks suspicious to banks.',
        ],
      },
      {
        h: 'Who does look at transfers, and why',
        body: [
          'Banks report international transfers under anti money laundering rules, and large or unusual movements can prompt the bank to ask about the source. This is compliance about criminal money, not a tax assessment, and family support has a simple honest answer that satisfies it.',
          'Practical tips: keep transfers straightforward, from your family account to yours, and hold onto anything that documents the relationship and purpose, even a message thread. Boring and traceable is exactly how support money should look.',
        ],
      },
      {
        h: 'The one taxable edge',
        body: [
          'Once the money sits in an Australian account, any interest it earns is your income, taxable like the rest. On typical student balances this is small: $20,000 held through a year might earn a few hundred dollars of interest, taxed only as part of your total income, which often stays under the threshold anyway.',
          'Give your bank your TFN so interest is not over withheld, and include the interest in your return when you lodge. That single line is the entire tax footprint of money from home.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is there a limit before transfers from family become taxable?',
        a: 'No limit exists, because gifts are not income at any size. Large transfers may prompt bank questions under anti money laundering rules, which honesty answers.',
      },
      {
        q: 'Do I declare family support anywhere in my tax return?',
        a: 'No. Gifts do not appear in the return. Only the interest your account earns belongs there.',
      },
      {
        q: 'My parents pay my rent directly to the landlord. Any difference?',
        a: 'None for tax. Support paid on your behalf is still a gift and still outside the income system.',
      },
    ],
    related: ['tax-on-bank-interest-students', 'do-international-students-pay-tax-in-australia', 'first-year-in-australia-tax'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I have a question about money my family sends me.',
  },
  {
    slug: 'tax-on-bank-interest-students',
    title: 'Do I pay tax on my Australian bank interest?',
    metaTitle: 'Bank Interest Tax for International Students',
    description:
      'Bank interest is taxable income, reported in your return and usually costing little or nothing under the threshold. Just make sure your bank has your TFN.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'Yes. Interest from an Australian bank account is income and goes in your tax return, where it is taxed with the rest at normal rates, often at zero once the threshold does its work. Give your bank your TFN, otherwise it withholds tax from interest at the top rate.',
    shortAnswer:
      'Bank interest is taxable income, reported in your return and usually costing little or nothing under the threshold. Just make sure your bank has your TFN.',
    sections: [
      {
        h: 'Small line, simple rules',
        body: [
          'A savings account quietly earning interest is your simplest income stream: no payslips, no withholding drama, just a yearly figure your bank reports to the ATO, which then appears prefilled in your return. Your job is to check it and leave it in, not to hunt for it.',
          'For most students the amounts are modest, tens to a few hundred dollars, and they simply join wages under the same threshold and rates. A student under $18,200 in total pays nothing on the interest either.',
        ],
      },
      {
        h: 'The TFN detail worth two minutes',
        body: [
          'Banks ask for your TFN when you open an account, and the request is worth honouring. Without a TFN on file, the bank must withhold tax from your interest at the top rate before crediting you, which turns a $200 interest year into roughly $106 in hand.',
          'The withheld amount is recoverable through your return, like all over withholding, but the fix is easier: add your TFN in the banking app once, and interest arrives whole forever after.',
        ],
      },
      {
        h: 'Residency changes this line too',
        body: [
          'The usual student, a resident for tax purposes on a long course, declares interest in the return like any income. Short course students who are foreign residents face a different mechanism: banks apply a flat withholding to their interest, which becomes final tax, handled at the bank rather than in a return.',
          'Leaving Australia permanently flips you into that second world too: tell your bank you have become a non resident, and future interest gets its final withholding at source instead of chasing you into returns from abroad.',
        ],
      },
    ],
    faq: [
      {
        q: 'The bank already shows my interest to the ATO. Why declare it?',
        a: 'The prefilled figure still needs to be part of your lodged return. Deleting it creates a mismatch with what the bank reported, which is the kind of small flag worth avoiding.',
      },
      {
        q: 'I earned $40 of interest. Does it really matter?',
        a: 'It goes in the return because reporting matches matter, and at $40 the tax effect is essentially nothing under the threshold.',
      },
      {
        q: 'What about interest from my account back home?',
        a: 'Residents for tax are technically taxed on worldwide income, with credits for foreign tax paid. Small home country interest is usually minor, but mention it when your return is prepared.',
      },
    ],
    related: ['tax-on-money-from-parents', 'how-much-tax-do-international-students-pay', 'lodge-tax-return-under-18200'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I have a question about tax on my bank interest.',
  },
  {
    slug: 'moved-to-485-visa-tax',
    title: 'I moved to a 485 visa. What changes with my tax?',
    metaTitle: '485 Graduate Visa: What Changes for Your Tax',
    description:
      'Moving to a 485 changes work rights, not your tax basics: residency continues, the $18,200 threshold stays, and DASP super remains at the 35% rate.',
    cluster: 'Leaving Australia and moving to a 485',
    updated: UPDATED,
    answer:
      'Moving from a student visa to a 485 graduate visa changes little for tax. Your residency usually continues, the $18,200 threshold stays, and the same rates apply. Work hour limits disappear, so incomes typically rise. A future DASP still taxes student and 485 super at 35%, and the Medicare exemption usually continues.',
    shortAnswer:
      'The 485 changes your work rights, not your tax setup. Same residency, same threshold, higher income potential, and DASP stays at 35% when you eventually leave.',
    sections: [
      {
        h: 'What stays the same',
        body: [
          'Tax residency does not reset with the visa. You were living here as a resident for tax purposes, and you continue to, so the threshold, resident rates and the low income offset all carry on. Your TFN is unchanged, your super fund keeps receiving contributions, and your tax return looks structurally identical.',
          'The Medicare levy exemption also usually continues, since most 485 holders remain not entitled to Medicare and hold private cover. Keep claiming it with an entitlement statement covering the period. One caveat: some nationalities gain Medicare access through reciprocal health agreements, and gaining entitlement ends the exemption from that date.',
        ],
      },
      {
        h: 'What actually changes',
        body: [
          'The 48 hour cap vanishes with the student visa, and that is the real story: full time work, full year income, and a first year where withholding finally matches reality better, so refunds get smaller and correcter. Graduate salaries also start crossing $45,000, meeting the 30% band and, for the first time, making deductions worth real money.',
          'Self education flips too: study that upgrades the professional job you now hold can deduct, the exact test your degree used to fail. And a full time salary makes it worth checking your withholding settings once, threshold at the main employer, TFN everywhere.',
        ],
      },
      {
        h: 'The long game: super and the eventual exit',
        body: [
          'Super becomes meaningful on a graduate salary, 12% of real money accumulating quarter after quarter. Consolidate old student job accounts now so fees stop nibbling several small balances.',
          'Leave Australia for good one day and DASP still applies to temporary visa super, with student and 485 periods both taxed at 35%. Stay long enough to reach permanent residency instead, and the super converts into an ordinary Australian retirement account. Either ending beats forgetting the money exists.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I tell the ATO I changed visas?',
        a: 'No notification is needed. Your return simply continues as a resident. The visa change matters to Home Affairs, not to your tax return mechanics.',
      },
      {
        q: 'Does 485 work income get taxed differently from student work income?',
        a: 'No, same rates and threshold. The difference is volume: more hours and higher pay push more income into the taxed bands.',
      },
      {
        q: 'Can I still claim the Medicare exemption on a 485?',
        a: 'Usually yes, while not entitled to Medicare. Nationals of reciprocal healthcare countries may gain entitlement, which ends the exemption from that date, so check your own case.',
      },
    ],
    related: ['medicare-levy-exemption-international-students', 'do-international-students-get-superannuation', 'what-can-international-students-claim-on-tax'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I moved to a 485 visa and have a tax question.',
  },
  {
    slug: 'leaving-australia-early-tax-return',
    title: 'I am leaving Australia. Can I get my tax back early?',
    metaTitle: 'Early Tax Return When Leaving Australia',
    description:
      'Leaving permanently before 30 June usually allows lodging your final return early, so the refund settles before or soon after departure.',
    cluster: 'Leaving Australia and moving to a 485',
    updated: UPDATED,
    answer:
      'Usually yes. Leaving Australia permanently before the tax year ends lets you lodge your final return early instead of waiting for July. The return covers your part year, applies the months based threshold, and the refund can settle around your departure. Pair it with your DASP super claim and both payments travel together.',
    shortAnswer:
      'Permanent leavers can lodge their last return early instead of waiting for July. Refund settled around departure, super claim running alongside, Australian chapter closed properly.',
    sections: [
      {
        h: 'Who qualifies for early lodgment',
        body: [
          'Early lodgment exists for people leaving Australia permanently before 30 June who will no longer earn Australian income after departure. A student finishing a course and flying home in March fits exactly: the tax year is over for you personally, months before it ends officially.',
          'Leaving for a holiday, or moving to another Australian visa, does not qualify, and neither does leaving while continuing remote Australian income. Genuine permanent departure is the key that opens the early door.',
        ],
      },
      {
        h: 'What the early return looks like',
        body: [
          'It is your normal return with a shorter year: income from 1 July to departure, a threshold scaled to your resident months, and every usual student item still in play, over withheld wages coming back, the Medicare exemption with an entitlement statement, honest work deductions.',
          'One practical difference: employer data has not been finalised yet, so payslips and final pay statements matter more than usual. Bring them all, because they are the evidence the early return runs on.',
        ],
      },
      {
        h: 'Choreography with the rest of leaving',
        body: [
          'The tidy exit runs in order: prepare the return and the DASP claim while still here, keep the Australian bank account open for the refund to land, then depart, let the visa end, and the super claim fires. Two payments, one process, no chasing documents from another hemisphere.',
          'Leavers who skip all this can still lodge later from overseas, refunds wait patiently. But every step is harder abroad: certifying identity, receiving mail, keeping an account open. An hour of order before flying replaces months of friction after.',
        ],
      },
    ],
    faq: [
      {
        q: 'How early can I lodge before leaving?',
        a: 'Once your Australian income has genuinely finished for the year and departure is locked in. Lodging weeks before the flight, with final payslips in hand, is the typical rhythm.',
      },
      {
        q: 'Should I keep my Australian bank account open?',
        a: 'Yes, until the refund lands. ATO refunds pay to Australian accounts, so closing the account at the airport is the classic self inflicted delay.',
      },
      {
        q: 'I already left without lodging. Is it too late?',
        a: 'Not at all. The return can be lodged from overseas and the refund claimed, alongside the DASP once your visa ends. It just takes more coordination, which is exactly what we handle.',
      },
    ],
    related: ['how-to-claim-dasp', 'super-refund-leaving-australia', 'when-is-the-tax-deadline-australia'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I am leaving Australia and want to sort my tax early.',
  },
]
