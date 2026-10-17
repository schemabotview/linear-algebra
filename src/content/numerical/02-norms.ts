import type { Section } from '../types'

export const normsSection: Section = {
  id: 'norms',
  title: 'Vector and matrix norms',
  scene: 'norms',
  focus: 'matrix-norms',
  slide: `## Norms

A **norm** measures size. To talk about how big an error is, we need one.

### Vector norms
- ‖x‖₂: ordinary length. ‖x‖₁: sum of sizes. ‖x‖∞: largest component
- Their unit balls on the left: circle, diamond and square

### Matrix norms
- **Induced**: ‖A‖ = the largest ‖A x‖ with ‖x‖ = 1, the most A can stretch
- **Spectral** ‖A‖₂ = σ₁, the induced 2-norm
- **Frobenius** ‖A‖_F = √(sum of squared entries) = √(Σσᵢ²), which is not induced
- For A = [3 0; 4 5]: ‖A‖₂ ≈ 6.71, ‖A‖_F ≈ 7.07, ‖A‖₁ = 7, ‖A‖∞ = 9

### Watch out
Always say which norm. "Error 10⁻⁶" means different things in different norms.`,
  narration:
    "How big is an error? To answer, we need a way to measure size, and there is more than one. For vectors, the two-norm is ordinary length. The one-norm adds up the sizes of the components, and the infinity-norm takes the largest one. Each has its own unit ball: a circle, a diamond and a square. In finite dimensions they never disagree by more than a constant factor, but the factor matters. For matrices, the natural choice is the induced norm: the most the matrix can stretch a vector of length one. In the two-norm, that is exactly the largest singular value, so the SVD from chapter eleven reappears. The Frobenius norm is different. It is the square root of the sum of all squared entries, equal to the root of the sum of squared singular values, and it is the norm Eckart–Young used for low-rank approximation. For the matrix three, zero, four, five, the four norms give six point seven, seven point one, seven and nine. So always say which norm you mean. Next, the most important number in numerical linear algebra.",
}
