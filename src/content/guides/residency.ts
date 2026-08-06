import type { Guide } from '../types'

const UPDATED = '30 July 2026'

export const residencyGuides: Guide[] = [
  {
    slug: 'do-international-students-pay-tax-in-australia',
    title: 'Do international students pay tax in Australia?',
    metaTitle: 'Do International Students Pay Tax in Australia?',
    description:
      'Yes, but usually less than they expect. Most students are tax residents and pay nothing on the first $18,200 each year. Many get a refund at tax time.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'Yes, international students pay tax on money they earn in Australia. But most students are residents for tax purposes, which means the first $18,200 earned each tax year is completely tax free. Many working students actually get money back at tax time, because their employer withheld more than they owed.',
    shortAnswer:
      'Students pay tax in Australia, but most are tax residents with an $18,200 tax free threshold. Earn less than that and any tax taken from your pay usually comes back as a refund.',
    sections: [
      {
        h: 'The rule in plain words',
        body: [
          'Australia taxes people on what they earn here. That includes you the moment you pick up shifts at a cafe, a warehouse or a delivery app. Your employer takes a slice of every payslip and sends it to the ATO, the Australian tax office. So far, exactly what you expected.',
          'Here is the part most students do not know. If you are a resident for tax purposes, and most students on courses longer than 6 months are, you owe nothing on the first $18,200 you earn in a tax year. The tax year runs from 1 July to 30 June. A typical student working part time earns under that line. The tax that was taken out of their pay was never actually owed, and it comes back when they lodge a tax return.',
        ],
      },
      {
        h: 'Why students hear scary stories',
        body: [
          'Most of the scary tax stories floating around come from a different visa. Working holiday makers pay 15% from their very first dollar, and a lot of online advice is written for them. Students who read it assume the same rules apply. They do not.',
          'A student visa and a course longer than 6 months usually mean resident tax rates, and resident rates start at zero. So before you accept anything you read about tax as a student, check who the advice was written for. If it mentions backpackers or working holidays, it is probably not about you.',
        ],
      },
      {
        h: 'What you actually need to do',
        body: [
          'Three things keep you clean with the ATO. First, get a tax file number, a TFN, before or soon after you start working, and give it to your employer within 28 days of starting. Second, keep an eye on your payslips so you know what you earned and what was withheld. Third, lodge a tax return after the tax year ends on 30 June.',
          'The return is where everything gets settled. If too much tax was taken, the difference lands back in your bank account. Most refunds arrive within about two weeks of lodging. If you earned very little or nothing, you may only need to send the ATO a short notice instead of a full return, and it costs nothing to check which one applies to you.',
        ],
      },
      {
        h: 'The special rules that work in your favour',
        body: [
          'Being a student comes with a few extras worth real money. Students with OSHC health insurance can usually claim an exemption from the 2% Medicare levy, which most students never hear about. Most full time scholarships are tax free. And when you eventually leave Australia for good, the superannuation your employers paid can come with you, taxed at the student rate of 35% rather than the 65% rate that applies to working holiday makers.',
          'Each of those has its own page in our guides. The point to remember is simple: the system is friendlier to students than the internet makes it sound, but none of it happens automatically. You have to claim it.',
        ],
      },
    ],
    faq: [
      {
        q: 'I only work a few hours a week. Do I still pay tax?',
        a: 'Your employer may still withhold small amounts, but if your total for the year stays under $18,200 you owe nothing, and the withheld tax comes back through your tax return.',
      },
      {
        q: 'Does paying tax affect my visa?',
        a: 'Lodging your returns and keeping your tax record clean can only help you. Unlodged returns and ATO debts are the things that cause problems, especially if you later apply for another visa.',
      },
      {
        q: 'Do I pay tax on money from home?',
        a: 'No. Money your family sends you for living costs is not income and is not taxed. Tax applies to money you earn, like wages and delivery app payments.',
      },
    ],
    related: ['tax-residency-international-students', 'tax-free-threshold-international-students', 'tax-refund-international-students'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I read the guide about students paying tax. I have a question.',
  },

  {
    slug: 'tax-residency-international-students',
    title: 'Are international students Australian residents for tax purposes?',
    metaTitle: 'Tax Residency for International Students in Australia',
    description:
      'Most international students on courses longer than 6 months are Australian residents for tax purposes.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'Usually yes. If your course runs longer than 6 months, the ATO generally treats you as an Australian resident for tax purposes. It has nothing to do with citizenship or permanent residency. Residency for tax gives you the $18,200 tax free threshold and the lower resident tax rates.',
    shortAnswer:
      'A course longer than 6 months usually makes you an Australian resident for tax purposes. That gives you the $18,200 tax free threshold. It has nothing to do with citizenship.',
    sections: [
      {
        h: 'Two different meanings of resident',
        body: [
          'The word resident confuses almost everyone, because immigration and the tax office use it differently. For immigration, resident means the right to stay in Australia permanently, and you do not have that on a student visa. For tax, resident just describes how settled your life here is. You can be a temporary visa holder and a tax resident at the same time, and most students are exactly that.',
          'The tax office looks at whether you live in Australia the way people live in their own country. Studying a long course, renting a room, working part time, having a routine. That is enough. Nobody expects you to own property or stay forever.',
        ],
      },
      {
        h: 'The 6 month line',
        body: [
          'The practical rule of thumb is the length of your course. Enrolled in a course that runs longer than 6 months, like a degree, a diploma or a long VET program? The ATO generally treats you as a resident for tax purposes from the time you settle in.',
          'On a short course under 6 months, the picture flips. You are usually a foreign resident for tax, which means no tax free threshold and a higher rate from the first dollar. This catches some English course students by surprise, so if you are on a short course and planning to work, it is worth checking your situation before your first tax return rather than after.',
        ],
      },
      {
        h: 'What residency is worth in dollars',
        body: [
          'Residency is not a technicality. It is the single most valuable fact in your tax life here. A resident pays zero on the first $18,200 each year, then 16% on the band above it. A foreign resident pays 30% from the first dollar. On $20,000 of wages, the difference is thousands of dollars.',
          'It also unlocks the low income tax offset, which wipes out up to $700 of tax for people earning under $66,667. Put together, a typical part time student who is a resident often owes nothing at all for the year.',
        ],
      },
      {
        h: 'Arriving or leaving part way through the year',
        body: [
          'Residency can start and stop mid year. If you arrived in February, you were not a resident in the months before that, and your tax free threshold for that first year is adjusted for the months you were here. The same happens in reverse in the year you leave for good.',
          'These part year returns are the ones students most often get wrong on their own, in both directions. Claiming the full threshold when only part applies causes ATO letters. Missing the months you are entitled to costs refund money. Either way, the arrival year and the departure year are the two returns worth having checked properly.',
        ],
      },
    ],
    faq: [
      {
        q: 'How do I tell the ATO I am a resident?',
        a: 'You declare it in your tax return, and your employer asks the same question on the form you fill when you start a job. Answer as a resident for tax purposes if your course is longer than 6 months and you have settled here.',
      },
      {
        q: 'I extended my short course. Am I a resident now?',
        a: 'Possibly, from the time your stay became longer term. Extensions change the picture, and your return needs to reflect the change. This is worth checking with someone rather than guessing.',
      },
      {
        q: 'Does residency for tax help me get permanent residency?',
        a: 'No, they are separate systems. Tax residency affects only how you are taxed. It neither helps nor hurts a migration application, though a clean tax record is always a good look.',
      },
    ],
    related: ['do-international-students-pay-tax-in-australia', 'tax-free-threshold-international-students', 'how-much-tax-do-international-students-pay'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I have a question about my tax residency.',
  },

  {
    slug: 'tax-free-threshold-international-students',
    title: 'Do international students get the $18,200 tax free threshold?',
    metaTitle: 'The $18,200 Threshold for Students',
    description:
      'International students who are residents for tax purposes get the full $18,200 tax free threshold.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'Yes, if you are a resident for tax purposes, which most students on courses longer than 6 months are. The first $18,200 you earn each tax year is tax free. In your arrival year the threshold is smaller because it is adjusted for the months you were in Australia.',
    shortAnswer:
      'Students who are tax residents get the full $18,200 tax free threshold, the same as any Australian worker. In your first year it is scaled to the months since you arrived.',
    sections: [
      {
        h: 'What the threshold actually means',
        body: [
          'The tax free threshold is the amount you can earn in a tax year, 1 July to 30 June, before any income tax applies. For 2025-26 it is $18,200. Earn $18,000 across the whole year and your income tax bill is zero. Earn $25,000 and only the $6,800 above the line is taxed, starting at 16%.',
          'This is the same threshold Australian citizens get. There is no special smaller version for students. Residency for tax purposes is the only key that opens it, and a course longer than 6 months usually turns that key.',
        ],
      },
      {
        h: 'How to claim it at work',
        body: [
          'When you start a job you fill in a TFN declaration for your employer. One question asks whether you want to claim the tax free threshold. Answer yes at your main job. Your employer then withholds tax as if your first $18,200 for the year is tax free, which keeps your weekly pay higher.',
          'If you answer no by mistake, your employer withholds much more tax than needed. Students do this surprisingly often, usually out of caution. The money is not lost, it comes back at tax time, but there is no reason to give the ATO an interest free loan all year.',
        ],
      },
      {
        h: 'The second job rule',
        body: [
          'You can only claim the threshold with one employer at a time, normally the one who pays you the most. At a second job you answer no, and that employer withholds at a higher rate from every dollar.',
          'This feels unfair but fixes itself. Your tax return adds all your jobs together and applies one threshold to the total. If the second job over withheld, the extra comes back as part of your refund. What you must not do is claim the threshold at two jobs at once, because then too little is withheld and the return ends with a bill instead of a refund.',
        ],
      },
      {
        h: 'Your first year is different',
        body: [
          'In the year you arrive, the threshold is not the full $18,200. It is a base of $13,464 plus a share of the rest for the months you were a resident. Arrive in January and your first year threshold lands around $15,700 rather than $18,200.',
          'This is one of the most common mistakes in first tax returns. Claiming the full threshold in a part year can trigger an ATO adjustment later. Getting the number right the first time keeps your record clean and your refund safe.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the threshold per job or in total?',
        a: 'In total. All your income for the year is added together and one threshold of $18,200 applies to the sum, no matter how many jobs or apps it came from.',
      },
      {
        q: 'Does ABN income count toward the threshold?',
        a: 'Yes. Wages and ABN income go into the same total. The difference is that nobody withholds tax from ABN income during the year, so tax on it is settled in your return.',
      },
      {
        q: 'What if I earn exactly $18,200?',
        a: 'Your income tax is zero, and everything your employers withheld during the year should come back to you when you lodge.',
      },
    ],
    related: ['do-international-students-pay-tax-in-australia', 'how-much-tax-do-international-students-pay', 'tax-refund-international-students'],
    serviceLink: { href: '/calculator', label: 'Estimate your refund with the calculator' },
    waContext: 'I have a question about the tax free threshold.',
  },

  {
    slug: 'how-much-tax-do-international-students-pay',
    title: 'How much tax do international students pay in Australia?',
    metaTitle: 'International Student Tax Rates in Australia',
    description:
      'The 2025-26 resident tax rates for international students: zero up to $18,200, then 16%, 30% and up.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'A student who is a resident for tax purposes pays nothing on the first $18,200 earned in 2025-26, then 16 cents per dollar up to $45,000, and 30 cents per dollar above that. With the low income tax offset, a typical part time student earning under about $22,500 pays no income tax at all.',
    shortAnswer:
      'Resident students pay 0% up to $18,200, then 16% up to $45,000. With the low income offset, part time earnings under about $22,500 usually mean zero tax for the year.',
    sections: [
      {
        h: 'The 2025-26 resident tax rates',
        body: [
          'For the tax year from 1 July 2025 to 30 June 2026, residents pay nothing on income up to $18,200. From $18,201 to $45,000 the rate is 16 cents per dollar. From $45,001 to $135,000 it is 30 cents. Higher bands exist but very few students reach them.',
          'The rates are marginal, which means each rate only applies to the dollars inside its band. Earning $30,000 does not mean 16% of everything. It means zero on the first $18,200 and 16% only on the $11,800 above it, which is $1,888 before offsets.',
        ],
      },
      {
        h: 'The offset that wipes out small tax bills',
        body: [
          'On top of the threshold sits the low income tax offset. It cuts up to $700 off your tax if you earn $37,500 or less, and it shrinks gradually to nothing at $66,667. You do not apply for it. It is applied automatically when your return is processed.',
          'The practical effect: the $1,888 bill in the example above becomes $1,188. And a student earning around $22,500 or less ends the year owing nothing at all, because the offset covers the entire bill. This is why so many student tax returns end in a full refund of whatever was withheld.',
        ],
      },
      {
        h: 'What you see on your payslip',
        body: [
          'During the year your employer withholds tax from each payslip using standard tables. The tables assume your weekly pay continues all year, which for students is rarely true. Exam weeks, semester breaks and changing shifts make student income bumpy, and bumpy income almost always means over withholding.',
          'That is not a problem, it is a pending refund. The tax return at the end of the year compares what was withheld with what you actually owed on your real total, and pays back the difference.',
        ],
      },
      {
        h: 'When students pay more than these rates',
        body: [
          'Two situations push the numbers up. Students on courses shorter than 6 months are usually foreign residents for tax, which means no threshold and 30 cents from the first dollar. And any student who never gives their employer a TFN gets taxed at the top rate of 45%. You avoid this by giving your employer the number within 28 days of starting.',
          'One thing that usually does not apply is the 2% Medicare levy. Students with OSHC can claim an exemption from it with a Medicare Entitlement Statement, which is covered in its own guide.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much tax on $25,000 a year?',
        a: 'For a resident student in 2025-26, roughly $1,088 income tax and less if the Medicare levy exemption applies. Most of it was probably already withheld from your payslips, so the return settles the small difference either way.',
      },
      {
        q: 'Is delivery app income taxed at a different rate?',
        a: 'No, the same rates apply. The difference is that no one withholds during the year, so the tax on ABN income arrives as a bill with your return unless you put money aside.',
      },
      {
        q: 'Do these rates change every year?',
        a: 'The bands and rates are set by parliament and do change from time to time. The figures here are for 2025-26, and we update this page each tax year.',
      },
    ],
    related: ['tax-free-threshold-international-students', 'tax-residency-international-students', 'tax-refund-international-students'],
    serviceLink: { href: '/calculator', label: 'Run your numbers in the calculator' },
    waContext: 'I have a question about how much tax I should be paying.',
  },

  {
    slug: 'tax-refund-international-students',
    title: 'Can international students get a tax refund in Australia?',
    metaTitle: 'Tax Refunds for International Students in Australia',
    description:
      'Most working international students get a tax refund because employers withhold more than students actually owe.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'Yes, and most working students do. Employers withhold tax from every payslip as if your pay continues all year. Student income rarely works that way, so too much is withheld. When you lodge your tax return the extra comes back, often the full amount withheld if you earned under $18,200.',
    shortAnswer:
      'Most working students get a refund. If you earned under $18,200 as a tax resident, everything your employer withheld normally comes back when you lodge your return.',
    sections: [
      {
        h: 'Where refunds come from',
        body: [
          'A refund is not a bonus or a government gift. It is your own money coming back. All year your employer withholds tax from each payslip based on tables that assume steady, full year income. Students work irregular hours around study, which makes the assumption wrong in your favour.',
          'When the year ends on 30 June, your tax return puts the real numbers side by side: what you actually earned, what you actually owed on it, and what was withheld along the way. Withheld more than owed? The difference is refunded to your Australian bank account.',
        ],
      },
      {
        h: 'The classic student refund',
        body: [
          'The most common case is simple. A student earns, say, $14,000 across the year at a cafe. Because some weeks were busy, the employer withheld $1,500 in tax over the year. But $14,000 is under the $18,200 threshold, so the true tax bill is zero. The full $1,500 comes back.',
          'Bigger versions of the same story happen to students who forgot to claim the tax free threshold at work, who had tax withheld at 45% while waiting too long to hand over a TFN, or who worked a second job where higher withholding applies. In each case the over withheld tax is sitting with the ATO waiting to be claimed.',
        ],
      },
      {
        h: 'What can make the refund bigger',
        body: [
          'Two additions are worth checking every year. The Medicare levy exemption returns 2% of your income if you have OSHC and get a Medicare Entitlement Statement, which is a few hundred dollars for a typical student. And genuine work expenses, like a required uniform, equipment for delivery riding or the work share of your phone, reduce your taxable income.',
          'Be careful with anyone promising huge refunds from expenses. Tuition fees are generally not deductible for international students, and inventing deductions is the fastest way to turn a refund into an audit. Real expenses with receipts, nothing more, and the refund is yours to keep.',
        ],
      },
      {
        h: 'How and when to claim',
        body: [
          'Refunds are claimed by lodging a tax return after 30 June. Employers finalise their payroll data in July, so from mid July your income figures flow into the tax system automatically. Lodging yourself is due by 31 October, while lodging through a registered tax agent usually allows longer.',
          'Once lodged, most refunds arrive within about two weeks. Past years are not lost either. Never lodged for earlier years you worked? Those returns can still go in, and refunds waiting inside them can still be claimed.',
        ],
      },
    ],
    faq: [
      {
        q: 'How big is a typical student refund?',
        a: 'It depends entirely on what was withheld. Students under the threshold often get back everything withheld, commonly a few hundred to a couple of thousand dollars. The calculator on this site gives you an estimate in a minute.',
      },
      {
        q: 'Can the refund go to an overseas bank account?',
        a: 'The ATO pays refunds to Australian bank accounts. Leaving Australia? Keep your Australian account open until the refund lands, or talk to us about the options before you close it.',
      },
      {
        q: 'Can I get a refund if I am on an ABN?',
        a: 'ABN income has no withholding, so there is nothing to refund from it. But many students mix ABN work with regular wage jobs, and the wage side often still produces a refund.',
      },
    ],
    related: ['tax-free-threshold-international-students', 'how-much-tax-do-international-students-pay', 'do-international-students-pay-tax-in-australia'],
    serviceLink: { href: '/calculator', label: 'Estimate your refund now' },
    waContext: 'I want to check if I have a refund waiting.',
  },
]
