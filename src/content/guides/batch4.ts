import type { Guide } from '../types'

const UPDATED = '18 July 2026'

export const batch4Guides: Guide[] = [
  {
    slug: 'what-happens-if-i-dont-lodge',
    title: 'What happens if an international student does not lodge a tax return?',
    metaTitle: 'Not Lodging a Tax Return: What It Costs a Student',
    description:
      'Penalties, interest, unclaimed refunds and a question mark on your record that surfaces during visa applications.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'Three things build up: a possible failure to lodge penalty that grows over time, interest on any tax owing, and a gap in your record that surfaces at bad moments, like a 485 or PR application. If a refund was waiting, it simply stays unclaimed. All of it is fixable by lodging late.',
    shortAnswer:
      'Skipping returns risks penalties and leaves your own refund unclaimed, and the gap shows up later in visa season. Late lodgment fixes all of it, and sooner is cheaper than later.',
    sections: [
      {
        h: 'What the ATO actually does',
        body: [
          'A missed 31 October deadline can trigger a failure to lodge penalty, charged in blocks that grow the longer the return stays outstanding, plus interest if you owed tax. In practice the ATO aims its penalties at people with tax owing. Students owed a refund usually escape the fines, but not the other consequences.',
          'The ATO also knows more than students expect. Employers, banks and delivery platforms all report under your TFN, so the system can see there was income and no return. Reminder letters follow, and ignoring them is what escalates things.',
        ],
      },
      {
        h: 'The quieter costs',
        body: [
          'For a visa holder the record matters more than the penalty. Visa applications, a 485 after graduation, and one day maybe permanent residency all sit more comfortably on a clean tax history. An outstanding return is exactly the kind of loose end that surfaces during processing, years after it was easy to fix.',
          'And the money: students who skip lodging are usually the ones owed refunds, because their employers over withheld. Not lodging means personally choosing to leave your own money with the tax office. Several missed years can quietly add up to thousands.',
        ],
      },
      {
        h: 'How to fix missed years',
        body: [
          'Late returns can be lodged for past years, and refunds inside them can still be claimed. The process is the same as a normal return, just with older data, which the ATO mostly still holds through employer reporting. One catch: very old years get harder to document, so momentum beats perfection.',
          'Behind and owing? Lodging voluntarily before the ATO chases you is the single best move, because penalties can be reduced or waived for people who come forward. Either way, the plan is identical: lodge the missing years, close the gaps, and the record resets to clean.',
        ],
      },
    ],
    faq: [
      {
        q: 'I missed one year and had a refund waiting. Am I in trouble?',
        a: 'Almost certainly not. Lodge the late return, claim the refund, and the year closes cleanly. Penalties rarely apply where the ATO owed you money.',
      },
      {
        q: 'Can unlodged returns stop me leaving Australia?',
        a: 'No one stops you at the airport, but the loose end follows you. Lodging from overseas is possible and messier. Cleaning up before departure is easier every single time.',
      },
      {
        q: 'How many years back can I lodge?',
        a: 'There is no simple cutoff. Old years can generally still be lodged, though documentation gets harder with time. Start with the most recent and work back.',
      },
    ],
    related: ['when-is-the-tax-deadline-australia', 'lodge-tax-return-under-18200', 'tax-refund-international-students'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I have unlodged tax returns and want to fix it.',
  },

  {
    slug: 'first-year-in-australia-tax',
    title: 'I just arrived in Australia. Do I pay tax in my first year?',
    metaTitle: 'First Year Tax for New International Students',
    description:
      'Your first part year in Australia has its own rules: a reduced tax free threshold, residency from when you settle, and a first return that sets your record.',
    cluster: 'Tax basics and residency',
    updated: UPDATED,
    answer:
      'Yes, tax applies from your first shift, but the settings are friendlier than most new arrivals expect. Once you settle into a course longer than 6 months you are usually a resident for tax purposes, with a tax free threshold scaled to the months since you arrived.',
    shortAnswer:
      'Tax starts with your first job, but so does your part year tax free threshold. Get a TFN in week one, claim the threshold at your main job, and lodge after 30 June.',
    sections: [
      {
        h: 'Your first month, in the right order',
        body: [
          'Week one: apply for your TFN online, free, once you are physically in Australia. It arrives within 28 days and every job will ask for it. Open an Australian bank account in the same week, since wages and eventually refunds need somewhere to land.',
          'When you start a job, fill the TFN declaration as a resident for tax purposes if your course runs longer than 6 months, and claim the tax free threshold if it is your main job. Those two boxes decide how much of your pay you keep each week.',
        ],
      },
      {
        h: 'The part year threshold',
        body: [
          'The full tax free threshold is $18,200, but arrivals get a scaled version in their first year: a base of $13,464 plus a share of the remainder for the months you were a resident. Land in February and your first year threshold is roughly $15,700.',
          'This matters at your first tax return, not before. Employers withhold normally through the year. The return is where the part year number goes in, and getting it right the first time protects both your refund and your record.',
        ],
      },
      {
        h: 'Your first tax return',
        body: [
          'The tax year ends 30 June, and your first return covers arrival to that date. For most first years it is a happy document: modest income, normal withholding, part year threshold, and often the whole withheld amount coming back as a refund.',
          'It is also the return most worth doing carefully, because first returns set up your details in the system, and because part year rules are exactly where self lodgers stumble. Bring your arrival date, payslips and OSHC details, and the first one becomes the template for every year after.',
        ],
      },
    ],
    faq: [
      {
        q: 'I arrived in March and only worked a little. Do I lodge?',
        a: 'If any tax was withheld, lodge and it likely all comes back. If you earned nothing, a non lodgment advice closes the part year cleanly.',
      },
      {
        q: 'Do I pay tax on the savings I brought with me?',
        a: 'No. Money you brought to fund your studies is not income. Interest it earns in an Australian bank account is income, which is a much smaller matter.',
      },
      {
        q: 'When does my residency for tax start?',
        a: 'Broadly, when you arrive and settle into ordinary life here as a long course student. Your first return states the months, and your arrival date is the anchor document.',
      },
    ],
    related: ['tax-free-threshold-international-students', 'how-to-get-tfn-international-student', 'lodge-tax-return-under-18200'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I just arrived in Australia and have a first year tax question.',
  },

  {
    slug: 'tax-free-threshold-second-job',
    title: 'Should I claim the tax free threshold on my second job?',
    metaTitle: 'Second Job and the Tax Free Threshold',
    description:
      'One threshold, one job. Say no on the second TFN declaration, let the higher withholding ride, and collect the difference back at tax time.',
    cluster: 'Work hours and jobs',
    updated: UPDATED,
    answer:
      'No. Claim the tax free threshold with one employer only, normally the one paying you the most. Your second job withholds tax from every dollar at a higher rate, which usually over collects, and the extra comes back through your tax return. Claiming at both jobs leads to a bill.',
    shortAnswer:
      'One threshold, one job. Say no on the second TFN declaration, let the higher withholding ride, and collect the difference back at tax time.',
    sections: [
      {
        h: 'Why the form asks at every job',
        body: [
          'Each employer runs payroll blind to your other income. The TFN declaration question about the threshold is how you tell each one which role it plays: the main job spreads your $18,200 across its payslips, the second job assumes the threshold is used up elsewhere and withholds from dollar one.',
          'It looks like the second job is taxed more. In truth it is taxed as if its dollars sit on top of your main income, which for the year as a whole is roughly right. Whatever over collection happens along the way returns to you after 30 June.',
        ],
      },
      {
        h: 'The double claim trap',
        body: [
          'Answer yes at two jobs and both employers spread a tax free $18,200 through your payslips, together pretending you have $36,400 of tax free income. You keep more each week, and the difference quietly becomes a debt that lands with your tax return, often several hundred to over a thousand dollars.',
          'Students fall into this innocently, usually by answering yes on autopilot at a new job. The fix takes five minutes: give the second employer an updated declaration with no on the threshold, and withholding corrects from the next pay.',
        ],
      },
      {
        h: 'Choosing which job gets it',
        body: [
          'Give the threshold to the job that pays you the most over the year. That keeps total withholding closest to the truth, which means neither a scary bill nor a giant interest free loan to the tax office.',
          'Jobs change, and the threshold can move with them. Quit your main job and the second one becomes the place to claim it, again through an updated declaration. A February job switch is worth two minutes of paperwork to keep the withholding sensible for the rest of the year.',
        ],
      },
    ],
    faq: [
      {
        q: 'My second job withholds so much. Am I losing that money?',
        a: 'No, it is over collection, not loss. The annual return adds both jobs, applies one threshold to the total, and refunds whatever was withheld beyond your real liability.',
      },
      {
        q: 'I claimed the threshold at both jobs all year. What now?',
        a: 'Expect a bill at lodgment rather than a refund, fix the declaration at one job now, and get your return prepared early so the number is known instead of feared.',
      },
      {
        q: 'Does delivery ABN work count as a second job for this?',
        a: 'No declaration exists for ABN income, nothing is withheld at all. The threshold question only applies between wage jobs. Just remember to put money aside for the ABN side.',
      },
    ],
    related: ['two-jobs-international-student', 'tax-free-threshold-international-students', 'why-is-so-much-tax-taken-from-my-pay'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I have a question about the threshold on my second job.',
  },

  {
    slug: 'unlimited-work-hours-holidays',
    title: 'Can international students work unlimited hours during holidays?',
    metaTitle: 'Unlimited Work Hours in Course Breaks: The Rules',
    description:
      'Official course breaks mean no hour cap at all, and summer is when students earn most. The break must be on your provider’s calendar, not just a quiet week.',
    cluster: 'Work hours and jobs',
    updated: UPDATED,
    answer:
      'Yes. During periods your education provider schedules as official course breaks, semester holidays and the summer break, the 48 hour fortnightly cap does not apply and you can work unlimited hours. Exam periods and self declared quiet weeks are not breaks. The cap returns when the course resumes.',
    shortAnswer:
      'Official course breaks mean no hour cap at all, and summer is when students earn most. The break must be on your provider’s calendar, not just a quiet week.',
    sections: [
      {
        h: 'What counts as an official break',
        body: [
          'The unlimited window follows your education provider’s calendar, not your feelings about the workload. Scheduled semester breaks, the mid year break and the long summer holiday all qualify. Exam weeks do not, they are session time even if you have one exam left. A week when lectures happen to be light is session time too.',
          'Between courses is its own category: finished one course and enrolled to start another, the gap is generally treated as a break, but the details depend on your enrolment status, so confirm with your provider before planning a full time month.',
        ],
      },
      {
        h: 'Summer is a financial strategy',
        body: [
          'Many students build their whole year around the long break: light work in session to protect grades, then full time hours through November to February. Hospitality and retail hire heavily for exactly that window, and a strong summer can fund months of rent.',
          'It is worth saying plainly, because students sometimes fear the opposite: earning a lot in the holidays is completely legal and does not endanger your visa. The cap is about session fortnights, not about how much money you make when the cap is off.',
        ],
      },
      {
        h: 'The tax shape of a big summer',
        body: [
          'Payroll withholding assumes each week repeats all year. A $1,400 summer week gets taxed as if you earn $70,000 a year, which you do not. So heavy break workers accumulate over withholding through the summer, and it comes back as a refund after 30 June.',
          'That makes big summer earners some of the happiest tax return clients: strong income, strong refund. Keep your payslips, note any second employer super account the season created, and the return collects what the summer over paid.',
        ],
      },
    ],
    faq: [
      {
        q: 'Are exam weeks a break?',
        a: 'No. Exams are part of the session, and the 48 hour fortnight cap still applies, even after your last class of the semester.',
      },
      {
        q: 'Can I work full time between finishing one course and starting another?',
        a: 'Often yes, the gap between courses is generally treated as a break, but it hinges on your enrolment. Check with your provider before committing to full time weeks.',
      },
      {
        q: 'Will a big summer income push me into high tax?',
        a: 'Only your yearly total matters. A big summer inside a modest year usually means over withholding during the summer and a refund at tax time.',
      },
    ],
    related: ['how-many-hours-can-international-students-work', 'tax-refund-international-students', 'two-jobs-international-student'],
    serviceLink: { href: '/calculator', label: 'Estimate your refund in the calculator' },
    waContext: 'I have a question about working during the holidays.',
  },

  {
    slug: 'why-is-so-much-tax-taken-from-my-pay',
    title: 'Why did my employer take so much tax from my payslip?',
    metaTitle: 'Too Much Tax on Your Payslip: The Usual Causes',
    description:
      'Heavy withholding almost always has one of four causes: no TFN on file, no threshold claimed, second job rates, or a one off big week.',
    cluster: 'Work hours and jobs',
    updated: UPDATED,
    answer:
      'Employers take too much tax from student pay for four reasons: no TFN on file, which forces top rate withholding, no tax free threshold claimed, second job rates that apply from the first dollar, or one big week taxed as if it repeats all year. All four are fixable, and the extra tax returns to you at tax time.',
    shortAnswer:
      'Big withholding usually means no TFN on file, no threshold claimed, second job rates, or one unusually big week. Fix the setting, and the over collected tax comes back in your return.',
    sections: [
      {
        h: 'Read the payslip like a checklist',
        body: [
          'Compare the tax line with the pay. Withholding near half your pay screams missing TFN, the top rate an employer must apply when 28 days pass without your number. Withholding that feels heavy on a modest wage usually means the threshold is not being applied, either because you answered no or never returned the declaration.',
          'A second job withholding from the first dollar is not an error at all, it is the correct setting when your threshold lives at another employer. And a single painful week after big overtime is just the tables assuming that week repeats forever.',
        ],
      },
      {
        h: 'The fixes, cause by cause',
        body: [
          'Missing TFN: hand your number to payroll today, normal rates resume from the next pay. No threshold at your main job: give an updated TFN declaration answering yes. Second job: leave it, that is how it should work, or move the threshold if this became your bigger job. Big week: nothing to fix, the annual return trues it up.',
          'What none of the causes mean is lost money. Every over withheld dollar sits with the ATO under your TFN and returns through your tax return. The fixes just stop the over collection going forward.',
        ],
      },
      {
        h: 'When it might actually be wrong',
        body: [
          'Sometimes the payslip itself is the problem: an employer taxing you as a foreign resident despite your long course, super deducted from your agreed wage instead of paid on top, or pay below minimum casual rates dressed up as after tax. These are not withholding quirks, they are errors or worse.',
          'Keep every payslip and query anything that looks off in writing. A workplace that cannot explain your payslip is telling you something. And at year end, bring the payslips to your return, where every over collection finally gets counted and claimed.',
        ],
      },
    ],
    faq: [
      {
        q: 'Nearly half my pay disappeared in tax. Why?',
        a: 'Almost certainly no TFN on file with that employer. Provide the number, rates normalise going forward, and the over withheld amount returns via your tax return.',
      },
      {
        q: 'Can I get over withheld tax back before June?',
        a: 'Generally no, the annual return is the mechanism. Fixing the cause now protects the rest of the year, and the return recovers what already happened.',
      },
      {
        q: 'My employer refuses to fix my declaration details. What do I do?',
        a: 'Put the request in writing and keep a copy. Ongoing refusal is a payroll failure worth escalating, and your payslips plus your return still recover the money meanwhile.',
      },
    ],
    related: ['tax-free-threshold-second-job', 'work-before-tfn-arrives', 'tax-refund-international-students'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'Too much tax is being taken from my pay.',
  },

  {
    slug: 'how-to-claim-dasp',
    title: 'How do I claim my DASP after leaving Australia?',
    metaTitle: 'DASP Claim Process for Students, Step by Step',
    description:
      'The DASP claim from start to payout: find every fund, prepare before flying, apply after your visa ends, and receive payment usually within 28 days.',
    cluster: 'Superannuation',
    updated: UPDATED,
    answer:
      'Find all your super accounts, prepare the claim before you fly, then submit it once you have left and your visa has ended or been cancelled. Claims go through the ATO DASP online system to each fund. Funds pay out, minus the 35% student tax, usually within 28 days of a complete claim.',
    shortAnswer:
      'Prepare before flying: list your funds and documents. After departure and visa end, submit the DASP claim, and payment lands within about 28 days, taxed at 35% for students.',
    sections: [
      {
        h: 'Before you fly: the preparation list',
        body: [
          'Everything is easier while you are still in Australia. Find every super account: payslips name the funds your employers used, and myGov linked to the ATO shows all accounts plus any money already swept to the ATO as unclaimed super. Consolidating several small accounts into one now makes the claim single instead of triple.',
          'Gather the documents while local: passport, visa details, fund member numbers, and certified identity copies if your fund requires them. Also decide where the money should land, an Australian account you keep open briefly, or overseas details for funds that pay abroad.',
        ],
      },
      {
        h: 'After departure: the claim itself',
        body: [
          'Two switches must be on: you have left Australia, and your visa has ended or been cancelled. A visa with time remaining blocks the claim, and asking Home Affairs to cancel it after departure is a normal part of the process for early leavers.',
          'The claim runs through the ATO DASP online system, which routes it to each fund with your visa status verified. A complete claim generally pays within 28 days per fund. Incomplete identity documents are the classic delay, which is exactly what the before you fly list prevents.',
        ],
      },
      {
        h: 'What arrives and what to pair it with',
        body: [
          'The fund withholds DASP tax before paying: 35% on super earned on a student visa, so a $6,000 balance pays out $3,900. The payment is taxed finally at source, nothing further to declare in an Australian return.',
          'Departure season is also final tax return season. Leaving permanently usually allows early lodgment of your last return, and wage refunds plus DASP together make a meaningful goodbye payment. Handling both in one process is the tidy way to close your Australian money story.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can someone claim on my behalf after I leave?',
        a: 'Yes, a tax agent can prepare and manage the claim with your authority, which is exactly how most students handle it from overseas without wrestling funds across time zones.',
      },
      {
        q: 'What if I still have years left on my visa?',
        a: 'You can request cancellation of the visa once you have permanently departed, which unlocks the DASP. Worth weighing carefully, since a cancelled visa cannot be revived if plans change.',
      },
      {
        q: 'My fund sent my money to the ATO as unclaimed super. Is it gone?',
        a: 'No, it waits at the ATO and is claimable through the same DASP process, often more simply than from a fund. The myGov check before flying shows if this happened.',
      },
    ],
    related: ['super-refund-leaving-australia', 'how-much-tax-super-leaving-australia', 'leaving-australia-early-tax-return'],
    serviceLink: { href: '/superannuation', label: 'Our super refund service' },
    waContext: 'I want help claiming my DASP.',
  },
]
