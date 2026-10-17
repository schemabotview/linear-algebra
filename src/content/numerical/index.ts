import type { Course } from '../types'
import { floatingPointSection } from './01-floating-point'
import { normsSection } from './02-norms'
import { conditioningStability } from './03-conditioning-stability'
import { numericalRankSection } from './04-numerical-rank'
import { choosingFactorisations } from './05-choosing-factorisations'
import { integratedCases } from './06-integrated-cases'

// Chapter 12 — Numerical Reliability and Integrated Applications.
export const numerical: Course = {
  id: 'numerical',
  title: 'Numerical reliability and integrated applications',
  sections: [floatingPointSection, normsSection, conditioningStability, numericalRankSection, choosingFactorisations, integratedCases],
}
