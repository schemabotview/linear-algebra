import type { Scene } from '@graphlearning/flow'
import { pointsAndVectors } from './points-and-vectors'
import { combinations } from './combinations'
import { linesPlanes } from './lines-planes'
import { dotProduct } from './dot-product'
import { units } from './units'
import { linearity } from './linearity'

// Chapter 1 — one scene per section, spread into src/scenes/index.ts.
export const vectorsScenes: Scene[] = [pointsAndVectors, combinations, linesPlanes, dotProduct, units, linearity]
