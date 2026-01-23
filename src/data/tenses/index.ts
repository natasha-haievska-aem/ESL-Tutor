import type { LessonCategory } from '../../types';

import { activeVoiceSubcategories } from './active-voice';
import { passiveVoiceSubcategories } from './passive-voice';

export { activeVoiceSubcategories } from './active-voice';
export { passiveVoiceSubcategories } from './passive-voice';

export const tensesCategory: LessonCategory = {
  id: 'tenses',
  title: 'Tenses',
  description: 'Master English verb tenses for clear communication',
  icon: '⏰',
  subcategories: [
    {
      id: 'active-voice',
      title: 'Active Voice',
      lessons: [],
      children: activeVoiceSubcategories,
    },
    {
      id: 'passive-voice',
      title: 'Passive Voice',
      lessons: [],
      children: passiveVoiceSubcategories,
    },
  ],
};
