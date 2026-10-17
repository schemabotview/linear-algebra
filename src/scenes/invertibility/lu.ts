import type { Scene } from '@graphlearning/flow'
import { matrixTable } from '../plot-kit'

// §5.4 — A = L U records elimination: U is the echelon form, L stores the multipliers 2, 4, 3. Two
// right-hand sides reuse the same factors: forward-solve L c = b, then back-solve U x = c.
const X = ['x₁', 'x₂', 'x₃']

export const lu: Scene = {
  id: 'lu',
  title: 'LU factorisation',
  flow: 'TB',
  nodes: [
    {
      id: 'factors',
      label: 'A = L U: elimination, recorded',
      pattern: 'group',
      cols: 2,
      children: [
        matrixTable('lu-a', 'A', 'the matrix to factor', [[2, 1, 1], [4, 3, 3], [8, 7, 9]], X),
        {
          id: 'steps',
          kind: 'table',
          label: 'Elimination steps',
          sub: 'each multiplier goes into L',
          headers: ['step', 'multiplier', 'stored at'],
          values: [
            ['R2 − 2 R1', '2', 'L₂₁'],
            ['R3 − 4 R1', '4', 'L₃₁'],
            ['R3 − 3 R2', '3', 'L₃₂'],
          ],
        },
        matrixTable('lu-l', 'L', 'ones on the diagonal, multipliers below', [[1, 0, 0], [2, 1, 0], [4, 3, 1]], X),
        matrixTable('lu-u', 'U', 'the echelon form', [[2, 1, 1], [0, 1, 1], [0, 0, 2]], X),
      ],
      edges: [],
    },
    {
      id: 'two-rhs',
      kind: 'table',
      label: 'Two right-hand sides, one factorisation',
      sub: 'L c = b forwards, then U x = c backwards',
      headers: ['b', 'c from L c = b', 'x from U x = c', 'check'],
      values: [
        ['(4, 10, 24)', '(4, 2, 2)', '(1, 1, 1)', 'A x = b ✓'],
        ['(1, 1, −1)', '(1, −1, −2)', '(1, 0, −1)', 'A x = b ✓'],
      ],
    },
  ],
  edges: [],
}
