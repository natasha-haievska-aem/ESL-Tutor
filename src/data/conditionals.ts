import type { LessonCategory, Lesson } from '../types';

// Individual conditional lessons
const zeroConditional: Lesson = {
  id: 'zero-conditional',
  title: 'Zero Conditional',
  description: 'Facts, scientific truths, and general rules',
  difficulty: 'beginner',
  content: {
    explanation: `The Zero Conditional is used for facts, scientific truths, and things that are always true.

**When to use Zero Conditional:**
• Scientific facts: "If you heat water to 100°C, it boils."
• General truths: "If you mix blue and yellow, you get green."
• Rules and instructions: "If the light is red, you stop."
• Habits: "If I wake up early, I go for a run."

**Key Point:** "If" can be replaced with "when" without changing the meaning.`,
    structure: `| IF-Clause | Result Clause |
|-----------|---------------|
| If + Present Simple | Present Simple |`,
    structureFormula: {
      structureType: 'simple',
      formula: [
        { label: 'If', value: 'If', highlight: true },
        { label: 'Present Simple', value: 'you heat', highlight: true },
        { label: 'Comma', value: ',' },
        { label: 'Present Simple', value: 'it boils', highlight: true },
      ],
      example: 'If you heat water, it boils.',
    },
    examples: [
      { sentence: 'If you heat ice, it melts.', highlight: 'heat...melts' },
      { sentence: 'If it rains, the ground gets wet.', highlight: 'rains...gets' },
      { sentence: "If you don't eat, you feel hungry.", highlight: "don't eat...feel" },
      { sentence: 'Water freezes if the temperature drops below 0°C.', highlight: 'freezes...drops' },
    ],
    tips: [
      'Both clauses use Present Simple',
      '"If" and "when" are interchangeable in Zero Conditional',
      'Used for things that are ALWAYS true',
      'The if-clause can come first or second in the sentence',
    ],
  },
  tasks: [
    {
      id: 'zero-task-1',
      type: 'fill-blank',
      question: 'If you ___ (heat) water to 100°C, it boils.',
      correctAnswer: 'heat',
      explanation: 'Zero Conditional uses Present Simple in both clauses.',
    },
    {
      id: 'zero-task-2',
      type: 'multiple-choice',
      question: 'Which sentence is a Zero Conditional?',
      options: [
        'If it rains tomorrow, I will stay home.',
        'If you mix red and white, you get pink.',
        'If I had money, I would buy a car.',
      ],
      correctAnswer: 'If you mix red and white, you get pink.',
      explanation: 'Zero Conditional describes facts that are always true.',
    },
    {
      id: 'zero-task-3',
      type: 'fill-blank',
      question: 'Plants die if you ___ (not/water) them.',
      correctAnswer: "don't water",
      explanation: 'Use Present Simple negative form in Zero Conditional.',
    },
  ],
  quiz: {
    id: 'zero-quiz',
    title: 'Zero Conditional Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'zero-q1',
        question: 'If you ___ (mix) blue and yellow, you get green.',
        options: ['mix', 'mixed', 'will mix', 'would mix'],
        correctAnswer: 'mix',
        explanation: 'Zero Conditional uses Present Simple in both clauses.',
      },
      {
        id: 'zero-q2',
        question: 'Metal ___ (expand) if you heat it.',
        options: ['expands', 'expanded', 'will expand', 'would expand'],
        correctAnswer: 'expands',
        explanation: 'This is a scientific fact, so we use Present Simple.',
      },
      {
        id: 'zero-q3',
        question: 'If I ___ (eat) too much, I feel sick.',
        options: ['eat', 'ate', 'will eat', 'would eat'],
        correctAnswer: 'eat',
        explanation: 'Zero Conditional for habits uses Present Simple.',
      },
      {
        id: 'zero-q4',
        question: 'Which word can replace "if" in Zero Conditional without changing meaning?',
        options: ['when', 'unless', 'whether', 'although'],
        correctAnswer: 'when',
        explanation: '"If" and "when" are interchangeable in Zero Conditional.',
      },
      {
        id: 'zero-q5',
        question: 'The road ___ slippery if it ___ .',
        options: ['gets / rains', 'will get / rains', 'got / rained', 'would get / rained'],
        correctAnswer: 'gets / rains',
        explanation: 'Zero Conditional: Present Simple in both clauses.',
      },
    ],
  },
};

