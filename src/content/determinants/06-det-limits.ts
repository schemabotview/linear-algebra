import type { Section } from '../types'

export const detLimits: Section = {
  id: 'det-limits',
  title: 'Eigenvalue preparation and magnitude limits',
  scene: 'limits',
  focus: 'misleading',
  slide: `## What det can and cannot tell you

det A answers one exact question well: is A singular? Its **size** answers much less.

### Useful: finding eigenvalues
- A − λ I is singular exactly when det(A − λ I) = 0
- For A = [2 1; 1 2] that is (2 − λ)² − 1 = 0, so λ = 1 or 3
- Its roots are exactly where A − λ I loses its inverse
- Chapter 9 builds on this

### Misleading: "small det, nearly singular"
- 0.1 I in 10 dimensions has det 10⁻¹⁰, yet it is perfectly well behaved
- diag(1000, 0.001) has det 1, yet it is badly conditioned
- Rescaling a matrix changes det enormously without changing its difficulty

### Watch out
Never use a determinant threshold as a numerical rank test. Chapter 12 gives the right tool: singular values.`,
  narration:
    "If a determinant of zero means singular, does a tiny determinant mean nearly singular? Surprisingly, no. First, what determinants do well. A minus lambda times the identity is singular exactly when its determinant is zero. For the matrix with rows two, one and one, two, that determinant is two minus lambda squared, minus one, which vanishes at lambda equals one and lambda equals three. Those are the eigenvalues, and chapter nine builds on exactly this idea. Now what determinants do badly. One tenth times the identity in ten dimensions has determinant ten to the minus ten, yet it is as well behaved as a matrix can be: it just shrinks everything evenly. The diagonal matrix with entries a thousand and one thousandth has determinant exactly one, yet it stretches one direction a million times more than another, and that is what makes systems hard to solve accurately. The size of the determinant mixes up scale and difficulty. So never use a determinant threshold to judge numerical rank. Next, Cramer's rule.",
}
