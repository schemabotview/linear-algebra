import type { Section } from '../types'

export const vectorSpacesSection: Section = {
  id: 'vector-spaces',
  title: 'Vector spaces and their axioms',
  scene: 'vector-spaces',
  focus: 'coords',
  slide: `## Vector spaces

A **vector space** is any set whose elements can be added and scaled by real numbers, following the same rules as arrows in ℝⁿ.

### The rules, in short
- Closed: u + v and c u stay in the set
- A zero vector, and a negative −u for every u
- Addition is commutative and associative; scaling distributes over it

### Vectors that are not arrows
- **P₂**: polynomials of degree at most 2, such as p(t) = 1 + 2t
- p + q and 2p are again in P₂
- In the basis 1, t, t², each polynomial is a coordinate list in ℝ³, and adding polynomials adds the lists

### Watch out
Polynomials of degree **exactly** 2 do not form a vector space: t² + (−t²) = 0 has degree 0.`,
  narration:
    "Elimination exposed patterns: free variables, solution sets shaped like lines and planes. This chapter generalises those patterns into spaces of possibilities, with independent coordinates. A vector space is any collection of objects that can be added and scaled, where the usual rules hold. Sums and multiples stay inside. There is a zero vector, and every vector has a negative. And the operations behave the way they do for arrows. The point is that vectors need not be arrows at all. Take the polynomials of degree at most two. On the left, p is one plus two t, and q is three minus t plus t squared. Their sum is again such a polynomial, and so is any multiple. Better still, writing each polynomial by its three coefficients turns it into a list in three dimensions, and adding polynomials is exactly adding those lists. One warning. Polynomials of degree exactly two do not qualify, because subtracting one from itself leaves zero. Next, spaces that live inside other spaces.",
}
