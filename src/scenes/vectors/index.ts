import type { SceneModel } from '@graphlearning/graphl-flow'
import { pointsAndVectors } from './points-and-vectors'
import { combinations } from './combinations'
import { linesPlanes } from './lines-planes'
import { dotProduct } from './dot-product'
import { units } from './units'
import { linearity } from './linearity'

// Chapter 1 — one scene per section, by scene id (src/scenes/index.ts merges every chapter's).
export const vectorsScenes: Record<string, SceneModel> = {
  'points-and-vectors': pointsAndVectors,
  combinations,
  'lines-planes': linesPlanes,
  'dot-product': dotProduct,
  units,
  linearity,
}
