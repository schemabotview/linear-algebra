import { board, caution, fact, facts } from '../frame'
import { arrow } from '../plot-kit'

// §7.3 — with an orthonormal basis, coordinates are dot products. q₁ = (0.6, 0.8), q₂ = (−0.8, 0.6):
// x = (2, 1) has c₁ = q₁ · x = 2 and c₂ = q₂ · x = −1, so x = 2 q₁ − q₂. No system to solve.
export const orthonormal = board({
  id: 'orthonormal',
  figure: 'Orthonormal bases',
  diagram: [
    {
      type: 'plot',
      id: 'recover',
      title: 'x = (2, 1) = 2 q₁ − 1 q₂: q₁ = (0.6, 0.8), q₂ = (−0.8, 0.6): unit length, perpendicular',
      equal: true,
      x: { min: -1.5, max: 3, step: 1 },
      y: { min: -0.5, max: 2, step: 0.5 },
      series: [
        arrow([1.2, 1.6], '2 q₁', 'ingest'),
        arrow([0.6, 0.8], 'q₁', 'ingest', [0, 0], [0.65, 0.76]),
        arrow([-0.8, 0.6], 'q₂', 'infra'),
        {
          kind: 'segment',
          from: [1.2, 1.6],
          to: [2, 1],
          arrow: true,
          label: '−q₂',
          labelAt: [1.75, 1.5],
          tone: 'infra'
        },
        arrow([2, 1], 'x = (2, 1)', 'store'),
      ]
    },
    {
      type: 'table',
      id: 'coordinates',
      title: 'Coordinates by dot products: cᵢ = qᵢ · x, because qᵢ · qⱼ = 0 for i ≠ j and qᵢ · qᵢ = 1',
      columns: ['coordinate', 'working', 'value'],
      rows: [
        ['c₁ = q₁ · x', '0.6·2 + 0.8·1', '2'],
        ['c₂ = q₂ · x', '−0.8·2 + 0.6·1', '−1'],
        ['check', '2 (0.6, 0.8) − (−0.8, 0.6)', '(2, 1) ✓'],
        ['any basis', 'solve B c = x', 'needs elimination'],
      ]
    },
  ],
  idea: 'Orthogonal sets, orthonormal bases and coordinates',
  board: [
    fact('b-rule', 'Orthonormal: unit length, pairwise perpendicular', 'qᵢ · qⱼ = 0 for i ≠ j'),
    facts('b-1', 'Coordinates for free', ['the coordinate on qᵢ is qᵢ · x', 'q₁ = (0.6, 0.8), q₂ = (−0.8, 0.6)', 'x = (2, 1): c₁ = 2, c₂ = −1', '‖x‖² = 4 + 1 = 5']),
    facts('b-2', 'Why it works', ['dot with q₁: other terms vanish', 'orthogonal ⇒ independent']),
    caution('b-watch', 'Orthogonal is not orthonormal: if the qᵢ are perpendicular but not unit length, divide: cᵢ = qᵢ · x / qᵢ · qᵢ.'),
  ]
})
