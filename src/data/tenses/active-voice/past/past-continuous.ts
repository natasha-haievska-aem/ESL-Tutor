import type { Lesson } from '../../../../types';

export const pastContinuous: Lesson = {
  id: 'past-continuous',
  title: 'Past Continuous',
  description: 'Describe ongoing actions in the past',
  difficulty: 'intermediate',
  content: {
    explanation: `The Past Continuous describes actions that were in progress at a specific time in the past.

**When to use Past Continuous:**
• Action in progress at a specific time: "At 8 PM, I was watching TV."
• Background action interrupted by another action: "I was cooking when the phone rang."
• Two parallel actions: "While she was reading, he was sleeping."
• Setting the scene in stories: "The sun was shining and birds were singing."
• To emphasize duration of a past action: "They were working all day."`,
    structure: `**Affirmative:** Subject + was/were + verb-ing
**Negative:** Subject + was/were + not + verb-ing
**Question:** Was/Were + subject + verb-ing?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'She' },
        { label: 'Was/Were', value: 'was', highlight: true },
        { label: 'Verb + ing', value: 'sleeping', highlight: true },
        { label: 'Time', value: 'at 10 PM' },
      ],
      negative: [
        { label: 'Subject', value: 'She' },
        { label: 'Was/Were + Not', value: "wasn't", highlight: true },
        { label: 'Verb + ing', value: 'sleeping', highlight: true },
        { label: 'Time', value: 'at 10 PM' },
      ],
      question: [
        { label: 'Was/Were', value: 'Was', highlight: true },
        { label: 'Subject', value: 'she' },
        { label: 'Verb + ing', value: 'sleeping', highlight: true },
        { label: 'Time', value: 'at 10 PM?' },
      ],
    },
      examples: {
        positive: 'She was sleeping at 10 PM.',
        negative: "She wasn't sleeping at 10 PM.",
        question: 'Was she sleeping at 10 PM?',
      },
    },
    examples: [
      { sentence: 'I was working at 9 PM last night.', highlight: 'was working' },
      { sentence: 'They were playing when it started to rain.', highlight: 'were playing' },
      { sentence: "She wasn't listening to me.", highlight: "wasn't listening" },
      { sentence: 'What were you doing at 6 AM?', highlight: 'were...doing' },
    ],
    tips: [
      'Use was with I/he/she/it, were with you/we/they',
      'Often used with "when" (interrupted action) and "while" (parallel actions)',
      'The shorter action uses Past Simple, the longer uses Past Continuous',
      "Time expressions: at that moment, at 6 o'clock, all day yesterday, while",
    ],
  },
  tasks: [
    {
      id: 'pstc-task-1',
      type: 'fill-blank',
      question: 'I ___ (have) dinner when you called.',
      correctAnswer: 'was having',
      explanation: 'Use was + verb-ing for the ongoing action that was interrupted.',
    },
    {
      id: 'pstc-task-2',
      type: 'multiple-choice',
      question: 'While she ___ the phone rang.',
      options: ['slept', 'was sleeping', 'is sleeping'],
      correctAnswer: 'was sleeping',
      explanation: 'The longer action uses Past Continuous.',
    },
    {
      id: 'pstc-task-3',
      type: 'fill-blank',
      question: 'They ___ (not/work) when the boss arrived.',
      correctAnswer: "weren't working",
      explanation: "Use were + not + verb-ing for negatives with they.",
    },
  ],
  quiz: {
    id: 'pstc-quiz',
    title: 'Past Continuous Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'pstc-q1',
        question: 'At 10 PM last night, I ___ a book.',
        options: ['read', 'was reading', 'am reading', 'reads'],
        correctAnswer: 'was reading',
        explanation: 'Use Past Continuous for actions in progress at a specific past time.',
      },
      {
        id: 'pstc-q2',
        question: 'She ___ when the accident happened.',
        options: ['drives', 'drove', 'was driving', 'is driving'],
        correctAnswer: 'was driving',
        explanation: 'The ongoing action uses Past Continuous.',
      },
      {
        id: 'pstc-q3',
        question: 'What ___ you doing at midnight?',
        options: ['was', 'were', 'are', 'did'],
        correctAnswer: 'were',
        explanation: 'Use "were" with "you" in Past Continuous questions.',
      },
      {
        id: 'pstc-q4',
        question: 'While I ___ dinner, he ___ TV.',
        options: [
          'cooked / watched',
          'was cooking / was watching',
          'cook / watch',
          'am cooking / is watching',
        ],
        correctAnswer: 'was cooking / was watching',
        explanation: 'Both parallel actions use Past Continuous.',
      },
      {
        id: 'pstc-q5',
        question: 'They ___ attention during the lesson.',
        options: ["wasn't paying", "weren't paying", "didn't paying", 'not paying'],
        correctAnswer: "weren't paying",
        explanation: "Use \"weren't\" with \"they\" in Past Continuous negatives.",
      },
    ],
  },
};
