import type { Lesson } from '../../../../types';

export const pastPerfectContinuous: Lesson = {
  id: 'past-perfect-continuous',
  title: 'Past Perfect Continuous',
  description: 'Emphasize duration of actions before another past event',
  difficulty: 'advanced',
  content: {
    explanation: `The Past Perfect Continuous emphasizes the duration of an action that was happening before another past action or time.

**When to use Past Perfect Continuous:**
• Duration before a past action: "I had been waiting for 2 hours when she arrived."
• Cause of a past situation: "He was tired because he had been working all night."
• Recent past action with visible results (in the past): "The ground was wet. It had been raining."
• To emphasize how long something had been happening: "They had been dating for 3 years before they got married."`,
    structure: `**Affirmative:** Subject + had + been + verb-ing
**Negative:** Subject + had + not + been + verb-ing
**Question:** Had + subject + been + verb-ing?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'She' },
        { label: 'Had', value: 'had', highlight: true },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Verb + ing', value: 'working', highlight: true },
        { label: 'Duration', value: 'for 5 hours' },
      ],
      negative: [
        { label: 'Subject', value: 'She' },
        { label: 'Had + Not', value: "hadn't", highlight: true },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Verb + ing', value: 'working', highlight: true },
        { label: 'Duration', value: 'for 5 hours' },
      ],
      question: [
        { label: 'Had', value: 'Had', highlight: true },
        { label: 'Subject', value: 'she' },
        { label: 'Been', value: 'been', highlight: true },
        { label: 'Verb + ing', value: 'working', highlight: true },
        { label: 'Duration', value: 'for 5 hours?' },
      ],
    },
      examples: {
        positive: 'She had been working for 5 hours.',
        negative: "She hadn't been working for 5 hours.",
        question: 'Had she been working for 5 hours?',
      },
    },
    examples: [
      { sentence: 'They had been waiting for an hour when the bus finally came.', highlight: 'had been waiting' },
      { sentence: 'She was exhausted because she had been studying all night.', highlight: 'had been studying' },
      { sentence: 'How long had you been learning English before you moved to the UK?', highlight: 'had...been learning' },
      { sentence: 'The streets were wet. It had been raining.', highlight: 'had been raining' },
    ],
    tips: [
      'Use Past Perfect Continuous to emphasize the DURATION of the earlier action',
      'Compare: "I had waited for 2 hours" (simple fact) vs "I had been waiting for 2 hours" (emphasizes duration)',
      'Common with "for" (duration) and "since" (starting point)',
      'State verbs (know, believe, like) are NOT used in continuous forms',
    ],
  },
  tasks: [
    {
      id: 'pstpc-task-1',
      type: 'fill-blank',
      question: 'She was tired because she ___ (run) for an hour.',
      correctAnswer: 'had been running',
      explanation: 'The running (with duration) caused the tiredness.',
    },
    {
      id: 'pstpc-task-2',
      type: 'multiple-choice',
      question: 'How long ___ you ___ before you got the job?',
      options: ['did...search', 'have...been searching', 'had...been searching', 'were...searching'],
      correctAnswer: 'had...been searching',
      explanation: 'Use Past Perfect Continuous for duration before a past event.',
    },
    {
      id: 'pstpc-task-3',
      type: 'fill-blank',
      question: 'The ground was wet. It ___ (rain) all morning.',
      correctAnswer: 'had been raining',
      explanation: 'The rain caused the wet ground (past result of continuous action).',
    },
  ],
  quiz: {
    id: 'pstpc-quiz',
    title: 'Past Perfect Continuous Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'pstpc-q1',
        question: 'She ___ for two hours when I called her.',
        options: ['waited', 'was waiting', 'had been waiting', 'has been waiting'],
        correctAnswer: 'had been waiting',
        explanation: 'Use Past Perfect Continuous to emphasize duration before a past event.',
      },
      {
        id: 'pstpc-q2',
        question: 'He was out of breath. He ___.',
        options: ['ran', 'was running', 'had been running', 'has run'],
        correctAnswer: 'had been running',
        explanation: 'The running caused being out of breath.',
      },
      {
        id: 'pstpc-q3',
        question: 'How long ___ they ___ before they moved?',
        options: ['did...date', 'have...dated', 'had...been dating', 'were...dating'],
        correctAnswer: 'had...been dating',
        explanation: 'Use Past Perfect Continuous for duration before a past action.',
      },
      {
        id: 'pstpc-q4',
        question: 'I ___ English for 5 years before I visited England.',
        options: ['studied', 'was studying', 'had been studying', 'have studied'],
        correctAnswer: 'had been studying',
        explanation: 'The studying happened for a duration before the past visit.',
      },
      {
        id: 'pstpc-q5',
        question: 'The children were dirty because they ___ in the garden.',
        options: ['played', 'were playing', 'had been playing', 'play'],
        correctAnswer: 'had been playing',
        explanation: 'Playing caused them to be dirty.',
      },
    ],
  },
};