const firstConditional: Lesson = {
  id: 'first-conditional',
  title: 'First Conditional',
  description: 'Real possibilities in the future',
  difficulty: 'beginner',
  content: {
    explanation: `The First Conditional is used for real, possible future situations. It describes things that are likely to happen.

**When to use First Conditional:**
• Likely future events: "If it rains, I will take an umbrella."
• Promises: "If you help me, I will help you."
• Warnings: "If you touch that, you will burn yourself."
• Threats: "If you don't stop, I will call the police."

**Key Point:** The situation is POSSIBLE and REAL.`,
    structure: `| IF-Clause | Result Clause |
|-----------|---------------|
| If + Present Simple | will + base verb |`,

    structureFormula: {
      structureType: 'simple',
      formula: [
        { label: 'If', value: 'If', highlight: true },
        { label: 'Present Simple', value: 'it rains', highlight: true },
        { label: 'Comma', value: ',' },
        { label: 'will + verb', value: 'I will take', highlight: true },
      ],
      example: 'If it rains, I will take an umbrella.',
    },
    examples: [
      { sentence: 'If she studies hard, she will pass the exam.', highlight: 'studies...will pass' },
      { sentence: "If you don't leave now, you will be late.", highlight: "don't leave...will be" },
      { sentence: 'I will call you if I have time.', highlight: 'will call...have' },
      { sentence: 'If the weather is nice, we might go to the beach.', highlight: 'is...might go' },
    ],
    tips: [
      'Use Present Simple after "if", NOT "will"',
      'The if-clause can come at the beginning or end',
      'You can use "might", "may", "can" instead of "will" for less certainty',
      '"Unless" means "if not": "Unless you hurry, you\'ll be late."',
    ],
  },
  tasks: [
    {
      id: 'first-task-1',
      type: 'fill-blank',
      question: 'If it ___ (rain), I will stay home.',
      correctAnswer: 'rains',
      explanation: 'Use Present Simple in the if-clause of First Conditional.',
    },
    {
      id: 'first-task-2',
      type: 'multiple-choice',
      question: 'Which is correct?',
      options: [
        'If she will come, I will be happy.',
        'If she comes, I will be happy.',
        'If she came, I will be happy.',
      ],
      correctAnswer: 'If she comes, I will be happy.',
      explanation: 'Never use "will" in the if-clause.',
    },
    {
      id: 'first-task-3',
      type: 'fill-blank',
      question: 'She ___ (not/pass) the exam if she doesn\'t study.',
      correctAnswer: "won't pass",
      explanation: 'Use "will not / won\'t" for negative results in First Conditional.',
    },
  ],
  quiz: {
    id: 'first-quiz',
    title: 'First Conditional Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'first-q1',
        question: 'If you ___ (eat) too much, you will feel sick.',
        options: ['eat', 'will eat', 'ate', 'would eat'],
        correctAnswer: 'eat',
        explanation: 'Use Present Simple in the if-clause.',
      },
      {
        id: 'first-q2',
        question: 'She ___ (call) you if she arrives early.',
        options: ['calls', 'will call', 'called', 'would call'],
        correctAnswer: 'will call',
        explanation: 'Use "will + base verb" in the result clause.',
      },
      {
        id: 'first-q3',
        question: 'If the train ___ (be) late, we will miss the meeting.',
        options: ['is', 'will be', 'was', 'would be'],
        correctAnswer: 'is',
        explanation: 'Present Simple in the if-clause, even for future meaning.',
      },
      {
        id: 'first-q4',
        question: 'What ___ you do if it rains tomorrow?',
        options: ['do', 'will', 'did', 'would'],
        correctAnswer: 'will',
        explanation: 'Questions use "will" in the main clause.',
      },
      {
        id: 'first-q5',
        question: '"Unless you hurry" means the same as:',
        options: ["If you hurry", "If you don't hurry", "When you hurry", "Before you hurry"],
        correctAnswer: "If you don't hurry",
        explanation: '"Unless" means "if not".',
      },
    ],
  },
};

