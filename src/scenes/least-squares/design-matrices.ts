import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { FIT1, FIT2, PTS6 } from './data'

// §8.5 — "linear" means linear in the coefficients, not in t. A t² column turns the same machinery
// into a quadratic fit. Residual totals are computed from the six points in data.ts.
export const designMatrices: Scene = {
  id: 'design-matrices',
  title: 'Design matrices and features',
  flow: 'TB',
  nodes: [
    {
      id: 'curves',
      kind: 'plot',
      label: 'Six measurements, two models',
      sub: 'a line, and a quadratic: both are linear least squares',
      plot: {
        x: { min: -0.25, max: 5.25, step: 1, label: 't' },
        y: { min: -0.5, max: 11.5, step: 2, label: 'y' },
        series: [
          { kind: 'line', points: sample(-0.25, 5.25, 2, FIT1), label: 'line: ‖e‖² = 6.74', labelAt: [3.05, 3.4], color: '#9ca3af' },
          { kind: 'line', points: sample(-0.25, 5.25, 60, FIT2), label: 'quadratic: ‖e‖² = 0.54', labelAt: [1.6, 6.6], color: '#60a5fa' },
          { kind: 'scatter', points: PTS6, color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'design',
      kind: 'table',
      label: 'The quadratic design matrix A',
      sub: 'one row per measurement, one column per feature',
      headers: ['t', 'column 1', 'column t', 'column t²', 'y'],
      values: [
        ['0', '1', '0', '0', '1.51'],
        ['1', '1', '1', '1', '0.91'],
        ['2', '1', '2', '4', '2.90'],
        ['⋮', '⋮', '⋮', '⋮', '⋮'],
        ['5', '1', '5', '25', '10.70'],
      ],
    },
  ],
  edges: [],
}
