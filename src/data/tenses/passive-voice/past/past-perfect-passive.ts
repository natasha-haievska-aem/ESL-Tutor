import type { Lesson } from '../../../../types';

export const pastPerfectPassive: Lesson = {
  id: 'past-perfect-passive',
  title: 'Past Perfect Passive',
  description: 'Describe completed actions before another past event in passive voice',
  difficulty: 'advanced',
  content: {
    explanation: `The Past Perfect Passive describes an action that was completed before another past action or time, with focus on what was done rather than who did it.

**When to use Past Perfect Passive:**
• Action completed before another past action: "By the time I arrived, the cake had been eaten."
• To show sequence of past events: "The report had been finished before the deadline."
• In reported speech: "She said the package had been delivered."
• Third conditional passive: "If the window had been closed, the room wouldn't have gotten cold."`,
    structure: `**Affirmative:** Subject + had + been + past participle (V3)
**Negative:** Subject + had + not + been + past participle
**Question:** Had + subject + been + past participle?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'The work' },
        { label: 'Had', value: 'had', highlight: true },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Past Participle', value: 'completed', highlight: true },
        { label: 'Time Clause', value: 'before I arrived' },
      ],
      negative: [
        { label: 'Subject', value: 'The work' },
        { label: 'Had + Not', value: "hadn't", highlight: true },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Past Participle', value: 'completed', highlight: true },
        { label: 'Time Clause', value: 'before I arrived' },
      ],
      question: [
        { label: 'Had', value: 'Had', highlight: true },
        { label: 'Subject', value: 'the work' },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Past Participle', value: 'completed', highlight: true },
        { label: 'Time Clause', value: 'before you arrived?' },
      ],
    },
      examples: {
        positive: 'The work had been completed before I arrived.',
        negative: "The work hadn't been completed before I arrived.",
        question: 'Had the work been completed before you arrived?',
      },
    },
    examples: [
      { sentence: 'The house had been sold before we made an offer.', highlight: 'had been sold' },
      { sentence: 'All the tickets had been bought by lunchtime.', highlight: 'had been bought' },
      { sentence: 'He discovered his car had been stolen.', highlight: 'had been stolen' },
      { sentence: 'Had the email been sent before the meeting?', highlight: 'Had...been sent' },
    ],
    tips: [
      '"Had been" is the same for all subjects',
      'Use for the EARLIER action in a sequence of past events',
      'Common with: before, by the time, after, already, just',
      'Often appears in reported speech and third conditionals',
    ],
  },
  tasks: [
    {
      id: 'ppps-task-1',
      type: 'fill-blank',
      question: 'By 6 PM, the report ___ (finish).',
      correctAnswer: 'had been finished',
      explanation: 'Use had + been + past participle for passive actions completed before a past time.',
    },
    {
      id: 'ppps-task-2',
      type: 'multiple-choice',
      question: 'When I got there, the shop ___ already.',
      options: ['closed', 'was closed', 'had been closed', 'has been closed'],
      correctAnswer: 'had been closed',
      explanation: 'The closing happened BEFORE I arrived.',
    },
    {
      id: 'ppps-task-3',
      type: 'fill-blank',
      question: 'The thief ran away because the police ___ (call).',
      correctAnswer: 'had been called',
      explanation: 'The calling happened before the thief ran away.',
    },
  ],
  quiz: {
    id: 'ppps-quiz',
    title: 'Past Perfect Passive Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'ppps-q1',
        question: 'By the time we arrived, the food ___.',
        options: ['was eaten', 'has been eaten', 'had been eaten', 'is eaten'],
        correctAnswer: 'had been eaten',
        explanation: 'The eating happened before the arrival.',
      },
      {
        id: 'ppps-q2',
        question: 'She said the documents ___.',
        options: ['were signed', 'have been signed', 'had been signed', 'are signed'],
        correctAnswer: 'had been signed',
        explanation: 'Use Past Perfect Passive in reported speech.',
      },
      {
        id: 'ppps-q3',
        question: 'The decision ___ before I could object.',
        options: ['was made', 'has been made', 'had been made', 'is made'],
        correctAnswer: 'had been made',
        explanation: 'The decision came before the objection.',
      },
      {
        id: 'ppps-q4',
        question: '___ the invitations ___ before the party was canceled?',
        options: ['Were...sent', 'Have...been sent', 'Had...been sent', 'Are...sent'],
        correctAnswer: 'Had...been sent',
        explanation: 'Use Past Perfect Passive for action before another past event.',
      },
      {
        id: 'ppps-q5',
        question: 'The building ___ just ___ when the inspector arrived.',
        options: ['was...completed', 'has...been completed', 'had...been completed', 'is...completed'],
        correctAnswer: 'had...been completed',
        explanation: 'The completion happened just before the inspector arrived.',
      },
    ],
  },
};
