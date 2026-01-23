import type { Lesson } from '../../../../types';

export const presentPerfectPassive: Lesson = {
  id: 'present-perfect-passive',
  title: 'Present Perfect Passive',
  description: 'Describe completed actions with present relevance in passive voice',
  difficulty: 'intermediate',
  content: {
    explanation: `The Present Perfect Passive is used for actions completed at an unspecified time before now, when the focus is on the action or object rather than the doer.

**When to use Present Perfect Passive:**
• Recent actions with present results: "The window has been broken."
• Changes over time: "The website has been redesigned."
• Experiences (agent unknown/unimportant): "The movie has been watched by millions."
• Announcements: "A decision has been made."
• With just, already, yet, recently: "The report has just been finished."`,
    structure: `**Affirmative:** Subject + have/has + been + past participle (V3)
**Negative:** Subject + have/has + not + been + past participle
**Question:** Have/Has + subject + been + past participle?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'The report' },
        { label: 'Has/Have', value: 'has', highlight: true },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Past Participle', value: 'completed', highlight: true },
      ],
      negative: [
        { label: 'Subject', value: 'The report' },
        { label: 'Has/Have + Not', value: "hasn't", highlight: true },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Past Participle', value: 'completed', highlight: true },
      ],
      question: [
        { label: 'Has/Have', value: 'Has', highlight: true },
        { label: 'Subject', value: 'the report' },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Past Participle', value: 'completed?', highlight: true },
      ],
    },
      examples: {
        positive: 'The report has been completed.',
        negative: "The report hasn't been completed.",
        question: 'Has the report been completed?',
      },
    },
    examples: [
      { sentence: 'The homework has been done.', highlight: 'has been done' },
      { sentence: 'All the tickets have been sold.', highlight: 'have been sold' },
      { sentence: 'The project has just been finished.', highlight: 'has...been finished' },
      { sentence: 'Has the email been sent?', highlight: 'Has...been sent' },
    ],
    tips: [
      'Use "has been" with he/she/it and singular subjects',
      'Use "have been" with I/you/we/they and plural subjects',
      'Common with: just, already, yet, recently, never, ever',
      'Focus is on the result of the action, not who did it',
    ],
  },
  tasks: [
    {
      id: 'ppps-task-1',
      type: 'fill-blank',
      question: 'The project ___ (complete) successfully.',
      correctAnswer: 'has been completed',
      explanation: 'Use has + been + past participle for singular subjects.',
    },
    {
      id: 'ppps-task-2',
      type: 'multiple-choice',
      question: 'All the cookies ___.',
      options: ['have eaten', 'has been eaten', 'have been eaten', 'are eaten'],
      correctAnswer: 'have been eaten',
      explanation: 'Use "have been" with plural subjects in Present Perfect Passive.',
    },
    {
      id: 'ppps-task-3',
      type: 'fill-blank',
      question: '___ the package ___ (deliver) yet?',
      correctAnswer: 'Has...been delivered',
      explanation: 'Use Has + subject + been + past participle for passive questions.',
    },
  ],
  quiz: {
    id: 'ppps-quiz',
    title: 'Present Perfect Passive Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'ppps-q1',
        question: 'The window ___. We need to fix it.',
        options: ['has broken', 'has been broken', 'was broken', 'is broken'],
        correctAnswer: 'has been broken',
        explanation: 'Use Present Perfect Passive for recent action with present result.',
      },
      {
        id: 'ppps-q2',
        question: 'Three new hospitals ___ this year.',
        options: ['have built', 'have been built', 'has been built', 'were built'],
        correctAnswer: 'have been built',
        explanation: 'Use "have been" with plural subjects.',
      },
      {
        id: 'ppps-q3',
        question: 'The email ___ to all employees.',
        options: ['has sent', 'has been sent', 'have been sent', 'is sent'],
        correctAnswer: 'has been sent',
        explanation: 'Use "has been" with singular subject "email".',
      },
      {
        id: 'ppps-q4',
        question: '___ the forms ___ in yet?',
        options: ['Has...handed', 'Have...been handed', 'Has...been handed', 'Were...handed'],
        correctAnswer: 'Have...been handed',
        explanation: 'Use "Have...been" with plural subject "forms".',
      },
      {
        id: 'ppps-q5',
        question: 'The decision ___ not ___ yet.',
        options: ['has...made', 'has...been made', 'have...been made', 'is...made'],
        correctAnswer: 'has...been made',
        explanation: 'Use "has been" with singular subject "decision".',
      },
    ],
  },
};
