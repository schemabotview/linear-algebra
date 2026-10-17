import type { Scene } from '@graphlearning/flow'
import { lineEq } from '../plot-kit'

// §3.5 — the three possible outcomes in one picture: x + 2y = 4 meets x − y = 1 once, never meets the
// parallel 2x + 4y = 10, and coincides with 2x + 4y = 8. The table shows each case's echelon signature.
export const solutionCases: Scene = {
  id: 'solution-cases',
  title: 'One, none, or infinitely many',
  flow: 'TB',
  nodes: [
    {
      id: 'cases',
      kind: 'plot',
      label: 'Pair x + 2y = 4 with three different partners',
      sub: 'the blue line is also 2x + 4y = 8: the same line twice',
      plot: {
        equal: true,
        x: { min: -1, max: 6, step: 1 },
        y: { min: -1, max: 3.5, step: 1 },
        series: [
          { kind: 'line', points: lineEq(1, 2, 4, -1, 6), label: 'x + 2y = 4', labelAt: [-0.9, 1.45], color: '#60a5fa' },
          { kind: 'line', points: lineEq(2, 4, 10, -1, 6), label: '2x + 4y = 10: parallel', labelAt: [3.3, 1.8], color: '#f472b6' },
          { kind: 'line', points: lineEq(1, -1, 1, 0.2, 4.2), label: 'x − y = 1', labelAt: [3.6, 3.25], color: '#f59e0b' },
          { kind: 'marker', at: [2, 1], label: '(2, 1)', labelAt: [2.1, 0.45], color: '#34d399' },
        ],
      },
    },
    {
      id: 'signatures',
      kind: 'table',
      label: 'What elimination leaves in the last row',
      sub: 'read the case off the echelon form',
      headers: ['partner', 'last row after elimination', 'solutions'],
      values: [
        ['x − y = 1', '[0 −3 | −3]: a pivot', 'exactly one'],
        ['2x + 4y = 10', '[0 0 | 2]: 0 = 2', 'none'],
        ['2x + 4y = 8', '[0 0 | 0]: 0 = 0', 'infinitely many'],
      ],
    },
  ],
  edges: [],
}
