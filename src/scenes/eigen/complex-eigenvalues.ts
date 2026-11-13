import { board, caution, fact, facts } from '../frame'
import { apply, type M2, GREY } from '../plot-kit'

// §9.6 — a real matrix with no real eigenvector. C = 0.9 × rotation(30°) has λ = 0.9 (cos 30° ± i sin
// 30°): |λ| = 0.9 sets the shrink per step, the angle 30° sets the turn. Iterating it spirals inward.
const c = Math.cos(Math.PI / 6)
const s = Math.sin(Math.PI / 6)
const C: M2 = [[0.9 * c, -0.9 * s], [0.9 * s, 0.9 * c]]
const orbit: [
  number,
  number
][] = [[2, 0]]
for (let k = 0; k < 30; k++)
  orbit.push(apply(C, orbit[orbit.length - 1]))
export const complexEigenvalues = board({
  id: 'complex-eigenvalues',
  figure: 'Complex eigenvalues and rotation',
  diagram: [
    {
      type: 'plot',
      id: 'spiral',
      title: 'xₖ₊₁ = C xₖ, C = 0.9 × rotation by 30°: no direction survives: every step turns 30° and shrinks to 0.9',
      equal: true,
      x: { min: -2, max: 2.5, step: 1 },
      y: { min: -1.5, max: 2, step: 1 },
      series: [
        {
          kind: 'line',
          points: orbit,
          label: 'orbit of (2, 0)',
          labelAt: [1.2, 1.6],
          tone: 'ingest'
        },
        { kind: 'scatter', points: orbit.slice(0, 13), tone: 'infra' },
        {
          kind: 'scatter',
          points: [[2, 0]],
          label: 'x₀',
          labelAt: [2.05, -0.3],
          tone: GREY
        },
      ]
    },
    {
      type: 'table',
      id: 'arithmetic',
      title: 'Just enough complex arithmetic: real matrices give complex eigenvalues in conjugate pairs',
      columns: ['idea', 'statement', 'for C'],
      rows: [
        ['imaginary unit', 'i² = −1', ''],
        ['complex number', 'a + b i, size √(a² + b²)', 'λ = 0.779 ± 0.450 i'],
        ['size |λ|', 'growth or shrink per step', '0.9'],
        ['angle of λ', 'turn per step', '30°'],
        ['pure rotation by 90°', 'λ = ± i, |λ| = 1', 'circles forever'],
      ]
    },
  ],
  idea: 'Complex eigenvalues and rotation',
  board: [
    fact('b-rule', 'A rotation turns every direction', 'so its eigenvalues are complex'),
    facts('b-1', 'Just enough complex numbers', ['i² = −1; size √(a² + b²)', 'real A: pairs a ± b i', '90°: λ² + 1 = 0, λ = ± i']),
    facts('b-2', 'What λ means for motion', ['|λ|: growth per step', 'angle of λ: turn per step', '0.9 × 30°: an inward spiral', '|λ| = 1 circles for ever']),
    caution('b-watch', 'Chapter outcome: you can find small eigenspaces, decide when a matrix diagonalises, and explain repeated-map behaviour under stated conditions.'),
  ]
})
