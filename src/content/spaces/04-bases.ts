import type { Section } from '../types'

export const basesSection: Section = {
  id: 'bases',
  title: 'Bases, coordinates and dimension',
  scene: 'bases',
  focus: 'two-bases',
  slide: `## Bases, coordinates and dimension

A **basis** is a list that is independent and spans the space. Every vector is then a combination of it in **exactly one** way.

### Coordinates
- The weights in that unique combination are the vector's **coordinates**
- In the basis b₁ = (1, 1), b₂ = (1, −1), w = (4, 1) has coordinates (2.5, 1.5)
- Change the basis and the coordinates change; w itself does not

### Dimension
- Every basis of a space has the same number of vectors: its **dimension**
- dim ℝⁿ = n, and dim P₂ = 3 with basis 1, t, t²

### Extending a basis
Any independent list can be extended to a basis by adding vectors from outside its span, one at a time.`,
  narration:
    "What is the smallest set of vectors that still describes a whole space? A basis: a list that is independent, so nothing is redundant, and that spans, so nothing is missing. Those two properties together mean every vector is a combination of the basis in exactly one way, and the weights of that combination are its coordinates. On the left, the basis is one, one and one, minus one. The vector w, which is four, one in the usual coordinates, is two and a half of the first basis vector plus one and a half of the second. Same arrow, different numbers. Coordinates describe a vector relative to a basis, not the vector itself. A deep fact is that every basis of a space has the same size. That number is the dimension. The plane has dimension two, space has three, and the quadratic polynomials also have three. And any independent list can be grown into a basis by adding vectors from outside its span. Next, the four subspaces every matrix carries.",
}
