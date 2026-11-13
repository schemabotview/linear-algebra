import type { Section } from '../types'

export const rankOneTerms: Section = {
  id: 'rank-one-terms',
  title: 'Rank, null spaces and rank-one terms',
  scene: 'rank-one',
  focus: 'pieces',
  narration:
    "Is there another way to read the SVD? Multiply it out, and it becomes a sum of simple pieces. Each piece is a singular value times an outer product, u i times v i transpose. An outer product has rank one: every row is a multiple of the same vector. So any matrix is a weighted sum of rank-one matrices, ordered from most important to least. For our three by two example, two pieces add back to the original matrix exactly, as the table shows. This immediately reveals the rank: it is the number of nonzero singular values. And the SVD hands us orthonormal bases for all four fundamental subspaces at once. The first r columns of U span the column space, and the rest span the left null space. The first r columns of V span the row space, and the rest span the null space. Everything from chapters four and seven, in one factorisation. One practical caution: in floating point, deciding which singular values are zero needs a tolerance. Next, inverting a matrix that has no inverse.",
}
