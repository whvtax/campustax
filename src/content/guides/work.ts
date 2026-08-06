import type { Guide } from '../types'

const UPDATED = '12 July 2026'

export const workGuides: Guide[] = [
  {
    slug: 'how-many-hours-can-international-students-work',
    title: 'How many hours can international students work in Australia?',
    metaTitle: 'Student Visa Work Hours: The 48 Hour Rule',
    description:
      'The student visa allows 48 hours of work per fortnight during the semester and unlimited hours in official course breaks. All jobs count toward the same cap.',
    cluster: 'Work hours and jobs',
    updated: UPDATED,
    answer:
      'Student visa holders can work up to 48 hours per fortnight while their course is in session, and unlimited hours during official course breaks. The cap counts all your jobs added together. Research masters and PhD students have no work limit at all.',
    shortAnswer:
      'The student visa allows 48 hours of work per fortnight during the semester and unlimited hours in official course breaks. All jobs count toward the same cap.',
    sections: [
      {
        h: 'How the 48 hours are counted',
        body: [
          'The limit is 48 hours per fortnight, and a fortnight means a fixed block of 14 days starting on a Monday. It is not an average. You could work 20 hours one week and 28 the next and be fine, but 10 hours one week and 40 the next breaks the cap even though the average looks the same.',
          'Every kind of work counts toward the one cap: your cafe shifts, your second job, and yes, delivery rides on an ABN. Unpaid work arranged as part of your course does not count, and neither does volunteering for a genuine non profit outside your field.',
        ],
      },
      {
        h: 'When the limit disappears',
        body: [
          'During official breaks in your course, semester holidays and the long summer break, there is no cap at all. Many students earn most of their yearly income in those windows, which is completely allowed.',
          'A break means a period your education provider has scheduled as a break for your course. Exam weeks are still session time. And if you finish one course and wait to start another, the rules around that gap depend on your enrolment, so check with your provider before assuming it is a free period.',
          'One group is fully exempt: students doing a masters by research or a PhD have no work limit at any time of year.',
        ],
      },
      {
        h: 'What this means for your tax',
        body: [
          'Here is the good news: work hours and tax are separate systems. Working more hours in the holidays does not push you into some special tax category. Everything you earn across the year goes into one total, the $18,200 tax free threshold applies to that total, and the normal resident rates apply above it.',
          'The practical tax effect of holiday intensive work is over withholding. In a big December your employer withholds tax as if you earn that much every week of the year. You do not, so at tax time the extra usually comes back as a refund. Heavy holiday earners are among the students with the largest refunds.',
        ],
      },
      {
        h: 'Keep your own record',
        body: [
          'The 48 hour rule is a visa condition set by Home Affairs, and staying inside it is your responsibility, not your employer’s. When you work two jobs, neither boss sees the full picture, so a simple note of your hours per fortnight is worth keeping.',
          'Payslips help here too. They show your hours in writing, which protects you both with immigration and with an employer who underpays. One more reason cash in hand work, which leaves no record at all, is a bad deal for students.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do delivery app hours count toward the 48 hours?',
        a: 'Yes. Work is work, whether it is on a payslip or an ABN. Time spent doing deliveries counts toward the fortnightly cap during session time.',
      },
      {
        q: 'Is the cap 24 hours per week?',
        a: 'No, it is 48 per fortnight, which is more flexible than 24 per week. You can split the 48 unevenly across the two weeks as long as the fortnight total stays at or under 48.',
      },
      {
        q: 'Does working more hours mean paying a higher tax rate?',
        a: 'No. Tax looks only at your yearly income total, not your hours. The same thresholds and rates apply whether you earned the money in ten weeks or fifty.',
      },
    ],
    related: ['two-jobs-international-student', 'do-international-students-pay-tax-in-australia', 'abn-for-delivery-riders-students'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I have a question about work hours and my tax.',
  },

  {
    slug: 'two-jobs-international-student',
    title: 'Can I have two jobs as an international student in Australia?',
    metaTitle: 'Two Jobs on a Student Visa: Tax and the 48 Hour Cap',
    description:
      'Yes, students can work multiple jobs. The 48 hour fortnight cap counts all jobs together, and the tax free threshold goes to one employer only.',
    cluster: 'Work hours and jobs',
    updated: UPDATED,
    answer:
      'Yes. Nothing limits a student to one employer. Two rules matter: the 48 hours per fortnight during session counts all your jobs added together, and you claim the tax free threshold with only one employer, usually the one paying you the most. Your tax return reconciles everything at year end.',
    shortAnswer:
      'Two jobs are fine on a student visa. All hours count toward the one 48 hour cap, and the tax free threshold goes to one employer only. The tax return sorts out the rest.',
    sections: [
      {
        h: 'Two jobs, one set of rules',
        body: [
          'The student visa does not care how many employers you have. It cares about total hours. During session, your cafe job plus your weekend retail shifts plus any delivery work must fit inside 48 hours per fortnight together. In official course breaks the cap lifts and the mix is up to you.',
          'Tax also treats you as one person with one income. The jobs do not get separate thresholds or separate rates. Everything lands in one tax return, one total, one calculation.',
        ],
      },
      {
        h: 'The threshold question every second job asks',
        body: [
          'When you start job number two, the TFN declaration asks whether you want to claim the tax free threshold. The answer is no if you are already claiming it at your first job. Claim it once, at the job that pays you the most.',
          'The second employer then withholds tax from every dollar, at a higher rate than feels fair. That is by design. The system assumes your threshold is being used up at job one, so job two withholds as if every dollar is above the line. It usually over collects, and the tax return refunds the difference.',
        ],
      },
      {
        h: 'What happens if you claim it twice',
        body: [
          'Claiming the threshold at both jobs makes your weekly pay look great and your tax return look terrible. Both employers withhold as if the first $18,200 is tax free, which means together they withhold far too little. The return then ends with a bill instead of a refund, sometimes over a thousand dollars, exactly when you were not expecting it.',
          'Fixed easily: give the second employer an updated TFN declaration answering no on the threshold. Already made the mistake this year? Better to know your number before you lodge, so bring your payslips and we can tell you where you stand before the ATO does.',
        ],
      },
      {
        h: 'Payslips matter twice as much with two jobs',
        body: [
          'With one employer, your income statement almost always tells the whole story. With two or three, gaps appear: a super account you did not know one job opened, hours that push a fortnight over the cap without you noticing, or a casual employer who reports late.',
          'Keep every payslip from every job. At tax time they let you verify the totals the employers reported, catch missing super, and prove your hours if immigration ever asks. Five minutes of filing per fortnight buys a lot of safety.',
        ],
      },
    ],
    faq: [
      {
        q: 'Which job should claim the tax free threshold?',
        a: 'The one that pays you the most across the year. That keeps your total withholding closest to the truth and your refund season simple.',
      },
      {
        q: 'Do I lodge a separate tax return for each job?',
        a: 'No. One return covers everything. All employers report your wages to the ATO under your TFN, and the return adds them together automatically.',
      },
      {
        q: 'Can one of the jobs be on an ABN?',
        a: 'Yes, mixing a wage job with delivery work is common. The wage job can claim the threshold, the ABN income has no withholding, and both meet in the same tax return.',
      },
    ],
    related: ['how-many-hours-can-international-students-work', 'tax-free-threshold-international-students', 'abn-for-delivery-riders-students'],
    serviceLink: { href: '/tax-return', label: 'How our tax return service works' },
    waContext: 'I have two jobs and a question about my tax.',
  },
]
