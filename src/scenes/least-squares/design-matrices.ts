import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'
import { FIT1, FIT2, PTS6 } from './data'

// §8.5 — "linear" means linear in the coefficients, not in t. A t² column turns the same machinery
// into a quadratic fit. Residual totals are computed from the six points in data.ts.
export const designMatrices = board({
  id: 'design-matrices',
  figure: 'Design matrices and features',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'curves',
      title: 'Six measurements, two models: a line, and a quadratic: both are linear least squares',
      x: { min: -0.25, max: 5.25, step: 1, label: 't' },
      y: { min: -0.5, max: 11.5, step: 2, label: 'y' },
      series: [
        {
          kind: 'line',
          points: sample(-0.25, 5.25, 2, FIT1),
          label: 'line: ‖e‖² = 6.74',
          labelAt: [3.05, 3.4],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(-0.25, 5.25, 60, FIT2),
          label: 'quadratic: ‖e‖² = 0.54',
          labelAt: [1.6, 6.6],
          tone: 'ingest'
        },
        { kind: 'scatter', points: PTS6, tone: 'infra' },
      ]
    },
    {
      type: 'table',
      id: 'design',
      title: 'The quadratic design matrix A: one row per measurement, one column per feature',
      columns: ['t', 'column 1', 'column t', 'column t²', 'y'],
      rows: [
        ['0', '1', '0', '0', '1.51'],
        ['1', '1', '1', '1', '0.91'],
        ['2', '1', '2', '4', '2.90'],
        ['⋮', '⋮', '⋮', '⋮', '⋮'],
        ['5', '1', '5', '25', '10.70'],
      ]
    },
  ],
  idea: 'Design matrices, intercepts and polynomial features',
  board: [
    fact('b-rule', 'One row per measurement, one column per feature', 'least squares fits any model linear in its coefficients'),
    facts('b-1', 'Building columns', ['ones: the intercept', 't: a slope; t²: curvature', 'any fixed f(t): log t, sin t']),
    facts('b-2', 'Linear in the parameters', ['c₀ + c₁ t + c₂ t²: linear in c', 'same equations, same QR', '‖e‖²: 6.74 line → 0.54 quadratic']),
    caution('b-watch', 'More columns always lower ‖e‖² on the data used to fit. That alone does not make the model better: testing on new data is the statistics and ML courses’ job.'),
  ]
})
