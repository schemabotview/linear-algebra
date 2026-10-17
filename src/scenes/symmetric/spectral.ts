import type { Scene } from '@graphlearning/flow'
import { arrow, circle, image, type M2, GREY } from '../plot-kit'
import { Q1, Q2, scale } from './common'

// §10.2 — the spectral theorem as geometry: S maps the unit circle to an ellipse whose axes are the
// orthonormal eigenvectors, with semi-axes equal to the eigenvalues. And as algebra: S = Σ λᵢ qᵢ qᵢᵀ.
const S: M2 = [[5, 2], [2, 2]]

export const spectral: Scene = {
  id: 'spectral',
  title: 'The spectral theorem',
  flow: 'TB',
  nodes: [
    {
      id: 'ellipse',
      kind: 'plot',
      label: 'S × unit circle',
      sub: 'axes along q₁, q₂; semi-axes 6 and 1',
      plot: {
        equal: true,
        x: { min: -6, max: 6, step: 2 },
        y: { min: -3.5, max: 3.5, step: 1 },
        series: [
          { kind: 'line', points: circle(), dashed: true, color: GREY },
          { kind: 'line', points: image(S, circle()), label: 'S × circle', labelAt: [3.3, 3.0], color: '#60a5fa' },
          arrow(scale(Q1, 6), '6 q₁', '#f59e0b'),
          { ...arrow(Q2, 'q₂', '#34d399'), labelAt: [0.55, -1.25] },
        ],
      },
    },
    {
      id: 'pieces',
      kind: 'table',
      label: 'S = 6 q₁q₁ᵀ + 1 q₂q₂ᵀ',
      sub: 'a sum of rank-one projections, weighted by eigenvalues',
      headers: ['piece', 'matrix'],
      values: [
        ['6 q₁q₁ᵀ, q₁ = (2, 1)/√5', '[4.8 2.4; 2.4 1.2]'],
        ['1 q₂q₂ᵀ, q₂ = (1, −2)/√5', '[0.2 −0.4; −0.4 0.8]'],
        ['sum', '[5 2; 2 2] = S ✓'],
        ['repeated λ, e.g. 3 I', 'any orthonormal basis works'],
      ],
    },
  ],
  edges: [],
}
