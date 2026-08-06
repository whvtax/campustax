import type { Guide } from '../types'
const UPDATED = '15 July 2026'
export const batch3Guides: Guide[] = [
  {
    slug: 'what-can-international-students-claim-on-tax',
    title: 'What can international students claim on tax?',
    metaTitle: 'Tax Deductions for International Students',
    description:
      'The deductions that actually apply to working students: uniforms, gear, the work share of your phone, travel between jobs.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'Students can claim genuine costs of earning their income: a required uniform and its laundry, safety gear, tools for the job, the work share of a phone plan, and travel between two jobs on the same day. Tuition fees and OSHC are generally not deductible for international students.',
    shortAnswer:
      'Claim real work costs: uniforms, safety gear, work tools, the work share of your phone, travel between jobs. Tuition fees and OSHC are generally not deductible.',
    sections: [
      {
        h: 'The rule behind every deduction',
        body: [
          'A deduction is a cost of earning your income, not a cost of living your life. If you spent money because your work required it, and your employer did not pay you back, it probably deducts. If you would have spent it anyway, it probably does not.',
          'Every claim also needs proof. A photo of a receipt in a folder on your phone counts. A vague memory in July does not. Small claims under $300 in total have relaxed record rules, but the habit of keeping receipts pays for itself the first time you buy work boots.',
        ],
      },
      {
        h: 'What working students genuinely claim',
        body: [
          'The classics for student jobs: a compulsory uniform with a logo and the cost of washing it, non slip shoes for hospitality, hi vis and safety boots for warehouse and site work, and tools or equipment your job requires. Delivery riders add their bike or scooter, repairs, a helmet, and insulated bags.',
          'The work share of your phone and internet counts when your job actually uses them, rostering apps, delivery apps, calls to the boss. The key word is share: if a third of your phone use is work, a third of the plan deducts. Claiming 100% of a phone you live on invites questions.',
          'Travel from home to work does not deduct, that is commuting. Travel between job one and job two on the same day does. Students juggling a cafe shift and an evening warehouse shift often miss this one entirely.',
        ],
      },
      {
        h: 'The big things you cannot claim',
        body: [
          'Tuition fees are the painful one. Course fees for the degree that brought you to Australia are generally not deductible, because the course is not connected to your current cafe or warehouse income, it is preparation for a future career. Self education only deducts when the study directly upgrades your existing job, which almost never describes an international student degree.',
          'Also out: OSHC premiums, rent, groceries, everyday clothes even if you only wear them to work, and visa costs. Anyone promising big refunds built on these is setting you up for an amended assessment later, and the refund goes back with interest.',
        ],
      },
      {
        h: 'What a deduction is actually worth',
        body: [
          'A deduction reduces your taxable income, not your tax bill dollar for dollar. Spend $200 on safety boots and, at the 16% student band, your tax drops by $32. Worth claiming, not worth inventing.',
          'And if your income is under the tax free threshold, deductions change nothing at all, because your tax is already zero. That is most first year students. The habit still matters, because incomes grow, and by the year you cross the threshold the receipts routine is second nature.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I claim my laptop?',
        a: 'Only the share used for paid work, not for study. A laptop used for your degree and Netflix with occasional rostering does not support much of a claim. One genuinely used for freelance or delivery admin supports its work share.',
      },
      {
        q: 'Can I claim without receipts?',
        a: 'Total work expense claims up to $300 have relaxed record requirements, but you still need to show how you calculated the claim. Above that, records are required. Photos of receipts are fine.',
      },
      {
        q: 'Are donations deductible?',
        a: 'Donations of $2 or more to registered Australian charities with deductible gift recipient status deduct, with a receipt. The bucket collection at the station usually has no receipt, so it does not.',
      },
    ],
    related: ['tax-refund-international-students', 'abn-for-delivery-riders-students', 'how-much-tax-do-international-students-pay'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I have a question about what I can claim.',
  },
  {
    slug: 'lodge-tax-return-under-18200',
    title: 'Do I need to lodge a tax return if I earn less than $18,200?',
    metaTitle: 'Earned Under $18,200? Whether You Still Need to Lodge',
    description:
      'Under the tax free threshold you owe no tax, but lodging is often still required and usually profitable: any tax withheld comes back.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'Often yes, and usually you want to. If any tax was withheld from your pay during the year, lodging is required, and it is how you get that money back. Earned under the threshold with zero tax withheld? A short non lodgment advice to the ATO usually replaces the return.',
    shortAnswer:
      'Under $18,200 with tax withheld: lodge, the withheld tax comes back. Under the threshold with nothing withheld: a short non lodgment advice usually covers you.',
    sections: [
      {
        h: 'Two different questions hiding in one',
        body: [
          'Owing tax and needing to lodge are separate things. Under $18,200 as a resident, your tax bill is zero, that part is settled. But the ATO still wants the year closed out, either with a return or with a formal note saying none was needed.',
          'The deciding fact is withholding. Look at your payslips or your income statement in myGov. Any amount in the tax withheld column means a return is required, and happily, required and profitable at the same time.',
        ],
      },
      {
        h: 'Why lodging under the threshold pays',
        body: [
          'Withheld tax on income under the threshold is money the system owes you back, every dollar of it. A student who earned $15,000 and had $1,300 withheld gets the whole $1,300 as a refund. The return is not paperwork for its own sake, it is literally the claim form for your own money.',
          'Refunds only move when you lodge. Skip the return and the money just sits with the ATO, for years if you let it. Students leave millions unclaimed this way, mostly because someone told them earning under the threshold means tax does not concern them.',
        ],
      },
      {
        h: 'When a non lodgment advice is enough',
        body: [
          'No income at all, or a small income with zero withheld, exempt scholarship only, or savings from home? Then a full return may be unnecessary, and a non lodgment advice does the job. It is a short notice telling the ATO you did not need to lodge for the year, submitted through myGov or by an agent.',
          'Do not just stay silent. A missing year with no explanation sits in your record as a question mark, and the ATO eventually asks about it, sometimes years later when you least want letters. The advice closes the year cleanly in two minutes.',
        ],
      },
      {
        h: 'Why a clean record matters extra for visa holders',
        body: [
          'Your tax record follows you through every future Australian plan: a 485 application, permanent residency one day, even some employers who check. Outstanding returns and unexplained gaps are the things that surface at the worst moments.',
          'The rule of thumb that keeps everything tidy: every year you are in Australia ends with either a lodged return or a non lodgment advice. Never with nothing.',
        ],
      },
    ],
    faq: [
      {
        q: 'I earned $8,000 and no tax was withheld. Do I lodge?',
        a: 'Probably not a full return, a non lodgment advice likely covers it. Worth a quick check of your income statement first to confirm nothing was withheld anywhere.',
      },
      {
        q: 'I forgot to lodge last year and had tax withheld. Too late?',
        a: 'Not at all. Late returns can be lodged and old refunds claimed. Sorting it now is far better than letting the gap age in your record.',
      },
      {
        q: 'Does lodging cost me anything if I do it myself?',
        a: 'Lodging through myTax on myGov is free. The trade is your time and the risk of missing things like part year thresholds or the Medicare exemption. Under the threshold with one employer, myTax is often fine.',
      },
    ],
    related: ['tax-refund-international-students', 'tax-free-threshold-international-students', 'when-is-the-tax-deadline-australia'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I earned under the threshold and am not sure if I need to lodge.',
  },
  {
    slug: 'when-is-the-tax-deadline-australia',
    title: 'When is the tax return deadline in Australia?',
    metaTitle: 'Australian Tax Deadline for Students (2025-26)',
    description:
      'Tax year ends 30 June. Self lodgers are due 31 October. Signed up with a registered agent before that date, you usually get until around May next year.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'The Australian tax year runs 1 July to 30 June. Lodging yourself, the deadline is 31 October. Registered with a tax agent before 31 October, you usually get an extended deadline, often until May of the following year. Refunds can be claimed as soon as lodgment opens in July.',
    shortAnswer:
      'Tax year ends 30 June. Self lodgers are due 31 October. Signed up with a registered agent before that date, you usually get until around May next year.',
    sections: [
      {
        h: 'The calendar every student should know',
        body: [
          'Australia runs its tax year from 1 July to 30 June, not January to December. The year that just ended becomes lodgeable from July, once employers finalise payroll data, usually by mid July.',
          'From there, two deadlines exist. Lodging on your own through myGov: 31 October. On the books of a registered tax agent before 31 October: an extended program deadline, commonly around May of the next year. The extension belongs to agent clients, which is one of the quieter perks of using one.',
        ],
      },
      {
        h: 'Early birds and why patience wins in July',
        body: [
          'Refund chasers rush to lodge on 1 July every year, and every year many of them end up amending. Employer data, bank interest and platform income flow into the ATO through July. Lodge before your data is complete and the missing pieces surface later as corrections.',
          'The sweet spot for most students is late July onward, once the income statement shows as tax ready. The refund still arrives within about two weeks of lodging, you just skip the amendment round.',
        ],
      },
      {
        h: 'Missing the deadline',
        body: [
          'Miss 31 October with a return owing and the ATO can charge a failure to lodge penalty that grows with time, plus interest on any debt. In practice the ATO is gentler with refund cases, penalties usually target people who owe.',
          'The real cost for students is indirect: an unlodged year sits in your record, and refunds inside it stay unclaimed. Behind on a year or three? They can all be lodged late, refunds intact, and the record cleaned up. The worst response to a missed deadline is another year of silence.',
        ],
      },
      {
        h: 'Leaving Australia changes the calendar',
        body: [
          'Departing permanently before the tax year ends? You do not have to wait for July. Early lodgment exists for people leaving Australia for good, letting the final return go in before departure so the refund is settled while your Australian bank account is still open.',
          'This pairs naturally with the super claim, which also fires around departure. Leavers who plan both together fly out with everything in motion instead of chasing paperwork from another continent.',
        ],
      },
    ],
    faq: [
      {
        q: 'When do refunds start arriving?',
        a: 'Lodgment opens in July and most refunds pay out about two weeks after lodging. Lodge late July and the money typically lands in August.',
      },
      {
        q: 'What exactly gets me the agent extension?',
        a: 'Being registered as a client of a registered tax agent before 31 October. Join in December and the standard deadline has already passed, so the timing of signing up matters.',
      },
      {
        q: 'Is there a deadline for claiming old refunds?',
        a: 'Returns for past years can generally still be lodged and refunds claimed. The sooner the better, both for the money and for your record, since very old years get harder to document.',
      },
    ],
    related: ['lodge-tax-return-under-18200', 'tax-refund-international-students', 'do-international-students-pay-tax-in-australia'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I have a question about the tax deadline.',
  },
  {
    slug: 'tfn-or-abn-which-one',
    title: 'TFN or ABN: which one do I need as a student?',
    metaTitle: 'TFN vs ABN for International Students',
    description:
      'TFN for jobs with a boss and payslips, which is most student work. ABN only for working for yourself, like delivery apps. Both are free from the government.',
    cluster: 'TFN and ABN',
    updated: UPDATED,
    answer:
      'Almost every student needs a TFN, the personal number employers use to tax your wages correctly. You only add an ABN when you work for yourself, most commonly food delivery. Employee jobs use the TFN, self employed work uses the ABN, and many students end up with both.',
    shortAnswer:
      'TFN for jobs with a boss and payslips, which is most student work. ABN only for working for yourself, like delivery apps. Both are free from the government.',
    sections: [
      {
        h: 'Two numbers, two relationships',
        body: [
          'The TFN identifies you as a person in the tax system. Every employee needs one, it follows you for life, and your employer uses it to withhold the right tax from each payslip and pay super for you.',
          'The ABN identifies a business. Deliver for an app or freelance, and legally you are a one person business selling services. The platform pays your ABN, withholds nothing, and leaves tax and records to you. Same human, different hat.',
        ],
      },
      {
        h: 'The quick test',
        body: [
          'Ask who controls the work. A roster, an hourly wage, a manager telling you when and how to work: employee, TFN territory, and the employer owes you super and minimum wage protections on top.',
          'Choosing your own hours, using your own gear, paid per task rather than per hour: contractor, ABN territory, delivery apps being the textbook case. Freelance design, private tutoring you arrange yourself and market stall selling sit on the same side.',
        ],
      },
      {
        h: 'The trick to refuse',
        body: [
          'Some employers tell new students to get an ABN and invoice them, for what is plainly an employee job with shifts and a boss. The motive is simple: it shifts super, insurance and withholding off their books and onto yours.',
          'This is called sham contracting, it is illegal, and the person it hurts is you: no super, no minimum wage protection and a tax bill you were not warned about. A cafe, cleaning company or warehouse asking for an ABN as a condition of ordinary shift work is a signal to walk away or push back.',
        ],
      },
      {
        h: 'Living with both',
        body: [
          'Plenty of students run a wage job and delivery work side by side, TFN and ABN together. It works fine with one habit: treat the ABN income differently, because nothing was withheld from it. A slice of every payout goes aside for tax, receipts for gear and phone get kept, and both streams meet in one tax return.',
          'Both numbers are free from the government, the TFN from the ATO and the ABN from the Australian Business Register. Anyone charging you for either is a middleman with nothing to sell.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I get an ABN without a TFN?',
        a: 'The ABN application asks for your TFN, so sort the TFN first. First week in Australia: TFN application. ABN only when self employed work actually appears.',
      },
      {
        q: 'Does having an ABN change my tax rates?',
        a: 'No. The same thresholds and rates apply to your combined income. The difference is collection: wages are taxed as you earn, ABN income is settled in the return.',
      },
      {
        q: 'Do I need to cancel my ABN when I stop delivering?',
        a: 'It is good practice to cancel an ABN you no longer use, which takes minutes online. A dormant ABN can trigger reminders and expectations of business activity.',
      },
    ],
    related: ['how-to-get-tfn-international-student', 'abn-for-delivery-riders-students', 'tax-on-abn-income-students'],
    serviceLink: { href: '/tfn', label: 'Our TFN service' },
    waContext: 'I am not sure if I need a TFN or an ABN.',
  },
  {
    slug: 'tax-on-abn-income-students',
    title: 'How much tax do I pay on ABN income as a student?',
    metaTitle: 'Tax on ABN and Delivery Income for Students',
    description:
      'ABN income is taxed at the same resident rates as wages, but nothing is withheld during the year.',
    cluster: 'TFN and ABN',
    updated: UPDATED,
    answer:
      'The same rates as everyone else: nothing up to $18,200 of total income for a resident, then 16% and up. The difference is timing. No one withholds tax from ABN payouts during the year, so the tax on your delivery profit arrives as one bill with your tax return.',
    shortAnswer:
      'ABN income uses the normal resident tax rates, but nothing is withheld along the way. Put roughly 20 cents per dollar aside and the tax return holds no surprises.',
    sections: [
      {
        h: 'Same rates, opposite experience',
        body: [
          'Tax law does not care whether a dollar came from a payslip or a delivery app. Wages and ABN profit go into one total, the $18,200 threshold applies once, and the marginal rates climb from there. A student earning $10,000 in wages and $8,000 of delivery profit is taxed exactly like one earning $18,000 in wages.',
          'The experience differs because of collection. Wages arrive with tax already taken. ABN payouts arrive whole, which feels wonderful in the moment and hurts in July, when the whole year of untaxed income settles at once.',
        ],
      },
      {
        h: 'A delivery rider, by the numbers',
        body: [
          'Meet a student who earned $14,000 from a cafe job, with $900 withheld, plus $9,000 from deliveries with $1,500 of real expenses, bike, helmet, phone share. Delivery profit is $7,500, total taxable income $21,500.',
          'Tax on $21,500 for a resident in 2025-26 is about $528 after the low income offset, and the Medicare exemption typically removes the levy for students. With $900 already withheld from wages, this rider actually gets money back. The same rider without the wage job would owe the $528 as a bill, which is exactly what the put aside account is for.',
        ],
      },
      {
        h: 'The put aside rule',
        body: [
          'The only ABN habit that matters: move a slice of every payout to a separate account the day it lands, and treat it as the tax office money. Around 20 cents per dollar is a comfortable cushion for a typical student mix, more if delivery is your only income and it is growing.',
          'Students who do this open their assessment in July with mild interest. Students who do not, open it with a payment plan. Same tax either way, entirely different year.',
        ],
      },
      {
        h: 'Records make the difference legal and smaller',
        body: [
          'Expenses only reduce the bill if you can show them. Keep the receipts for gear, repairs and bags, note the work share of your phone plan, and if you drive, keep a logbook for the car share. Every documented dollar of expense saves you its slice of tax.',
          'Skip the temptation to guess or inflate. Delivery platforms report income to the ATO, so the income side of your return is already known. Clean expenses on top of known income is a return that sails through.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does the platform report my income to the ATO?',
        a: 'Yes. Delivery and gig platforms report payouts under data sharing rules, so the ATO already has your income figure. Your return needs to match it.',
      },
      {
        q: 'Do I pay GST on delivery income?',
        a: 'Not unless turnover passes $75,000 a year. Passenger rideshare differs, needing GST from the first dollar, but food and parcel delivery under the cap stays GST free.',
      },
      {
        q: 'Can I pay the tax in instalments?',
        a: 'After your first year with a bill, the ATO may move you onto quarterly instalments for the next year, which spreads the pain automatically. A payment plan is also possible for an existing bill.',
      },
    ],
    related: ['abn-for-delivery-riders-students', 'tfn-or-abn-which-one', 'what-can-international-students-claim-on-tax'],
    waContext: 'I earn ABN income and want to understand my tax.',
  },
  {
    slug: 'do-international-students-get-superannuation',
    title: 'Do international students get superannuation?',
    metaTitle: 'Superannuation Rights for International Students',
    description:
      'Yes. Employers must pay 12% super on top of wages for students, the same as for Australian workers.',
    cluster: 'Superannuation',
    updated: UPDATED,
    answer:
      'Yes. From 1 July 2025 employers must pay 12% of your ordinary earnings into a super fund for you, on top of wages, the same as for any Australian worker. Visa status does not reduce it. The common problem is not the rule but employers who quietly skip paying.',
    shortAnswer:
      'Students get the same 12% employer super as Australian workers, on top of wages. Check your fund balance against your payslips, because not every employer pays what they print.',
    sections: [
      {
        h: 'Your super rights in one paragraph',
        body: [
          'Superannuation is retirement savings your employer must fund, currently 12% of ordinary earnings, paid into a fund in your name at least quarterly. It applies to casuals, part timers and visa holders alike, from the first dollar of ordinary wages. Your visa does not shrink it, your age rarely affects it as a working adult, and it is not optional for the employer.',
          'It is also not charity, and it is not money you will never see. Leave Australia permanently and the balance follows you out as a DASP payment, taxed at the student rate of 35%.',
        ],
      },
      {
        h: 'Printed on the payslip is not the same as paid',
        body: [
          'Payslips show the super your employer is supposed to contribute. The only place that shows what actually arrived is your super fund account. The gap between the two is where students lose money, because contributions are paid quarterly and a struggling or dodgy employer simply skips quarters.',
          'The check takes five minutes: log into your fund, or see all your accounts through myGov linked to the ATO, and compare a few months of contributions against payslips. Do it twice a year and no employer can drift far.',
        ],
      },
      {
        h: 'One fund, not five',
        body: [
          'Tell every new employer your existing fund details when you start, on the choice form they give you. Stay silent and the employer may open yet another account in a default fund, and every extra account leaks fees from a small balance.',
          'Already have several accounts from several jobs? They can be consolidated into one through myGov in minutes, fees stop multiplying, and your eventual departure claim gets much simpler because there is one balance to claim instead of a scavenger hunt.',
        ],
      },
      {
        h: 'When the employer did not pay',
        body: [
          'Unpaid super is common enough that the ATO runs a formal process for it. Report the shortfall with your payslips as evidence, and the ATO pursues the employer, with penalties on top. Students are exactly the workers dodgy employers bet will never check or complain.',
          'Time matters twice here. Evidence is easiest to gather while you still work there, and any recovery should ideally land before you leave Australia so it joins your DASP claim. Suspect a gap, check now rather than at the airport.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does super come out of my pay?',
        a: 'No, the 12% is on top of your wage, paid by the employer. An employer who deducts it from your agreed pay rate is doing it wrong.',
      },
      {
        q: 'Is there a minimum I must earn before super applies?',
        a: 'The old $450 per month minimum was abolished, so super now applies from low earnings too. Very young workers under 18 need 30 hours a week, but that rarely affects university students.',
      },
      {
        q: 'Can I choose my own super fund?',
        a: 'Yes, every employee can nominate their fund on the choice form. Picking one low fee fund and giving it to every employer keeps your money in one place.',
      },
    ],
    related: ['super-refund-leaving-australia', 'how-much-tax-super-leaving-australia', 'two-jobs-international-student'],
    serviceLink: { href: '/superannuation', label: 'Our super refund service' },
    waContext: 'I have a question about my superannuation.',
  },
]
