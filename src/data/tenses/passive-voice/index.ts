import type { LessonSubcategory } from '../../../types';

export { presentPassiveLessons } from './present';
export { pastPassiveLessons } from './past';
export { futurePassiveLessons } from './future';

import { presentPassiveLessons } from './present';
import { pastPassiveLessons } from './past';
import { futurePassiveLessons } from './future';

export const passiveVoiceSubcategories: LessonSubcategory[] = [
  {
    id: 'present-passive',
    title: 'Present Tenses',
    lessons: presentPassiveLessons,
  },
  {
    id: 'past-passive',
    title: 'Past Tenses',
    lessons: pastPassiveLessons,
  },
  {
    id: 'future-passive',
    title: 'Future Tenses',
    lessons: futurePassiveLessons,
  },
];
