import type { Scene } from '@graphlearning/flow'
import { residualsScene } from './residuals'
import { normalEquations } from './normal-equations'
import { rankDeficient } from './rank-deficient'
import { qrSolve } from './qr-solve'
import { designMatrices } from './design-matrices'
import { weightedRidge } from './weighted-ridge'
import { diagnostics } from './diagnostics'

// Chapter 8 — one scene per section.
export const leastSquaresScenes: Scene[] = [residualsScene, normalEquations, rankDeficient, qrSolve, designMatrices, weightedRidge, diagnostics]
