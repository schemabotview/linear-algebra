import type { Course } from '../types'
import { injectiveSurjective } from './01-injective-surjective'
import { inversesSection } from './02-inverses'
import { computingInverses } from './03-computing-inverses'
import { luFactorisation } from './04-lu-factorisation'
import { pivotedLuSection } from './05-pivoted-lu'
import { changeOfBasisSection } from './06-change-of-basis'

// Chapter 5 — Invertibility, Factorisation, and Coordinate Changes.
export const invertibility: Course = {
  id: 'invertibility',
  title: 'Invertibility, factorisation and coordinate changes',
  sections: [injectiveSurjective, inversesSection, computingInverses, luFactorisation, pivotedLuSection, changeOfBasisSection],
}
