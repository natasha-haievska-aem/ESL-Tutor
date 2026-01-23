import type { Lesson } from '../../../../types';

export { presentSimple } from './present-simple';
export { presentContinuous } from './present-continuous';
export { presentPerfect } from './present-perfect';
export { presentPerfectContinuous } from './present-perfect-continuous';

import { presentSimple } from './present-simple';
import { presentContinuous } from './present-continuous';
import { presentPerfect } from './present-perfect';
import { presentPerfectContinuous } from './present-perfect-continuous';

export const presentTenseLessons: Lesson[] = [
  presentSimple,
  presentContinuous,
  presentPerfect,
  presentPerfectContinuous,
];