const secondConditional: Lesson = {
  id: 'second-conditional',
  title: 'Second Conditional',
  description: 'Unreal or hypothetical present/future situations',
  difficulty: 'intermediate',
  content: {
    explanation: `The Second Conditional is used for imaginary, unlikely, or impossible present/future situations.

**When to use Second Conditional:**
• Imaginary situations: "If I were a bird, I would fly."
• Unlikely events: "If I won the lottery, I would buy a house."
• Giving advice: "If I were you, I would apologize."
• Dreams/wishes: "If I had more time, I would travel more."

**Key Point:** The situation is UNREAL or UNLIKELY.`,
    structure: `| IF-Clause | Result Clause |
|-----------|---------------|
| If + Past Simple | would + base verb |

**Special:** Use "were" (not "was") for all subjects with "be"`,
    structureFormula: {
      structureType: 'simple',
      formula: [
        { label: 'If', value: 'If', highlight: true },
        { label: 'Past Simple', value: 'I won', highlight: true },
        { label: 'Object', value: 'the lottery,' },
        { label: 'would + verb', value: 'I would buy', highlight: true },
      ],
      example: 'If I won the lottery, I would buy a house.',
    },
    examples: [
      { sentence: 'If I were you, I would apologize.', highlight: 'were...would apologize' },
      { sentence: 'If she had more time, she would learn a new language.', highlight: 'had...would learn' },
      { sentence: "If he didn't work so hard, he would be healthier.", highlight: "didn't work...would be" },
      { sentence: 'I would travel the world if I were rich.', highlight: 'would travel...were' },
    ],
    tips: [
      'Use "were" for all subjects with the verb "be" (If I were, If he were)',
      'The past tense doesn\'t refer to the past — it shows the situation is unreal',
      '"Could" can replace "would" for ability: "If I had wings, I could fly."',
      'Common phrase: "If I were you, I would..."',
    ],
  },
  tasks: [
    {
      id: 'second-task-1',
      type: 'fill-blank',
      question: 'If I ___ (be) you, I would talk to her.',
      correctAnswer: 'were',
      explanation: 'Use "were" for all subjects with "be" in Second Conditional.',
    },
    {
      id: 'second-task-2',
      type: 'multiple-choice',
      question: 'Which sentence expresses an unreal situation?',
      options: [
        'If it rains, I will stay home.',
        'If I had a car, I would drive to work.',
        'If you heat water, it boils.',
      ],
      correctAnswer: 'If I had a car, I would drive to work.',
      explanation: 'Second Conditional is for unreal/hypothetical situations.',
    },
    {
      id: 'second-task-3',
      type: 'fill-blank',
      question: 'She ___ (travel) more if she had more money.',
      correctAnswer: 'would travel',
      explanation: 'Use "would + base verb" in the result clause.',
    },
  ],
  quiz: {
    id: 'second-quiz',
    title: 'Second Conditional Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'second-q1',
        question: 'If I ___ (have) a million dollars, I would donate to charity.',
        options: ['have', 'had', 'will have', 'would have'],
        correctAnswer: 'had',
        explanation: 'Use Past Simple in the if-clause of Second Conditional.',
      },
      {
        id: 'second-q2',
        question: 'If she ___ (be) here, she would know what to do.',
        options: ['is', 'was', 'were', 'will be'],
        correctAnswer: 'were',
        explanation: 'Use "were" for all subjects with "be" in Second Conditional.',
      },
      {
        id: 'second-q3',
        question: 'I ___ (buy) a yacht if I were a millionaire.',
        options: ['buy', 'bought', 'will buy', 'would buy'],
        correctAnswer: 'would buy',
        explanation: 'Use "would + base verb" in the result clause.',
      },
      {
        id: 'second-q4',
        question: 'Which situation would use Second Conditional?',
        options: [
          'Planning for rain tomorrow',
          'Imagining winning the lottery',
          'Describing a scientific fact',
          'Regretting a past decision',
        ],
        correctAnswer: 'Imagining winning the lottery',
        explanation: 'Second Conditional is for unreal/hypothetical present or future.',
      },
      {
        id: 'second-q5',
        question: 'If I ___ (not/have) work tomorrow, I would go to the beach.',
        options: ["don't have", "didn't have", "won't have", "wouldn't have"],
        correctAnswer: "didn't have",
        explanation: 'Use Past Simple negative in the if-clause.',
      },
    ],
  },
};

