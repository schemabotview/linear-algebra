import type { Scene } from '@graphlearning/flow'
import { arrow, circle, image, type M2, GREY } from '../plot-kit'

// §11.2 — A = [3 0; 4 5]: rotate (Vᵀ), stretch (Σ), rotate (U). The unit circle's v₁, v₂ land on the
// ellipse's axes σ₁u₁, σ₂u₂, with σ₁ = 3√5 ≈ 6.71 and σ₂ = √5 ≈ 2.24 (computed).
const A: M2 = [[3, 0], [4, 5]]
const r2 = Math.SQRT1_2
const r10 = 1 / Math.sqrt(10)

export const geometry: Scene = {
  id: 'svd-geometry',
  title: 'Rotate, stretch, rotate',
  flow: 'TB',
  nodes: [
    {
      id: 'ellipse',
      kind: 'plot',
      label: 'A = [3 0; 4 5] maps the unit circle to an ellipse',
      sub: 'v₁, v₂ on the circle go to σ₁u₁, σ₂u₂ on the ellipse',
      plot: {
        equal: true,
        x: { min: -4, max: 4, step: 1 },
        y: { min: -7, max: 7, step: 2 },
        series: [
          { kind: 'line', points: circle(), dashed: true, color: GREY },
          { kind: 'line', points: image(A, circle()), label: 'A × circle', labelAt: [-3.9, 6.2], color: '#60a5fa' },
          { ...arrow([r2, r2], 'v₁', '#bfdbfe'), labelAt: [0.2, 1.1] },
          { ...arrow([r2, -r2], 'v₂', '#fde68a'), labelAt: [0.75, -1.05] },
          arrow([3 * Math.sqrt(5) * r10, 9 * Math.sqrt(5) * r10], 'σ₁ u₁ (6.71)', '#f59e0b'),
          arrow([3 * r10 * Math.sqrt(5), -1 * r10 * Math.sqrt(5)], 'σ₂ u₂ (2.24)', '#34d399'),
        ],
      },
    },
    {
      id: 'relations',
      kind: 'table',
      label: 'Where U, Σ, V come from',
      sub: 'AᵀA = [25 20; 20 25] has eigenvalues 45 and 5',
      headers: ['relation', 'meaning', 'here'],
      values: [
        ['A vᵢ = σᵢ uᵢ', 'each input axis lands on an output axis', 'v₁ = (1, 1)/√2 → σ₁ u₁'],
        ['AᵀA vᵢ = σᵢ² vᵢ', 'V: eigenvectors of AᵀA', 'σ² = 45, 5'],
        ['AAᵀ uᵢ = σᵢ² uᵢ', 'U: eigenvectors of AAᵀ', 'u₁ = (1, 3)/√10'],
        ['σᵢ = √λᵢ(AᵀA)', 'stretch factors, ≥ 0', '3√5 ≈ 6.71, √5 ≈ 2.24'],
      ],
    },
  ],
  edges: [],
}
