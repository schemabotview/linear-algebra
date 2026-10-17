import type { Scene } from '@graphlearning/flow'
import { circle } from '../plot-kit'

// §12.2 — the unit balls of three vector norms, and four matrix norms of A = [3 0; 4 5] (computed).
export const norms: Scene = {
  id: 'norms',
  title: 'Vector and matrix norms',
  flow: 'TB',
  nodes: [
    {
      id: 'unit-balls',
      kind: 'plot',
      label: 'All x with ‖x‖ = 1, for three norms',
      sub: '‖x‖₁ = |x₁| + |x₂|, ‖x‖₂ = √(x₁² + x₂²), ‖x‖∞ = max |xᵢ|',
      plot: {
        equal: true,
        x: { min: -1.75, max: 1.75, step: 0.5 },
        y: { min: -1.25, max: 1.25, step: 0.5 },
        series: [
          { kind: 'line', points: [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 0]], label: '‖x‖₁ = 1', labelAt: [0.15, 0.2], color: '#f59e0b' },
          { kind: 'line', points: circle(), label: '‖x‖₂ = 1', labelAt: [0.6, 0.6], color: '#60a5fa' },
          { kind: 'line', points: [[1, 1], [-1, 1], [-1, -1], [1, -1], [1, 1]], label: '‖x‖∞ = 1', labelAt: [1.05, 1.08], color: '#34d399' },
        ],
      },
    },
    {
      id: 'matrix-norms',
      kind: 'table',
      label: 'Four norms of A = [3 0; 4 5]',
      sub: 'induced norms: the largest ‖A x‖ over ‖x‖ = 1',
      headers: ['norm', 'rule', 'value'],
      values: [
        ['spectral ‖A‖₂', 'largest singular value σ₁', '6.708'],
        ['Frobenius ‖A‖_F', '√(sum of squared entries) = √(Σσᵢ²)', '√50 ≈ 7.071'],
        ['‖A‖₁ (induced)', 'largest column sum of |aᵢⱼ|', '7'],
        ['‖A‖∞ (induced)', 'largest row sum of |aᵢⱼ|', '9'],
      ],
    },
  ],
  edges: [],
}
