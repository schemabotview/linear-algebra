import type { BoardScene } from '../frame'
import { matrixAnatomy } from './matrix-anatomy'
import { twoViews } from './two-views'
import { composition } from './composition'
import { specialMatrices } from './special-matrices'
import { geometricMaps } from './geometric-maps'
import { affineMaps } from './affine-maps'
import { matrixAlgebra } from './matrix-algebra'

// Chapter 2 — one scene per section.
export const matricesScenes: BoardScene[] = [
  matrixAnatomy,
  twoViews,
  composition,
  specialMatrices,
  geometricMaps,
  affineMaps,
  matrixAlgebra,
]
