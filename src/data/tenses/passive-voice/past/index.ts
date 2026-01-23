import type { Lesson } from '../../../../types';

export { pastSimplePassive } from './past-simple-passive';
export { pastContinuousPassive } from './past-continuous-passive';
export { pastPerfectPassive } from './past-perfect-passive';

import { pastSimplePassive } from './past-simple-passive';
import { pastContinuousPassive } from './past-continuous-passive';
import { pastPerfectPassive } from './past-perfect-passive';

export const pastPassiveLessons: Lesson[] = [
  pastSimplePassive,
  pastContinuousPassive,
  pastPerfectPassive,
];
