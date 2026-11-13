import type { Section } from '../types'

export const orthogonalMatricesSection: Section = {
  id: 'orthogonal-matrices',
  title: 'Orthogonal matrices and stable QR',
  scene: 'orthogonal-matrices',
  focus: 'stability',
  narration:
    "What does a matrix with orthonormal columns do geometrically? If it is square, it is called orthogonal, and Q transpose Q is the identity, so its inverse is just its transpose. It preserves lengths and it preserves angles, so it moves space rigidly. Rotations and reflections are the examples, and their determinants are plus or minus one. On the left, a thirty degree rotation turns u and v without changing their lengths or the angle between them. Now a practical warning. The Gram–Schmidt procedure of the previous section, done exactly as written, loses orthogonality in floating point when the columns are nearly dependent. The table is measured, not illustrative. On a standard test matrix, classical Gram–Schmidt returns vectors whose dot product is one half, nowhere near zero. A modified version, which subtracts projections one at a time, does far better. Library QR routines use Householder reflections, which keep Q orthogonal to rounding error. That completes the chapter. Next, projection gives the closest answer when a system has no exact solution.",
}
