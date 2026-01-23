import type { Lesson } from '../../../../types';

export const presentSimplePassive: Lesson = {
  id: 'present-simple-passive',
  title: 'Present Simple Passive',
  description: 'Describe general facts and routines in passive voice',
  difficulty: 'intermediate',
  content: {
    explanation: `The Present Simple Passive is used when we focus on the action or the object rather than who performs the action, for habits, routines, and general truths.

**When to use Present Simple Passive:**
• When the doer is unknown: "English is spoken worldwide."
• When the doer is obvious: "The mail is delivered every day."
• Processes and procedures: "First, the ingredients are mixed."
• General truths: "Water is used for many purposes."
• Formal/scientific writing: "The experiment is conducted carefully."`,
    structure: `**Affirmative:** Subject + am/is/are + past participle (V3)
**Negative:** Subject + am/is/are + not + past participle
**Question:** Am/Is/Are + subject + past participle?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'The letter' },
        { label: 'To Be', value: 'is', highlight: true },
        { label: 'Past Participle', value: 'sent', highlight: true },
        { label: 'By Agent', value: 'every day' },
      ],
      negative: [
        { label: 'Subject', value: 'The letter' },
        { label: 'To Be + Not', value: "isn't", highlight: true },
        { label: 'Past Participle', value: 'sent', highlight: true },
        { label: 'By Agent', value: 'every day' },
      ],
      question: [
        { label: 'To Be', value: 'Is', highlight: true },
        { label: 'Subject', value: 'the letter' },
        { label: 'Past Participle', value: 'sent', highlight: true },
        { label: 'Time', value: 'every day?' },
      ],
    },
      examples: {
        positive: 'The letter is sent every day.',
        negative: "The letter isn't sent every day.",
        question: 'Is the letter sent every day?',
      },
    },
    examples: [
      { sentence: 'English is spoken in many countries.', highlight: 'is spoken' },
      { sentence: 'These cars are made in Germany.', highlight: 'are made' },
      { sentence: 'Coffee is grown in Brazil.', highlight: 'is grown' },
      { sentence: 'The museum is visited by thousands of tourists.', highlight: 'is visited' },
    ],
    tips: [
      'Use "by" to mention the doer (agent) if needed: "The book is written by J.K. Rowling."',
      'am/is/are depends on the subject (singular or plural)',
      'Use passive when the action is more important than who does it',
      'Common in scientific, formal, and news writing',
    ],
  },
  tasks: [
    {
      id: 'psp-task-1',
      type: 'fill-blank',
      question: 'Coffee ___ (grow) in Colombia.',
      correctAnswer: 'is grown',
      explanation: 'Use is + past participle for singular subjects in Present Simple Passive.',
    },
    {
      id: 'psp-task-2',
      type: 'multiple-choice',
      question: 'Which is the correct passive form?',
      options: ['They make cars in Japan.', 'Cars are made in Japan.', 'Cars is made in Japan.'],
      correctAnswer: 'Cars are made in Japan.',
      explanation: 'Use "are" with plural subjects in passive voice.',
    },
    {
      id: 'psp-task-3',
      type: 'fill-blank',
      question: 'These products ___ (not/sell) online.',
      correctAnswer: "aren't sold",
      explanation: "Use are + not + past participle for negative plural subjects.",
    },
  ],
  quiz: {
    id: 'psp-quiz',
    title: 'Present Simple Passive Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'psp-q1',
        question: 'Rice ___ in many Asian countries.',
        options: ['grows', 'is grown', 'are grown', 'grown'],
        correctAnswer: 'is grown',
        explanation: 'Use "is" + past participle for singular subjects.',
      },
      {
        id: 'psp-q2',
        question: 'The letters ___ every morning.',
        options: ['deliver', 'delivers', 'are delivered', 'is delivered'],
        correctAnswer: 'are delivered',
        explanation: 'Use "are" + past participle for plural subjects.',
      },
      {
        id: 'psp-q3',
        question: 'English ___ all over the world.',
        options: ['speaks', 'is spoken', 'are spoken', 'spoken'],
        correctAnswer: 'is spoken',
        explanation: 'English is singular, so use "is spoken".',
      },
      {
        id: 'psp-q4',
        question: '___ this product made in China?',
        options: ['Does', 'Do', 'Is', 'Are'],
        correctAnswer: 'Is',
        explanation: 'Use "Is" for passive questions with singular subjects.',
      },
      {
        id: 'psp-q5',
        question: 'The windows ___ every week.',
        options: ['clean', 'cleans', 'is cleaned', 'are cleaned'],
        correctAnswer: 'are cleaned',
        explanation: 'Use "are" + past participle for plural subjects.',
      },
    ],
  },
};
