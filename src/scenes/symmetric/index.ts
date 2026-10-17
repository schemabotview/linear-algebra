import type { Scene } from '@graphlearning/flow'
import { symmetricEigen } from './symmetric-eigen'
import { spectral } from './spectral'
import { quadraticForms } from './quadratic-forms'
import { definiteness } from './definiteness'
import { tests } from './tests'
import { cholesky } from './cholesky'
import { covariance } from './covariance'

// Chapter 10 — one scene per section.
export const symmetricScenes: Scene[] = [symmetricEigen, spectral, quadraticForms, definiteness, tests, cholesky, covariance]
