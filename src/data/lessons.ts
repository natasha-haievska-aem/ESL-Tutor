import type { LessonCategory, Lesson, LessonSubcategory } from '../types';
import { tensesCategory } from './tenses';
import { conditionalsCategory } from './conditionals';

export const lessonCategories: LessonCategory[] = [
  tensesCategory,
  {
    id: 'articles',
    title: 'Articles',
    description: 'Master the use of a, an, and the',
    icon: '📰',
    subcategories: [
      {
        id: 'articles-basics',
        title: 'Article Basics',
        lessons: [
          {
            id: 'articles-a-an-the',
            title: 'A, An, and The',
            description: 'Learn when to use definite and indefinite articles',
            difficulty: 'beginner',
            content: {
              explanation: `Articles are small words that come before nouns. English has three articles: **a**, **an**, and **the**.

**Indefinite Articles (a/an):**
• Use for non-specific things: "I need a pen." (any pen)
• Use when mentioning something for the first time
• "A" before consonant sounds: a book, a university
• "An" before vowel sounds: an apple, an hour

**Definite Article (the):**
• Use for specific things: "Give me the pen." (that specific pen)
• Use when both speaker and listener know what's being referred to
• Use for unique things: the sun, the moon, the President`,
              structure: `**A** + consonant sound: a cat, a house, a European
**An** + vowel sound: an egg, an honest man, an MBA
**The** + specific noun: the book on the table`,
              examples: [
                { sentence: 'I saw a dog in the park.', highlight: 'a dog' },
                { sentence: 'The dog was very friendly.', highlight: 'The dog' },
                { sentence: 'She is an engineer.', highlight: 'an engineer' },
                { sentence: 'The Eiffel Tower is in Paris.', highlight: 'The Eiffel Tower' },
              ],
              tips: [
                'Listen to the SOUND, not the letter: "a university" but "an umbrella"',
                'No article with plural general nouns: "Dogs are loyal." (not "The dogs are loyal.")',
                'No article with uncountable nouns in general: "Water is essential."',
                'Use "the" with superlatives: "the best", "the most beautiful"',
              ],
            },
            tasks: [
              {
                id: 'art-task-1',
                type: 'fill-blank',
                question: 'She is ___ honest person.',
                correctAnswer: 'an',
                explanation: '"Honest" starts with a silent H, so we use "an".',
              },
              {
                id: 'art-task-2',
                type: 'multiple-choice',
                question: 'Which is correct?',
                options: ['I need a umbrella.', 'I need an umbrella.', 'I need the umbrella.'],
                correctAnswer: 'I need an umbrella.',
                explanation: '"Umbrella" starts with a vowel sound, so we use "an".',
              },
              {
                id: 'art-task-3',
                type: 'fill-blank',
                question: '___ sun rises in the east.',
                correctAnswer: 'The',
                explanation: 'There is only one sun, so we use "the" for unique things.',
              },
            ],
            quiz: {
              id: 'art-quiz',
              title: 'Articles Quiz',
              passingScore: 70,
              questions: [
                {
                  id: 'art-q1',
                  question: 'She bought ___ new car yesterday.',
                  options: ['a', 'an', 'the', '-'],
                  correctAnswer: 'a',
                  explanation: 'First mention of a non-specific car uses "a".',
                },
                {
                  id: 'art-q2',
                  question: 'He is ___ European.',
                  options: ['a', 'an', 'the', '-'],
                  correctAnswer: 'a',
                  explanation: '"European" starts with a consonant sound /j/, so we use "a".',
                },
                {
                  id: 'art-q3',
                  question: 'I love ___ music.',
                  options: ['a', 'an', 'the', '-'],
                  correctAnswer: '-',
                  explanation: "General uncountable nouns don't need an article.",
                },
                {
                  id: 'art-q4',
                  question: '___ Amazon is the largest river.',
                  options: ['A', 'An', 'The', '-'],
                  correctAnswer: 'The',
                  explanation: 'Rivers use "the" before their names.',
                },
                {
                  id: 'art-q5',
                  question: 'She works as ___ accountant.',
                  options: ['a', 'an', 'the', '-'],
                  correctAnswer: 'an',
                  explanation: '"Accountant" starts with a vowel sound.',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'prepositions',
    title: 'Prepositions',
    description: 'Learn common prepositions of time, place, and direction',
    icon: '📍',
    subcategories: [
      {
        id: 'prepositions-basics',
        title: 'Common Prepositions',
        lessons: [
          {
            id: 'prepositions-time',
            title: 'Prepositions of Time',
            description: 'Master in, on, at for time expressions',
            difficulty: 'beginner',
            content: {
              explanation: `Prepositions of time tell us WHEN something happens.

**AT** - specific times:
• At 5 o'clock, at noon, at midnight
• At the weekend (British), at night
• At Christmas, at Easter (holidays)

**ON** - days and dates:
• On Monday, on Friday
• On March 15th, on my birthday
• On Christmas Day, on New Year's Eve

**IN** - longer periods:
• In the morning/afternoon/evening
• In January, in 2024
• In summer, in the 21st century`,
              structure: `**AT** + specific time/holiday
**ON** + day/date
**IN** + month/year/season/century`,
              examples: [
                { sentence: 'The meeting is at 3 PM.', highlight: 'at 3 PM' },
                { sentence: 'I was born on July 4th.', highlight: 'on July 4th' },
                { sentence: 'We go on vacation in August.', highlight: 'in August' },
                { sentence: 'She exercises in the morning.', highlight: 'in the morning' },
              ],
              tips: [
                'No preposition with: today, tomorrow, yesterday, next/last week',
                '"At night" but "in the morning/afternoon/evening"',
                '"On the weekend" (American) vs "At the weekend" (British)',
                'Remember: IN for big periods, ON for days, AT for precise times',
              ],
            },
            tasks: [
              {
                id: 'prep-task-1',
                type: 'fill-blank',
                question: 'The class starts ___ 9 AM.',
                correctAnswer: 'at',
                explanation: 'Use "at" for specific times.',
              },
              {
                id: 'prep-task-2',
                type: 'multiple-choice',
                question: 'I was born ___ 1995.',
                options: ['at', 'on', 'in'],
                correctAnswer: 'in',
                explanation: 'Use "in" for years.',
              },
              {
                id: 'prep-task-3',
                type: 'fill-blank',
                question: 'We have a meeting ___ Monday.',
                correctAnswer: 'on',
                explanation: 'Use "on" for days of the week.',
              },
            ],
            quiz: {
              id: 'prep-quiz',
              title: 'Prepositions of Time Quiz',
              passingScore: 70,
              questions: [
                {
                  id: 'prep-q1',
                  question: 'The store opens ___ 8 AM.',
                  options: ['in', 'on', 'at', 'by'],
                  correctAnswer: 'at',
                  explanation: 'Use "at" for specific times.',
                },
                {
                  id: 'prep-q2',
                  question: "I'll see you ___ Friday.",
                  options: ['in', 'on', 'at', 'by'],
                  correctAnswer: 'on',
                  explanation: 'Use "on" for days.',
                },
                {
                  id: 'prep-q3',
                  question: 'It snows a lot ___ winter.',
                  options: ['in', 'on', 'at', 'by'],
                  correctAnswer: 'in',
                  explanation: 'Use "in" for seasons.',
                },
                {
                  id: 'prep-q4',
                  question: 'She arrived ___ midnight.',
                  options: ['in', 'on', 'at', 'by'],
                  correctAnswer: 'at',
                  explanation: 'Use "at" for specific times like midnight.',
                },
                {
                  id: 'prep-q5',
                  question: 'We met ___ the morning.',
                  options: ['in', 'on', 'at', 'by'],
                  correctAnswer: 'in',
                  explanation: 'Use "in" for parts of the day (except night).',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'modals',
    title: 'Modal Verbs',
    description: 'Express ability, possibility, and obligation',
    icon: '💪',
    subcategories: [
      {
        id: 'modals-basics',
        title: 'Basic Modals',
        lessons: [
          {
            id: 'modals-can-could',
            title: 'Can, Could, Should',
            description: 'Learn common modal verbs for ability and advice',
            difficulty: 'beginner',
            content: {
              explanation: `Modal verbs add meaning to main verbs. They express ability, possibility, permission, advice, and more.

**CAN** - ability, possibility, permission:
• Ability: "I can swim."
• Possibility: "It can rain in April."
• Permission: "Can I go now?"

**COULD** - past ability, polite requests, possibility:
• Past ability: "I could swim when I was 5."
• Polite request: "Could you help me?"
• Possibility: "It could rain later."

**SHOULD** - advice, recommendation, expectation:
• Advice: "You should see a doctor."
• Recommendation: "You should try this restaurant."
• Expectation: "She should arrive soon."`,
              structure: `**Modal + base verb** (no "to", no -s/-es/-ing)
• She can speak French. (NOT: She can speaks)
• He should go. (NOT: He should to go)
• They could help. (NOT: They could helping)`,
              examples: [
                { sentence: 'I can play the piano.', highlight: 'can play' },
                { sentence: 'Could you open the window?', highlight: 'Could...open' },
                { sentence: 'You should eat more vegetables.', highlight: 'should eat' },
                { sentence: 'She could run fast when she was young.', highlight: 'could run' },
              ],
              tips: [
                "Modal verbs don't change form: he can (NOT he cans)",
                'Use base verb after modals: can go (NOT can to go)',
                '"Could" is more polite than "can" for requests',
                "Negative: can't, couldn't, shouldn't",
              ],
            },
            tasks: [
              {
                id: 'mod-task-1',
                type: 'fill-blank',
                question: 'She ___ speak three languages.',
                correctAnswer: 'can',
                explanation: 'Use "can" for present ability.',
              },
              {
                id: 'mod-task-2',
                type: 'multiple-choice',
                question: 'Which is more polite?',
                options: ['Can you help me?', 'Could you help me?', 'Help me!'],
                correctAnswer: 'Could you help me?',
                explanation: '"Could" is more polite than "can" for requests.',
              },
              {
                id: 'mod-task-3',
                type: 'fill-blank',
                question: 'You ___ study harder for the exam.',
                correctAnswer: 'should',
                explanation: 'Use "should" for advice.',
              },
            ],
            quiz: {
              id: 'mod-quiz',
              title: 'Modal Verbs Quiz',
              passingScore: 70,
              questions: [
                {
                  id: 'mod-q1',
                  question: 'I ___ swim when I was 6 years old.',
                  options: ['can', 'could', 'should', 'will'],
                  correctAnswer: 'could',
                  explanation: 'Use "could" for past ability.',
                },
                {
                  id: 'mod-q2',
                  question: '___ I borrow your pen?',
                  options: ['Should', 'Could', 'Would', 'Will'],
                  correctAnswer: 'Could',
                  explanation: 'Use "Could" for polite requests.',
                },
                {
                  id: 'mod-q3',
                  question: 'You ___ see a doctor about that cough.',
                  options: ['can', 'could', 'should', 'would'],
                  correctAnswer: 'should',
                  explanation: 'Use "should" for advice.',
                },
                {
                  id: 'mod-q4',
                  question: 'She speaks loudly so everyone ___ hear her.',
                  options: ['can', 'could', 'should', 'would'],
                  correctAnswer: 'can',
                  explanation: 'Use "can" for present ability/possibility.',
                },
                {
                  id: 'mod-q5',
                  question: "You ___ eat so much sugar. It's not healthy.",
                  options: ["can't", "couldn't", "shouldn't", "wouldn't"],
                  correctAnswer: "shouldn't",
                  explanation: 'Use "shouldn\'t" for negative advice.',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  conditionalsCategory,
];

// Recursively search for a lesson in subcategory and its children
const findLessonInSubcategory = (
  subcategory: LessonSubcategory,
  lessonId: string
): Lesson | null => {
  const found = subcategory.lessons.find((l) => l.id === lessonId);
  if (found) return found;

  if (subcategory.children) {
    for (const child of subcategory.children) {
      const foundInChild = findLessonInSubcategory(child, lessonId);
      if (foundInChild) return foundInChild;
    }
  }
  return null;
};

export const getLessonById = (
  lessonId: string
): { lesson: Lesson; category: LessonCategory; subcategory: LessonSubcategory } | null => {
  for (const category of lessonCategories) {
    for (const subcategory of category.subcategories) {
      const lesson = findLessonInSubcategory(subcategory, lessonId);
      if (lesson) {
        return { lesson, category, subcategory };
      }
    }
  }
  return null;
};
