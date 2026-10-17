import type { Course } from '../types'
import { innerProductsSection } from './01-inner-products'
import { cauchySchwarzSection } from './02-cauchy-schwarz'
import { orthonormalBases } from './03-orthonormal-bases'
import { complementsSection } from './04-complements'
import { projectionsSection } from './05-projections'
import { gramSchmidtSection } from './06-gram-schmidt'
import { orthogonalMatricesSection } from './07-orthogonal-matrices'

// Chapter 7 — Inner Products, Orthogonality, and QR.
export const orthogonality: Course = {
  id: 'orthogonality',
  title: 'Inner products, orthogonality and QR',
  sections: [
    innerProductsSection,
    cauchySchwarzSection,
    orthonormalBases,
    complementsSection,
    projectionsSection,
    gramSchmidtSection,
    orthogonalMatricesSection,
  ],
}
