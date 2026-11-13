import type { BoardScene } from '../frame'
import { losingInformation } from './losing-information'
import { inverses } from './inverses'
import { gaussJordan } from './gauss-jordan'
import { lu } from './lu'
import { pivotedLu } from './pivoted-lu'
import { changeOfBasis } from './change-of-basis'

// Chapter 5 — one scene per section.
export const invertibilityScenes: BoardScene[] = [losingInformation, inverses, gaussJordan, lu, pivotedLu, changeOfBasis]
