import { board, fact, facts } from '../frame'
import { matrixTable } from '../plot-kit'

// §4.5 — one 3×4 matrix, its reduced form, and all four fundamental subspaces with a basis for each.
// Column-space basis vectors come from A's ORIGINAL pivot columns; row-space ones from R's rows.
const V = ['x₁', 'x₂', 'x₃', 'x₄']
export const fourSubspaces = board({
  id: 'four-subspaces',
  figure: 'The four fundamental subspaces',
  diagram: [
    {
      type: 'group',
      id: 'matrices',
      title: 'A and its reduced echelon form R',
      dir: 'row',
      children: [
        matrixTable('a', 'A (3 × 4)', 'pivot columns 1 and 3', [[1, 2, 0, 1], [2, 4, 1, 4], [3, 6, 1, 5]], V),
        matrixTable('r', 'R = rref(A)', 'row 3 became zero', [[1, 2, 0, 1], [0, 0, 1, 2], [0, 0, 0, 0]], V),
      ]
    },
    {
      type: 'table',
      id: 'subspaces',
      title: 'Four subspaces, a basis for each: rank r = 2, m = 3 rows, n = 4 columns',
      columns: ['subspace', 'lives in', 'basis', 'dim'],
      rows: [
        ['column space C(A)', 'ℝ³', '(1, 2, 3), (0, 1, 1)', '2'],
        ['row space C(Aᵀ)', 'ℝ⁴', '(1, 2, 0, 1), (0, 0, 1, 2)', '2'],
        ['null space N(A)', 'ℝ⁴', '(−2, 1, 0, 0), (−1, 0, −2, 1)', '2'],
        ['left null space N(Aᵀ)', 'ℝ³', '(1, 1, −1)', '1'],
        ['dimensions add up', 'both', 'ℝ⁴: 2 + 2 = 4, ℝ³: 2 + 1 = 3', '✓'],
      ]
    },
  ],
  edges: [
    { from: 'a', to: 'r', label: 'reduce' }
  ],
  idea: 'The four fundamental subspaces',
  board: [
    fact('b-rule', 'Every m × n matrix carries four subspaces', 'two in ℝⁿ, two in ℝᵐ'),
    facts('b-1', 'In ℝᵐ, the output side', ['C(A): every A x', 'basis: A’s pivot columns', 'N(Aᵀ): every y with yᵀA = 0']),
    facts('b-2', 'In ℝⁿ, the input side', ['C(Aᵀ): combinations of rows', 'basis: R’s nonzero rows', 'N(A): one per free variable']),
    facts('b-3', 'For this A', ['rank 2: C(A), C(Aᵀ) are planes', 'N(A) is two-dimensional', 'N(Aᵀ): the line through (1, 1, −1)']),
  ]
})