const thirdConditional: Lesson = {
  id: 'third-conditional',
  title: 'Third Conditional',
  description: 'Unreal situations in the past',
  difficulty: 'advanced',
  content: {
    explanation: `The Third Conditional is used for imaginary situations in the past — things that didn't happen.

**When to use Third Conditional:**
• Expressing regret: "If I had studied harder, I would have passed."
• Imagining different past outcomes: "If he had left earlier, he would have caught the train."
• Speculating about the past: "If they had known, they would have helped."

**Key Point:** The situation is in the PAST and did NOT happen.`,
    structure: `| IF-Clause | Result Clause |
|-----------|---------------|
| If + Past Perfect | would have + past participle |`,
    structureFormula: {
      structureType: 'simple',
      formula: [
        { label: 'If', value: 'If', highlight: true },
        { label: 'Past Perfect', value: 'I had studied', highlight: true },
        { label: 'Adverb', value: 'harder,' },
        { label: 'would have + pp', value: 'I would have passed', highlight: true },
      ],
      example: 'If I had studied harder, I would have passed.',
    },
    examples: [
      { sentence: 'If I had known, I would have told you.', highlight: 'had known...would have told' },
      { sentence: 'She would have come if you had invited her.', highlight: 'would have come...had invited' },
      { sentence: "If they hadn't missed the bus, they wouldn't have been late.", highlight: "hadn't missed...wouldn't have been" },
      { sentence: 'If he had taken the medicine, he would have felt better.', highlight: 'had taken...would have felt' },
    ],
    tips: [
      'Use Past Perfect (had + past participle) in the if-clause',
      'Use "would have + past participle" in the result clause',
      'Often expresses regret: "If only I had known..."',
      '"Could have" or "might have" can replace "would have"',
    ],
  },
  tasks: [
    {
      id: 'third-task-1',
      type: 'fill-blank',
      question: 'If I ___ (know), I would have helped.',
      correctAnswer: 'had known',
      explanation: 'Use Past Perfect in the if-clause of Third Conditional.',
    },
    {
      id: 'third-task-2',
      type: 'multiple-choice',
      question: 'Which sentence expresses regret about the past?',
      options: [
        'If I have time, I will help.',
        'If I had time, I would help.',
        'If I had had time, I would have helped.',
      ],
      correctAnswer: 'If I had had time, I would have helped.',
      explanation: 'Third Conditional is for past situations that didn\'t happen.',
    },
    {
      id: 'third-task-3',
      type: 'fill-blank',
      question: 'She ___ (pass) the exam if she had studied more.',
      correctAnswer: 'would have passed',
      explanation: 'Use "would have + past participle" in the result clause.',
    },
  ],
  quiz: {
    id: 'third-quiz',
    title: 'Third Conditional Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'third-q1',
        question: 'If they ___ (leave) earlier, they would have caught the train.',
        options: ['leave', 'left', 'had left', 'would leave'],
        correctAnswer: 'had left',
        explanation: 'Use Past Perfect in the if-clause of Third Conditional.',
      },
      {
        id: 'third-q2',
        question: 'I ___ (buy) the car if I had had enough money.',
        options: ['buy', 'bought', 'will have bought', 'would have bought'],
        correctAnswer: 'would have bought',
        explanation: 'Use "would have + past participle" in the result clause.',
      },
      {
        id: 'third-q3',
        question: 'If she ___ (not/be) sick, she would have come to the party.',
        options: ["isn't", "wasn't", "hadn't been", "wouldn't be"],
        correctAnswer: "hadn't been",
        explanation: 'Use Past Perfect negative in the if-clause.',
      },
      {
        id: 'third-q4',
        question: 'Third Conditional is used for:',
        options: [
          'Facts and general truths',
          'Real future possibilities',
          'Unreal present situations',
          'Unreal past situations',
        ],
        correctAnswer: 'Unreal past situations',
        explanation: 'Third Conditional describes imaginary past situations.',
      },
      {
        id: 'third-q5',
        question: 'If you had told me, I ___ (help) you.',
        options: ['help', 'helped', 'would help', 'would have helped'],
        correctAnswer: 'would have helped',
        explanation: 'The result clause uses "would have + past participle".',
      },
    ],
  },
};

