import type { Course } from '../types'
import { matrixVectorProducts } from './01-matrix-vector-products'
import { columnAndRowViews } from './02-column-and-row-views'
import { compositionSection } from './03-composition'
import { specialMatricesSection } from './04-special-matrices'
import { geometricMapsSection } from './05-geometric-maps'
import { affineMapsSection } from './06-affine-maps'
import { matrixAlgebraSection } from './07-matrix-algebra'

// Chapter 2 — Matrices and Linear Transformations.
export const matrices: Course = {
  id: 'matrices',
  title: 'Matrices and linear transformations',
  sections: [
    matrixVectorProducts,
    columnAndRowViews,
    compositionSection,
    specialMatricesSection,
    geometricMapsSection,
    affineMapsSection,
    matrixAlgebraSection,
  ],
}
