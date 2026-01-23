import type { Lesson } from '../../../../types';

export const pastSimplePassive: Lesson = {
  id: 'past-simple-passive',
  title: 'Past Simple Passive',
  description: 'Describe completed past actions in passive voice',
  difficulty: 'intermediate',
  content: {
    explanation: `The Past Simple Passive describes completed actions in the past when the focus is on what happened rather than who did it.

**When to use Past Simple Passive:**
• Historical events: "America was discovered in 1492."
• Past actions (doer unknown): "My car was stolen last night."
• News reports: "Three people were injured in the accident."
• Processes completed in the past: "The building was constructed in 1920."
• When the doer is obvious or unimportant: "The letter was sent yesterday."`,
    structure: `**Affirmative:** Subject + was/were + past participle (V3)
**Negative:** Subject + was/were + not + past participle
**Question:** Was/Were + subject + past participle?`,
    structureFormula: {
      structureType: 'tense',
      cases: {
      positive: [
        { label: 'Subject', value: 'The letter' },
        { label: 'Was/Were', value: 'was', highlight: true },
        { label: 'Past Participle', value: 'sent', highlight: true },
        { label: 'Time', value: 'yesterday' },
      ],
      negative: [
        { label: 'Subject', value: 'The letter' },
        { label: 'Was/Were + Not', value: "wasn't", highlight: true },
        { label: 'Past Participle', value: 'sent', highlight: true },
        { label: 'Time', value: 'yesterday' },
      ],
      question: [
        { label: 'Was/Were', value: 'Was', highlight: true },
        { label: 'Subject', value: 'the letter' },
        { label: 'Past Participle', value: 'sent', highlight: true },
        { label: 'Time', value: 'yesterday?' },
      ],
    },
      examples: {
        positive: 'The letter was sent yesterday.',
        negative: "The letter wasn't sent yesterday.",
        question: 'Was the letter sent yesterday?',
      },
    },
    examples: [
      { sentence: 'The Pyramids were built thousands of years ago.', highlight: 'were built' },
      { sentence: 'The movie was directed by Steven Spielberg.', highlight: 'was directed' },
      { sentence: 'The thief was caught by the police.', highlight: 'was caught' },
      { sentence: 'Were you invited to the party?', highlight: 'Were...invited' },
    ],
    tips: [
      'Use "was" with I/he/she/it and singular subjects',
      'Use "were" with you/we/they and plural subjects',
      'Add "by + agent" to mention who did the action',
      'Common in historical texts, news reports, and formal writing',
    ],
  },
  tasks: [
    {
      id: 'psps-task-1',
      type: 'fill-blank',
      question: 'The Mona Lisa ___ (paint) by Leonardo da Vinci.',
      correctAnswer: 'was painted',
      explanation: 'Use was + past participle for singular subjects in Past Simple Passive.',
    },
    {
      id: 'psps-task-2',
      type: 'multiple-choice',
      question: 'Which is the correct passive form?',
      options: ['They built the house in 1990.', 'The house was built in 1990.', 'The house were built in 1990.'],
      correctAnswer: 'The house was built in 1990.',
      explanation: 'Use "was" with singular subject "house".',
    },
    {
      id: 'psps-task-3',
      type: 'fill-blank',
      question: 'The criminals ___ (arrest) last night.',
      correctAnswer: 'were arrested',
      explanation: 'Use were + past participle for plural subjects.',
    },
  ],
  quiz: {
    id: 'psps-quiz',
    title: 'Past Simple Passive Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'psps-q1',
        question: 'The telephone ___ by Alexander Graham Bell.',
        options: ['invented', 'was invented', 'were invented', 'is invented'],
        correctAnswer: 'was invented',
        explanation: 'Use "was" + past participle for singular subject.',
      },
      {
        id: 'psps-q2',
        question: 'Many houses ___ during the earthquake.',
        options: ['destroyed', 'was destroyed', 'were destroyed', 'is destroyed'],
        correctAnswer: 'were destroyed',
        explanation: 'Use "were" + past participle for plural subject.',
      },
      {
        id: 'psps-q3',
        question: '___ you ___ to the meeting yesterday?',
        options: ['Was...invite', 'Were...invited', 'Did...invite', 'Are...invited'],
        correctAnswer: 'Were...invited',
        explanation: 'Use "Were" with "you" in Past Simple Passive questions.',
      },
      {
        id: 'psps-q4',
        question: 'The book ___ in 1984.',
        options: ['wrote', 'was written', 'were written', 'is written'],
        correctAnswer: 'was written',
        explanation: 'Use "was" + past participle for singular subject.',
      },
      {
        id: 'psps-q5',
        question: 'The children ___ not ___ about the accident.',
        options: ['was...tell', 'were...told', 'was...told', 'did...tell'],
        correctAnswer: 'were...told',
        explanation: 'Use "were" with plural subject "children".',
      },
    ],
  },
};
