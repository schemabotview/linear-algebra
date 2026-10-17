import type { Section } from '../types'

export const innerProductsSection: Section = {
  id: 'inner-products',
  title: 'Inner products, norms and weighted geometry',
  scene: 'inner-products',
  focus: 'unit-sets',
  slide: `## Inner products

An **inner product** ⟨u, v⟩ generalises the dot product. It is symmetric, linear in each slot, and positive: ⟨u, u⟩ > 0 unless u = 0.

### Every inner product brings a geometry
- Length: ‖u‖ = √⟨u, u⟩
- Distance: ‖u − v‖
- Orthogonality: ⟨u, v⟩ = 0
- Angle: cos θ = ⟨u, v⟩ / (‖u‖ ‖v‖)

### A weighted inner product
- ⟨u, v⟩ = u₁v₁ + 4 u₂v₂ = uᵀ W v with W = diag(1, 4)
- Its "unit circle" is the ellipse u₁² + 4u₂² = 1
- (0, 0.5) has length 1 here, the same as (1, 0)
- The dot product is the special case W = I

### Why weight?
Chapter 1's unit problem: weights put components measured in different units on a comparable footing, and the choice must be stated.`,
  narration:
    "Determinants measure volume. Inner products measure alignment, and with them we can find closest approximations. This chapter builds orthogonal representations and derives projections from geometry. An inner product is a rule that takes two vectors and returns a number, generalising the dot product. It must be symmetric, linear in each input, and positive whenever a vector is not zero. Every inner product brings a whole geometry with it: a length, a distance, and a meaning for perpendicular. On the left, compare two of them. Under the ordinary dot product, the vectors of length one form a circle. Under the weighted rule u one v one plus four u two v two, they form an ellipse, because the second coordinate now counts double. The vector zero, one half has length one in this geometry, the same as one, zero. Weights are how we handle chapter one's unit problem honestly. They put components in different units on a comparable footing, and the choice should always be stated. Next, two inequalities that every inner product obeys.",
}
