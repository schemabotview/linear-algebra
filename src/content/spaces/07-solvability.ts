import type { Section } from '../types'

export const solvabilitySection: Section = {
  id: 'solvability',
  title: 'Consistency and uniqueness through subspaces',
  scene: 'solvability',
  focus: 'membership',
  narration:
    "Chapter three answered whether a system has a solution, and how many, by running elimination. Subspaces give the same answers by structure. A x equals b has a solution exactly when b is a combination of the columns, that is, when b lies in the column space. For our matrix, the left null space is spanned by one, one, minus one, and every reachable b must be perpendicular to it. So one, three, four is reachable, because one plus three minus four is zero, and one, three, five is not. No elimination needed. Uniqueness is the null space's question. Every solution is a particular one plus something from the null space, so the solution is unique exactly when the null space contains only zero. Rank ties it together. Full row rank means every b is reachable. Full column rank means at most one solution. Both means exactly one. That completes the chapter. Next, when the information a matrix carries can be recovered.",
}
