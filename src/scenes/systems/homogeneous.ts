import { board, caution, fact, facts } from '../frame'
import { arrow, lineEq } from '../plot-kit'

// §3.6 — every solution of A x = b is one particular solution plus a solution of A x = 0. In the
// (x₁, x₂) plane: the homogeneous line passes through the origin, the full solution set is it shifted.
const P = 'infra'
const H = 'ingest'
export const homogeneous = board({
  id: 'homogeneous',
  figure: 'Particular plus homogeneous',
  diagram: [
    {
      type: 'plot',
      id: 'shifted',
      title: 'Solutions of A x = b are the solutions of A x = 0, shifted: A = [1 2 3; 2 4 7], xₚ = (2, 0, 3); shown in the (x₁, x₂) plane',
      equal: true,
      x: { min: -4, max: 4, step: 1, label: 'x₁' },
      y: { min: -1.5, max: 3, step: 1, label: 'x₂' },
      series: [
        {
          kind: 'line',
          points: lineEq(1, 2, 0, -4, 3),
          label: 'A x = 0: t (−2, 1, 0)',
          labelAt: [-4.17, 0.73],
          tone: H
        },
        {
          kind: 'line',
          points: lineEq(1, 2, 2, -4, 4),
          label: 'A x = b: xₚ + t (−2, 1, 0)',
          labelAt: [0.3, 1.45],
          tone: P
        },
        { ...arrow([2, 0], 'xₚ', 'store'), labelAt: [0.91, 0.13] },
        arrow([-2, 1], 'xₕ', H, [0, 0], [-1.6, 0.35]),
      ]
    },
    {
      type: 'table',
      id: 'decomposition',
      title: 'General solution = particular + homogeneous: b = (11, 25)',
      columns: ['piece', 'vector', 'check'],
      rows: [
        ['particular xₚ', '(2, 0, 3)', 'A xₚ = (11, 25) = b'],
        ['homogeneous xₕ', 't (−2, 1, 0)', 'A xₕ = (0, 0)'],
        ['general', 'xₚ + xₕ', 'A x = b + 0 = b'],
        ['trivial', 'x = 0', 'always solves A x = 0'],
      ]
    },
  ],
  idea: 'Homogeneous systems and particular solutions',
  board: [
    fact('b-rule', 'A x = 0 is homogeneous', 'x = 0 always solves it; its solutions are closed under + and scaling'),
    facts('b-1', 'The general solution', ['one particular xₚ: A xₚ = b', 'all xₕ with A xₕ = 0', 'every solution is xₚ + xₕ']),
    facts('b-2', 'Why it works', ['A (xₚ + xₕ) = b + 0 = b', 'two solutions differ by an xₕ', 'unique ⇔ A x = 0 only at 0']),
    caution('b-watch', 'The homogeneous solutions pass through the origin; those of A x = b do not, unless b = 0. On the left, the lines sit in the slices x₃ = 0 and x₃ = 3.'),
  ]
})
