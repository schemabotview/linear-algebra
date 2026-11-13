import { board, fact, facts } from '../frame'
import { arrow, lineEq } from '../plot-kit'

// §7.4 — the four subspaces meet at right angles. In ℝ², A = [1 2] has row space along (1, 2) and
// null space along (−2, 1): perpendicular lines. The table checks chapter 4's 3 × 4 example.
export const complements = board({
  id: 'complements',
  figure: 'Orthogonal complements',
  diagram: [
    {
      type: 'plot',
      id: 'perp',
      title: 'A = [1 2]: row space ⟂ null space: A x = 0 says exactly that x is perpendicular to the row (1, 2)',
      equal: true,
      x: { min: -3, max: 3, step: 1 },
      y: { min: -2, max: 3, step: 1 },
      series: [
        {
          kind: 'line',
          points: lineEq(2, -1, 0, -1, 1.5),
          label: 'row space C(Aᵀ)',
          labelAt: [1.4, 2.65],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: lineEq(1, 2, 0, -3, 3),
          label: 'null space N(A)',
          labelAt: [-2.95, 1.75],
          tone: 'infra'
        },
        arrow([1, 2], '(1, 2)', 'ingest', [0, 0], [1.1, 2]),
        arrow([-2, 1], '(−2, 1)', 'infra'),
      ]
    },
    {
      type: 'table',
      id: 'checks',
      title: 'Chapter 4’s A (3 × 4): every pair is perpendicular: N(A) = C(Aᵀ)⟂ in ℝ⁴, N(Aᵀ) = C(A)⟂ in ℝ³',
      columns: ['pair', 'dot product', 'dimensions'],
      rows: [
        ['(−2, 1, 0, 0) · (1, 2, 0, 1)', '−2 + 2 = 0', 'N(A), C(Aᵀ): 2 + 2 = 4'],
        ['(−1, 0, −2, 1) · (0, 0, 1, 2)', '−2 + 2 = 0', ''],
        ['(1, 1, −1) · (1, 2, 3)', '1 + 2 − 3 = 0', 'N(Aᵀ), C(A): 1 + 2 = 3'],
        ['(1, 1, −1) · (0, 1, 1)', '0 + 1 − 1 = 0', ''],
      ]
    },
  ],
  idea: 'Orthogonal complements and the four subspaces',
  board: [
    fact('b-rule', 'V⟂: every vector perpendicular to all of V', 'in ℝⁿ, dim V + dim V⟂ = n'),
    facts('b-1', 'The four subspaces fit', ['N(A) = C(Aᵀ)⟂ in ℝⁿ', 'N(Aᵀ) = C(A)⟂ in ℝᵐ', 'r + (n − r) = n']),
    facts('b-2', 'Checked on chapter 4’s A', ['null ⟂ row space', '(1, 1, −1) ⟂ column space', 'A = [1 2]: two ⟂ lines']),
    fact('b-3', 'Consequence', 'every x in ℝⁿ splits uniquely: a row-space part plus a null-space part'),
  ]
})
