import { board, fact, facts } from '../frame'
import { arrow, circle, image, type M2, GREY } from '../plot-kit'

// §7.1 — an inner product decides what "length 1" means. Under ⟨u, v⟩ = u₁v₁ + 4 u₂v₂ the unit
// "circle" is the ellipse x² + 4y² = 1: (0, 0.5) has weighted length 1, the same as (1, 0).
const HALF_Y: M2 = [[1, 0], [0, 0.5]]
export const innerProducts = board({
  id: 'inner-products',
  figure: 'Inner products and the lengths they define',
  diagram: [
    {
      type: 'plot',
      id: 'unit-sets',
      title: 'All vectors of length 1, under two inner products: dot product: a circle. Weighted u₁v₁ + 4u₂v₂: an ellipse, on which (1, 0) and (0, 0.5) both lie',
      equal: true,
      x: { min: -1.6, max: 1.6, step: 0.5 },
      y: { min: -1.2, max: 1.2, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: circle(),
          dashed: true,
          label: 'u · u = 1',
          labelAt: [0.72, 0.85],
          tone: GREY
        },
        {
          kind: 'line',
          points: image(HALF_Y, circle()),
          label: 'u₁² + 4u₂² = 1',
          labelAt: [0.95, 0.4],
          tone: 'ingest'
        },
        { ...arrow([1, 0], '(1, 0)', 'infra'), labelAt: [0.55, 0.06] },
        { ...arrow([0, 0.5], '(0, 0.5)', 'store'), labelAt: [0.05, 0.62] },
      ]
    },
    {
      type: 'table',
      id: 'axioms',
      title: 'What makes ⟨u, v⟩ an inner product: every such rule gives a length ‖u‖ = √⟨u, u⟩',
      columns: ['property', 'statement', 'weighted example'],
      rows: [
        ['symmetric', '⟨u, v⟩ = ⟨v, u⟩', 'u₁v₁ + 4u₂v₂ is symmetric'],
        ['linear', '⟨a u + b w, v⟩ = a⟨u, v⟩ + b⟨w, v⟩', 'linear in each slot'],
        ['positive', '⟨u, u⟩ > 0 for u ≠ 0', 'u₁² + 4u₂² > 0'],
        ['as a matrix', '⟨u, v⟩ = uᵀ W v', 'W = diag(1, 4)'],
      ]
    },
  ],
  idea: 'Inner products, norms and weighted geometry',
  board: [
    fact('b-rule', 'An inner product generalises the dot product', 'symmetric, linear in each slot, ⟨u, u⟩ > 0 for u ≠ 0'),
    facts('b-1', 'It brings a geometry', ['length ‖u‖ = √⟨u, u⟩', 'distance ‖u − v‖', 'orthogonal: ⟨u, v⟩ = 0', 'cos θ = ⟨u, v⟩ / (‖u‖ ‖v‖)']),
    facts('b-2', 'A weighted inner product', ['⟨u, v⟩ = uᵀ W v, W = diag(1, 4)', 'unit circle: u₁² + 4u₂² = 1', '(0, 0.5) has length 1']),
    fact('b-3', 'Why weight?', 'it puts components in different units on a comparable footing; say which weights'),
  ]
})
