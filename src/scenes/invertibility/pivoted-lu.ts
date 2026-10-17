import type { Scene } from '@graphlearning/flow'
import { matrixTable } from '../plot-kit'

// §5.5 — A has a zero in the (1, 1) position, so elimination must swap rows first. P records the swap;
// P A = L U holds where A = L U cannot. The last table solves A x = b with the factors.
const X = ['x₁', 'x₂', 'x₃']

export const pivotedLu: Scene = {
  id: 'pivoted-lu',
  title: 'Pivoted LU: P A = L U',
  flow: 'TB',
  nodes: [
    {
      id: 'factors',
      label: 'A zero pivot forces a swap: P A = L U',
      pattern: 'group',
      cols: 2,
      children: [
        matrixTable('plu-a', 'A', 'a₁₁ = 0: no pivot there', [[0, 1, 2], [1, 1, 1], [2, 3, 5]], X),
        matrixTable('plu-p', 'P', 'the identity, rows 1 and 2 swapped', [[0, 1, 0], [1, 0, 0], [0, 0, 1]], ['', '', '']),
        matrixTable('plu-l', 'L', 'multipliers: 0, 2, then 1', [[1, 0, 0], [0, 1, 0], [2, 1, 1]], X),
        matrixTable('plu-u', 'U', 'pivots 1, 1, 1', [[1, 1, 1], [0, 1, 2], [0, 0, 1]], X),
      ],
      edges: [],
    },
    {
      id: 'solve',
      kind: 'table',
      label: 'Solving A x = b with b = (3, 3, 10)',
      sub: 'swap b the same way, then two triangular solves',
      headers: ['step', 'equation', 'result'],
      values: [
        ['1. reorder', 'P b', '(3, 3, 10)'],
        ['2. forward', 'L c = P b', 'c = (3, 3, 1)'],
        ['3. backward', 'U x = c', 'x = (1, 1, 1)'],
        ['check', 'A x', '(3, 3, 10) ✓'],
      ],
    },
  ],
  edges: [],
}
