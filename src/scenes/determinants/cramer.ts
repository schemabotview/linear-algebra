import type { Scene } from '@graphlearning/flow'
import { lineEq } from '../plot-kit'

// §6.7 — Cramer's rule on 2x + y = 5, x + 3y = 10: each unknown is a ratio of determinants. Exact and
// elegant for 2 × 2; the cost table is why solvers never use it.
export const cramer: Scene = {
  id: 'cramer',
  title: "Cramer's rule",
  flow: 'TB',
  nodes: [
    {
      id: 'system',
      kind: 'plot',
      label: '2x + y = 5 and x + 3y = 10',
      sub: 'det A = 5, solution (1, 3)',
      plot: {
        equal: true,
        x: { min: -1, max: 5, step: 1 },
        y: { min: -0.5, max: 4.5, step: 1 },
        series: [
          { kind: 'line', points: lineEq(2, 1, 5, 0.25, 2.75), label: '2x + y = 5', labelAt: [1.9, 1.6], color: '#60a5fa' },
          { kind: 'line', points: lineEq(1, 3, 10, -1, 5), label: 'x + 3y = 10', labelAt: [3.4, 2.5], color: '#f59e0b' },
          { kind: 'marker', at: [1, 3], label: '(1, 3)', labelAt: [1.2, 3.35], color: '#34d399' },
        ],
      },
    },
    {
      id: 'ratios',
      label: 'Each unknown is a ratio of determinants',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'formula',
          kind: 'table',
          label: 'Replace one column by b',
          sub: 'b = (5, 10)',
          headers: ['unknown', 'numerator', 'value'],
          values: [
            ['x', 'det [5 1; 10 3] = 5', '5 / 5 = 1'],
            ['y', 'det [2 5; 1 10] = 15', '15 / 5 = 3'],
          ],
        },
        {
          id: 'cost',
          kind: 'table',
          label: 'Cost for n = 10',
          sub: 'leading-order operation counts',
          headers: ['method', 'work'],
          values: [
            ['elimination', '≈ 333'],
            ['Cramer, dets by elimination', '≈ 3,700'],
            ['Cramer, dets by cofactors', '≈ 4 × 10⁷'],
          ],
        },
      ],
      edges: [],
    },
  ],
  edges: [],
}
