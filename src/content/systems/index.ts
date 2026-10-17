import type { Course } from '../types'
import { augmentedMatrices } from './01-augmented-matrices'
import { rowOperationsSection } from './02-row-operations'
import { echelonForm } from './03-echelon-form'
import { reducedEchelonSection } from './04-reduced-echelon'
import { solutionCasesSection } from './05-solution-cases'
import { homogeneousSection } from './06-homogeneous'
import { pivotingSection } from './07-pivoting'

// Chapter 3 — Linear Systems and Elimination.
export const systems: Course = {
  id: 'systems',
  title: 'Linear systems and elimination',
  sections: [
    augmentedMatrices,
    rowOperationsSection,
    echelonForm,
    reducedEchelonSection,
    solutionCasesSection,
    homogeneousSection,
    pivotingSection,
  ],
}
