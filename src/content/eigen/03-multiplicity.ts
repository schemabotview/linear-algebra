import type { Section } from '../types'

export const multiplicitySection: Section = {
  id: 'multiplicity',
  title: 'Algebraic versus geometric multiplicity',
  scene: 'multiplicity',
  focus: 'counts',
  narration:
    "What happens when an eigenvalue appears twice? Sometimes nothing bad, sometimes a direction goes missing. There are two ways to count. The algebraic multiplicity is how many times lambda is a root of the characteristic polynomial. The geometric multiplicity is how many independent eigenvectors it actually has, the dimension of its eigenspace. The second is never larger than the first. Compare two matrices with lambda equal to two, twice. Two times the identity stretches every direction by two, so every vector is an eigenvector, and both counts are two. The matrix with rows two, one and zero, two looks almost the same, but J minus two I has rank one, so its eigenspace is only the line through one, zero. On the left, J stretches e one along its line, but turns e two away to one, two. Algebraic multiplicity two, geometric multiplicity one. Distinct eigenvalues never cause this problem: each has its own eigenvector, and they are automatically independent. Next, why the missing direction matters.",
}
