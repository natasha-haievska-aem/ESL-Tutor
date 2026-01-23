import type { Lesson } from '../../../../types';

export const pastPerfect: Lesson = {
  id: 'past-perfect',
  title: 'Past Perfect',
  description: 'Describe actions completed before another past event',
  difficulty: 'intermediate',
  content: {
    explanation: `The Past Perfect describes an action that was completed before another action or time in the past. It's the "past of the past."

**When to use Past Perfect:**
• Action before another past action: "By the time I arrived, the movie had started."
• Experience before a past time: "She had never seen snow before she moved to Canada."
• With reported speech: He said he had finished his homework.
• Third conditional: "If I had known, I would have helped."
• To show cause and effect in the past: "I was tired because I had worked all night."`,
    structure: `**Affirmative:** Subject + had + past participle (V3)
**Negative:** Subject + had + not + past participle
**Question:** Had + subject + past participle?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'She' },
        { label: 'Had', value: 'had', highlight: true },
        { label: 'Past Participle', value: 'left', highlight: true },
        { label: 'Time Clause', value: 'before I arrived' },
      ],
      negative: [
        { label: 'Subject', value: 'She' },
        { label: 'Had + Not', value: "hadn't", highlight: true },
        { label: 'Past Participle', value: 'left', highlight: true },
        { label: 'Time Clause', value: 'before I arrived' },
      ],
      question: [
        { label: 'Had', value: 'Had', highlight: true },
        { label: 'Subject', value: 'she' },
        { label: 'Past Participle', value: 'left', highlight: true },
        { label: 'Time Clause', value: 'before I arrived?' },
      ],
    },
      examples: {
        positive: 'She had left before I arrived.',
        negative: "She hadn't left before I arrived.",
        question: 'Had she left before I arrived?',
      },
    },
    examples: [
      { sentence: 'When I got home, my parents had already eaten.', highlight: 'had...eaten' },
      { sentence: 'She had never driven a car before that day.', highlight: 'had never driven' },
      { sentence: 'The train had left by the time we reached the station.', highlight: 'had left' },
      { sentence: 'Had you finished before the deadline?', highlight: 'Had...finished' },
    ],
    tips: [
      '"Had" is the same for ALL subjects (I/you/he/she/it/we/they)',
      'Use Past Perfect for the EARLIER action, Past Simple for the LATER action',
      'Common time expressions: before, after, by the time, already, just, never, when',
      'Past Perfect is often used with "by the time", "after", "before"',
    ],
  },
  tasks: [
    {
      id: 'pstpf-task-1',
      type: 'fill-blank',
      question: 'When I arrived, the concert ___ (already/start).',
      correctAnswer: 'had already started',
      explanation: 'The concert started BEFORE I arrived, so use Past Perfect.',
    },
    {
      id: 'pstpf-task-2',
      type: 'multiple-choice',
      question: 'By the time she called, I ___ asleep.',
      options: ['fall', 'fell', 'had fallen', 'have fallen'],
      correctAnswer: 'had fallen',
      explanation: 'The sleeping happened BEFORE the call, so use Past Perfect.',
    },
    {
      id: 'pstpf-task-3',
      type: 'fill-blank',
      question: 'He ___ (never/see) the ocean before his trip to Hawaii.',
      correctAnswer: 'had never seen',
      explanation: 'Use had + never + past participle for experiences before a past time.',
    },
  ],
  quiz: {
    id: 'pstpf-quiz',
    title: 'Past Perfect Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'pstpf-q1',
        question: 'By the time I woke up, she ___ already.',
        options: ['left', 'has left', 'had left', 'leaves'],
        correctAnswer: 'had left',
        explanation: 'The leaving happened before waking up.',
      },
      {
        id: 'pstpf-q2',
        question: 'He ___ the book before he watched the movie.',
        options: ['reads', 'read', 'has read', 'had read'],
        correctAnswer: 'had read',
        explanation: 'Reading happened before watching, so use Past Perfect.',
      },
      {
        id: 'pstpf-q3',
        question: 'I was hungry because I ___ breakfast.',
        options: ["didn't eat", "haven't eaten", "hadn't eaten", "don't eat"],
        correctAnswer: "hadn't eaten",
        explanation: 'Not eating breakfast caused the hunger (earlier past action).',
      },
      {
        id: 'pstpf-q4',
        question: '___ you finished your homework before the teacher came?',
        options: ['Have', 'Had', 'Did', 'Were'],
        correctAnswer: 'Had',
        explanation: 'Use "Had" for Past Perfect questions.',
      },
      {
        id: 'pstpf-q5',
        question: 'She told me she ___ to Paris twice.',
        options: ['was', 'has been', 'had been', 'went'],
        correctAnswer: 'had been',
        explanation: 'In reported speech, use Past Perfect for earlier actions.',
      },
    ],
  },
};
