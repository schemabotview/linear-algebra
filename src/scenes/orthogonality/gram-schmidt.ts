import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'

// §7.6 — Gram–Schmidt on a₁ = (3, 1), a₂ = (2, 2): subtract a₂'s projection onto a₁ and keep the
// perpendicular remainder (−0.4, 1.2). Normalising both gives Q; the dot products used fill R.
export const gramSchmidt: Scene = {
  id: 'gram-schmidt',
  title: 'Gram–Schmidt and reduced QR',
  flow: 'TB',
  nodes: [
    {
      id: 'remainder',
      kind: 'plot',
      label: 'Keep what is new in a₂',
      sub: 'a₂ − (projection on a₁) = (2, 2) − (2.4, 0.8) = (−0.4, 1.2)',
      plot: {
        equal: true,
        x: { min: -1, max: 3.5, step: 1 },
        y: { min: -0.5, max: 2.5, step: 1 },
        series: [
          arrow([3, 1], 'a₁', '#60a5fa'),
          arrow([2, 2], 'a₂', '#f59e0b'),
          arrow([2.4, 0.8], 'projection', '#bfdbfe'),
          { kind: 'segment', from: [2.4, 0.8], to: [2, 2], label: 'remainder', labelAt: [2.3, 1.55], color: '#f472b6' },
          arrow([-0.4, 1.2], 'remainder, from 0', '#f472b6'),
        ],
      },
    },
    {
      id: 'qr',
      kind: 'table',
      label: 'A = Q R, with A = [3 2; 1 2]',
      sub: 'Q: orthonormal columns. R: upper triangular',
      headers: ['step', 'result', 'stored in'],
      values: [
        ['q₁ = a₁ / ‖a₁‖', '(0.949, 0.316)', 'r₁₁ = √10 ≈ 3.162'],
        ['component of a₂ on q₁', 'q₁ · a₂ ≈ 2.530', 'r₁₂'],
        ['remainder, normalised', 'q₂ ≈ (−0.316, 0.949)', 'r₂₂ = √1.6 ≈ 1.265'],
        ['if a₂ were 2 a₁', 'remainder = 0', 'dependence detected'],
      ],
    },
  ],
  edges: [],
}
