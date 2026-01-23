import type { Lesson } from '../../../../types';

export const presentSimple: Lesson = {
  id: 'present-simple',
  title: 'Present Simple',
  description: 'Learn about habits, facts, and routines',
  difficulty: 'beginner',
  content: {
    explanation: `The Present Simple tense is used to describe habits, routines, general truths, and facts. It's one of the most commonly used tenses in English.

**When to use Present Simple:**
• Habits and routines: "I wake up at 7 AM every day."
• General truths: "The sun rises in the east."
• Facts: "Water boils at 100°C."
• Schedules: "The train leaves at 9 PM."
• Permanent situations: "She lives in London."`,
    structure: `**Affirmative:** Subject + base verb (+ s/es for he/she/it)
**Negative:** Subject + do/does + not + base verb
**Question:** Do/Does + subject + base verb?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'She' },
        { label: 'Verb (+s/es)', value: 'works', highlight: true },
        { label: 'Object', value: 'at a hospital' },
      ],
      negative: [
        { label: 'Subject', value: 'She' },
        { label: 'Auxiliary', value: "doesn't", highlight: true },
        { label: 'Base Verb', value: 'work', highlight: true },
        { label: 'Object', value: 'at a hospital' },
      ],
      question: [
        { label: 'Auxiliary', value: 'Does', highlight: true },
        { label: 'Subject', value: 'she' },
        { label: 'Base Verb', value: 'work', highlight: true },
        { label: 'Object', value: 'at a hospital?' },
      ],
    },
      examples: {
        positive: 'She works at a hospital.',
        negative: "She doesn't work at a hospital.",
        question: 'Does she work at a hospital?',
      },
    },
    examples: [
      { sentence: 'She works in a hospital.', highlight: 'works' },
      { sentence: 'They play football every weekend.', highlight: 'play' },
      { sentence: "He doesn't like coffee.", highlight: "doesn't like" },
      { sentence: 'Do you speak English?', highlight: 'Do...speak' },
    ],
    tips: [
      'Add -s or -es to verbs for he/she/it',
      'Use "does" for questions and negatives with he/she/it',
      'Common time expressions: always, usually, often, sometimes, never, every day/week/month',
      'Verbs ending in -o, -ch, -sh, -ss, -x add -es: goes, watches, washes',
    ],
  },
  tasks: [
    {
      id: 'ps-task-1',
      type: 'fill-blank',
      question: 'She ___ (go) to school by bus.',
      correctAnswer: 'goes',
      explanation: 'We add -es to "go" for he/she/it in Present Simple.',
    },
    {
      id: 'ps-task-2',
      type: 'multiple-choice',
      question: 'Which sentence is correct?',
      options: ['He work in a bank.', 'He works in a bank.', 'He working in a bank.'],
      correctAnswer: 'He works in a bank.',
      explanation: 'For he/she/it, we add -s to the base verb in Present Simple.',
    },
    {
      id: 'ps-task-3',
      type: 'fill-blank',
      question: 'They ___ (not/eat) meat.',
      correctAnswer: "don't eat",
      explanation: "For negatives with they/we/I/you, use \"don't\" + base verb.",
    },
  ],
  quiz: {
    id: 'ps-quiz',
    title: 'Present Simple Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'ps-q1',
        question: 'She ___ to music every evening.',
        options: ['listen', 'listens', 'listening', 'listened'],
        correctAnswer: 'listens',
        explanation: 'With she, we add -s to the verb in Present Simple.',
      },
      {
        id: 'ps-q2',
        question: '___ you like pizza?',
        options: ['Does', 'Do', 'Are', 'Is'],
        correctAnswer: 'Do',
        explanation: 'We use "Do" for questions with you/I/we/they.',
      },
      {
        id: 'ps-q3',
        question: 'Water ___ at 100 degrees Celsius.',
        options: ['boil', 'boils', 'boiling', 'boiled'],
        correctAnswer: 'boils',
        explanation: 'Facts use Present Simple. Water is singular, so we add -s.',
      },
      {
        id: 'ps-q4',
        question: 'He ___ breakfast in the morning.',
        options: ["don't eat", "doesn't eat", 'not eat', 'no eat'],
        correctAnswer: "doesn't eat",
        explanation: "For negatives with he/she/it, use \"doesn't\" + base verb.",
      },
      {
        id: 'ps-q5',
        question: 'The shop ___ at 9 AM.',
        options: ['open', 'opens', 'opening', 'opened'],
        correctAnswer: 'opens',
        explanation: 'Schedules use Present Simple. The shop is singular.',
      },
    ],
  },
};
