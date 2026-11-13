import type { BoardScene } from '../frame'
import { innerProducts } from './inner-products'
import { cauchySchwarz } from './cauchy-schwarz'
import { orthonormal } from './orthonormal'
import { complements } from './complements'
import { projections } from './projections'
import { gramSchmidt } from './gram-schmidt'
import { orthogonalMatrices } from './orthogonal-matrices'

// Chapter 7 — one scene per section.
export const orthogonalityScenes: BoardScene[] = [innerProducts, cauchySchwarz, orthonormal, complements, projections, gramSchmidt, orthogonalMatrices]
