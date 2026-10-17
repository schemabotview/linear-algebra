import type { Section } from '../types'

export const rankNullitySection: Section = {
  id: 'rank-nullity',
  title: 'Rank, nullity and dimension counting',
  scene: 'rank-nullity',
  focus: 'trap',
  slide: `## Rank and nullity

The **rank** r is the number of pivots. It sets the dimension of all four subspaces.

### The counts
- dim C(A) = dim C(Aᵀ) = r: row rank equals column rank
- **nullity** = dim N(A) = n − r, the number of free variables
- dim N(Aᵀ) = m − r
- **rank + nullity = n**: here 2 + 2 = 4

### The pivot-column trap
- Row operations change the column space
- R's pivot columns (1, 0, 0), (0, 1, 0) span the plane z = 0, which misses (1, 2, 3)
- So take the basis from **A's** columns 1 and 3; R only tells you which ones

### Watch out
Row operations preserve the row space and the null space, but not the column space.`,
  narration:
    "How big is each of the four subspaces? One number decides all of them: the rank, which is the number of pivots. The column space and the row space both have dimension equal to the rank, so row rank always equals column rank. The null space has one dimension for each free variable, which is n minus r. The left null space has m minus r. Put the first two together and you get the rank-nullity theorem: rank plus nullity equals the number of columns. Here that is two plus two equals four. Every input direction either survives into the output or is lost to the null space. Now a trap that catches almost everyone. Row operations do not preserve the column space. The pivot columns of the reduced matrix span the flat plane where the third coordinate is zero, but A's first column has third coordinate three. So the reduced form tells you which columns are pivots, and the basis must come from A's own columns. Next, solvability in this language.",
}
