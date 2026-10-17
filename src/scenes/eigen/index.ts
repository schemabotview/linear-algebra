import type { Scene } from '@graphlearning/flow'
import { eigenEquation } from './eigen-equation'
import { characteristic } from './characteristic'
import { multiplicity } from './multiplicity'
import { diagonalisation } from './diagonalisation'
import { dynamics } from './dynamics'
import { complexEigenvalues } from './complex-eigenvalues'

// Chapter 9 — one scene per section.
export const eigenScenes: Scene[] = [eigenEquation, characteristic, multiplicity, diagonalisation, dynamics, complexEigenvalues]