// Combined overview lesson
const allConditionals: Lesson = {
  id: 'conditionals-0-1-2-3',
  title: 'All Conditionals Overview',
  description: 'Master all four conditional types in one lesson',
  difficulty: 'intermediate',
  content: {
    explanation: 'In this lesson, we will learn how to use all four types of conditional sentences to express different situations and their consequences.', 
    structureFormula: {
      structureType: 'conditional',
      cases: {
      zero: [
        { label: 'If', value: 'If', highlight: true },
        { label: 'Present Simple', value: 'you heat', highlight: true },
        { label: 'Comma', value: ',' },
        { label: 'Present Simple', value: 'it melts', highlight: true },
      ],
      first: [
        { label: 'If', value: 'If', highlight: true },
        { label: 'Present Simple', value: 'she calls', highlight: true },
        { label: 'Comma', value: ',' },
        { label: 'Future Simple', value: 'I will answer', highlight: true },
      ],
      second: [
        { label: 'If', value: 'If', highlight: true },
        { label: 'Past Simple', value: 'I were', highlight: true },
        { label: 'Comma', value: ',' },
        { label: 'Would + Base Verb', value: 'I would travel', highlight: true },
      ],
      third: [
        { label: 'If', value: 'If', highlight: true },
        { label: 'Past Perfect', value: 'they had arrived', highlight: true },
        { label: 'Comma', value: ',' },
        { label: 'Would have + Past Participle', value: 'they would have caught', highlight: true },
      ],
    },
      examples: {
                  zero: 'If you heat ice, it melts.',
                  first: 'If she calls, I will answer.',
                  second: 'If I were rich, I would travel the world.',
                  third: 'If they had arrived earlier, they would have caught the train.',
                },
    },
    examples: [
      { sentence: 'If you heat ice, it melts.', highlight: ['heat', 'melts'] },
      { sentence: 'If she calls, I will answer.', highlight: ['calls', 'will answer'] },
      { sentence: 'If I were rich, I would travel the world.', highlight: ['were', 'would travel'] },
      { sentence: 'If they had arrived earlier, they would have caught the train.', highlight: ['had arrived', 'would have caught'] },
    ],
    tips: [
      'Zero: Facts — both clauses Present Simple',
      'First: Real possibilities — "will" in result',
      'Second: Use "were" for all subjects — "If I were you..."',
      'Third: Expresses regret — Past Perfect + would have',
      'The if-clause can come first or second',
    ],
  },
  tasks: [
    {
      id: 'all-task-1',
      type: 'multiple-choice',
      question: 'Which conditional type is used for facts?',
      options: ['Zero', 'First', 'Second', 'Third'],
      correctAnswer: 'Zero',
      explanation: 'Zero Conditional describes facts and general truths.',
    },
    {
      id: 'all-task-2',
      type: 'fill-blank',
      question: 'If I ___ (be) you, I would apologize.',
      correctAnswer: 'were',
      explanation: 'Second Conditional uses "were" for all subjects.',
    },
    {
      id: 'all-task-3',
      type: 'multiple-choice',
      question: 'Which sentence uses First Conditional correctly?',
      options: [
        'If it will rain, I stay home.',
        'If it rains, I will stay home.',
        'If it rained, I will stay home.',
      ],
      correctAnswer: 'If it rains, I will stay home.',
      explanation: 'First Conditional: If + Present Simple, will + base verb.',
    },
  ],
  quiz: {
    id: 'all-quiz',
    title: 'All Conditionals Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'all-q1',
        question: 'If you ___ (mix) blue and yellow, you get green.',
        options: ['mix', 'mixed', 'will mix', 'would mix'],
        correctAnswer: 'mix',
        explanation: 'Zero Conditional — Present Simple in both clauses.',
      },
      {
        id: 'all-q2',
        question: 'If she ___ (study) more, she will pass.',
        options: ['studies', 'studied', 'will study', 'would study'],
        correctAnswer: 'studies',
        explanation: 'First Conditional — Present Simple in if-clause.',
      },
      {
        id: 'all-q3',
        question: 'If I ___ (have) a million, I would donate.',
        options: ['have', 'had', 'will have', 'would have'],
        correctAnswer: 'had',
        explanation: 'Second Conditional — Past Simple in if-clause.',
      },
      {
        id: 'all-q4',
        question: 'If they ___ (leave) earlier, they would have arrived.',
        options: ['leave', 'left', 'had left', 'would leave'],
        correctAnswer: 'had left',
        explanation: 'Third Conditional — Past Perfect in if-clause.',
      },
      {
        id: 'all-q5',
        question: 'Which conditional expresses regret?',
        options: ['Zero', 'First', 'Second', 'Third'],
        correctAnswer: 'Third',
        explanation: 'Third Conditional — imaginary past situations.',
      },
    ],
  },
};

export const conditionalsCategory: LessonCategory = {
  id: 'conditionals',
  title: 'Conditionals',
  description: 'Learn all four conditional types: Zero, First, Second, and Third',
  icon: '🔀',
  subcategories: [
    {
      id: 'conditionals-individual',
      title: 'Individual Conditionals',
      lessons: [zeroConditional, firstConditional, secondConditional, thirdConditional],
    },
    {
      id: 'conditionals-combined',
      title: 'Combined Overview',
      lessons: [allConditionals],
    },
  ],
};
