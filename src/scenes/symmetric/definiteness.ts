import { board, fact, facts } from '../frame'
import { lineEq } from '../plot-kit'
import { levelSet } from './common'

// §10.4 — the level set q = 1 for three forms. Positive definite: a closed ellipse (a bowl). Positive
// semidefinite: two parallel lines (a trough with a flat direction). Indefinite: a hyperbola (a saddle).
const branch = (s: number) => Array.from({ length: 41 }, (_, i): [
  number,
  number
] => {
  const t = -1.5 + (3 * i) / 40
  return [s * Math.cosh(t), Math.sinh(t)]
})
export const definiteness = board({
  id: 'definiteness',
  figure: 'Bowls, troughs and saddles',
  diagram: [
    {
      type: 'plot',
      id: 'level-one',
      title: 'Where q(x) = 1, for three different S: definite [5 2; 2 2], semidefinite [1 1; 1 1], indefinite [1 0; 0 −1]',
      equal: true,
      x: { min: -2.5, max: 2.5, step: 1 },
      y: { min: -2, max: 2, step: 1 },
      series: [
        {
          kind: 'line',
          points: levelSet(1),
          label: 'definite',
          labelAt: [-1.52, -1.3],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: lineEq(1, 1, 1, -1.5, 2.5),
          label: 'semidefinite',
          labelAt: [0.46, -1.58],
          tone: 'store'
        },
        { kind: 'line', points: lineEq(1, 1, -1, -2.5, 1.5), tone: 'store' },
        {
          kind: 'line',
          points: branch(1),
          label: 'indefinite',
          labelAt: [1.05, 1.72],
          tone: 'serve'
        },
        { kind: 'line', points: branch(-1), tone: 'serve' },
      ]
    },
    {
      type: 'table',
      id: 'classes',
      title: 'Classify by the signs of the eigenvalues: q(x) = xᵀ S x in principal axes is Σ λᵢ uᵢ²',
      columns: ['class', 'q(x) for x ≠ 0', 'eigenvalues', 'shape of q'],
      rows: [
        ['positive definite', 'always > 0', 'all > 0', 'bowl'],
        ['positive semidefinite', 'always ≥ 0', 'all ≥ 0, some 0', 'trough: a flat direction'],
        ['negative definite', 'always < 0', 'all < 0', 'upside-down bowl'],
        ['indefinite', 'both signs', 'mixed signs', 'saddle'],
      ]
    },
  ],
  idea: 'Definite, semidefinite and indefinite forms',
  board: [
    fact('b-rule', 'In principal axes q = λ₁u₁² + λ₂u₂² + …', 'so the eigenvalue signs decide q’s sign'),
    facts('b-1', 'The classes', ['definite: all λ > 0, a bowl', 'semidefinite: λ ≥ 0, a trough', 'negative definite: λ < 0', 'indefinite: mixed, a saddle']),
    facts('b-2', 'On the left: where q = 1', ['[5 2; 2 2]: a closed ellipse', '(x + y)²: two parallel lines', 'x² − y²: a hyperbola']),
    fact('b-3', 'Why it matters', 'definite S is an energy positive for every nonzero state, and allows Cholesky (§10.6)'),
  ]
})
