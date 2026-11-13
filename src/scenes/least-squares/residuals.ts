import { board, caution, fact, facts } from '../frame'
import { sample, type P } from '../plot-kit'
import { LINE, PTS3 } from './data'

// §8.1 — three measurements, two unknowns: no line passes through all three. The least-squares line
// makes the residuals (dashed) as small as possible in total square; the flat line y = 7/3 does worse.
export const residualsScene = board({
  id: 'ls-residuals',
  figure: 'More equations than unknowns',
  diagram: [
    {
      type: 'plot',
      id: 'fit',
      title: 'Fit y = c + d t to (0, 1), (1, 2), (2, 4): dashed: residuals of the best line, y = 5/6 + 1.5 t',
      x: { min: -0.75, max: 2.5, step: 0.5, label: 't' },
      y: { min: 0, max: 4.5, step: 1, label: 'y' },
      series: [
        {
          kind: 'line',
          points: [[-0.5, 7 / 3], [2.5, 7 / 3]],
          dashed: true,
          label: 'constant fit y = 7/3',
          labelAt: [-0.45, 2.55],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(-0.5, 2.5, 2, LINE),
          label: 'least-squares line',
          labelAt: [1.6, 4.25],
          tone: 'ingest'
        },
        ...PTS3.map((p) => ({ kind: 'segment' as const, from: p, to: [p[0], LINE(p[0])] as P, tone: 'serve' as const })),
        {
          kind: 'scatter',
          points: PTS3,
          label: 'measurements',
          labelAt: [0.1, 0.75],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'compare',
      title: 'Residuals e = b − A x̂, and their squared total: least squares minimises ‖e‖² = e₁² + e₂² + e₃²',
      columns: ['model', 'residuals', '‖e‖²'],
      rows: [
        ['line, c = 5/6, d = 1.5', '(0.17, −0.33, 0.17)', '0.17'],
        ['constant, c = 7/3', '(−1.33, −0.33, 1.67)', '4.67'],
        ['exact fit', 'needs b in C(A)', 'impossible here'],
      ]
    },
  ],
  idea: 'Overdetermined systems and residuals',
  board: [
    fact('b-rule', 'More measurements than unknowns: usually no exact x', 'b is not in C(A), so ask for the best one'),
    facts('b-1', 'Residuals', ['e = b − A x, for any x', 'minimise ‖e‖² = e₁² + … + eₘ²', 'squares punish large misses']),
    facts('b-2', 'Three points, two unknowns', ['y = c + d t, three points', 'best: 5/6 + 1.5 t, ‖e‖² ≈ 0.17', 'best constant 7/3: ‖e‖² ≈ 4.67']),
    caution('b-watch', '"Best" is relative to the squared-error objective. Another objective, such as the largest single miss, picks a different line.'),
  ]
})
