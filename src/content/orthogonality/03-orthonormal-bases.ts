import type { Section } from '../types'

export const orthonormalBases: Section = {
  id: 'orthonormal-bases',
  title: 'Orthogonal sets, orthonormal bases and coordinates',
  scene: 'orthonormal',
  focus: 'coordinates',
  slide: `## Orthonormal bases

Vectors are **orthonormal** when each has length 1 and every pair is perpendicular: qᵢ · qⱼ = 0 for i ≠ j.

### Coordinates for free
- In an orthonormal basis, the coordinate on qᵢ is simply **qᵢ · x**
- q₁ = (0.6, 0.8), q₂ = (−0.8, 0.6) and x = (2, 1) give c₁ = 2, c₂ = −1
- Any other basis needs a linear system solved
- Lengths come for free too: ‖x‖² = c₁² + c₂² = 4 + 1 = 5

### Why it works
- Dot x = c₁ q₁ + c₂ q₂ with q₁: every term but c₁ vanishes
- Nonzero orthogonal vectors are automatically independent

### Watch out
Orthogonal is not orthonormal. If the qᵢ are perpendicular but not unit length, divide: cᵢ = qᵢ · x / qᵢ · qᵢ.`,
  narration:
    "What is the most convenient basis to work in? One whose vectors are all perpendicular and all of length one. Such a basis is called orthonormal, and it makes coordinates almost free. To find how much of x lies along a basis vector, just take the dot product. Here q one is zero point six, zero point eight and q two is minus zero point eight, zero point six. For x equals two, one, the first dot product is two and the second is minus one. So x is two q one minus q two, and the plot confirms it head to tail. Why does this work? Write x as a combination of the basis vectors and dot both sides with q one. Every term except the first vanishes, because the basis vectors are perpendicular, and the first term keeps its full coefficient, because q one has length one. With any other basis, finding coordinates means solving a linear system. One caution. If the vectors are perpendicular but not unit length, divide by each one's squared length. Next, perpendicular subspaces.",
}
