import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'
import { LINE, PTS3 } from './data'

// §8.6 — two geometric extensions, numbers computed. Weighting the third measurement ×4 pulls the line
// towards it. Ridge (penalty λ on every coefficient) makes the duplicated-feature fit unique.
const WEIGHTED = (t: number) => 0.8095 + 1.5714 * t
export const weightedRidge = board({
  id: 'weighted-ridge',
  figure: 'Weighted least squares and ridge',
  diagram: [
    {
      type: 'plot',
      id: 'weighted',
      title: 'Weight the third measurement 4 times as much: minimise (b − A x)ᵀ W (b − A x), W = diag(1, 1, 4)',
      x: { min: -0.75, max: 2.5, step: 0.5, label: 't' },
      y: { min: 0, max: 4.5, step: 1, label: 'y' },
      series: [
        {
          kind: 'line',
          points: sample(-0.5, 2.5, 2, LINE),
          dashed: true,
          label: 'ordinary: 0.83 + 1.50 t',
          labelAt: [0.55, 3.6],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(-0.5, 2.5, 2, WEIGHTED),
          label: 'weighted: 0.81 + 1.57 t',
          labelAt: [1.25, 1.35],
          tone: 'ingest'
        },
        { kind: 'scatter', points: PTS3, tone: 'infra' },
      ]
    },
    {
      type: 'table',
      id: 'ridge',
      title: 'Ridge on the duplicated feature: (AᵀA + λ I) x = Aᵀb: columns 1, t, 2t; the penalty λ applies to all three coefficients',
      columns: ['λ', '(c, d, e)', '‖b − A x‖²'],
      rows: [
        ['0', 'not unique: any d + 2e = 1.5', '0.17'],
        ['0.1', '(0.78, 0.30, 0.61)', '0.17'],
        ['1', '(0.54, 0.32, 0.64)', '0.29'],
        ['10', '(0.23, 0.27, 0.53)', '2.01'],
      ]
    },
  ],
  idea: 'Weighted least squares and ridge regularisation',
  board: [
    fact('b-rule', 'Both change the geometry, not the data'),
    facts('b-1', 'Weighted least squares', ['minimise (b − A x)ᵀ W (b − A x)', 'AᵀW A x̂ = AᵀW b', 'trust point 3 ×4: 0.81 + 1.57 t']),
    facts('b-2', 'Ridge regularisation', ['add λ‖x‖², λ > 0', '(AᵀA + λ I) x̂ = Aᵀb', 'always invertible: unique x̂', 'larger λ shrinks x̂']),
    caution('b-watch', 'Here λ penalises every coefficient, intercept included. Leaving the intercept unpenalised is a common variant with slightly different equations.'),
  ]
})
