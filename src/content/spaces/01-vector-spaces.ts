import type { Section } from '../types'

export const vectorSpacesSection: Section = {
  id: 'vector-spaces',
  title: 'Vector spaces and their axioms',
  scene: 'vector-spaces',
  focus: 'coords',
  narration:
    "Elimination exposed patterns: free variables, solution sets shaped like lines and planes. This chapter generalises those patterns into spaces of possibilities, with independent coordinates. A vector space is any collection of objects that can be added and scaled, where the usual rules hold. Sums and multiples stay inside. There is a zero vector, and every vector has a negative. And the operations behave the way they do for arrows. The point is that vectors need not be arrows at all. Take the polynomials of degree at most two. On the left, p is one plus two t, and q is three minus t plus t squared. Their sum is again such a polynomial, and so is any multiple. Better still, writing each polynomial by its three coefficients turns it into a list in three dimensions, and adding polynomials is exactly adding those lists. One warning. Polynomials of degree exactly two do not qualify, because subtracting one from itself leaves zero. Next, spaces that live inside other spaces.",
}
