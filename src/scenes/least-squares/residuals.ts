import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { LINE, PTS3 } from './data'

// §8.1 — three measurements, two unknowns: no line passes through all three. The least-squares line
// makes the residuals (dashed) as small as possible in total square; the flat line y = 7/3 does worse.
export const residualsScene: Scene = {
  id: 'ls-residuals',
  title: 'More equations than unknowns',
  flow: 'TB',
  nodes: [
    {
      id: 'fit',
      kind: 'plot',
      label: 'Fit y = c + d t to (0, 1), (1, 2), (2, 4)',
      sub: 'dashed: residuals of the best line, y = 5/6 + 1.5 t',
      plot: {
        x: { min: -0.5, max: 2.5, step: 0.5, label: 't' },
        y: { min: 0, max: 4.5, step: 1, label: 'y' },
        series: [
          { kind: 'line', points: [[-0.5, 7 / 3], [2.5, 7 / 3]], dashed: true, label: 'constant fit y = 7/3', labelAt: [-0.45, 2.55], color: '#9ca3af' },
          { kind: 'line', points: sample(-0.5, 2.5, 2, LINE), label: 'least-squares line', labelAt: [1.6, 4.25], color: '#60a5fa' },
          ...PTS3.map((p) => ({ kind: 'segment' as const, from: p, to: [p[0], LINE(p[0])] as [number, number], color: '#f472b6' })),
          { kind: 'scatter', points: PTS3, label: 'measurements', labelAt: [0.1, 0.75], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'compare',
      kind: 'table',
      label: 'Residuals e = b − A x̂, and their squared total',
      sub: 'least squares minimises ‖e‖² = e₁² + e₂² + e₃²',
      headers: ['model', 'residuals', '‖e‖²'],
      values: [
        ['line, c = 5/6, d = 1.5', '(0.17, −0.33, 0.17)', '0.17'],
        ['constant, c = 7/3', '(−1.33, −0.33, 1.67)', '4.67'],
        ['exact fit', 'needs b in C(A)', 'impossible here'],
      ],
    },
  ],
  edges: [],
}
