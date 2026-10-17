import type { Scene } from '@graphlearning/flow'
import { areaScaling } from './area-scaling'
import { properties } from './properties'
import { byElimination } from './by-elimination'
import { cofactors } from './cofactors'
import { rules } from './rules'
import { limits } from './limits'
import { cramer } from './cramer'

// Chapter 6 — one scene per section.
export const determinantsScenes: Scene[] = [areaScaling, properties, byElimination, cofactors, rules, limits, cramer]
