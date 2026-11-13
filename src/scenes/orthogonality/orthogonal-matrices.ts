import { board, caution, fact, facts } from '../frame'
import { arrow, apply, type M2 } from '../plot-kit'

// §7.7 — an orthogonal Q (here a 30° rotation) keeps every length and angle. The table is measured,
// not illustrative: ‖QᵀQ − I‖ for three ways of computing QR on the Läuchli matrix with ε = 10⁻⁸.
const c = Math.cos(Math.PI / 6)
const s = Math.sin(Math.PI / 6)
const Q: M2 = [[c, -s], [s, c]]
const u: [
  number,
  number
] = [2, 0.5]
const v: [
  number,
  number
] = [0.5, 1.5]
export const orthogonalMatrices = board({
  id: 'orthogonal-matrices',
  figure: 'Orthogonal matrices and stable QR',
  diagram: [
    {
      type: 'plot',
      id: 'rigid',
      title: 'Q = rotation by 30°: lengths and angles survive: Qᵀ Q = I, so (Q u) · (Q v) = u · v',
      equal: true,
      x: { min: -1, max: 2.5, step: 0.5 },
      y: { min: -0.25, max: 2, step: 0.5 },
      series: [
        arrow(u, 'u', 'ingest'),
        arrow(v, 'v', 'infra'),
        { ...arrow(apply(Q, u), 'Q u', 'ingest'), dashed: true },
        { ...arrow(apply(Q, v), 'Q v', 'infra'), dashed: true },
      ]
    },
    {
      type: 'table',
      id: 'stability',
      title: 'Loss of orthogonality, measured: Läuchli matrix, ε = 10⁻⁸, double precision',
      columns: ['QR method', '‖QᵀQ − I‖', 'verdict'],
      rows: [
        ['classical Gram–Schmidt', '0.71', 'q₂ · q₃ = 0.5: not orthogonal'],
        ['modified Gram–Schmidt', '1.2 × 10⁻⁸', 'much better'],
        ['Householder reflections', '3.5 × 10⁻¹⁶', 'orthogonal to rounding'],
      ]
    },
  ],
  idea: 'Orthogonal matrices and stable QR',
  board: [
    fact('b-rule', 'Square, orthonormal columns: Q is orthogonal', 'Qᵀ Q = I, so Q⁻¹ = Qᵀ'),
    facts('b-1', 'Geometry preserved', ['‖Q x‖ = ‖x‖; angles survive', 'rotations, reflections; det ±1', '30° rotation: u, v move rigidly']),
    facts('b-2', 'Computing QR reliably', ['classical G–S drifts in rounding', 'nearly dependent: q₂ · q₃ = 0.5', 'modified G–S does far better', 'libraries use Householder']),
    caution('b-watch', 'Chapter outcome: you can explain orthogonal decomposition, derive a projection, and connect orthonormal coordinates to QR.'),
  ]
})
