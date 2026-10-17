import type { Scene } from '@graphlearning/flow'
import { losingInformation } from './losing-information'
import { inverses } from './inverses'
import { gaussJordan } from './gauss-jordan'
import { lu } from './lu'
import { pivotedLu } from './pivoted-lu'
import { changeOfBasis } from './change-of-basis'

// Chapter 5 — one scene per section.
export const invertibilityScenes: Scene[] = [losingInformation, inverses, gaussJordan, lu, pivotedLu, changeOfBasis]
