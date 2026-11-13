import { board, caution, fact, facts } from '../frame'
import { matrixTable } from '../plot-kit'

// §10.6 — S = L Lᵀ for a symmetric positive definite S, worked entry by entry. Every square root is of
// a positive number exactly because S is positive definite; a failed root is a definiteness test.
const X = ['c₁', 'c₂', 'c₃']
export const cholesky = board({
  id: 'cholesky',
  figure: 'Cholesky factorisation',
  diagram: [
    {
      type: 'group',
      id: 'factors',
      title: 'S = L Lᵀ',
      dir: 'row',
      children: [
        matrixTable('ch-s', 'S', 'symmetric positive definite', [[4, 2, 2], [2, 5, 3], [2, 3, 6]], X),
        matrixTable('ch-l', 'L', 'lower triangular, positive diagonal', [[2, 0, 0], [1, 2, 0], [1, 1, 2]], X),
      ]
    },
    {
      type: 'table',
      id: 'steps',
      title: 'Column by column: each diagonal entry is a square root of something positive',
      columns: ['entry', 'formula', 'value'],
      rows: [
        ['l₁₁', '√4', '2'],
        ['l₂₁, l₃₁', '2 / 2, 2 / 2', '1, 1'],
        ['l₂₂', '√(5 − 1²)', '2'],
        ['l₃₂', '(3 − 1·1) / 2', '1'],
        ['l₃₃', '√(6 − 1² − 1²)', '2'],
        ['cost', 'about n³/6', 'half of LU'],
      ]
    },
  ],
  edges: [
    { from: 'ch-s', to: 'ch-l', label: 'factor' }
  ],
  idea: 'Cholesky factorisation',
  board: [
    fact('b-rule', 'Symmetric positive definite S = L Lᵀ', 'L lower triangular, positive diagonal'),
    facts('b-1', 'How it is computed', ['column by column, like LU', 'a square root on the diagonal', '[4 2 2; 2 5 3; 2 3 6]', 'L = [2 0 0; 1 2 0; 1 1 2]']),
    facts('b-2', 'Why use it', ['~n³/6: half of LU', 'L c = b, then Lᵀ x = c', 'stable with no pivoting']),
    caution('b-watch', 'A square root of a negative number means S is not positive definite: Cholesky doubles as the cheapest practical definiteness test.'),
  ]
})
