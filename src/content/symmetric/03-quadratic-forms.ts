import type { Section } from '../types'

export const quadraticFormsSection: Section = {
  id: 'quadratic-forms',
  title: 'Quadratic forms, cross terms and principal axes',
  scene: 'quadratic-forms',
  focus: 'levels',
  slide: `## Quadratic forms

A **quadratic form** is q(x) = xᵀ S x, with S symmetric. Every expression like ax² + bxy + cy² is one.

### Reading S off the form
- 5x² + 4xy + 2y² has S = [5 2; 2 2]
- The cross-term coefficient 4 is split in half across the off-diagonal

### Principal axes remove the cross term
- Substitute x = Q u, with Q the orthonormal eigenvectors
- Then q = uᵀ Λ u = 6u² + v²: no cross term
- The level curves q = c are ellipses whose axes are q₁ and q₂
- q = 1 reaches 1/√6 ≈ 0.41 along q₁ and 1 along q₂
- In ℝⁿ the level sets are ellipsoids, with n principal axes

### What the eigenvalues say
q grows fastest along the eigenvector with the largest eigenvalue and slowest along the smallest. Here: q₁ steep, q₂ flat.`,
  narration:
    "Where else do symmetric matrices appear? In every expression like a x squared plus b x y plus c y squared. That is a quadratic form, x transpose S x, and its symmetric matrix can be read straight off. For five x squared plus four x y plus two y squared, the diagonal holds five and two, and the cross-term coefficient four is split evenly across the two off-diagonal entries. The cross term is what makes the curves tilted. On the left, the curves where the form equals one, four and nine are ellipses, rotated away from the coordinate axes. The spectral theorem untilts them. Substitute x equals Q u, using the orthonormal eigenvectors as new axes. The form becomes six u squared plus v squared, with no cross term at all. The new axes are the principal axes. The eigenvalues say how fast the form grows in each direction. It rises steeply along q one, with eigenvalue six, and gently along q two, with eigenvalue one. Next, what the signs of those eigenvalues mean.",
}
