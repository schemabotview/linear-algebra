import type { BoardScene } from '../frame'
import { eigenEquation } from './eigen-equation'
import { characteristic } from './characteristic'
import { multiplicity } from './multiplicity'
import { diagonalisation } from './diagonalisation'
import { dynamics } from './dynamics'
import { complexEigenvalues } from './complex-eigenvalues'

// Chapter 9 — one scene per section.
export const eigenScenes: BoardScene[] = [eigenEquation, characteristic, multiplicity, diagonalisation, dynamics, complexEigenvalues]
