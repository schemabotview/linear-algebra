import type { Scene } from '@graphlearning/flow'
import { arrow, augmented } from '../plot-kit'

// §4.3 — a = (2, 1) and b = (1, 2) are independent; c = (3, 3) = a + b adds nothing. Elimination
// decides it in general: independent exactly when every column gets a pivot.
export const independence: Scene = {
  id: 'independence',
  title: 'Dependence and independence',
  flow: 'TB',
  nodes: [
    {
      id: 'redundant',
      kind: 'plot',
      label: 'c = a + b adds no new direction',
      sub: 'a = (2, 1), b = (1, 2), c = (3, 3)',
      plot: {
        equal: true,
        x: { min: -1, max: 5, step: 1 },
        y: { min: -0.5, max: 3.5, step: 1 },
        series: [
          arrow([3, 3], 'c', '#f472b6'),
          arrow([2, 1], 'a', '#60a5fa'),
          arrow([1, 2], 'b', '#f59e0b'),
          { kind: 'segment', from: [2, 1], to: [3, 3], arrow: true, label: 'b, moved', labelAt: [2.75, 1.7], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'tests',
      label: 'Two ways to see it',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'relation',
          kind: 'table',
          label: 'A dependence relation',
          sub: 'a nontrivial combination equal to 0',
          headers: ['weights', 'combination', 'result'],
          values: [
            ['(1, 1, −1)', 'a + b − c', '(0, 0)'],
            ['(0, 0, 0)', 'the trivial one', '(0, 0)'],
          ],
        },
        augmented('pivots', 'Columns a, b, c reduced', '[a b c | 0]: no pivot in column 3', [[1, 2, 3, 0], [0, -3, -3, 0]], ['a', 'b', 'c']),
      ],
      edges: [],
    },
  ],
  edges: [],
}
