import type { Scene } from '@graphlearning/flow'
import { arrow, UNIT_SQUARE, image, type M2, GREY } from '../plot-kit'

// §9.3 — J = [2 1; 0 2] has λ = 2 twice but only one eigenvector direction, (1, 0): e₂ is sheared off
// its line. Compare 2I, where λ = 2 twice and EVERY direction is an eigenvector.
const J: M2 = [[2, 1], [0, 2]]

export const multiplicity: Scene = {
  id: 'multiplicity',
  title: 'Algebraic and geometric multiplicity',
  flow: 'TB',
  nodes: [
    {
      id: 'shear',
      kind: 'plot',
      label: 'J = [2 1; 0 2]: λ = 2 twice, one eigenvector',
      sub: 'e₁ is only stretched; e₂ is stretched and turned',
      plot: {
        equal: true,
        x: { min: -0.5, max: 3.5, step: 1 },
        y: { min: -0.5, max: 2.5, step: 1 },
        series: [
          { kind: 'line', points: UNIT_SQUARE, dashed: true, color: GREY },
          { kind: 'line', points: image(J, UNIT_SQUARE), label: 'J × square', labelAt: [2.6, 2.2], color: '#9ca3af' },
          { ...arrow([2, 0], 'J e₁ = 2 e₁', '#60a5fa'), labelAt: [1.55, -0.3] },
          { ...arrow([1, 2], 'J e₂ = (1, 2): turned', '#f472b6'), labelAt: [-0.4, 2.3] },
        ],
      },
    },
    {
      id: 'counts',
      kind: 'table',
      label: 'Two ways to count an eigenvalue',
      sub: 'geometric ≤ algebraic, always',
      headers: ['matrix', 'λ', 'algebraic (root count)', 'geometric (dim of eigenspace)'],
      values: [
        ['J = [2 1; 0 2]', '2', '2', '1: only (1, 0)'],
        ['2 I = [2 0; 0 2]', '2', '2', '2: every direction'],
        ['A = [2 1; 1 2]', '3 and 1', '1 each', '1 each'],
      ],
    },
  ],
  edges: [],
}
