import type { Course } from '../types'
import { symmetricEigenSection } from './01-symmetric-eigen'
import { spectralTheorem } from './02-spectral-theorem'
import { quadraticFormsSection } from './03-quadratic-forms'
import { definitenessSection } from './04-definiteness'
import { definitenessTests } from './05-definiteness-tests'
import { choleskySection } from './06-cholesky'
import { covarianceSection } from './07-covariance'

// Chapter 10 — Symmetric Matrices and Quadratic Forms.
export const symmetric: Course = {
  id: 'symmetric',
  title: 'Symmetric matrices and quadratic forms',
  sections: [symmetricEigenSection, spectralTheorem, quadraticFormsSection, definitenessSection, definitenessTests, choleskySection, covarianceSection],
}
