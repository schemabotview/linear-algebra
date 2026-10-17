import type { Scene } from '@graphlearning/flow'

// §8.3 — duplicate a feature (a column 2t beside t) and the fitted values stay unique while the
// coefficients do not: every (d, e) with d + 2e = 1.5 gives the same line. The plot is that set.
export const rankDeficient: Scene = {
  id: 'rank-deficient',
  title: 'Unique predictions, non-unique coefficients',
  flow: 'TB',
  nodes: [
    {
      id: 'minimisers',
      kind: 'plot',
      label: 'Every best (d, e) for y = c + d t + e (2t)',
      sub: 'the line d + 2e = 1.5, all with c = 5/6',
      plot: {
        equal: true,
        x: { min: -1, max: 2.5, step: 0.5, label: 'd' },
        y: { min: -0.75, max: 1.25, step: 0.5, label: 'e' },
        series: [
          { kind: 'line', points: [[-1, 1.25], [2.5, -0.5]], label: 'd + 2e = 1.5', labelAt: [1.7, 0.45], color: '#60a5fa' },
          { kind: 'marker', at: [1.5, 0], label: '(1.5, 0)', labelAt: [1.55, 0.12], color: '#f59e0b' },
          { kind: 'marker', at: [0.3, 0.6], label: 'shortest: (0.3, 0.6)', labelAt: [0.38, 0.75], color: '#34d399' },
          { kind: 'marker', at: [-0.5, 1], label: '(−0.5, 1)', labelAt: [-0.4, 1.12], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'same-fit',
      kind: 'table',
      label: 'Three coefficient vectors, one prediction',
      sub: 'columns 1, t, 2t: rank 2, so N(A) ≠ {0}',
      headers: ['(c, d, e)', 'fitted values', 'residual ‖e‖²'],
      values: [
        ['(5/6, 1.5, 0)', '(0.83, 2.33, 3.83)', '0.17'],
        ['(5/6, 0.3, 0.6)', '(0.83, 2.33, 3.83)', '0.17'],
        ['(5/6, −0.5, 1)', '(0.83, 2.33, 3.83)', '0.17'],
      ],
    },
  ],
  edges: [],
}
