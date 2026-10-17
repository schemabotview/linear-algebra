import type { Scene } from '@graphlearning/flow'

// §11.3 — the SVD as a sum of rank-one pieces, for A = [1 1; 0 1; 1 0]. Each piece σᵢ uᵢ vᵢᵀ is
// computed and shown; their sum is A. The table reads all four subspaces off U and V.
export const rankOne: Scene = {
  id: 'rank-one',
  title: 'Rank-one pieces and the four subspaces',
  flow: 'TB',
  nodes: [
    {
      id: 'pieces',
      kind: 'table',
      label: 'A = σ₁ u₁ v₁ᵀ + σ₂ u₂ v₂ᵀ',
      sub: 'each piece has rank one: every row is a multiple of vᵢᵀ',
      headers: ['term', 'matrix', 'rank'],
      values: [
        ['√3 u₁ v₁ᵀ', '[1 1; 0.5 0.5; 0.5 0.5]', '1'],
        ['1 u₂ v₂ᵀ', '[0 0; −0.5 0.5; 0.5 −0.5]', '1'],
        ['sum', '[1 1; 0 1; 1 0] = A ✓', '2'],
      ],
    },
    {
      id: 'subspaces',
      kind: 'table',
      label: 'The four subspaces, read off the SVD',
      sub: 'r = number of nonzero σ = 2',
      headers: ['subspace', 'orthonormal basis', 'here'],
      values: [
        ['column space C(A)', 'u₁, …, uᵣ', 'u₁, u₂'],
        ['left null space N(Aᵀ)', 'uᵣ₊₁, …, uₘ', 'u₃ = (1, −1, −1)/√3'],
        ['row space C(Aᵀ)', 'v₁, …, vᵣ', 'v₁, v₂: all of ℝ²'],
        ['null space N(A)', 'vᵣ₊₁, …, vₙ', 'none: N(A) = {0}'],
      ],
    },
  ],
  edges: [],
}
