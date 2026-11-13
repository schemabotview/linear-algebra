import type { Section } from '../types'

export const basesSection: Section = {
  id: 'bases',
  title: 'Bases, coordinates and dimension',
  scene: 'bases',
  focus: 'two-bases',
  narration:
    "What is the smallest set of vectors that still describes a whole space? A basis: a list that is independent, so nothing is redundant, and that spans, so nothing is missing. Those two properties together mean every vector is a combination of the basis in exactly one way, and the weights of that combination are its coordinates. On the left, the basis is one, one and one, minus one. The vector w, which is four, one in the usual coordinates, is two and a half of the first basis vector plus one and a half of the second. Same arrow, different numbers. Coordinates describe a vector relative to a basis, not the vector itself. A deep fact is that every basis of a space has the same size. That number is the dimension. The plane has dimension two, space has three, and the quadratic polynomials also have three. And any independent list can be grown into a basis by adding vectors from outside its span. Next, the four subspaces every matrix carries.",
}
