import type { Lesson } from '../../../../types';

export { pastSimple } from './past-simple';
export { pastContinuous } from './past-continuous';
export { pastPerfect } from './past-perfect';
export { pastPerfectContinuous } from './past-perfect-continuous';

import { pastSimple } from './past-simple';
import { pastContinuous } from './past-continuous';
import { pastPerfect } from './past-perfect';
import { pastPerfectContinuous } from './past-perfect-continuous';

export const pastTenseLessons: Lesson[] = [
  pastSimple,
  pastContinuous,
  pastPerfect,
  pastPerfectContinuous,
];
