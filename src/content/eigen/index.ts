import type { Course } from '../types'
import { eigenEquationSection } from './01-eigen-equation'
import { characteristicPolynomial } from './02-characteristic-polynomial'
import { multiplicitySection } from './03-multiplicity'
import { diagonalisationSection } from './04-diagonalisation'
import { dynamicsSection } from './05-dynamics'
import { complexEigenvaluesSection } from './06-complex-eigenvalues'

// Chapter 9 — Eigenvalues, Eigenvectors, and Dynamics.
export const eigen: Course = {
  id: 'eigen',
  title: 'Eigenvalues, eigenvectors and dynamics',
  sections: [eigenEquationSection, characteristicPolynomial, multiplicitySection, diagonalisationSection, dynamicsSection, complexEigenvaluesSection],
}
