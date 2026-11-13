import { board, fact, facts } from '../frame'
import { arrow, lineEq } from '../plot-kit'

// §7.5 — project b = (1, 3) onto the line through a = (2, 1). p = (aᵀb / aᵀa) a = (5/5) a = (2, 1)
// the residual e = b − p = (−1, 2) is perpendicular to a. The residual is drawn dashed on purpose.
export const projections = board({
  id: 'projections',
  figure: 'Projection onto a line',
  diagram: [
    {
      type: 'plot',
      id: 'drop',
      title: 'p is the closest point to b on the line: a = (2, 1), b = (1, 3), p = (2, 1), e = (−1, 2)',
      equal: true,
      x: { min: -1, max: 4.5, step: 1 },
      y: { min: -0.5, max: 3.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: lineEq(1, -2, 0, -1, 4.5),
          label: 'line through a',
          labelAt: [3.3, 1.35],
          tone: 'neutral'
        },
        arrow([1, 3], 'b', 'store'),
        arrow([2, 1], 'p = projection', 'ingest', [0, 0], [2.16, 0.88]),
        {
          kind: 'segment',
          from: [2, 1],
          to: [1, 3],
          label: 'e = b − p ⟂ a',
          labelAt: [1.65, 2.3],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'formulas',
      title: 'From the one condition aᵀ(b − x̂ a) = 0: the residual must be perpendicular to what we project onto',
      columns: ['quantity', 'formula', 'here'],
      rows: [
        ['coefficient x̂', 'aᵀb / aᵀa', '5 / 5 = 1'],
        ['projection p', 'x̂ a', '(2, 1)'],
        ['residual e', 'b − p, with aᵀe = 0', '(−1, 2) · (2, 1) = 0'],
        ['matrix P', 'a aᵀ / aᵀa', '[4 2; 2 1] / 5'],
        ['onto C(A)', 'P = A (AᵀA)⁻¹ Aᵀ', 'P² = P'],
      ]
    },
  ],
  idea: 'Projection onto a vector or subspace',
  board: [
    fact('b-rule', 'The projection p of b is its closest point', 'the residual e = b − p is perpendicular'),
    facts('b-1', 'Onto a line through a', ['x̂ = aᵀb / aᵀa', '(2, 1), (1, 3): p = (2, 1)', 'e = (−1, 2), e · a = 0', 'P = a aᵀ / aᵀa']),
    facts('b-2', 'Onto a subspace C(A)', ['Aᵀ(b − A x̂) = 0', 'AᵀA x̂ = Aᵀb (chapter 8)', 'P = A (AᵀA)⁻¹ Aᵀ']),
    fact('b-3', 'Why perpendicular means closest', '‖b − q‖² = ‖e‖² + ‖p − q‖² ≥ ‖e‖²; and P² = P'),
  ]
})
