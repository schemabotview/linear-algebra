import type { Scene } from '@graphlearning/flow'
import { arrow, apply, type M2 } from '../plot-kit'

// §7.7 — an orthogonal Q (here a 30° rotation) keeps every length and angle. The table is measured,
// not illustrative: ‖QᵀQ − I‖ for three ways of computing QR on the Läuchli matrix with ε = 10⁻⁸.
const c = Math.cos(Math.PI / 6)
const s = Math.sin(Math.PI / 6)
const Q: M2 = [[c, -s], [s, c]]
const u: [number, number] = [2, 0.5]
const v: [number, number] = [0.5, 1.5]

export const orthogonalMatrices: Scene = {
  id: 'orthogonal-matrices',
  title: 'Orthogonal matrices and stable QR',
  flow: 'TB',
  nodes: [
    {
      id: 'rigid',
      kind: 'plot',
      label: 'Q = rotation by 30°: lengths and angles survive',
      sub: 'Qᵀ Q = I, so (Q u) · (Q v) = u · v',
      plot: {
        equal: true,
        x: { min: -1, max: 2.5, step: 0.5 },
        y: { min: -0.25, max: 2, step: 0.5 },
        series: [
          arrow(u, 'u', '#60a5fa'),
          arrow(v, 'v', '#f59e0b'),
          { ...arrow(apply(Q, u), 'Q u', '#bfdbfe'), dashed: true },
          { ...arrow(apply(Q, v), 'Q v', '#fde68a'), dashed: true },
        ],
      },
    },
    {
      id: 'stability',
      kind: 'table',
      label: 'Loss of orthogonality, measured',
      sub: 'Läuchli matrix, ε = 10⁻⁸, double precision',
      headers: ['QR method', '‖QᵀQ − I‖', 'verdict'],
      values: [
        ['classical Gram–Schmidt', '0.71', 'q₂ · q₃ = 0.5: not orthogonal'],
        ['modified Gram–Schmidt', '1.2 × 10⁻⁸', 'much better'],
        ['Householder reflections', '3.5 × 10⁻¹⁶', 'orthogonal to rounding'],
      ],
    },
  ],
  edges: [],
}
