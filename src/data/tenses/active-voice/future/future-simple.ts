import type { Lesson } from '../../../../types';

export const futureSimple: Lesson = {
  id: 'future-simple',
  title: 'Future Simple',
  description: 'Express predictions and spontaneous decisions',
  difficulty: 'beginner',
  content: {
    explanation: `The Future Simple (will + verb) expresses predictions, promises, spontaneous decisions, and offers.

**When to use Future Simple:**
• Predictions: "It will rain tomorrow."
• Spontaneous decisions: "I'll help you with that."
• Promises: "I will call you later."
• Offers: "I'll carry that for you."
• Facts about the future: "The meeting will start at 3 PM."
• Requests: "Will you open the door?"`,
    structure: `**Affirmative:** Subject + will + base verb
**Negative:** Subject + will not (won't) + base verb
**Question:** Will + subject + base verb?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
        positive: [
          { label: 'Subject', value: 'She' },
          { label: 'Will', value: 'will', highlight: true },
          { label: 'Base Verb', value: 'call', highlight: true },
          { label: 'Object', value: 'you later' },
        ],
        negative: [
          { label: 'Subject', value: 'She' },
          { label: "Won't", value: "won't", highlight: true },
          { label: 'Base Verb', value: 'call', highlight: true },
          { label: 'Object', value: 'you later' },
        ],
        question: [
          { label: 'Will', value: 'Will', highlight: true },
          { label: 'Subject', value: 'she' },
          { label: 'Base Verb', value: 'call', highlight: true },
          { label: 'Object', value: 'you later?' },
        ],
      },
      examples: {
        positive: 'She will call you later.',
        negative: "She won't call you later.",
        question: 'Will she call you later?',
      },
    },
    examples: [
      { sentence: 'She will arrive soon.', highlight: 'will arrive' },
      { sentence: 'I think it will be sunny tomorrow.', highlight: 'will be' },
      { sentence: "We won't be late.", highlight: "won't be" },
      { sentence: 'Will you help me?', highlight: 'Will...help' },
    ],
    tips: [
      '"Will" is the same for all persons - no changes!',
      "Short forms: I'll, you'll, he'll, she'll, we'll, they'll",
      "Negative short form: won't (will not)",
      'Use "going to" instead for planned actions you decided earlier',
    ],
  },
  tasks: [
    {
      id: 'fs-task-1',
      type: 'fill-blank',
      question: 'I think she ___ (win) the competition.',
      correctAnswer: 'will win',
      explanation: 'Use will + base verb for predictions.',
    },
    {
      id: 'fs-task-2',
      type: 'multiple-choice',
      question: 'Which expresses a spontaneous decision?',
      options: [
        'I am going to help you.',
        'I help you.',
        "I'll help you.",
      ],
      correctAnswer: "I'll help you.",
      explanation: 'Will is used for spontaneous decisions made at the moment of speaking.',
    },
    {
      id: 'fs-task-3',
      type: 'fill-blank',
      question: 'They ___ (not/come) to the party.',
      correctAnswer: "won't come",
      explanation: "Use won't + base verb for negatives.",
    },
  ],
  quiz: {
    id: 'fs-quiz',
    title: 'Future Simple Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'fs-q1',
        question: 'I promise I ___ on time.',
        options: ['am', 'will be', 'being', 'be'],
        correctAnswer: 'will be',
        explanation: 'Use "will" for promises.',
      },
      {
        id: 'fs-q2',
        question: "It ___ difficult, but we can try.",
        options: ['is', "won't be", 'will be', 'being'],
        correctAnswer: 'will be',
        explanation: 'Use "will be" for predictions about the future.',
      },
      {
        id: 'fs-q3',
        question: '___ you marry me?',
        options: ['Do', 'Are', 'Will', 'Did'],
        correctAnswer: 'Will',
        explanation: 'Use "Will" for future questions.',
      },
      {
        id: 'fs-q4',
        question: "Don't worry, I ___ tell anyone.",
        options: ["won't", "don't", "didn't", 'am not'],
        correctAnswer: "won't",
        explanation: "Use \"won't\" for promises not to do something.",
      },
      {
        id: 'fs-q5',
        question: 'The sun ___ rise at 6 AM tomorrow.',
        options: ['will', "won't", 'is', 'does'],
        correctAnswer: 'will',
        explanation: 'Use "will" for facts about the future.',
      },
    ],
  },
};
