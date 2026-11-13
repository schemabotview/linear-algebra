import { board, caution, fact, facts } from '../frame'
import { matrixTable } from '../plot-kit'

// §5.5 — A has a zero in the (1, 1) position, so elimination must swap rows first. P records the swap
// P A = L U holds where A = L U cannot. The last table solves A x = b with the factors.
const X = ['x₁', 'x₂', 'x₃']
export const pivotedLu = board({
  id: 'pivoted-lu',
  figure: 'Pivoted LU: P A = L U',
  diagram: [
    {
      type: 'group',
      id: 'factors',
      title: 'A zero pivot forces a swap: P A = L U',
      dir: 'grid',
      cols: 2,
      children: [
        matrixTable('plu-a', 'A', 'a₁₁ = 0: no pivot there', [[0, 1, 2], [1, 1, 1], [2, 3, 5]], X),
        matrixTable('plu-p', 'P', 'the identity, rows 1 and 2 swapped', [[0, 1, 0], [1, 0, 0], [0, 0, 1]], ['', '', '']),
        matrixTable('plu-l', 'L', 'multipliers: 0, 2, then 1', [[1, 0, 0], [0, 1, 0], [2, 1, 1]], X),
        matrixTable('plu-u', 'U', 'pivots 1, 1, 1', [[1, 1, 1], [0, 1, 2], [0, 0, 1]], X),
      ]
    },
    {
      type: 'table',
      id: 'solve',
      title: 'Solving A x = b with b = (3, 3, 10): swap b the same way, then two triangular solves',
      columns: ['step', 'equation', 'result'],
      rows: [
        ['1. reorder', 'P b', '(3, 3, 10)'],
        ['2. forward', 'L c = P b', 'c = (3, 3, 1)'],
        ['3. backward', 'U x = c', 'x = (1, 1, 1)'],
        ['check', 'A x', '(3, 3, 10) ✓'],
      ]
    },
  ],
  idea: 'Permutation matrices and pivoted LU',
  board: [
    fact('b-rule', 'A zero pivot breaks plain A = L U', 'swap rows first: P A = L U'),
    facts('b-1', 'Permutation matrices', ['I with its rows reordered', 'P A reorders A; P⁻¹ = Pᵀ', 'here a₁₁ = 0: swap rows 1, 2', 'every invertible A has a P']),
    facts('b-2', 'The factorisation', ['multipliers 0 and 2, then 1', 'solve L U x = P b', 'b = (3, 3, 10) → c = (3, 3, 1)', 'then x = (1, 1, 1)']),
    caution('b-watch', 'Software also swaps when a pivot is merely small (chapter 3), so its P is usually not the minimal swap shown here.'),
  ]
})
