import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { LINE, PTS3 } from './data'

// §8.6 — two geometric extensions, numbers computed. Weighting the third measurement ×4 pulls the line
// towards it. Ridge (penalty λ on every coefficient) makes the duplicated-feature fit unique.
const WEIGHTED = (t: number) => 0.8095 + 1.5714 * t

export const weightedRidge: Scene = {
  id: 'weighted-ridge',
  title: 'Weighted least squares and ridge',
  flow: 'TB',
  nodes: [
    {
      id: 'weighted',
      kind: 'plot',
      label: 'Weight the third measurement 4 times as much',
      sub: 'minimise (b − A x)ᵀ W (b − A x), W = diag(1, 1, 4)',
      plot: {
        x: { min: -0.5, max: 2.5, step: 0.5, label: 't' },
        y: { min: 0, max: 4.5, step: 1, label: 'y' },
        series: [
          { kind: 'line', points: sample(-0.5, 2.5, 2, LINE), dashed: true, label: 'ordinary: 0.83 + 1.50 t', labelAt: [0.55, 3.6], color: '#9ca3af' },
          { kind: 'line', points: sample(-0.5, 2.5, 2, WEIGHTED), label: 'weighted: 0.81 + 1.57 t', labelAt: [1.25, 1.35], color: '#60a5fa' },
          { kind: 'scatter', points: PTS3, color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'ridge',
      kind: 'table',
      label: 'Ridge on the duplicated feature: (AᵀA + λ I) x = Aᵀb',
      sub: 'columns 1, t, 2t; the penalty λ applies to all three coefficients',
      headers: ['λ', '(c, d, e)', '‖b − A x‖²'],
      values: [
        ['0', 'not unique: any d + 2e = 1.5', '0.17'],
        ['0.1', '(0.78, 0.30, 0.61)', '0.17'],
        ['1', '(0.54, 0.32, 0.64)', '0.29'],
        ['10', '(0.23, 0.27, 0.53)', '2.01'],
      ],
    },
  ],
  edges: [],
}
