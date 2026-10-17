import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'

// §7.2 — u = (3, 1), v = (1, 2). Cauchy–Schwarz: |u · v| = 5 ≤ ‖u‖‖v‖ = √50 ≈ 7.07. Triangle:
// ‖u + v‖ = 5 ≤ ‖u‖ + ‖v‖ ≈ 5.40. Equality needs parallel vectors.
export const cauchySchwarz: Scene = {
  id: 'cauchy-schwarz',
  title: 'Cauchy–Schwarz and the triangle inequality',
  flow: 'TB',
  nodes: [
    {
      id: 'triangle',
      kind: 'plot',
      label: 'The direct route is never longer',
      sub: 'u = (3, 1), v = (1, 2), u + v = (4, 3)',
      plot: {
        equal: true,
        x: { min: -0.5, max: 5, step: 1 },
        y: { min: -0.5, max: 3.5, step: 1 },
        series: [
          arrow([3, 1], '‖u‖ = √10 ≈ 3.16', '#60a5fa'),
          { kind: 'segment', from: [3, 1], to: [4, 3], arrow: true, dashed: false, label: '‖v‖ = √5 ≈ 2.24', labelAt: [3.65, 1.7], color: '#f59e0b' },
          arrow([4, 3], '‖u + v‖ = 5', '#34d399'),
        ],
      },
    },
    {
      id: 'inequalities',
      kind: 'table',
      label: 'Both inequalities, checked',
      sub: 'equality exactly when u and v are parallel',
      headers: ['inequality', 'left', 'right', 'holds'],
      values: [
        ['Cauchy–Schwarz: |u · v| ≤ ‖u‖ ‖v‖', '|5| = 5', '√50 ≈ 7.07', '✓'],
        ['triangle: ‖u + v‖ ≤ ‖u‖ + ‖v‖', '5', '√10 + √5 ≈ 5.40', '✓'],
        ['equality case: v = 2u', '‖3u‖ = 3‖u‖', '‖u‖ + 2‖u‖', 'equal'],
      ],
    },
  ],
  edges: [],
}
