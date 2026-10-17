import type { Scene } from '@graphlearning/flow'
import { apply, type M2, GREY } from '../plot-kit'

// §9.6 — a real matrix with no real eigenvector. C = 0.9 × rotation(30°) has λ = 0.9 (cos 30° ± i sin
// 30°): |λ| = 0.9 sets the shrink per step, the angle 30° sets the turn. Iterating it spirals inward.
const c = Math.cos(Math.PI / 6)
const s = Math.sin(Math.PI / 6)
const C: M2 = [[0.9 * c, -0.9 * s], [0.9 * s, 0.9 * c]]
const orbit: [number, number][] = [[2, 0]]
for (let k = 0; k < 30; k++) orbit.push(apply(C, orbit[orbit.length - 1]))

export const complexEigenvalues: Scene = {
  id: 'complex-eigenvalues',
  title: 'Complex eigenvalues and rotation',
  flow: 'TB',
  nodes: [
    {
      id: 'spiral',
      kind: 'plot',
      label: 'xₖ₊₁ = C xₖ, C = 0.9 × rotation by 30°',
      sub: 'no direction survives: every step turns 30° and shrinks to 0.9',
      plot: {
        equal: true,
        x: { min: -2, max: 2.5, step: 1 },
        y: { min: -1.5, max: 2, step: 1 },
        series: [
          { kind: 'line', points: orbit, label: 'orbit of (2, 0)', labelAt: [1.2, 1.6], color: '#60a5fa' },
          { kind: 'scatter', points: orbit.slice(0, 13), color: '#f59e0b' },
          { kind: 'marker', at: [2, 0], label: 'x₀', labelAt: [2.05, -0.3], color: GREY },
        ],
      },
    },
    {
      id: 'arithmetic',
      kind: 'table',
      label: 'Just enough complex arithmetic',
      sub: 'real matrices give complex eigenvalues in conjugate pairs',
      headers: ['idea', 'statement', 'for C'],
      values: [
        ['imaginary unit', 'i² = −1', ''],
        ['complex number', 'a + b i, size √(a² + b²)', 'λ = 0.779 ± 0.450 i'],
        ['size |λ|', 'growth or shrink per step', '0.9'],
        ['angle of λ', 'turn per step', '30°'],
        ['pure rotation by 90°', 'λ = ± i, |λ| = 1', 'circles forever'],
      ],
    },
  ],
  edges: [],
}
