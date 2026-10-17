import type { Scene } from '@graphlearning/flow'
import { arrow, circle, image, type M2, GREY } from '../plot-kit'

// §7.1 — an inner product decides what "length 1" means. Under ⟨u, v⟩ = u₁v₁ + 4 u₂v₂ the unit
// "circle" is the ellipse x² + 4y² = 1: (0, 0.5) has weighted length 1, the same as (1, 0).
const HALF_Y: M2 = [[1, 0], [0, 0.5]]

export const innerProducts: Scene = {
  id: 'inner-products',
  title: 'Inner products and the lengths they define',
  flow: 'TB',
  nodes: [
    {
      id: 'unit-sets',
      kind: 'plot',
      label: 'All vectors of length 1, under two inner products',
      sub: 'dot product: a circle. Weighted u₁v₁ + 4u₂v₂: an ellipse, on which (1, 0) and (0, 0.5) both lie',
      plot: {
        equal: true,
        x: { min: -1.6, max: 1.6, step: 0.5 },
        y: { min: -1.2, max: 1.2, step: 0.5 },
        series: [
          { kind: 'line', points: circle(), dashed: true, label: 'u · u = 1', labelAt: [0.72, 0.85], color: GREY },
          { kind: 'line', points: image(HALF_Y, circle()), label: 'u₁² + 4u₂² = 1', labelAt: [0.95, 0.4], color: '#60a5fa' },
          { ...arrow([1, 0], '(1, 0)', '#f59e0b'), labelAt: [0.6, -0.15] },
          { ...arrow([0, 0.5], '(0, 0.5)', '#34d399'), labelAt: [0.05, 0.62] },
        ],
      },
    },
    {
      id: 'axioms',
      kind: 'table',
      label: 'What makes ⟨u, v⟩ an inner product',
      sub: 'every such rule gives a length ‖u‖ = √⟨u, u⟩',
      headers: ['property', 'statement', 'weighted example'],
      values: [
        ['symmetric', '⟨u, v⟩ = ⟨v, u⟩', 'u₁v₁ + 4u₂v₂ is symmetric'],
        ['linear', '⟨a u + b w, v⟩ = a⟨u, v⟩ + b⟨w, v⟩', 'linear in each slot'],
        ['positive', '⟨u, u⟩ > 0 for u ≠ 0', 'u₁² + 4u₂² > 0'],
        ['as a matrix', '⟨u, v⟩ = uᵀ W v', 'W = diag(1, 4)'],
      ],
    },
  ],
  edges: [],
}
