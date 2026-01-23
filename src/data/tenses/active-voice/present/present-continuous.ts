import type { Lesson } from '../../../../types';

export const presentContinuous: Lesson = {
  id: 'present-continuous',
  title: 'Present Continuous',
  description: 'Express actions happening right now',
  difficulty: 'beginner',
  content: {
    explanation: `The Present Continuous (also called Present Progressive) describes actions happening at the moment of speaking or temporary situations.

**When to use Present Continuous:**
• Actions happening now: "I am reading a book."
• Temporary situations: "She is staying with her parents this week."
• Future arrangements: "We are meeting them tomorrow."
• Annoying habits (with always): "He is always losing his keys!"
• Changing/developing situations: "The weather is getting warmer."`,
    structure: `**Affirmative:** Subject + am/is/are + verb-ing
**Negative:** Subject + am/is/are + not + verb-ing
**Question:** Am/Is/Are + subject + verb-ing?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'She' },
        { label: 'To Be', value: 'is', highlight: true },
        { label: 'Verb + ing', value: 'reading', highlight: true },
        { label: 'Object', value: 'a book' },
      ],
      negative: [
        { label: 'Subject', value: 'She' },
        { label: 'To Be + Not', value: "isn't", highlight: true },
        { label: 'Verb + ing', value: 'reading', highlight: true },
        { label: 'Object', value: 'a book' },
      ],
      question: [
        { label: 'To Be', value: 'Is', highlight: true },
        { label: 'Subject', value: 'she' },
        { label: 'Verb + ing', value: 'reading', highlight: true },
        { label: 'Object', value: 'a book?' },
      ],
    },
      examples: {
        positive: 'She is reading a book.',
        negative: "She isn't reading a book.",
        question: 'Is she reading a book?',
      },
    },
    examples: [
      { sentence: 'I am working from home today.', highlight: 'am working' },
      { sentence: 'They are playing tennis right now.', highlight: 'are playing' },
      { sentence: 'She is not listening to me.', highlight: 'is not listening' },
      { sentence: 'Are you coming to the party?', highlight: 'Are...coming' },
    ],
    tips: [
      'Use am with I, is with he/she/it, are with you/we/they',
      'Drop the -e before adding -ing (make → making)',
      'Double the consonant for short verbs ending in consonant-vowel-consonant (run → running, sit → sitting)',
      'Some verbs are NOT used in continuous: know, believe, love, hate, want, need, prefer',
    ],
  },
  tasks: [
    {
      id: 'pc-task-1',
      type: 'fill-blank',
      question: 'Look! The baby ___ (sleep).',
      correctAnswer: 'is sleeping',
      explanation: 'Use is + verb-ing for he/she/it in Present Continuous.',
    },
    {
      id: 'pc-task-2',
      type: 'multiple-choice',
      question: 'Which sentence describes an action happening now?',
      options: ['I go to work.', 'I am going to work.', 'I went to work.'],
      correctAnswer: 'I am going to work.',
      explanation: 'Present Continuous describes actions happening at this moment.',
    },
    {
      id: 'pc-task-3',
      type: 'fill-blank',
      question: "We ___ (not/watch) TV at the moment.",
      correctAnswer: "aren't watching",
      explanation: "For negatives, use am/is/are + not + verb-ing.",
    },
  ],
  quiz: {
    id: 'pc-quiz',
    title: 'Present Continuous Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'pc-q1',
        question: 'I ___ my homework right now.',
        options: ['do', 'am doing', 'does', 'doing'],
        correctAnswer: 'am doing',
        explanation: 'Use "am doing" for I in Present Continuous.',
      },
      {
        id: 'pc-q2',
        question: '___ they coming to the party?',
        options: ['Do', 'Does', 'Are', 'Is'],
        correctAnswer: 'Are',
        explanation: 'Use "Are" for questions with they in Present Continuous.',
      },
      {
        id: 'pc-q3',
        question: 'She ___ a new dress today.',
        options: ['wear', 'wears', 'is wearing', 'wearing'],
        correctAnswer: 'is wearing',
        explanation: 'Use "is wearing" for she in Present Continuous.',
      },
      {
        id: 'pc-q4',
        question: 'The children ___ in the garden.',
        options: ['plays', 'playing', 'are playing', 'play'],
        correctAnswer: 'are playing',
        explanation: 'Use "are" with plural subjects in Present Continuous.',
      },
      {
        id: 'pc-q5',
        question: 'It ___ outside.',
        options: ['rain', 'rains', 'is raining', 'raining'],
        correctAnswer: 'is raining',
        explanation: 'Use "is" with it in Present Continuous.',
      },
    ],
  },
};
