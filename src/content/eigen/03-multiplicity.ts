import type { Section } from '../types'

export const multiplicitySection: Section = {
  id: 'multiplicity',
  title: 'Algebraic versus geometric multiplicity',
  scene: 'multiplicity',
  focus: 'counts',
  slide: `## Repeated eigenvalues

A repeated root can come with a full set of eigenvectors, or with too few.

### Two counts
- **Algebraic multiplicity**: how many times λ is a root of det(A − λ I)
- **Geometric multiplicity**: dim N(A − λ I), the number of independent eigenvectors
- Always 1 ≤ geometric ≤ algebraic

### Same eigenvalue, different behaviour
- 2 I: λ = 2 twice, and **every** direction is an eigenvector
- J = [2 1; 0 2]: λ = 2 twice, but N(J − 2I) is only the line through (1, 0)
- On the left, J stretches e₁ but turns e₂ to (1, 2)

### Watch out
Distinct eigenvalues are always safe: each has an eigenvector, and eigenvectors for different eigenvalues are independent.`,
  narration:
    "What happens when an eigenvalue appears twice? Sometimes nothing bad, sometimes a direction goes missing. There are two ways to count. The algebraic multiplicity is how many times lambda is a root of the characteristic polynomial. The geometric multiplicity is how many independent eigenvectors it actually has, the dimension of its eigenspace. The second is never larger than the first. Compare two matrices with lambda equal to two, twice. Two times the identity stretches every direction by two, so every vector is an eigenvector, and both counts are two. The matrix with rows two, one and zero, two looks almost the same, but J minus two I has rank one, so its eigenspace is only the line through one, zero. On the left, J stretches e one along its line, but turns e two away to one, two. Algebraic multiplicity two, geometric multiplicity one. Distinct eigenvalues never cause this problem: each has its own eigenvector, and they are automatically independent. Next, why the missing direction matters.",
}
