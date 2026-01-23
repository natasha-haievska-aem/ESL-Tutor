import type { Lesson } from '../../../../types';

export const presentContinuousPassive: Lesson = {
  id: 'present-continuous-passive',
  title: 'Present Continuous Passive',
  description: 'Describe ongoing actions in passive voice',
  difficulty: 'intermediate',
  content: {
    explanation: `The Present Continuous Passive is used when an action is happening now and we focus on the action or object rather than the doer.

**When to use Present Continuous Passive:**
• Actions happening now: "The house is being painted."
• Temporary situations: "The road is being repaired this week."
• When the doer is unknown or unimportant: "My car is being serviced."
• To emphasize what's happening to the subject: "He is being interviewed right now."`,
    structure: `**Affirmative:** Subject + am/is/are + being + past participle (V3)
**Negative:** Subject + am/is/are + not + being + past participle
**Question:** Am/Is/Are + subject + being + past participle?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'The house' },
        { label: 'To Be', value: 'is', highlight: true },
        { label: 'Being', value: 'being', highlight: true },
        { label: 'Past Participle', value: 'painted', highlight: true },
        { label: 'Time', value: 'right now' },
      ],
      negative: [
        { label: 'Subject', value: 'The house' },
        { label: 'To Be + Not', value: "isn't", highlight: true },
        { label: 'Being', value: 'being', highlight: true },
        { label: 'Past Participle', value: 'painted', highlight: true },
        { label: 'Time', value: 'right now' },
      ],
      question: [
        { label: 'To Be', value: 'Is', highlight: true },
        { label: 'Subject', value: 'the house' },
        { label: 'Being', value: 'being', highlight: true },
        { label: 'Past Participle', value: 'painted', highlight: true },
        { label: 'Time', value: 'right now?' },
      ],
    },
      examples: {
        positive: 'The house is being painted right now.',
        negative: "The house isn't being painted right now.",
        question: 'Is the house being painted right now?',
      },
    },
    examples: [
      { sentence: 'A new bridge is being built downtown.', highlight: 'is being built' },
      { sentence: 'The packages are being delivered now.', highlight: 'are being delivered' },
      { sentence: 'The car is being repaired at the moment.', highlight: 'is being repaired' },
      { sentence: 'Is the food being prepared?', highlight: 'Is...being prepared' },
    ],
    tips: [
      'This tense is less common but very useful for ongoing passive actions',
      'Notice the pattern: am/is/are + BEING + past participle',
      'The word "being" distinguishes it from Present Simple Passive',
      'Time expressions: now, at the moment, currently, right now',
    ],
  },
  tasks: [
    {
      id: 'pcps-task-1',
      type: 'fill-blank',
      question: 'The room ___ (clean) at the moment.',
      correctAnswer: 'is being cleaned',
      explanation: 'Use is + being + past participle for ongoing passive actions.',
    },
    {
      id: 'pcps-task-2',
      type: 'multiple-choice',
      question: 'Which sentence is in Present Continuous Passive?',
      options: ['The dinner is cooked.', 'The dinner is being cooked.', 'The dinner was cooked.'],
      correctAnswer: 'The dinner is being cooked.',
      explanation: 'Present Continuous Passive uses "is/are being + past participle".',
    },
    {
      id: 'pcps-task-3',
      type: 'fill-blank',
      question: 'The roads ___ (repair) this week.',
      correctAnswer: 'are being repaired',
      explanation: 'Use are + being + past participle for plural subjects.',
    },
  ],
  quiz: {
    id: 'pcps-quiz',
    title: 'Present Continuous Passive Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'pcps-q1',
        question: 'Look! A new shopping mall ___.',
        options: ['is built', 'is being built', 'are being built', 'was built'],
        correctAnswer: 'is being built',
        explanation: 'Use Present Continuous Passive for ongoing actions.',
      },
      {
        id: 'pcps-q2',
        question: 'The documents ___ right now.',
        options: ['are printing', 'are printed', 'are being printed', 'is being printed'],
        correctAnswer: 'are being printed',
        explanation: 'Use "are being" with plural subjects.',
      },
      {
        id: 'pcps-q3',
        question: 'My computer ___ at the moment.',
        options: ['repairs', 'is repaired', 'is being repaired', 'are being repaired'],
        correctAnswer: 'is being repaired',
        explanation: 'Use "is being" + past participle for singular subjects.',
      },
      {
        id: 'pcps-q4',
        question: '___ the guests ___ served?',
        options: ['Is...being', 'Are...being', 'Do...be', 'Were...being'],
        correctAnswer: 'Are...being',
        explanation: 'Use "Are...being" for plural subjects in questions.',
      },
      {
        id: 'pcps-q5',
        question: 'The suspect ___ questioned by the police.',
        options: ['is', 'is being', 'are being', 'was'],
        correctAnswer: 'is being',
        explanation: 'Use "is being" for ongoing passive action with singular subject.',
      },
    ],
  },
};
