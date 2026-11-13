import { board, caution, fact, facts } from '../frame'

// §11.3 — the SVD as a sum of rank-one pieces, for A = [1 1; 0 1; 1 0]. Each piece σᵢ uᵢ vᵢᵀ is
// computed and shown; their sum is A. The table reads all four subspaces off U and V.
export const rankOne = board({
  id: 'rank-one',
  figure: 'Rank-one pieces and the four subspaces',
  diagram: [
    {
      type: 'table',
      id: 'pieces',
      title: 'A = σ₁ u₁ v₁ᵀ + σ₂ u₂ v₂ᵀ: each piece has rank one: every row is a multiple of vᵢᵀ',
      columns: ['term', 'matrix', 'rank'],
      rows: [
        ['√3 u₁ v₁ᵀ', '[1 1; 0.5 0.5; 0.5 0.5]', '1'],
        ['1 u₂ v₂ᵀ', '[0 0; −0.5 0.5; 0.5 −0.5]', '1'],
        ['sum', '[1 1; 0 1; 1 0] = A ✓', '2'],
      ]
    },
    {
      type: 'table',
      id: 'subspaces',
      title: 'The four subspaces, read off the SVD: r = number of nonzero σ = 2',
      columns: ['subspace', 'orthonormal basis', 'here'],
      rows: [
        ['column space C(A)', 'u₁, …, uᵣ', 'u₁, u₂'],
        ['left null space N(Aᵀ)', 'uᵣ₊₁, …, uₘ', 'u₃ = (1, −1, −1)/√3'],
        ['row space C(Aᵀ)', 'v₁, …, vᵣ', 'v₁, v₂: all of ℝ²'],
        ['null space N(A)', 'vᵣ₊₁, …, vₙ', 'none: N(A) = {0}'],
      ]
    },
  ],
  idea: 'Rank, null spaces and rank-one terms',
  board: [
    fact('b-rule', 'A = σ₁ u₁ v₁ᵀ + … + σᵣ uᵣ vᵣᵀ', 'a weighted sum of rank-one matrices'),
    facts('b-1', 'Rank-one pieces', ['uᵢ vᵢᵀ: rows ∝ vᵢᵀ', 'ordered by σ, largest first', 'two pieces rebuild A exactly']),
    facts('b-2', 'Rank and the four subspaces', ['rank = number of nonzero σ', 'u₁ … uᵣ span C(A)', 'v₁ … vᵣ span C(Aᵀ)', 'the rest: the null spaces']),
    caution('b-watch', 'In floating point "nonzero" needs a tolerance: a σ of 10⁻¹⁷ is zero in practice. Chapter 12 makes this precise.'),
  ]
})
