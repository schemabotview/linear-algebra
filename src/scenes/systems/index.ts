import type { Scene } from '@graphlearning/flow'
import { rowPicture } from './row-picture'
import { rowOperations } from './row-operations'
import { elimination } from './elimination'
import { reducedEchelon } from './reduced-echelon'
import { solutionCases } from './solution-cases'
import { homogeneous } from './homogeneous'
import { pivoting } from './pivoting'

// Chapter 3 — one scene per section.
export const systemsScenes: Scene[] = [rowPicture, rowOperations, elimination, reducedEchelon, solutionCases, homogeneous, pivoting]
