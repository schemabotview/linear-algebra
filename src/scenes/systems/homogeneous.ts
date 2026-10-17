import type { Scene } from '@graphlearning/flow'
import { arrow, lineEq } from '../plot-kit'

// §3.6 — every solution of A x = b is one particular solution plus a solution of A x = 0. In the
// (x₁, x₂) plane: the homogeneous line passes through the origin, the full solution set is it shifted.
const P = '#f59e0b'
const H = '#60a5fa'

export const homogeneous: Scene = {
  id: 'homogeneous',
  title: 'Particular plus homogeneous',
  flow: 'TB',
  nodes: [
    {
      id: 'shifted',
      kind: 'plot',
      label: 'Solutions of A x = b are the solutions of A x = 0, shifted',
      sub: 'A = [1 2 3; 2 4 7], xₚ = (2, 0, 3); shown in the (x₁, x₂) plane',
      plot: {
        equal: true,
        x: { min: -4, max: 4, step: 1, label: 'x₁' },
        y: { min: -1.5, max: 3, step: 1, label: 'x₂' },
        series: [
          { kind: 'line', points: lineEq(1, 2, 0, -4, 3), label: 'A x = 0: t (−2, 1, 0)', labelAt: [-3.9, 1.0], color: H },
          { kind: 'line', points: lineEq(1, 2, 2, -4, 4), label: 'A x = b: xₚ + t (−2, 1, 0)', labelAt: [0.3, 1.45], color: P },
          { ...arrow([2, 0], 'xₚ', '#34d399'), labelAt: [1.0, 0.2] },
          arrow([-2, 1], 'xₕ', H),
        ],
      },
    },
    {
      id: 'decomposition',
      kind: 'table',
      label: 'General solution = particular + homogeneous',
      sub: 'b = (11, 25)',
      headers: ['piece', 'vector', 'check'],
      values: [
        ['particular xₚ', '(2, 0, 3)', 'A xₚ = (11, 25) = b'],
        ['homogeneous xₕ', 't (−2, 1, 0)', 'A xₕ = (0, 0)'],
        ['general', 'xₚ + xₕ', 'A x = b + 0 = b'],
        ['trivial', 'x = 0', 'always solves A x = 0'],
      ],
    },
  ],
  edges: [],
}
