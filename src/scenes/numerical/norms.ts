import { board, caution, fact, facts } from '../frame'
import { circle } from '../plot-kit'

// §12.2 — the unit balls of three vector norms, and four matrix norms of A = [3 0; 4 5] (computed).
export const norms = board({
  id: 'norms',
  figure: 'Vector and matrix norms',
  diagram: [
    {
      type: 'plot',
      id: 'unit-balls',
      title: 'All x with ‖x‖ = 1, for three norms: ‖x‖₁ = |x₁| + |x₂|, ‖x‖₂ = √(x₁² + x₂²), ‖x‖∞ = max |xᵢ|',
      equal: true,
      x: { min: -1.75, max: 1.75, step: 0.5 },
      y: { min: -1.25, max: 1.25, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 0]],
          label: '‖x‖₁ = 1',
          labelAt: [0.15, 0.2],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: circle(),
          label: '‖x‖₂ = 1',
          labelAt: [0.45, 0.83],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: [[1, 1], [-1, 1], [-1, -1], [1, -1], [1, 1]],
          label: '‖x‖∞ = 1',
          labelAt: [1.05, 1.08],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'matrix-norms',
      title: 'Four norms of A = [3 0; 4 5]: induced norms: the largest ‖A x‖ over ‖x‖ = 1',
      columns: ['norm', 'rule', 'value'],
      rows: [
        ['spectral ‖A‖₂', 'largest singular value σ₁', '6.708'],
        ['Frobenius ‖A‖_F', '√(sum of squared entries) = √(Σσᵢ²)', '√50 ≈ 7.071'],
        ['‖A‖₁ (induced)', 'largest column sum of |aᵢⱼ|', '7'],
        ['‖A‖∞ (induced)', 'largest row sum of |aᵢⱼ|', '9'],
      ]
    },
  ],
  idea: 'Vector and matrix norms',
  board: [
    fact('b-rule', 'A norm measures size', 'to say how big an error is, we need one'),
    facts('b-1', 'Vector norms', ['‖x‖₂: length', '‖x‖₁: sum of sizes', '‖x‖∞: largest component', 'balls: circle, diamond, square']),
    facts('b-2', 'Matrix norms', ['induced: the most A stretches', 'spectral ‖A‖₂ = σ₁', 'Frobenius √(Σσᵢ²): not induced', '[3 0; 4 5]: 6.71, 7.07, 7, 9']),
    caution('b-watch', 'Always say which norm: "error 10⁻⁶" means different things in different norms.'),
  ]
})
