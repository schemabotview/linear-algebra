import type { Section } from '../types'

export const complementsSection: Section = {
  id: 'orthogonal-complements',
  title: 'Orthogonal complements and the four subspaces',
  scene: 'complements',
  focus: 'checks',
  narration:
    "Chapter four promised that the four subspaces meet at right angles. Here is why. Look at A x equals zero row by row. Each row says that the dot product of that row with x is zero. So x is in the null space exactly when it is perpendicular to every row, which means perpendicular to the whole row space. The null space is the orthogonal complement of the row space. Applying the same argument to A transpose shows that the left null space is the orthogonal complement of the column space. The dimensions fit: r plus n minus r makes n, and r plus m minus r makes m. On the left is the smallest case, the one by two matrix one, two. Its row space is the line along one, two, and its null space is the line along minus two, one, at a right angle. The table checks chapter four's example: every dot product between the paired subspaces is zero. The payoff is that every vector splits uniquely into a row-space part and a null-space part. Next, projection.",
}
