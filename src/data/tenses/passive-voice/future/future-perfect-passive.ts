import type { Lesson } from '../../../../types';

export const futurePerfectPassive: Lesson = {
  id: 'future-perfect-passive',
  title: 'Future Perfect Passive',
  description: 'Describe actions completed before a future time in passive voice',
  difficulty: 'advanced',
  content: {
    explanation: `The Future Perfect Passive is used for actions that will be completed before a specific time in the future, with focus on what will have been done rather than who will do it.

**When to use Future Perfect Passive:**
• Completion before a future deadline: "The report will have been finished by Friday."
• Predictions about completed future actions: "By 2030, the project will have been completed."
• Assumptions: "By now, the package will have been delivered."
• Formal/business contexts: "All invoices will have been processed by month's end."`,
    structure: `**Affirmative:** Subject + will + have + been + past participle (V3)
**Negative:** Subject + will not (won't) + have + been + past participle
**Question:** Will + subject + have + been + past participle?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
        positive: [
          { label: 'Subject', value: 'The report' },
          { label: 'Will', value: 'will', highlight: true },
          { label: 'Have', value: 'have', highlight: true },
          { label: 'Been', value: 'been', highlight: true },
          { label: 'Past Participle', value: 'finished', highlight: true },
          { label: 'Time', value: 'by Friday' },
        ],
        negative: [
          { label: 'Subject', value: 'The report' },
          { label: "Won't", value: "won't", highlight: true },
          { label: 'Have', value: 'have', highlight: true },
          { label: 'Been', value: 'been', highlight: true },
          { label: 'Past Participle', value: 'finished', highlight: true },
          { label: 'Time', value: 'by Friday' },
        ],
        question: [
          { label: 'Will', value: 'Will', highlight: true },
          { label: 'Subject', value: 'the report' },
          { label: 'Have', value: 'have', highlight: true },
          { label: 'Been', value: 'been', highlight: true },
          { label: 'Past Participle', value: 'finished', highlight: true },
          { label: 'Time', value: 'by Friday?' },
        ],
      },
      examples: {
        positive: 'The report will have been finished by Friday.',
        negative: "The report won't have been finished by Friday.",
        question: 'Will the report have been finished by Friday?',
      },
    },
    examples: [
      { sentence: 'By next year, the bridge will have been built.', highlight: 'will have been built' },
      { sentence: 'All tickets will have been sold by tomorrow.', highlight: 'will have been sold' },
      { sentence: 'The work will have been completed before the deadline.', highlight: 'will have been completed' },
      { sentence: 'Will the house have been painted by the time we return?', highlight: 'Will...have been painted' },
    ],
    tips: [
      'This is a less common but useful tense for formal contexts',
      'Pattern: will + have + been + past participle',
      'Common with: by, by the time, before, by next week/month/year',
      'Used when you want to emphasize completion before a future deadline',
    ],
  },
  tasks: [
    {
      id: 'fpp-task-1',
      type: 'fill-blank',
      question: 'By 5 PM, all the orders ___ (process).',
      correctAnswer: 'will have been processed',
      explanation: 'Use will + have + been + past participle for Future Perfect Passive.',
    },
    {
      id: 'fpp-task-2',
      type: 'multiple-choice',
      question: 'By next month, the new system ___.',
      options: ['will install', 'will be installed', 'will have been installed', 'is installed'],
      correctAnswer: 'will have been installed',
      explanation: 'Use Future Perfect Passive for completion before a future time.',
    },
    {
      id: 'fpp-task-3',
      type: 'fill-blank',
      question: '___ the project ___ (complete) by the deadline?',
      correctAnswer: 'Will...have been completed',
      explanation: 'Use Will + subject + have been + past participle for questions.',
    },
  ],
  quiz: {
    id: 'fpp-quiz',
    title: 'Future Perfect Passive Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'fpp-q1',
        question: 'By Friday, the report ___.',
        options: ['will write', 'will be written', 'will have been written', 'is written'],
        correctAnswer: 'will have been written',
        explanation: 'Use Future Perfect Passive for action completed before a future time.',
      },
      {
        id: 'fpp-q2',
        question: 'All the invitations ___ by tomorrow evening.',
        options: ['will send', 'will be sent', 'will have been sent', 'are sent'],
        correctAnswer: 'will have been sent',
        explanation: 'Use Future Perfect Passive for completion by a future deadline.',
      },
      {
        id: 'fpp-q3',
        question: '___ the building ___ by next year?',
        options: ['Will...complete', 'Will...be completed', 'Will...have been completed', 'Is...completed'],
        correctAnswer: 'Will...have been completed',
        explanation: 'Use "Will...have been + past participle" for passive questions.',
      },
      {
        id: 'fpp-q4',
        question: 'By the time you arrive, dinner ___.',
        options: ['will serve', 'will be served', 'will have been served', 'is served'],
        correctAnswer: 'will have been served',
        explanation: 'Use Future Perfect Passive for action completed before another future action.',
      },
      {
        id: 'fpp-q5',
        question: 'The documents ___ processed by the end of the day.',
        options: ['will be', 'will have', 'will have been', 'are'],
        correctAnswer: 'will have been',
        explanation: 'Use "will have been + past participle" for Future Perfect Passive.',
      },
    ],
  },
};
