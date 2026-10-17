import type { Course } from '../types'
import { areaScalingSection } from './01-area-scaling'
import { definingProperties } from './02-defining-properties'
import { byEliminationSection } from './03-by-elimination'
import { cofactorsSection } from './04-cofactors'
import { detRules } from './05-det-rules'
import { detLimits } from './06-det-limits'
import { cramerSection } from './07-cramer'

// Chapter 6 — Determinants and Volume.
export const determinants: Course = {
  id: 'determinants',
  title: 'Determinants and volume',
  sections: [areaScalingSection, definingProperties, byEliminationSection, cofactorsSection, detRules, detLimits, cramerSection],
}
