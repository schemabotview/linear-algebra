import type { Scene } from '@graphlearning/flow'
import { arrow, GREY } from '../plot-kit'

// §2.2 — A = [2 −1; 1 1], x = (2, 1). Column view: A x = 2·a₁ + 1·a₂, drawn head to tail. Row view:
// each entry of A x is one row dotted with x. Both land on (3, 3).
const A1 = '#60a5fa'
const A2 = '#f59e0b'

export const twoViews: Scene = {
  id: 'two-views',
  title: 'Two ways to read A x',
  flow: 'TB',
  nodes: [
    {
      id: 'columns',
      kind: 'plot',
      label: 'Column view: A x = 2 a₁ + 1 a₂',
      sub: 'a₁ = (2, 1), a₂ = (−1, 1), x = (2, 1)',
      plot: {
        equal: true,
        x: { min: -2, max: 5, step: 1 },
        y: { min: -1, max: 4, step: 1 },
        series: [
          arrow([4, 2], '2 a₁', '#bfdbfe'),
          arrow([2, 1], 'a₁', A1),
          arrow([-1, 1], 'a₂', A2),
          { kind: 'segment', from: [4, 2], to: [3, 3], arrow: true, label: 'a₂, moved', labelAt: [3.75, 2.8], color: A2 },
          arrow([3, 3], 'A x = (3, 3)', '#34d399'),
          { kind: 'marker', at: [0, 0], color: GREY },
        ],
      },
    },
    {
      id: 'rows',
      kind: 'table',
      label: 'Row view: one dot product per entry',
      sub: 'same answer, different bookkeeping',
      headers: ['entry', 'row · x', 'value'],
      values: [
        ['(A x)₁', '(2, −1) · (2, 1) = 4 − 1', '3'],
        ['(A x)₂', '(1, 1) · (2, 1) = 2 + 1', '3'],
        ['columns', '2·(2, 1) + 1·(−1, 1)', '(3, 3)'],
      ],
    },
  ],
  edges: [],
}
