import type { Lesson } from '../../../../types';

export const presentPerfect: Lesson = {
  id: 'present-perfect',
  title: 'Present Perfect',
  description: 'Connect past experiences to the present',
  difficulty: 'intermediate',
  content: {
    explanation: `The Present Perfect connects the past with the present. It describes experiences, changes, and actions that started in the past and continue now or have present relevance.

**When to use Present Perfect:**
• Life experiences: "I have visited Paris twice."
• Recent actions with present results: "She has lost her keys." (She doesn't have them now)
• Actions that started in the past and continue: "We have lived here for 10 years."
• With just, already, yet, ever, never
• Unfinished time periods: "I have seen three movies this week."`,
    structure: `**Affirmative:** Subject + have/has + past participle (V3)
**Negative:** Subject + have/has + not + past participle
**Question:** Have/Has + subject + past participle?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'She' },
        { label: 'Auxiliary', value: 'has', highlight: true },
        { label: 'Past Participle', value: 'finished', highlight: true },
        { label: 'Object', value: 'her work' },
      ],
      negative: [
        { label: 'Subject', value: 'She' },
        { label: 'Auxiliary + Not', value: "hasn't", highlight: true },
        { label: 'Past Participle', value: 'finished', highlight: true },
        { label: 'Object', value: 'her work' },
      ],
      question: [
        { label: 'Auxiliary', value: 'Has', highlight: true },
        { label: 'Subject', value: 'she' },
        { label: 'Past Participle', value: 'finished', highlight: true },
        { label: 'Object', value: 'her work?' },
      ],
    },
      examples: {
        positive: 'She has finished her work.',
        negative: "She hasn't finished her work.",
        question: 'Has she finished her work?',
      },
    },
    examples: [
      { sentence: 'I have seen that movie before.', highlight: 'have seen' },
      { sentence: 'She has already finished her work.', highlight: 'has...finished' },
      { sentence: "They haven't arrived yet.", highlight: "haven't arrived" },
      { sentence: 'Have you ever been to Japan?', highlight: 'Have...been' },
    ],
    tips: [
      'Use have with I/you/we/they, has with he/she/it',
      'Learn irregular past participles: go→gone, see→seen, eat→eaten, write→written',
      'For/since: "for" + duration (for 3 years), "since" + point in time (since 2020)',
      'Just = recently, Already = before now, Yet = until now (negatives/questions)',
    ],
  },
  tasks: [
    {
      id: 'pp-task-1',
      type: 'fill-blank',
      question: 'I ___ (never/try) sushi before.',
      correctAnswer: 'have never tried',
      explanation: 'Use have + never + past participle for negative experiences.',
    },
    {
      id: 'pp-task-2',
      type: 'multiple-choice',
      question: 'She ___ here since 2015.',
      options: ['lived', 'has lived', 'is living', 'lives'],
      correctAnswer: 'has lived',
      explanation: 'Use Present Perfect with "since" for actions starting in the past and continuing.',
    },
    {
      id: 'pp-task-3',
      type: 'fill-blank',
      question: '___ you ever ___ (be) to London?',
      correctAnswer: 'Have...been',
      explanation: 'Use Have + subject + ever + past participle for experience questions.',
    },
  ],
  quiz: {
    id: 'pp-quiz',
    title: 'Present Perfect Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'pp-q1',
        question: 'I ___ that book already.',
        options: ['read', 'have read', 'am reading', 'reads'],
        correctAnswer: 'have read',
        explanation: 'Use "have read" with already in Present Perfect.',
      },
      {
        id: 'pp-q2',
        question: 'She ___ her homework yet.',
        options: ["hasn't finished", "didn't finish", "doesn't finish", 'not finished'],
        correctAnswer: "hasn't finished",
        explanation: "Use \"hasn't\" + past participle with \"yet\" in negatives.",
      },
      {
        id: 'pp-q3',
        question: 'They ___ in this city for 20 years.',
        options: ['live', 'are living', 'have lived', 'lived'],
        correctAnswer: 'have lived',
        explanation: 'Use Present Perfect with "for" showing duration.',
      },
      {
        id: 'pp-q4',
        question: '___ you ever ___ to Australia?',
        options: ['Did...go', 'Have...been', 'Are...going', 'Do...go'],
        correctAnswer: 'Have...been',
        explanation: 'Use "Have...been" for asking about life experiences.',
      },
      {
        id: 'pp-q5',
        question: 'He has just ___ home.',
        options: ['arrive', 'arrives', 'arrived', 'arriving'],
        correctAnswer: 'arrived',
        explanation: 'Use past participle after "has" in Present Perfect.',
      },
    ],
  },
};
