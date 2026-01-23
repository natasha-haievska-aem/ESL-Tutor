import type { Lesson } from '../../../../types';

export const presentPerfectContinuous: Lesson = {
  id: 'present-perfect-continuous',
  title: 'Present Perfect Continuous',
  description: 'Emphasize the duration of ongoing actions',
  difficulty: 'intermediate',
  content: {
    explanation: `The Present Perfect Continuous emphasizes the duration of an action that started in the past and continues to the present, or has recently stopped with visible results.

**When to use Present Perfect Continuous:**
• Actions that started in the past and continue now: "I have been waiting for an hour."
• Recent actions with visible results: "She is tired because she has been running."
• To emphasize the duration of an activity: "They have been studying all day."
• Repeated actions over a period: "He has been calling me every day."`,
    structure: `**Affirmative:** Subject + have/has + been + verb-ing
**Negative:** Subject + have/has + not + been + verb-ing
**Question:** Have/Has + subject + been + verb-ing?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'She' },
        { label: 'Auxiliary', value: 'has', highlight: true },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Verb + ing', value: 'working', highlight: true },
        { label: 'Time', value: 'all day' },
      ],
      negative: [
        { label: 'Subject', value: 'She' },
        { label: 'Auxiliary + Not', value: "hasn't", highlight: true },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Verb + ing', value: 'working', highlight: true },
        { label: 'Time', value: 'all day' },
      ],
      question: [
        { label: 'Auxiliary', value: 'Has', highlight: true },
        { label: 'Subject', value: 'she' },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Verb + ing', value: 'working', highlight: true },
        { label: 'Time', value: 'all day?' },
      ],
    },
      examples: {
        positive: 'She has been working all day.',
        negative: "She hasn't been working all day.",
        question: 'Has she been working all day?',
      },
    },
    examples: [
      { sentence: 'I have been learning English for 5 years.', highlight: 'have been learning' },
      { sentence: 'It has been raining since morning.', highlight: 'has been raining' },
      { sentence: "They haven't been sleeping well lately.", highlight: "haven't been sleeping" },
      { sentence: 'How long have you been waiting?', highlight: 'have...been waiting' },
    ],
    tips: [
      'Use "for" with duration (for 2 hours) and "since" with a point in time (since Monday)',
      'This tense emphasizes the DURATION of the action, not just the result',
      'Compare: "I have read 3 books" (result) vs "I have been reading all day" (duration)',
      'State verbs (know, like, love) are NOT used in continuous tenses',
    ],
  },
  tasks: [
    {
      id: 'ppc-task-1',
      type: 'fill-blank',
      question: 'She ___ (study) for 3 hours.',
      correctAnswer: 'has been studying',
      explanation: 'Use has + been + verb-ing for ongoing actions with duration.',
    },
    {
      id: 'ppc-task-2',
      type: 'multiple-choice',
      question: 'Which tense emphasizes the duration of an activity?',
      options: [
        'I have finished my homework.',
        'I have been doing my homework for 2 hours.',
        'I did my homework.',
      ],
      correctAnswer: 'I have been doing my homework for 2 hours.',
      explanation: 'Present Perfect Continuous emphasizes how long an action has been happening.',
    },
    {
      id: 'ppc-task-3',
      type: 'fill-blank',
      question: 'How long ___ it ___ (rain)?',
      correctAnswer: 'has...been raining',
      explanation: 'Use Has + subject + been + verb-ing for duration questions.',
    },
  ],
  quiz: {
    id: 'ppc-quiz',
    title: 'Present Perfect Continuous Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'ppc-q1',
        question: 'I ___ here for two hours.',
        options: ['wait', 'have waited', 'have been waiting', 'am waiting'],
        correctAnswer: 'have been waiting',
        explanation: 'Use Present Perfect Continuous to emphasize duration.',
      },
      {
        id: 'ppc-q2',
        question: 'She is tired because she ___ all day.',
        options: ['works', 'has worked', 'has been working', 'worked'],
        correctAnswer: 'has been working',
        explanation: 'Use Present Perfect Continuous for recent actions with visible results.',
      },
      {
        id: 'ppc-q3',
        question: 'They ___ English since 2020.',
        options: ['study', 'have studied', 'have been studying', 'are studying'],
        correctAnswer: 'have been studying',
        explanation: 'Use Present Perfect Continuous with "since" for ongoing actions.',
      },
      {
        id: 'ppc-q4',
        question: 'How long ___ you ___ for your exam?',
        options: ['do...study', 'have...studied', 'have...been studying', 'are...studying'],
        correctAnswer: 'have...been studying',
        explanation: 'Use "have been + verb-ing" for duration questions.',
      },
      {
        id: 'ppc-q5',
        question: 'It ___ all week.',
        options: ['rains', 'is raining', 'has been raining', 'rained'],
        correctAnswer: 'has been raining',
        explanation: 'Use Present Perfect Continuous for actions continuing up to now.',
      },
    ],
  },
};
