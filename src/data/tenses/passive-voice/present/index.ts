import type { Lesson } from '../../../../types';

export { presentSimplePassive } from './present-simple-passive';
export { presentContinuousPassive } from './present-continuous-passive';
export { presentPerfectPassive } from './present-perfect-passive';

import { presentSimplePassive } from './present-simple-passive';
import { presentContinuousPassive } from './present-continuous-passive';
import { presentPerfectPassive } from './present-perfect-passive';

export const presentPassiveLessons: Lesson[] = [
  presentSimplePassive,
  presentContinuousPassive,
  presentPerfectPassive,
];
