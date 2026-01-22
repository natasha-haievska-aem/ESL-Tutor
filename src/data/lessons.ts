import type { LessonCategory, Lesson, LessonSubcategory } from '../types';

export const lessonCategories: LessonCategory[] = [
  {
    id: 'tenses',
    title: 'Tenses',
    description: 'Master English verb tenses for clear communication',
    icon: '⏰',
    subcategories: [
      {
        id: 'present',
        title: 'Present Tenses',
        lessons: [
          {
            id: 'present-simple',
            title: 'Present Simple',
            description: 'Learn about habits, facts, and routines',
            difficulty: 'beginner',
            content: {
              explanation: `The Present Simple tense is used to describe habits, routines, general truths, and facts. It's one of the most commonly used tenses in English.

**When to use Present Simple:**
• Habits and routines: "I wake up at 7 AM every day."
• General truths: "The sun rises in the east."
• Facts: "Water boils at 100°C."
• Schedules: "The train leaves at 9 PM."`,
              structure: `**Affirmative:** Subject + base verb (+ s/es for he/she/it)
**Negative:** Subject + do/does + not + base verb
**Question:** Do/Does + subject + base verb?`,
              examples: [
                { sentence: 'She works in a hospital.', highlight: 'works' },
                { sentence: 'They play football every weekend.', highlight: 'play' },
                { sentence: 'He doesn\'t like coffee.', highlight: 'doesn\'t like' },
                { sentence: 'Do you speak English?', highlight: 'Do...speak' },
              ],
              tips: [
                'Add -s or -es to verbs for he/she/it',
                'Use "does" for questions and negatives with he/she/it',
                'Common time expressions: always, usually, often, sometimes, never, every day/week/month',
              ],
            },
            tasks: [
              {
                id: 'ps-task-1',
                type: 'fill-blank',
                question: 'She ___ (go) to school by bus.',
                correctAnswer: 'goes',
                explanation: 'We add -es to "go" for he/she/it in Present Simple.',
              },
              {
                id: 'ps-task-2',
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: ['He work in a bank.', 'He works in a bank.', 'He working in a bank.'],
                correctAnswer: 'He works in a bank.',
                explanation: 'For he/she/it, we add -s to the base verb in Present Simple.',
              },
              {
                id: 'ps-task-3',
                type: 'fill-blank',
                question: 'They ___ (not/eat) meat.',
                correctAnswer: "don't eat",
                explanation: 'For negatives with they/we/I/you, use "don\'t" + base verb.',
              },
            ],
            quiz: {
              id: 'ps-quiz',
              title: 'Present Simple Quiz',
              passingScore: 70,
              questions: [
                {
                  id: 'ps-q1',
                  question: 'She ___ to music every evening.',
                  options: ['listen', 'listens', 'listening', 'listened'],
                  correctAnswer: 'listens',
                  explanation: 'With she, we add -s to the verb in Present Simple.',
                },
                {
                  id: 'ps-q2',
                  question: '___ you like pizza?',
                  options: ['Does', 'Do', 'Are', 'Is'],
                  correctAnswer: 'Do',
                  explanation: 'We use "Do" for questions with you/I/we/they.',
                },
                {
                  id: 'ps-q3',
                  question: 'Water ___ at 100 degrees Celsius.',
                  options: ['boil', 'boils', 'boiling', 'boiled'],
                  correctAnswer: 'boils',
                  explanation: 'Facts use Present Simple. Water is singular, so we add -s.',
                },
                {
                  id: 'ps-q4',
                  question: 'He ___ breakfast in the morning.',
                  options: ["don't eat", "doesn't eat", "not eat", "no eat"],
                  correctAnswer: "doesn't eat",
                  explanation: 'For negatives with he/she/it, use "doesn\'t" + base verb.',
                },
                {
                  id: 'ps-q5',
                  question: 'The shop ___ at 9 AM.',
                  options: ['open', 'opens', 'opening', 'opened'],
                  correctAnswer: 'opens',
                  explanation: 'Schedules use Present Simple. The shop is singular.',
                },
              ],
            },
          },
          {
            id: 'present-continuous',
            title: 'Present Continuous',
            description: 'Express actions happening right now',
            difficulty: 'beginner',
            content: {
              explanation: `The Present Continuous (also called Present Progressive) describes actions happening at the moment of speaking or temporary situations.

**When to use Present Continuous:**
• Actions happening now: "I am reading a book."
• Temporary situations: "She is staying with her parents this week."
• Future arrangements: "We are meeting them tomorrow."
• Annoying habits (with always): "He is always losing his keys!"`,
              structure: `**Affirmative:** Subject + am/is/are + verb-ing
**Negative:** Subject + am/is/are + not + verb-ing
**Question:** Am/Is/Are + subject + verb-ing?`,
              examples: [
                { sentence: 'I am working from home today.', highlight: 'am working' },
                { sentence: 'They are playing tennis right now.', highlight: 'are playing' },
                { sentence: 'She is not listening to me.', highlight: 'is not listening' },
                { sentence: 'Are you coming to the party?', highlight: 'Are...coming' },
              ],
              tips: [
                'Use am with I, is with he/she/it, are with you/we/they',
                'Drop the -e before adding -ing (make → making)',
                'Double the consonant for short verbs (run → running)',
                'Some verbs are not used in continuous: know, believe, love, hate, want',
              ],
            },
            tasks: [
              {
                id: 'pc-task-1',
                type: 'fill-blank',
                question: 'Look! The baby ___ (sleep).',
                correctAnswer: 'is sleeping',
                explanation: 'Use is + verb-ing for he/she/it in Present Continuous.',
              },
              {
                id: 'pc-task-2',
                type: 'multiple-choice',
                question: 'Which sentence describes an action happening now?',
                options: ['I go to work.', 'I am going to work.', 'I went to work.'],
                correctAnswer: 'I am going to work.',
                explanation: 'Present Continuous describes actions happening at this moment.',
              },
              {
                id: 'pc-task-3',
                type: 'fill-blank',
                question: 'We ___ (not/watch) TV at the moment.',
                correctAnswer: "aren't watching",
                explanation: 'For negatives, use am/is/are + not + verb-ing.',
              },
            ],
            quiz: {
              id: 'pc-quiz',
              title: 'Present Continuous Quiz',
              passingScore: 70,
              questions: [
                {
                  id: 'pc-q1',
                  question: 'I ___ my homework right now.',
                  options: ['do', 'am doing', 'does', 'doing'],
                  correctAnswer: 'am doing',
                  explanation: 'Use "am doing" for I in Present Continuous.',
                },
                {
                  id: 'pc-q2',
                  question: '___ they coming to the party?',
                  options: ['Do', 'Does', 'Are', 'Is'],
                  correctAnswer: 'Are',
                  explanation: 'Use "Are" for questions with they in Present Continuous.',
                },
                {
                  id: 'pc-q3',
                  question: 'She ___ a new dress today.',
                  options: ['wear', 'wears', 'is wearing', 'wearing'],
                  correctAnswer: 'is wearing',
                  explanation: 'Use "is wearing" for she in Present Continuous.',
                },
                {
                  id: 'pc-q4',
                  question: 'The children ___ in the garden.',
                  options: ['plays', 'playing', 'are playing', 'play'],
                  correctAnswer: 'are playing',
                  explanation: 'Use "are" with plural subjects in Present Continuous.',
                },
                {
                  id: 'pc-q5',
                  question: 'It ___ outside.',
                  options: ['rain', 'rains', 'is raining', 'raining'],
                  correctAnswer: 'is raining',
                  explanation: 'Use "is" with it in Present Continuous.',
                },
              ],
            },
          },
          {
            id: 'present-perfect',
            title: 'Present Perfect',
            description: 'Connect past experiences to the present',
            difficulty: 'intermediate',
            content: {
              explanation: `The Present Perfect connects the past with the present. It describes experiences, changes, and actions that started in the past and continue now.

**When to use Present Perfect:**
• Life experiences: "I have visited Paris twice."
• Recent actions with present results: "She has lost her keys." (She doesn't have them now)
• Actions that started in the past and continue: "We have lived here for 10 years."
• With just, already, yet, ever, never`,
              structure: `**Affirmative:** Subject + have/has + past participle
**Negative:** Subject + have/has + not + past participle
**Question:** Have/Has + subject + past participle?`,
              examples: [
                { sentence: 'I have seen that movie before.', highlight: 'have seen' },
                { sentence: 'She has already finished her work.', highlight: 'has...finished' },
                { sentence: 'They haven\'t arrived yet.', highlight: "haven't arrived" },
                { sentence: 'Have you ever been to Japan?', highlight: 'Have...been' },
              ],
              tips: [
                'Use have with I/you/we/they, has with he/she/it',
                'Learn irregular past participles: go→gone, see→seen, eat→eaten',
                'For/since: "for" + duration, "since" + point in time',
                'Just = recently, Already = before now, Yet = until now (negatives/questions)',
              ],
            },
            tasks: [
              {
                id: 'pp-task-1',
                type: 'fill-blank',
                question: 'I ___ (never/try) sushi before.',
                correctAnswer: 'have never tried',
                explanation: 'Use have + never + past participle for negative experiences.',
              },
              {
                id: 'pp-task-2',
                type: 'multiple-choice',
                question: 'She ___ here since 2015.',
                options: ['lived', 'has lived', 'is living', 'lives'],
                correctAnswer: 'has lived',
                explanation: 'Use Present Perfect with "since" for actions starting in the past and continuing.',
              },
              {
                id: 'pp-task-3',
                type: 'fill-blank',
                question: '___ you ever ___ (be) to London?',
                correctAnswer: 'Have...been',
                explanation: 'Use Have + subject + ever + past participle for experience questions.',
              },
            ],
            quiz: {
              id: 'pp-quiz',
              title: 'Present Perfect Quiz',
              passingScore: 70,
              questions: [
                {
                  id: 'pp-q1',
                  question: 'I ___ that book already.',
                  options: ['read', 'have read', 'am reading', 'reads'],
                  correctAnswer: 'have read',
                  explanation: 'Use "have read" with already in Present Perfect.',
                },
                {
                  id: 'pp-q2',
                  question: 'She ___ her homework yet.',
                  options: ["hasn't finished", "didn't finish", "doesn't finish", "not finished"],
                  correctAnswer: "hasn't finished",
                  explanation: 'Use "hasn\'t" + past participle with "yet" in negatives.',
                },
                {
                  id: 'pp-q3',
                  question: 'They ___ in this city for 20 years.',
                  options: ['live', 'are living', 'have lived', 'lived'],
                  correctAnswer: 'have lived',
                  explanation: 'Use Present Perfect with "for" showing duration.',
                },
                {
                  id: 'pp-q4',
                  question: '___ you ever ___ to Australia?',
                  options: ['Did...go', 'Have...been', 'Are...going', 'Do...go'],
                  correctAnswer: 'Have...been',
                  explanation: 'Use "Have...been" for asking about life experiences.',
                },
                {
                  id: 'pp-q5',
                  question: 'He has just ___ home.',
                  options: ['arrive', 'arrives', 'arrived', 'arriving'],
                  correctAnswer: 'arrived',
                  explanation: 'Use past participle after "has" in Present Perfect.',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'past',
        title: 'Past Tenses',
        lessons: [
          {
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
• Past states: "He was a doctor for 30 years."`,
              structure: `**Affirmative:** Subject + past form of verb
**Negative:** Subject + did not (didn't) + base verb
**Question:** Did + subject + base verb?`,
              examples: [
                { sentence: 'We went to the beach yesterday.', highlight: 'went' },
                { sentence: 'She studied French in high school.', highlight: 'studied' },
                { sentence: 'They didn\'t come to the meeting.', highlight: "didn't come" },
                { sentence: 'Did you see the movie?', highlight: 'Did...see' },
              ],
              tips: [
                'Regular verbs: add -ed (work→worked, play→played)',
                'Irregular verbs must be memorized (go→went, see→saw, eat→ate)',
                'Use "did" for all persons in questions and negatives',
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
                explanation: 'Use "didn\'t" + base verb for negatives in Past Simple.',
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
                  explanation: 'Use "didn\'t" for negatives in Past Simple.',
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
          },
          {
            id: 'past-continuous',
            title: 'Past Continuous',
            description: 'Describe ongoing actions in the past',
            difficulty: 'intermediate',
            content: {
              explanation: `The Past Continuous describes actions that were in progress at a specific time in the past.

**When to use Past Continuous:**
• Action in progress at a specific time: "At 8 PM, I was watching TV."
• Background action interrupted by another: "I was cooking when the phone rang."
• Two parallel actions: "While she was reading, he was sleeping."
• Setting the scene: "The sun was shining and birds were singing."`,
              structure: `**Affirmative:** Subject + was/were + verb-ing
**Negative:** Subject + was/were + not + verb-ing
**Question:** Was/Were + subject + verb-ing?`,
              examples: [
                { sentence: 'I was working at 9 PM last night.', highlight: 'was working' },
                { sentence: 'They were playing when it started to rain.', highlight: 'were playing' },
                { sentence: 'She wasn\'t listening to me.', highlight: "wasn't listening" },
                { sentence: 'What were you doing at 6 AM?', highlight: 'were...doing' },
              ],
              tips: [
                'Use was with I/he/she/it, were with you/we/they',
                'Often used with "when" (interrupted action) and "while" (parallel actions)',
                'The shorter action uses Past Simple, the longer uses Past Continuous',
                'Time expressions: at that moment, at 6 o\'clock, all day yesterday',
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
                explanation: 'Use were + not + verb-ing for negatives with they.',
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
                  options: ['wasn\'t paying', "weren't paying", "didn't paying", 'not paying'],
                  correctAnswer: "weren't paying",
                  explanation: 'Use "weren\'t" with "they" in Past Continuous negatives.',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'future',
        title: 'Future Tenses',
        lessons: [
          {
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
• Facts about the future: "The meeting will start at 3 PM."`,
              structure: `**Affirmative:** Subject + will + base verb
**Negative:** Subject + will not (won't) + base verb
**Question:** Will + subject + base verb?`,
              examples: [
                { sentence: 'She will arrive soon.', highlight: 'will arrive' },
                { sentence: 'I think it will be sunny tomorrow.', highlight: 'will be' },
                { sentence: 'We won\'t be late.', highlight: "won't be" },
                { sentence: 'Will you help me?', highlight: 'Will...help' },
              ],
              tips: [
                '"Will" is the same for all persons',
                'Short form: I\'ll, you\'ll, he\'ll, she\'ll, we\'ll, they\'ll',
                'Negative short form: won\'t',
                'For planned future, consider using "going to" or Present Continuous instead',
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
                explanation: 'Use won\'t + base verb for negatives.',
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
                  question: 'It ___ difficult, but we can try.',
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
                  question: 'Don\'t worry, I ___ tell anyone.',
                  options: ["won't", "don't", "didn't", 'am not'],
                  correctAnswer: "won't",
                  explanation: 'Use "won\'t" for promises not to do something.',
                },
                {
                  id: 'fs-q5',
                  question: 'The sun ___ rise at 6 AM tomorrow.',
                  options: ['will', 'won\'t', 'is', 'does'],
                  correctAnswer: 'will',
                  explanation: 'Use "will" for facts about the future.',
                },
              ],
            },
          },
        ],
      },
    ],
  },
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
                  explanation: 'General uncountable nouns don\'t need an article.',
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
                  question: 'I\'ll see you ___ Friday.',
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
                'Modal verbs don\'t change form: he can (NOT he cans)',
                'Use base verb after modals: can go (NOT can to go)',
                '"Could" is more polite than "can" for requests',
                'Negative: can\'t, couldn\'t, shouldn\'t',
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
                  question: 'You ___ eat so much sugar. It\'s not healthy.',
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
];

export const getLessonById = (lessonId: string): { lesson: Lesson; category: LessonCategory; subcategory: LessonSubcategory } | null => {
  for (const category of lessonCategories) {
    for (const subcategory of category.subcategories) {
      const lesson = subcategory.lessons.find(l => l.id === lessonId);
      if (lesson) {
        return { lesson, category, subcategory };
      }
    }
  }
  return null;
};
