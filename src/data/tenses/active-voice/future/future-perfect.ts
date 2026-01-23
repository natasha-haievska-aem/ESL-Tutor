import type { Lesson } from '../../../../types';

export const futurePerfect: Lesson = {
  id: 'future-perfect',
  title: 'Future Perfect',
  description: 'Describe actions that will be completed before a future time',
  difficulty: 'advanced',
  content: {
    explanation: `The Future Perfect describes an action that will be completed before a specific time or event in the future.

**When to use Future Perfect:**
• Action completed before a future time: "By 5 PM, I will have finished my work."
• Action completed before another future action: "When you arrive, I will have cooked dinner."
• Experience by a future time: "By next year, she will have visited 10 countries."
• Assumptions about the present/past: "He will have received my email by now."
• Duration up to a future point (with for/since): "By December, I will have worked here for 5 years."`,
    structure: `**Affirmative:** Subject + will + have + past participle (V3)
**Negative:** Subject + will not (won't) + have + past participle
**Question:** Will + subject + have + past participle?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'She' },
        { label: 'Will', value: 'will', highlight: true },
        { label: 'Have', value: 'have', highlight: true },
        { label: 'Past Participle', value: 'finished', highlight: true },
        { label: 'Time', value: 'by 6 PM' },
      ],
      negative: [
        { label: 'Subject', value: 'She' },
        { label: "Won't", value: "won't", highlight: true },
        { label: 'Have', value: 'have', highlight: true },
        { label: 'Past Participle', value: 'finished', highlight: true },
        { label: 'Time', value: 'by 6 PM' },
      ],
      question: [
        { label: 'Will', value: 'Will', highlight: true },
        { label: 'Subject', value: 'she' },
        { label: 'Have', value: 'have', highlight: true },
        { label: 'Past Participle', value: 'finished', highlight: true },
        { label: 'Time', value: 'by 6 PM?' },
      ],
    },
      examples: {
        positive: 'She will have finished by 6 PM.',
        negative: "She won't have finished by 6 PM.",
        question: 'Will she have finished by 6 PM?',
      },
    },
    examples: [
      { sentence: 'By next month, I will have graduated.', highlight: 'will have graduated' },
      { sentence: 'She will have left by the time you get here.', highlight: 'will have left' },
      { sentence: "They won't have completed the project by Friday.", highlight: "won't have completed" },
      { sentence: 'Will you have eaten by 8 PM?', highlight: 'Will...have eaten' },
    ],
    tips: [
      'Common time expressions: by, by the time, before, by next week/year',
      '"By" indicates the deadline before which the action will be complete',
      'Think of it as "looking back from a future point"',
      'Often used with time clauses: "When you arrive, I will have prepared dinner."',
    ],
  },
  tasks: [
    {
      id: 'fp-task-1',
      type: 'fill-blank',
      question: 'By 2030, scientists ___ (discover) a cure for cancer.',
      correctAnswer: 'will have discovered',
      explanation: 'Use will + have + past participle for completion before a future time.',
    },
    {
      id: 'fp-task-2',
      type: 'multiple-choice',
      question: 'By the time you wake up, I ___ to work.',
      options: ['go', 'will go', 'will have gone', 'am going'],
      correctAnswer: 'will have gone',
      explanation: 'The going will be completed before the waking up.',
    },
    {
      id: 'fp-task-3',
      type: 'fill-blank',
      question: '___ she ___ (finish) the report by tomorrow?',
      correctAnswer: 'Will...have finished',
      explanation: 'Use Will + subject + have + past participle for questions.',
    },
  ],
  quiz: {
    id: 'fp-quiz',
    title: 'Future Perfect Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'fp-q1',
        question: 'By next year, I ___ here for 10 years.',
        options: ['work', 'will work', 'will have worked', 'have worked'],
        correctAnswer: 'will have worked',
        explanation: 'Duration up to a future point uses Future Perfect.',
      },
      {
        id: 'fp-q2',
        question: 'She ___ dinner before we arrive.',
        options: ['cooks', 'will cook', 'will have cooked', 'is cooking'],
        correctAnswer: 'will have cooked',
        explanation: 'The cooking will be complete before the arrival.',
      },
      {
        id: 'fp-q3',
        question: 'By 9 PM, the movie ___.',
        options: ['ends', 'will end', 'will have ended', 'ended'],
        correctAnswer: 'will have ended',
        explanation: 'The ending will be complete by that time.',
      },
      {
        id: 'fp-q4',
        question: "___ you ___ your homework by the time I get home?",
        options: ['Do...finish', 'Will...finish', 'Will...have finished', 'Have...finished'],
        correctAnswer: 'Will...have finished',
        explanation: 'Use Future Perfect for completion before a future event.',
      },
      {
        id: 'fp-q5',
        question: 'By this time next month, they ___ married for 25 years.',
        options: ['are', 'will be', 'will have been', 'have been'],
        correctAnswer: 'will have been',
        explanation: 'Duration up to a future point uses Future Perfect.',
      },
    ],
  },
};
