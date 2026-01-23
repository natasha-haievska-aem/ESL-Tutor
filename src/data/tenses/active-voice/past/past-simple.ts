import type { Lesson } from '../../../../types';

export const pastSimple: Lesson = {
  id: 'past-simple',
  title: 'Past Simple',
  description: 'Talk about completed actions in the past',
  difficulty: 'beginner',
  content: {
    explanation: `The Past Simple describes completed actions at a specific time in the past.

**When to use Past Simple:**
• Completed actions: "I visited Rome last year."
• A series of completed actions: "She woke up, had breakfast, and left."
• Past habits: "When I was young, I played tennis."
• Past states: "He was a doctor for 30 years."
• Stories and narratives: "Once upon a time, there lived a king."`,
    structure: `**Affirmative:** Subject + past form of verb (V2)
**Negative:** Subject + did not (didn't) + base verb
**Question:** Did + subject + base verb?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
        positive: [
          { label: 'Subject', value: 'She' },
          { label: 'Verb (V2)', value: 'visited', highlight: true },
          { label: 'Object', value: 'Paris' },
          { label: 'Time', value: 'last year' },
        ],
        negative: [
          { label: 'Subject', value: 'She' },
          { label: 'Auxiliary', value: "didn't", highlight: true },
          { label: 'Base Verb', value: 'visit', highlight: true },
          { label: 'Object', value: 'Paris' },
          { label: 'Time', value: 'last year' },
        ],
        question: [
          { label: 'Auxiliary', value: 'Did', highlight: true },
          { label: 'Subject', value: 'she' },
          { label: 'Base Verb', value: 'visit', highlight: true },
          { label: 'Object', value: 'Paris' },
          { label: 'Time', value: 'last year?' },
        ],
     },
      examples: {
        positive: 'She visited Paris last year.',
        negative: "She didn't visit Paris last year.",
        question: 'Did she visit Paris last year?',
      },
    },
    examples: [
      { sentence: 'We went to the beach yesterday.', highlight: 'went' },
      { sentence: 'She studied French in high school.', highlight: 'studied' },
      { sentence: "They didn't come to the meeting.", highlight: "didn't come" },
      { sentence: 'Did you see the movie?', highlight: 'Did...see' },
    ],
    tips: [
      'Regular verbs: add -ed (work→worked, play→played)',
      'Irregular verbs must be memorized (go→went, see→saw, eat→ate, buy→bought)',
      'Use "did" for ALL persons in questions and negatives',
      'Time expressions: yesterday, last week/month/year, ago, in 2010',
    ],
  },
  tasks: [
    {
      id: 'pst-task-1',
      type: 'fill-blank',
      question: 'She ___ (buy) a new car last week.',
      correctAnswer: 'bought',
      explanation: '"Buy" is irregular. Past form is "bought".',
    },
    {
      id: 'pst-task-2',
      type: 'multiple-choice',
      question: 'Which is correct?',
      options: ['Did you went?', 'Did you go?', 'Did you gone?'],
      correctAnswer: 'Did you go?',
      explanation: 'After "did", use the base form of the verb.',
    },
    {
      id: 'pst-task-3',
      type: 'fill-blank',
      question: 'We ___ (not/see) him at the party.',
      correctAnswer: "didn't see",
      explanation: "Use \"didn't\" + base verb for negatives in Past Simple.",
    },
  ],
  quiz: {
    id: 'pst-quiz',
    title: 'Past Simple Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'pst-q1',
        question: 'I ___ to the store yesterday.',
        options: ['go', 'goes', 'went', 'going'],
        correctAnswer: 'went',
        explanation: '"Go" is irregular. Past form is "went".',
      },
      {
        id: 'pst-q2',
        question: 'She ___ the email last night.',
        options: ['send', 'sends', 'sent', 'sended'],
        correctAnswer: 'sent',
        explanation: '"Send" is irregular. Past form is "sent".',
      },
      {
        id: 'pst-q3',
        question: '___ they arrive on time?',
        options: ['Do', 'Does', 'Did', 'Are'],
        correctAnswer: 'Did',
        explanation: 'Use "Did" for all past simple questions.',
      },
      {
        id: 'pst-q4',
        question: 'He ___ speak to me yesterday.',
        options: ["didn't", "doesn't", "don't", "wasn't"],
        correctAnswer: "didn't",
        explanation: "Use \"didn't\" for negatives in Past Simple.",
      },
      {
        id: 'pst-q5',
        question: 'We ___ a great time at the party.',
        options: ['have', 'has', 'had', 'having'],
        correctAnswer: 'had',
        explanation: '"Have" is irregular. Past form is "had".',
      },
    ],
  },
};
