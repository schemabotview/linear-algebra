import type { Scene } from '@graphlearning/flow'
import { arrow, lineEq } from '../plot-kit'

// §7.4 — the four subspaces meet at right angles. In ℝ², A = [1 2] has row space along (1, 2) and
// null space along (−2, 1): perpendicular lines. The table checks chapter 4's 3 × 4 example.
export const complements: Scene = {
  id: 'complements',
  title: 'Orthogonal complements',
  flow: 'TB',
  nodes: [
    {
      id: 'perp',
      kind: 'plot',
      label: 'A = [1 2]: row space ⟂ null space',
      sub: 'A x = 0 says exactly that x is perpendicular to the row (1, 2)',
      plot: {
        equal: true,
        x: { min: -3, max: 3, step: 1 },
        y: { min: -2, max: 3, step: 1 },
        series: [
          { kind: 'line', points: lineEq(2, -1, 0, -1, 1.5), label: 'row space C(Aᵀ)', labelAt: [1.3, 2.75], color: '#60a5fa' },
          { kind: 'line', points: lineEq(1, 2, 0, -3, 3), label: 'null space N(A)', labelAt: [-2.95, 1.75], color: '#f59e0b' },
          arrow([1, 2], '(1, 2)', '#60a5fa'),
          arrow([-2, 1], '(−2, 1)', '#f59e0b'),
        ],
      },
    },
    {
      id: 'checks',
      kind: 'table',
      label: "Chapter 4's A (3 × 4): every pair is perpendicular",
      sub: 'N(A) = C(Aᵀ)⟂ in ℝ⁴, N(Aᵀ) = C(A)⟂ in ℝ³',
      headers: ['pair', 'dot product', 'dimensions'],
      values: [
        ['(−2, 1, 0, 0) · (1, 2, 0, 1)', '−2 + 2 = 0', 'N(A), C(Aᵀ): 2 + 2 = 4'],
        ['(−1, 0, −2, 1) · (0, 0, 1, 2)', '−2 + 2 = 0', ''],
        ['(1, 1, −1) · (1, 2, 3)', '1 + 2 − 3 = 0', 'N(Aᵀ), C(A): 1 + 2 = 3'],
        ['(1, 1, −1) · (0, 1, 1)', '0 + 1 − 1 = 0', ''],
      ],
    },
  ],
  edges: [],
}
