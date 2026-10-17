import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §9.2 — det(B − λ I) = λ² − 7λ + 10 for B = [4 1; 2 3]: roots 5 and 2. Their sum is the trace (7)
// and their product the determinant (10), which the table checks for both chapter examples.
export const characteristic: Scene = {
  id: 'characteristic',
  title: 'The characteristic polynomial',
  flow: 'TB',
  nodes: [
    {
      id: 'roots',
      kind: 'plot',
      label: 'p(λ) = det (B − λ I) for B = [4 1; 2 3]',
      sub: '(4 − λ)(3 − λ) − 2 = λ² − 7λ + 10 = (λ − 2)(λ − 5)',
      plot: {
        x: { min: 0, max: 7, step: 1, label: 'λ' },
        y: { min: -3, max: 6, step: 1 },
        series: [
          { kind: 'line', points: sample(0, 7, 80, (l) => l * l - 7 * l + 10), label: 'p(λ)', labelAt: [6.3, 4.6], color: '#60a5fa' },
          { kind: 'marker', at: [2, 0], label: 'λ = 2', labelAt: [1.2, -0.7], color: '#34d399' },
          { kind: 'marker', at: [5, 0], label: 'λ = 5', labelAt: [5.15, -0.7], color: '#34d399' },
        ],
      },
    },
    {
      id: 'checks',
      kind: 'table',
      label: 'Trace and determinant, read off the eigenvalues',
      sub: 'sum of λ = trace; product of λ = det',
      headers: ['matrix', 'eigenvalues', 'trace', 'det', 'eigenvectors'],
      values: [
        ['A = [2 1; 1 2]', '3, 1', '4 = 3 + 1', '3 = 3 · 1', '(1, 1), (1, −1)'],
        ['B = [4 1; 2 3]', '5, 2', '7 = 5 + 2', '10 = 5 · 2', '(1, 1), (−1, 2)'],
      ],
    },
  ],
  edges: [],
}
