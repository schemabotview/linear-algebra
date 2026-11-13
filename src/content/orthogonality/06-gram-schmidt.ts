import type { Section } from '../types'

export const gramSchmidtSection: Section = {
  id: 'gram-schmidt',
  title: 'Gram–Schmidt and reduced QR',
  scene: 'gram-schmidt',
  focus: 'remainder',
  narration:
    "How do we get an orthonormal basis when we are given an ordinary one? Gram–Schmidt builds it one vector at a time. Take the first vector and scale it to length one. That is q one. For the second vector, subtract its projection onto q one, keeping only the part that is genuinely new, then scale that remainder to length one. On the left, a one is three, one and a two is two, two. The projection of a two onto a one is two point four, zero point eight, and the remainder is minus zero point four, one point two, which is exactly perpendicular to a one. Recording the work gives a factorisation. A equals Q times R, where Q has orthonormal columns and R is upper triangular, holding the lengths and dot products that Gram–Schmidt computed. It also detects dependence for free. If a column is a combination of earlier ones, its remainder is zero, and there is nothing left to normalise. Next, matrices with orthonormal columns, and how to compute QR reliably.",
}
