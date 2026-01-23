import type { Lesson } from '../../../../types';

export const futureContinuous: Lesson = {
  id: 'future-continuous',
  title: 'Future Continuous',
  description: 'Describe ongoing actions at a future time',
  difficulty: 'intermediate',
  content: {
    explanation: `The Future Continuous describes an action that will be in progress at a specific time in the future.

**When to use Future Continuous:**
• Action in progress at a future time: "At 8 PM tomorrow, I will be watching a movie."
• Actions happening as a matter of routine: "I will be working on Saturday as usual."
• Polite inquiries about plans: "Will you be using the car tonight?"
• Parallel future actions: "While I'm cooking, he will be cleaning."
• Something that will happen regardless of plans: "Don't call at 9 - I'll be sleeping."`,
    structure: `**Affirmative:** Subject + will + be + verb-ing
**Negative:** Subject + will not (won't) + be + verb-ing
**Question:** Will + subject + be + verb-ing?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'She' },
        { label: 'Will', value: 'will', highlight: true },
        { label: 'Be', value: 'be', highlight: true },
        { label: 'Verb + ing', value: 'working', highlight: true },
        { label: 'Time', value: 'at 5 PM' },
      ],
      negative: [
        { label: 'Subject', value: 'She' },
        { label: "Won't", value: "won't", highlight: true },
        { label: 'Be', value: 'be', highlight: true },
        { label: 'Verb + ing', value: 'working', highlight: true },
        { label: 'Time', value: 'at 5 PM' },
      ],
      question: [
        { label: 'Will', value: 'Will', highlight: true },
        { label: 'Subject', value: 'she' },
        { label: 'Be', value: 'be', highlight: true },
        { label: 'Verb + ing', value: 'working', highlight: true },
        { label: 'Time', value: 'at 5 PM?' },
      ],
    },
      examples: {
        positive: 'She will be working at 5 PM.',
        negative: "She won't be working at 5 PM.",
        question: 'Will she be working at 5 PM?',
      },
    },
    examples: [
      { sentence: 'This time tomorrow, I will be flying to Paris.', highlight: 'will be flying' },
      { sentence: "She will be studying when you arrive.", highlight: 'will be studying' },
      { sentence: "They won't be sleeping at midnight.", highlight: "won't be sleeping" },
      { sentence: 'Will you be using the computer later?', highlight: 'Will...be using' },
    ],
    tips: [
      'Use for actions in progress at a specific future time',
      "Time expressions: this time tomorrow, at 8 PM, at this time next week",
      'More polite for asking about plans than "Will you...?"',
      'Imagine yourself in the future - what will be happening at that moment?',
    ],
  },
  tasks: [
    {
      id: 'fc-task-1',
      type: 'fill-blank',
      question: 'This time next week, I ___ (lie) on a beach.',
      correctAnswer: 'will be lying',
      explanation: 'Use will + be + verb-ing for an action in progress at a specific future time.',
    },
    {
      id: 'fc-task-2',
      type: 'multiple-choice',
      question: 'At 3 PM tomorrow, she ___.',
      options: ['works', 'will work', 'will be working', 'is working'],
      correctAnswer: 'will be working',
      explanation: 'Use Future Continuous for an action in progress at a specific future time.',
    },
    {
      id: 'fc-task-3',
      type: 'fill-blank',
      question: '___ you ___ (use) the car tonight?',
      correctAnswer: 'Will...be using',
      explanation: 'Use Future Continuous for polite inquiries about plans.',
    },
  ],
  quiz: {
    id: 'fc-quiz',
    title: 'Future Continuous Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'fc-q1',
        question: 'At this time tomorrow, I ___ to London.',
        options: ['travel', 'will travel', 'will be traveling', 'am traveling'],
        correctAnswer: 'will be traveling',
        explanation: 'Use Future Continuous for action in progress at a specific future time.',
      },
      {
        id: 'fc-q2',
        question: "Don't phone between 8 and 9. We ___ dinner.",
        options: ['have', 'will have', 'will be having', 'are having'],
        correctAnswer: 'will be having',
        explanation: 'The action will be in progress during that time.',
      },
      {
        id: 'fc-q3',
        question: 'She ___ all day, so she might be tired.',
        options: ['works', 'will work', 'will be working', 'is working'],
        correctAnswer: 'will be working',
        explanation: 'Use Future Continuous for ongoing future action with duration.',
      },
      {
        id: 'fc-q4',
        question: '___ you ___ the office tomorrow?',
        options: ['Will...use', 'Are...using', 'Will...be using', 'Do...use'],
        correctAnswer: 'Will...be using',
        explanation: 'Use Future Continuous for polite inquiries.',
      },
      {
        id: 'fc-q5',
        question: 'I ___ for you at the station when you arrive.',
        options: ['wait', 'will wait', 'will be waiting', 'am waiting'],
        correctAnswer: 'will be waiting',
        explanation: 'The waiting will be in progress at the moment of arrival.',
      },
    ],
  },
};
