import type { Section } from '../types'

export const detLimits: Section = {
  id: 'det-limits',
  title: 'Eigenvalue preparation and magnitude limits',
  scene: 'limits',
  focus: 'misleading',
  narration:
    "If a determinant of zero means singular, does a tiny determinant mean nearly singular? Surprisingly, no. First, what determinants do well. A minus lambda times the identity is singular exactly when its determinant is zero. For the matrix with rows two, one and one, two, that determinant is two minus lambda squared, minus one, which vanishes at lambda equals one and lambda equals three. Those are the eigenvalues, and chapter nine builds on exactly this idea. Now what determinants do badly. One tenth times the identity in ten dimensions has determinant ten to the minus ten, yet it is as well behaved as a matrix can be: it just shrinks everything evenly. The diagonal matrix with entries a thousand and one thousandth has determinant exactly one, yet it stretches one direction a million times more than another, and that is what makes systems hard to solve accurately. The size of the determinant mixes up scale and difficulty. So never use a determinant threshold to judge numerical rank. Next, Cramer's rule.",
}
