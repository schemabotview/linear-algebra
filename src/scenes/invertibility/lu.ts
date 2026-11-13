import { board, caution, fact, facts } from '../frame'
import { matrixTable } from '../plot-kit'

// §5.4 — A = L U records elimination: U is the echelon form, L stores the multipliers 2, 4, 3. Two
// right-hand sides reuse the same factors: forward-solve L c = b, then back-solve U x = c.
const X = ['x₁', 'x₂', 'x₃']
export const lu = board({
  id: 'lu',
  figure: 'LU factorisation',
  diagram: [
    {
      type: 'group',
      id: 'factors',
      title: 'A = L U: elimination, recorded',
      dir: 'grid',
      cols: 2,
      children: [
        matrixTable('lu-a', 'A', 'the matrix to factor', [[2, 1, 1], [4, 3, 3], [8, 7, 9]], X),
        {
          type: 'table',
          id: 'steps',
          title: 'Elimination steps: each multiplier goes into L',
          columns: ['step', 'multiplier', 'stored at'],
          rows: [
            ['R2 − 2 R1', '2', 'L₂₁'],
            ['R3 − 4 R1', '4', 'L₃₁'],
            ['R3 − 3 R2', '3', 'L₃₂'],
          ]
        },
        matrixTable('lu-l', 'L', 'ones on the diagonal, multipliers below', [[1, 0, 0], [2, 1, 0], [4, 3, 1]], X),
        matrixTable('lu-u', 'U', 'the echelon form', [[2, 1, 1], [0, 1, 1], [0, 0, 2]], X),
      ]
    },
    {
      type: 'table',
      id: 'two-rhs',
      title: 'Two right-hand sides, one factorisation: L c = b forwards, then U x = c backwards',
      columns: ['b', 'c from L c = b', 'x from U x = c', 'check'],
      rows: [
        ['(4, 10, 24)', '(4, 2, 2)', '(1, 1, 1)', 'A x = b ✓'],
        ['(1, 1, −1)', '(1, −1, −2)', '(1, 0, −1)', 'A x = b ✓'],
      ]
    },
  ],
  idea: 'Elementary matrices and LU factorisation',
  board: [
    fact('b-rule', 'Record elimination instead of repeating it', 'A = L U: lower times upper triangular'),
    facts('b-1', 'Where L and U come from', ['each row op is a matrix', 'U: the echelon form', 'L: the multipliers 2, 4, then 3', 'L’s diagonal is all ones']),
    facts('b-2', 'Reusing the factors', ['L c = b, then U x = c', 'triangular: ~n² each', 'two b, one factorisation']),
    caution('b-watch', 'Plain LU needs a nonzero pivot at every step. When one is zero, rows must be swapped first.'),
  ]
})
