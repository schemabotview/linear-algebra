import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'
import { Q1, Q2, levelSet, scale } from './common'

// §10.3 — q(x) = xᵀ S x = 5x² + 4xy + 2y². Its level curves are ellipses tilted along q₁ and q₂.
// In those coordinates the cross term disappears: q = 6u² + v².
export const quadraticForms: Scene = {
  id: 'quadratic-forms',
  title: 'Quadratic forms and principal axes',
  flow: 'TB',
  nodes: [
    {
      id: 'levels',
      kind: 'plot',
      label: 'Level curves of q = 5x² + 4xy + 2y²',
      sub: 'q = 1, 4, 9 from the inside out: tilted ellipses, axes along q₁ and q₂',
      plot: {
        equal: true,
        x: { min: -3, max: 3, step: 1 },
        y: { min: -3, max: 3, step: 1 },
        series: [
          { kind: 'line', points: levelSet(1), color: '#60a5fa' },
          { kind: 'line', points: levelSet(4), color: '#60a5fa' },
          { kind: 'line', points: levelSet(9), color: '#60a5fa' },
          arrow(scale(Q1, 1.25), 'q₁: steepest', '#f59e0b'),
          arrow(scale(Q2, 2.75), 'q₂: flattest', '#34d399'),
        ],
      },
    },
    {
      id: 'rotate',
      kind: 'table',
      label: 'Rotate to remove the cross term',
      sub: 'substitute x = Q u, where Q = [q₁ q₂]',
      headers: ['form', 'in x, y', 'in u, v'],
      values: [
        ['q(x)', '5x² + 4xy + 2y²', '6u² + v²'],
        ['matrix', 'S = [5 2; 2 2]', 'Λ = diag(6, 1)'],
        ['q = 1 crosses an axis at', 'mixed', 'u = 1/√6, v = 1'],
      ],
    },
  ],
  edges: [],
}
