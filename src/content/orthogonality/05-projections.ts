import type { Section } from '../types'

export const projectionsSection: Section = {
  id: 'projections',
  title: 'Projection onto a vector or subspace',
  scene: 'projections',
  focus: 'drop',
  slide: `## Projection

The **projection** p of b onto a line or subspace is its closest point there. The residual e = b − p is **perpendicular** to it.

### Onto a line through a
- Require aᵀ(b − x̂ a) = 0, so x̂ = aᵀb / aᵀa
- a = (2, 1), b = (1, 3): x̂ = 5/5, p = (2, 1), e = (−1, 2)
- Check: e · a = −2 + 2 = 0
- As a matrix: P = a aᵀ / aᵀa = [4 2; 2 1] / 5, and p = P b

### Onto a subspace C(A)
- Require Aᵀ(b − A x̂) = 0, so AᵀA x̂ = Aᵀb
- The projection matrix is P = A (AᵀA)⁻¹ Aᵀ when A has independent columns
- These are the **normal equations** that chapter 8 is built on

### Why perpendicular means closest
For any other q, ‖b − q‖² = ‖e‖² + ‖p − q‖² ≥ ‖e‖². Also P² = P.`,
  narration:
    "What is the closest point to b on a line? Drop a perpendicular. The foot of that perpendicular is the projection p, and the leftover, b minus p, is the residual e, which meets the line at a right angle. That one condition gives the formula. For a line through a, the residual must be perpendicular to a, so the coefficient is a transpose b over a transpose a. Here a is two, one and b is one, three. The coefficient is five over five, so p is two, one, and the residual is minus one, two. Its dot product with a is zero, as promised. For a whole subspace, the column space of A, the residual must be perpendicular to every column at once. That gives A transpose A times x hat equals A transpose b, the equation at the heart of the next chapter. Why is perpendicular the same as closest? By Pythagoras, the distance to any other point adds a second, nonnegative square. And projecting twice changes nothing. Next, building an orthonormal basis from any basis.",
}
