import type { Scene } from '@graphlearning/flow'
import { arrow, circle, image, type M2, GREY } from '../plot-kit'

// §9.4 — A = V D V⁻¹ with the eigenvectors in V. Geometrically: in the eigenvector directions A is
// just a stretch, so the unit circle becomes an ellipse whose axes ARE those directions.
const A: M2 = [[2, 1], [1, 2]]

export const diagonalisation: Scene = {
  id: 'diagonalisation',
  title: 'Diagonalisation',
  flow: 'TB',
  nodes: [
    {
      id: 'axes',
      kind: 'plot',
      label: 'A × unit circle: an ellipse with eigenvector axes',
      sub: 'stretch 3 along (1, 1), stretch 1 along (1, −1)',
      plot: {
        equal: true,
        x: { min: -3, max: 3, step: 1 },
        y: { min: -2.5, max: 2.5, step: 1 },
        series: [
          { kind: 'line', points: circle(), dashed: true, label: 'unit circle', labelAt: [-1.9, -1.15], color: GREY },
          { kind: 'line', points: image(A, circle()), label: 'A × circle', labelAt: [1.75, 2.3], color: '#60a5fa' },
          arrow([2.121, 2.121], '3 × unit v₁', '#f59e0b'),
          arrow([0.707, -0.707], '1 × unit v₂', '#34d399'),
        ],
      },
    },
    {
      id: 'factorisation',
      kind: 'table',
      label: 'A = V D V⁻¹',
      sub: 'possible exactly when there are n independent eigenvectors',
      headers: ['factor', 'value', 'meaning'],
      values: [
        ['V', '[1 1; 1 −1]', 'eigenvectors as columns'],
        ['D', 'diag(3, 1)', 'eigenvalues, in the same order'],
        ['V⁻¹', '[1 1; 1 −1] / 2', 'coordinates in the eigenbasis'],
        ['J = [2 1; 0 2]', 'no V exists', 'defective: one eigenvector'],
      ],
    },
  ],
  edges: [],
}
