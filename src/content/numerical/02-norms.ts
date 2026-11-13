import type { Section } from '../types'

export const normsSection: Section = {
  id: 'norms',
  title: 'Vector and matrix norms',
  scene: 'norms',
  focus: 'matrix-norms',
  narration:
    "How big is an error? To answer, we need a way to measure size, and there is more than one. For vectors, the two-norm is ordinary length. The one-norm adds up the sizes of the components, and the infinity-norm takes the largest one. Each has its own unit ball: a circle, a diamond and a square. In finite dimensions they never disagree by more than a constant factor, but the factor matters. For matrices, the natural choice is the induced norm: the most the matrix can stretch a vector of length one. In the two-norm, that is exactly the largest singular value, so the SVD from chapter eleven reappears. The Frobenius norm is different. It is the square root of the sum of all squared entries, equal to the root of the sum of squared singular values, and it is the norm Eckart–Young used for low-rank approximation. For the matrix three, zero, four, five, the four norms give six point seven, seven point one, seven and nine. So always say which norm you mean. Next, the most important number in numerical linear algebra.",
}
