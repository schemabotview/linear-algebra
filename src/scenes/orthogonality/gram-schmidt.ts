import { board, fact, facts } from '../frame'
import { arrow } from '../plot-kit'

// §7.6 — Gram–Schmidt on a₁ = (3, 1), a₂ = (2, 2): subtract a₂'s projection onto a₁ and keep the
// perpendicular remainder (−0.4, 1.2). Normalising both gives Q; the dot products used fill R.
export const gramSchmidt = board({
  id: 'gram-schmidt',
  figure: 'Gram–Schmidt and reduced QR',
  diagram: [
    {
      type: 'plot',
      id: 'remainder',
      title: 'Keep what is new in a₂: a₂ − (projection on a₁) = (2, 2) − (2.4, 0.8) = (−0.4, 1.2)',
      equal: true,
      x: { min: -1, max: 3.5, step: 1 },
      y: { min: -0.5, max: 2.5, step: 1 },
      series: [
        arrow([3, 1], 'a₁', 'ingest'),
        arrow([2, 2], 'a₂', 'infra'),
        arrow([2.4, 0.8], 'projection', 'ingest', [0, 0], [2.46, 0.67]),
        {
          kind: 'segment',
          from: [2.4, 0.8],
          to: [2, 2],
          label: 'remainder',
          labelAt: [2.3, 1.55],
          tone: 'serve'
        },
        arrow([-0.4, 1.2], 'remainder, from 0', 'serve'),
      ]
    },
    {
      type: 'table',
      id: 'qr',
      title: 'A = Q R, with A = [3 2; 1 2]: Q: orthonormal columns. R: upper triangular',
      columns: ['step', 'result', 'stored in'],
      rows: [
        ['q₁ = a₁ / ‖a₁‖', '(0.949, 0.316)', 'r₁₁ = √10 ≈ 3.162'],
        ['component of a₂ on q₁', 'q₁ · a₂ ≈ 2.530', 'r₁₂'],
        ['remainder, normalised', 'q₂ ≈ (−0.316, 0.949)', 'r₂₂ = √1.6 ≈ 1.265'],
        ['if a₂ were 2 a₁', 'remainder = 0', 'dependence detected'],
      ]
    },
  ],
  idea: 'Gram–Schmidt and reduced QR',
  board: [
    fact('b-rule', 'Gram–Schmidt: independent → orthonormal', 'subtract projections on earlier q’s, then normalise'),
    facts('b-1', 'On a₁ = (3, 1), a₂ = (2, 2)', ['q₁ = a₁ / √10', 'a₂ − projection = (−0.4, 1.2)', 'q₂ ≈ (−0.316, 0.949)']),
    facts('b-2', 'Reduced QR', ['A = Q R', 'Q orthonormal, R triangular', 'R holds the lengths and dots']),
    fact('b-3', 'Dependence detection', 'a column that combines the earlier ones leaves a zero remainder'),
  ]
})
