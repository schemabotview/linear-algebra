import { board, caution, fact, facts } from '../frame'

// §8.3 — duplicate a feature (a column 2t beside t) and the fitted values stay unique while the
// coefficients do not: every (d, e) with d + 2e = 1.5 gives the same line. The plot is that set.
export const rankDeficient = board({
  id: 'rank-deficient',
  figure: 'Unique predictions, non-unique coefficients',
  diagram: [
    {
      type: 'plot',
      id: 'minimisers',
      title: 'Every best (d, e) for y = c + d t + e (2t): the line d + 2e = 1.5, all with c = 5/6',
      equal: true,
      x: { min: -1, max: 2.5, step: 0.5, label: 'd' },
      y: { min: -0.75, max: 1.25, step: 0.5, label: 'e' },
      series: [
        {
          kind: 'line',
          points: [[-1, 1.25], [2.5, -0.5]],
          label: 'd + 2e = 1.5',
          labelAt: [1.7, 0.45],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[1.5, 0]],
          label: '(1.5, 0)',
          labelAt: [1.55, 0.12],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[0.3, 0.6]],
          label: 'shortest: (0.3, 0.6)',
          labelAt: [0.38, 0.75],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[-0.5, 1]],
          label: '(−0.5, 1)',
          labelAt: [-0.4, 1.12],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'same-fit',
      title: 'Three coefficient vectors, one prediction: columns 1, t, 2t: rank 2, so N(A) ≠ {0}',
      columns: ['(c, d, e)', 'fitted values', 'residual ‖e‖²'],
      rows: [
        ['(5/6, 1.5, 0)', '(0.83, 2.33, 3.83)', '0.17'],
        ['(5/6, 0.3, 0.6)', '(0.83, 2.33, 3.83)', '0.17'],
        ['(5/6, −0.5, 1)', '(0.83, 2.33, 3.83)', '0.17'],
      ]
    },
  ],
  idea: 'Coefficient uniqueness and rank-deficient minimisers',
  board: [
    fact('b-rule', 'The fit A x̂ is always unique', 'the coefficients x̂ only with full column rank'),
    facts('b-1', 'A duplicated feature', ['add a column 2t beside t', 'dependent: AᵀA is singular', 'any d + 2e = 1.5: same line']),
    facts('b-2', 'All the minimisers', ['x̂ₚ + N(A)', 'shortest: (5/6, 0.3, 0.6)', 'the pseudoinverse (chapter 11)']),
    caution('b-watch', 'Never read meaning into single coefficients of a rank-deficient model: only their identifiable combination, here d + 2e, is determined.'),
  ]
})
