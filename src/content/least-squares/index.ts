import type { Course } from '../types'
import { overdetermined } from './01-overdetermined'
import { normalEquationsSection } from './02-normal-equations'
import { rankDeficiency } from './03-rank-deficiency'
import { qrLeastSquares } from './04-qr-least-squares'
import { designMatricesSection } from './05-design-matrices'
import { weightedRidgeSection } from './06-weighted-ridge'
import { residualDiagnostics } from './07-residual-diagnostics'

// Chapter 8 — Least Squares and Approximate Solutions.
export const leastSquares: Course = {
  id: 'least-squares',
  title: 'Least squares and approximate solutions',
  sections: [
    overdetermined,
    normalEquationsSection,
    rankDeficiency,
    qrLeastSquares,
    designMatricesSection,
    weightedRidgeSection,
    residualDiagnostics,
  ],
}
