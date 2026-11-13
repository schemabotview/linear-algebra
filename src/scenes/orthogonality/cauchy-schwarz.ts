import { board, fact, facts } from '../frame'
import { arrow } from '../plot-kit'

// §7.2 — u = (3, 1), v = (1, 2). Cauchy–Schwarz: |u · v| = 5 ≤ ‖u‖‖v‖ = √50 ≈ 7.07. Triangle:
// ‖u + v‖ = 5 ≤ ‖u‖ + ‖v‖ ≈ 5.40. Equality needs parallel vectors.
export const cauchySchwarz = board({
  id: 'cauchy-schwarz',
  figure: 'Cauchy–Schwarz and the triangle inequality',
  diagram: [
    {
      type: 'plot',
      id: 'triangle',
      title: 'The direct route is never longer: u = (3, 1), v = (1, 2), u + v = (4, 3)',
      equal: true,
      x: { min: -0.5, max: 5, step: 1 },
      y: { min: -0.5, max: 3.5, step: 1 },
      series: [
        arrow([3, 1], '‖u‖ = √10 ≈ 3.16', 'ingest', [0, 0], [3.08, 1]),
        {
          kind: 'segment',
          from: [3, 1],
          to: [4, 3],
          arrow: true,
          dashed: false,
          label: '‖v‖ = √5 ≈ 2.24',
          labelAt: [3.65, 1.7],
          tone: 'infra'
        },
        arrow([4, 3], '‖u + v‖ = 5', 'store'),
      ]
    },
    {
      type: 'table',
      id: 'inequalities',
      title: 'Both inequalities, checked: equality exactly when u and v are parallel',
      columns: ['inequality', 'left', 'right', 'holds'],
      rows: [
        ['Cauchy–Schwarz: |u · v| ≤ ‖u‖ ‖v‖', '|5| = 5', '√50 ≈ 7.07', '✓'],
        ['triangle: ‖u + v‖ ≤ ‖u‖ + ‖v‖', '5', '√10 + √5 ≈ 5.40', '✓'],
        ['equality case: v = 2u', '‖3u‖ = 3‖u‖', '‖u‖ + 2‖u‖', 'equal'],
      ]
    },
  ],
  idea: 'Cauchy–Schwarz and the triangle inequality',
  board: [
    fact('b-rule', 'Two inequalities hold for every inner product', 'they make angles and distances behave'),
    facts('b-1', 'Cauchy–Schwarz', ['|⟨u, v⟩| ≤ ‖u‖ ‖v‖', 'so cos θ lies in [−1, 1]', '(3, 1), (1, 2): 5 ≤ √50 ≈ 7.07']),
    facts('b-2', 'Triangle inequality', ['‖u + v‖ ≤ ‖u‖ + ‖v‖', 'the direct route is shortest', 'here 5 ≤ √10 + √5 ≈ 5.40']),
    facts('b-3', 'Equality cases', ['C–S: u and v parallel', 'triangle: same direction']),
  ]
})
