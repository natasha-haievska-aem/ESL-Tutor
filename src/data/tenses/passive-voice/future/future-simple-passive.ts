import type { Lesson } from '../../../../types';

export const futureSimplePassive: Lesson = {
  id: 'future-simple-passive',
  title: 'Future Simple Passive',
  description: 'Describe future actions in passive voice',
  difficulty: 'intermediate',
  content: {
    explanation: `The Future Simple Passive is used for future actions when the focus is on what will happen rather than who will do it.

**When to use Future Simple Passive:**
• Predictions: "The project will be completed next month."
• Announcements: "The results will be announced tomorrow."
• Plans and decisions: "A new hospital will be built here."
• Promises: "You will be informed as soon as possible."
• Formal contexts: "The matter will be dealt with immediately."`,
    structure: `**Affirmative:** Subject + will + be + past participle (V3)
**Negative:** Subject + will not (won't) + be + past participle
**Question:** Will + subject + be + past participle?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'The project' },
        { label: 'Will', value: 'will', highlight: true },
        { label: 'Be', value: 'be', highlight: true },
        { label: 'Past Participle', value: 'completed', highlight: true },
        { label: 'Time', value: 'next month' },
      ],
      negative: [
        { label: 'Subject', value: 'The project' },
        { label: "Won't", value: "won't", highlight: true },
        { label: 'Be', value: 'be', highlight: true },
        { label: 'Past Participle', value: 'completed', highlight: true },
        { label: 'Time', value: 'next month' },
      ],
      question: [
        { label: 'Will', value: 'Will', highlight: true },
        { label: 'Subject', value: 'the project' },
        { label: 'Be', value: 'be', highlight: true },
        { label: 'Past Participle', value: 'completed', highlight: true },
        { label: 'Time', value: 'next month?' },
      ],
    },
      examples: {
        positive: 'The project will be completed next month.',
        negative: "The project won't be completed next month.",
        question: 'Will the project be completed next month?',
      },
    },
    examples: [
      { sentence: 'The new bridge will be opened next year.', highlight: 'will be opened' },
      { sentence: 'All participants will be given a certificate.', highlight: 'will be given' },
      { sentence: 'The meeting will be held in the main hall.', highlight: 'will be held' },
      { sentence: 'Will the report be finished on time?', highlight: 'Will...be finished' },
    ],
    tips: [
      '"Will be" is the same for all subjects',
      'Very common in formal announcements and official documents',
      'Add "by + agent" if you need to mention who will do the action',
      "Can also use \"going to be + V3\" for planned passive actions",
    ],
  },
  tasks: [
    {
      id: 'fsp-task-1',
      type: 'fill-blank',
      question: 'The winners ___ (announce) tomorrow.',
      correctAnswer: 'will be announced',
      explanation: 'Use will + be + past participle for Future Simple Passive.',
    },
    {
      id: 'fsp-task-2',
      type: 'multiple-choice',
      question: 'Which is the correct passive form?',
      options: ['They will build a new school.', 'A new school will be built.', 'A new school will built.'],
      correctAnswer: 'A new school will be built.',
      explanation: 'Future Simple Passive requires "will be + past participle".',
    },
    {
      id: 'fsp-task-3',
      type: 'fill-blank',
      question: 'The package ___ (not/deliver) until Monday.',
      correctAnswer: "won't be delivered",
      explanation: "Use won't + be + past participle for negatives.",
    },
  ],
  quiz: {
    id: 'fsp-quiz',
    title: 'Future Simple Passive Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'fsp-q1',
        question: 'The new product ___ next week.',
        options: ['launches', 'will launch', 'will be launched', 'is launched'],
        correctAnswer: 'will be launched',
        explanation: 'Use "will be + past participle" for Future Simple Passive.',
      },
      {
        id: 'fsp-q2',
        question: 'All employees ___ about the changes.',
        options: ['will inform', 'will be inform', 'will be informed', 'informed'],
        correctAnswer: 'will be informed',
        explanation: 'Use "will be + past participle" for Future Simple Passive.',
      },
      {
        id: 'fsp-q3',
        question: '___ the guests ___ at the airport?',
        options: ['Will...meet', 'Will...be met', 'Are...met', 'Were...met'],
        correctAnswer: 'Will...be met',
        explanation: 'Use "Will...be + past participle" for passive questions.',
      },
      {
        id: 'fsp-q4',
        question: 'The decision ___ by the board next month.',
        options: ['will make', 'will be make', 'will be made', 'is made'],
        correctAnswer: 'will be made',
        explanation: 'Use "will be + past participle" for Future Simple Passive.',
      },
      {
        id: 'fsp-q5',
        question: 'The letters ___ not ___ until Friday.',
        options: ['do...send', 'will...send', 'will...be sent', 'are...sent'],
        correctAnswer: 'will...be sent',
        explanation: 'Use "will + not + be + past participle" for negatives.',
      },
    ],
  },
};
