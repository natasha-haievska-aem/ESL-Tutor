import type { LessonSubcategory } from '../../../types';

export { presentTenseLessons } from './present';
export { pastTenseLessons } from './past';
export { futureTenseLessons } from './future';

import { presentTenseLessons } from './present';
import { pastTenseLessons } from './past';
import { futureTenseLessons } from './future';

export const activeVoiceSubcategories: LessonSubcategory[] = [
  {
    id: 'present-active',
    title: 'Present Tenses',
    lessons: presentTenseLessons,
  },
  {
    id: 'past-active',
    title: 'Past Tenses',
    lessons: pastTenseLessons,
  },
  {
    id: 'future-active',
    title: 'Future Tenses',
    lessons: futureTenseLessons,
  },
];
