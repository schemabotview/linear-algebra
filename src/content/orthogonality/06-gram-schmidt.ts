import type { Section } from '../types'

export const gramSchmidtSection: Section = {
  id: 'gram-schmidt',
  title: 'Gram–Schmidt and reduced QR',
  scene: 'gram-schmidt',
  focus: 'remainder',
  slide: `## Gram–Schmidt and A = Q R

**Gram–Schmidt** turns independent vectors into orthonormal ones, one at a time: subtract the projections onto earlier q's, then normalise what remains.

### On a₁ = (3, 1), a₂ = (2, 2)
- q₁ = a₁ / √10
- a₂ minus its projection on q₁ leaves (−0.4, 1.2), perpendicular to a₁
- Normalise: q₂ ≈ (−0.316, 0.949)

### Reduced QR
- A = Q R: Q has orthonormal columns, R is upper triangular
- R's entries are the lengths and dot products Gram–Schmidt computed
- Needs full column rank; Q spans the same space as A

### Dependence detection
If some aⱼ is a combination of the earlier columns, its remainder is **zero**: there is nothing new to normalise.`,
  narration:
    "How do we get an orthonormal basis when we are given an ordinary one? Gram–Schmidt builds it one vector at a time. Take the first vector and scale it to length one. That is q one. For the second vector, subtract its projection onto q one, keeping only the part that is genuinely new, then scale that remainder to length one. On the left, a one is three, one and a two is two, two. The projection of a two onto a one is two point four, zero point eight, and the remainder is minus zero point four, one point two, which is exactly perpendicular to a one. Recording the work gives a factorisation. A equals Q times R, where Q has orthonormal columns and R is upper triangular, holding the lengths and dot products that Gram–Schmidt computed. It also detects dependence for free. If a column is a combination of earlier ones, its remainder is zero, and there is nothing left to normalise. Next, matrices with orthonormal columns, and how to compute QR reliably.",
}
