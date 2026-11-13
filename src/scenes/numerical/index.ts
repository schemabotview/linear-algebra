import type { BoardScene } from '../frame'
import { floatingPoint } from './floating-point'
import { norms } from './norms'
import { conditioning } from './conditioning'
import { numericalRank } from './numerical-rank'
import { choosing } from './choosing'
import { integrated } from './integrated'

// Chapter 12 — one scene per section.
export const numericalScenes: BoardScene[] = [floatingPoint, norms, conditioning, numericalRank, choosing, integrated]
