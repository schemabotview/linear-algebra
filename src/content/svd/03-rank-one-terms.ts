import type { Section } from '../types'

export const rankOneTerms: Section = {
  id: 'rank-one-terms',
  title: 'Rank, null spaces and rank-one terms',
  scene: 'rank-one',
  focus: 'pieces',
  slide: `## The SVD as a sum

Multiplying out U Σ Vᵀ gives **A = σ₁ u₁ v₁ᵀ + σ₂ u₂ v₂ᵀ + … + σᵣ uᵣ vᵣᵀ**: a weighted sum of rank-one matrices.

### Rank-one pieces
- Each uᵢ vᵢᵀ is an outer product: every row is a multiple of vᵢᵀ
- The pieces are ordered by importance, σ₁ first
- For A = [1 1; 0 1; 1 0], two pieces add back to A exactly

### Rank and the four subspaces
- **rank = number of nonzero σ**
- u₁ … uᵣ span C(A); the remaining u's span N(Aᵀ)
- v₁ … vᵣ span C(Aᵀ); the remaining v's span N(A)
- All four bases are orthonormal: chapter 4's subspaces, chapter 7's complements

### Watch out
In floating point, "nonzero" needs a tolerance: a σ of 10⁻¹⁷ is zero in practice. Chapter 12 makes this precise.`,
  narration:
    "Is there another way to read the SVD? Multiply it out, and it becomes a sum of simple pieces. Each piece is a singular value times an outer product, u i times v i transpose. An outer product has rank one: every row is a multiple of the same vector. So any matrix is a weighted sum of rank-one matrices, ordered from most important to least. For our three by two example, two pieces add back to the original matrix exactly, as the table shows. This immediately reveals the rank: it is the number of nonzero singular values. And the SVD hands us orthonormal bases for all four fundamental subspaces at once. The first r columns of U span the column space, and the rest span the left null space. The first r columns of V span the row space, and the rest span the null space. Everything from chapters four and seven, in one factorisation. One practical caution: in floating point, deciding which singular values are zero needs a tolerance. Next, inverting a matrix that has no inverse.",
}
