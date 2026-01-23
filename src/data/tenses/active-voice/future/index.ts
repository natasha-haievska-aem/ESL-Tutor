import type { Lesson } from '../../../../types';

export { futureSimple } from './future-simple';
export { futureContinuous } from './future-continuous';
export { futurePerfect } from './future-perfect';
export { futurePerfectContinuous } from './future-perfect-continuous';

import { futureSimple } from './future-simple';
import { futureContinuous } from './future-continuous';
import { futurePerfect } from './future-perfect';
import { futurePerfectContinuous } from './future-perfect-continuous';

export const futureTenseLessons: Lesson[] = [
  futureSimple,
  futureContinuous,
  futurePerfect,
  futurePerfectContinuous,
];
