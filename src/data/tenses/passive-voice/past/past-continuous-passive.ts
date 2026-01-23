import type { Lesson } from '../../../../types';

export const pastContinuousPassive: Lesson = {
  id: 'past-continuous-passive',
  title: 'Past Continuous Passive',
  description: 'Describe ongoing past actions in passive voice',
  difficulty: 'advanced',
  content: {
    explanation: `The Past Continuous Passive describes actions that were in progress at a specific time in the past, with focus on the action rather than the doer.

**When to use Past Continuous Passive:**
• Actions in progress at a past time: "At 3 PM, the car was being repaired."
• Background actions in stories: "While the dinner was being prepared, the guests arrived."
• Interrupted past actions: "The house was being painted when it started to rain."
• To emphasize what was happening to the subject: "He was being interviewed all morning."`,
    structure: `**Affirmative:** Subject + was/were + being + past participle (V3)
**Negative:** Subject + was/were + not + being + past participle
**Question:** Was/Were + subject + being + past participle?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'The car' },
        { label: 'Was/Were', value: 'was', highlight: true },
        { label: 'Being', value: 'being', highlight: true },
        { label: 'Past Participle', value: 'repaired', highlight: true },
        { label: 'Time', value: 'at noon' },
      ],
      negative: [
        { label: 'Subject', value: 'The car' },
        { label: 'Was/Were + Not', value: "wasn't", highlight: true },
        { label: 'Being', value: 'being', highlight: true },
        { label: 'Past Participle', value: 'repaired', highlight: true },
        { label: 'Time', value: 'at noon' },
      ],
      question: [
        { label: 'Was/Were', value: 'Was', highlight: true },
        { label: 'Subject', value: 'the car' },
        { label: 'Being', value: 'being', highlight: true },
        { label: 'Past Participle', value: 'repaired', highlight: true },
        { label: 'Time', value: 'at noon?' },
      ],
    },
      examples: {
        positive: 'The car was being repaired at noon.',
        negative: "The car wasn't being repaired at noon.",
        question: 'Was the car being repaired at noon?',
      },
    },
    examples: [
      { sentence: 'The building was being renovated last summer.', highlight: 'was being renovated' },
      { sentence: 'The patients were being examined when the alarm rang.', highlight: 'were being examined' },
      { sentence: 'While the food was being cooked, we set the table.', highlight: 'was being cooked' },
      { sentence: 'Was the suspect being questioned at midnight?', highlight: 'Was...being questioned' },
    ],
    tips: [
      'This is a less common but useful tense',
      'Pattern: was/were + BEING + past participle',
      'Use for ongoing past actions when the subject receives the action',
      'Time expressions: at that time, when, while, all morning/evening',
    ],
  },
  tasks: [
    {
      id: 'pcps-task-1',
      type: 'fill-blank',
      question: 'At 5 PM, the meeting ___ (hold).',
      correctAnswer: 'was being held',
      explanation: 'Use was + being + past participle for ongoing past passive actions.',
    },
    {
      id: 'pcps-task-2',
      type: 'multiple-choice',
      question: 'Which is in Past Continuous Passive?',
      options: ['The house was painted.', 'The house was being painted.', 'The house is being painted.'],
      correctAnswer: 'The house was being painted.',
      explanation: 'Past Continuous Passive uses "was/were being + past participle".',
    },
    {
      id: 'pcps-task-3',
      type: 'fill-blank',
      question: 'The documents ___ (review) all afternoon.',
      correctAnswer: 'were being reviewed',
      explanation: 'Use were + being + past participle for plural subjects.',
    },
  ],
  quiz: {
    id: 'pcps-quiz',
    title: 'Past Continuous Passive Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'pcps-q1',
        question: 'When I arrived, the room ___.',
        options: ['cleaned', 'was cleaned', 'was being cleaned', 'is being cleaned'],
        correctAnswer: 'was being cleaned',
        explanation: 'Use Past Continuous Passive for ongoing action at a past moment.',
      },
      {
        id: 'pcps-q2',
        question: 'The students ___ when the fire alarm went off.',
        options: ['tested', 'were tested', 'were being tested', 'are being tested'],
        correctAnswer: 'were being tested',
        explanation: 'Use "were being" with plural subject for interrupted past action.',
      },
      {
        id: 'pcps-q3',
        question: 'The road ___ all week last month.',
        options: ['repaired', 'was repaired', 'was being repaired', 'is being repaired'],
        correctAnswer: 'was being repaired',
        explanation: 'Use Past Continuous Passive for duration in the past.',
      },
      {
        id: 'pcps-q4',
        question: '___ the package ___ delivered when you called?',
        options: ['Was...being', 'Were...being', 'Did...be', 'Is...being'],
        correctAnswer: 'Was...being',
        explanation: 'Use "Was...being" for singular subject in past continuous passive.',
      },
      {
        id: 'pcps-q5',
        question: 'While the new software ___, employees used the old system.',
        options: ['installed', 'was installed', 'was being installed', 'is being installed'],
        correctAnswer: 'was being installed',
        explanation: 'Use Past Continuous Passive for parallel ongoing past action.',
      },
    ],
  },
};
