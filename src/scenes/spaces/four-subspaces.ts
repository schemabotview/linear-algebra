import type { Scene } from '@graphlearning/flow'
import { matrixTable } from '../plot-kit'

// §4.5 — one 3×4 matrix, its reduced form, and all four fundamental subspaces with a basis for each.
// Column-space basis vectors come from A's ORIGINAL pivot columns; row-space ones from R's rows.
const V = ['x₁', 'x₂', 'x₃', 'x₄']

export const fourSubspaces: Scene = {
  id: 'four-subspaces',
  title: 'The four fundamental subspaces',
  flow: 'TB',
  nodes: [
    {
      id: 'matrices',
      label: 'A and its reduced echelon form R',
      pattern: 'group',
      flow: 'LR',
      children: [
        matrixTable('a', 'A (3 × 4)', 'pivot columns 1 and 3', [[1, 2, 0, 1], [2, 4, 1, 4], [3, 6, 1, 5]], V),
        matrixTable('r', 'R = rref(A)', 'row 3 became zero', [[1, 2, 0, 1], [0, 0, 1, 2], [0, 0, 0, 0]], V),
      ],
      edges: [{ source: 'a', target: 'r', label: 'reduce' }],
    },
    {
      id: 'subspaces',
      kind: 'table',
      label: 'Four subspaces, a basis for each',
      sub: 'rank r = 2, m = 3 rows, n = 4 columns',
      headers: ['subspace', 'lives in', 'basis', 'dim'],
      values: [
        ['column space C(A)', 'ℝ³', '(1, 2, 3), (0, 1, 1)', '2'],
        ['row space C(Aᵀ)', 'ℝ⁴', '(1, 2, 0, 1), (0, 0, 1, 2)', '2'],
        ['null space N(A)', 'ℝ⁴', '(−2, 1, 0, 0), (−1, 0, −2, 1)', '2'],
        ['left null space N(Aᵀ)', 'ℝ³', '(1, 1, −1)', '1'],
        ['dimensions add up', 'both', 'ℝ⁴: 2 + 2 = 4, ℝ³: 2 + 1 = 3', '✓'],
      ],
    },
  ],
  edges: [],
}
