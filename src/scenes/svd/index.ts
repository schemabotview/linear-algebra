import type { BoardScene } from '../frame'
import { svdShapes } from './svd-shapes'
import { geometry } from './geometry'
import { rankOne } from './rank-one'
import { pseudoinverse } from './pseudoinverse'
import { truncated } from './truncated'
import { pca } from './pca'
import { pcaLimits } from './pca-limits'

// Chapter 11 — one scene per section.
export const svdScenes: BoardScene[] = [svdShapes, geometry, rankOne, pseudoinverse, truncated, pca, pcaLimits]
