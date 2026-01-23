import type { Lesson } from '../../../../types';

export const futurePerfectContinuous: Lesson = {
  id: 'future-perfect-continuous',
  title: 'Future Perfect Continuous',
  description: 'Emphasize duration of actions up to a future point',
  difficulty: 'advanced',
  content: {
    explanation: `The Future Perfect Continuous emphasizes the duration of an action that will be in progress up to a specific time in the future.

**When to use Future Perfect Continuous:**
• Duration up to a future time: "By December, I will have been working here for 5 years."
• Emphasizing continuous nature of future action: "Next month, she will have been studying French for 2 years."
• Cause of a future situation: "He will be tired because he will have been driving for 8 hours."
• Showing how long something will have continued: "By 6 PM, they will have been waiting for 3 hours."`,
    structure: `**Affirmative:** Subject + will + have + been + verb-ing
**Negative:** Subject + will not (won't) + have + been + verb-ing
**Question:** Will + subject + have + been + verb-ing?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'She' },
        { label: 'Will', value: 'will', highlight: true },
        { label: 'Have', value: 'have', highlight: true },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Verb + ing', value: 'teaching', highlight: true },
        { label: 'Duration', value: 'for 20 years' },
      ],
      negative: [
        { label: 'Subject', value: 'She' },
        { label: "Won't", value: "won't", highlight: true },
        { label: 'Have', value: 'have', highlight: true },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Verb + ing', value: 'teaching', highlight: true },
        { label: 'Duration', value: 'for 20 years' },
      ],
      question: [
        { label: 'Will', value: 'Will', highlight: true },
        { label: 'Subject', value: 'she' },
        { label: 'Have', value: 'have', highlight: true },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Verb + ing', value: 'teaching', highlight: true },
        { label: 'Duration', value: 'for 20 years?' },
      ],
    },
      examples: {
        positive: 'She will have been teaching for 20 years.',
        negative: "She won't have been teaching for 20 years.",
        question: 'Will she have been teaching for 20 years?',
      },
    },
    examples: [
      { sentence: 'By midnight, we will have been driving for 12 hours.', highlight: 'will have been driving' },
      { sentence: 'Next year, I will have been living here for a decade.', highlight: 'will have been living' },
      { sentence: 'How long will you have been waiting by the time the train arrives?', highlight: 'will...have been waiting' },
      { sentence: 'She will be exhausted because she will have been working all day.', highlight: 'will have been working' },
    ],
    tips: [
      'This is the least common tense - use it when emphasizing DURATION up to a future point',
      'Compare: "I will have worked for 5 years" (simple fact) vs "I will have been working for 5 years" (emphasizes the continuous nature)',
      'Always used with duration expressions: for + time period',
      'State verbs (know, like, love) cannot be used in continuous forms',
    ],
  },
  tasks: [
    {
      id: 'fpc-task-1',
      type: 'fill-blank',
      question: 'By June, she ___ (study) English for 3 years.',
      correctAnswer: 'will have been studying',
      explanation: 'Use will + have + been + verb-ing to emphasize duration up to a future point.',
    },
    {
      id: 'fpc-task-2',
      type: 'multiple-choice',
      question: 'By next month, they ___ for 10 years.',
      options: ['date', 'will date', 'will have dated', 'will have been dating'],
      correctAnswer: 'will have been dating',
      explanation: 'Use Future Perfect Continuous to emphasize the duration of the relationship.',
    },
    {
      id: 'fpc-task-3',
      type: 'fill-blank',
      question: 'How long ___ you ___ (wait) by 5 PM?',
      correctAnswer: 'will...have been waiting',
      explanation: 'Use Future Perfect Continuous for duration questions about the future.',
    },
  ],
  quiz: {
    id: 'fpc-quiz',
    title: 'Future Perfect Continuous Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'fpc-q1',
        question: 'By 2030, I ___ at this company for 15 years.',
        options: ['work', 'will work', 'will have worked', 'will have been working'],
        correctAnswer: 'will have been working',
        explanation: 'Use Future Perfect Continuous to emphasize duration up to a future point.',
      },
      {
        id: 'fpc-q2',
        question: 'Next week, we ___ this house for exactly one year.',
        options: ['own', 'will own', 'will have owned', 'will have been owning'],
        correctAnswer: 'will have owned',
        explanation: '"Own" is a state verb and cannot be used in continuous form.',
      },
      {
        id: 'fpc-q3',
        question: 'She ___ for 4 hours by the time the concert starts.',
        options: ['waits', 'will wait', 'will have waited', 'will have been waiting'],
        correctAnswer: 'will have been waiting',
        explanation: 'Emphasize the continuous nature of waiting.',
      },
      {
        id: 'fpc-q4',
        question: 'How long ___ they ___ by the end of the marathon?',
        options: ['will...run', 'will...have run', 'will...have been running', 'are...running'],
        correctAnswer: 'will...have been running',
        explanation: 'Use Future Perfect Continuous for duration questions.',
      },
      {
        id: 'fpc-q5',
        question: 'By midnight, he ___ for 10 hours straight.',
        options: ['drives', 'will drive', 'will have driven', 'will have been driving'],
        correctAnswer: 'will have been driving',
        explanation: 'Emphasize the continuous nature of the action up to a future point.',
      },
    ],
  },
};
