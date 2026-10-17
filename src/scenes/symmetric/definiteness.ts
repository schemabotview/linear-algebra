import type { Scene } from '@graphlearning/flow'
import { lineEq } from '../plot-kit'
import { levelSet } from './common'

// §10.4 — the level set q = 1 for three forms. Positive definite: a closed ellipse (a bowl). Positive
// semidefinite: two parallel lines (a trough with a flat direction). Indefinite: a hyperbola (a saddle).
const branch = (s: number) =>
  Array.from({ length: 41 }, (_, i): [number, number] => {
    const t = -1.5 + (3 * i) / 40
    return [s * Math.cosh(t), Math.sinh(t)]
  })

export const definiteness: Scene = {
  id: 'definiteness',
  title: 'Bowls, troughs and saddles',
  flow: 'TB',
  nodes: [
    {
      id: 'level-one',
      kind: 'plot',
      label: 'Where q(x) = 1, for three different S',
      sub: 'definite [5 2; 2 2], semidefinite [1 1; 1 1], indefinite [1 0; 0 −1]',
      plot: {
        equal: true,
        x: { min: -2.5, max: 2.5, step: 1 },
        y: { min: -2, max: 2, step: 1 },
        series: [
          { kind: 'line', points: levelSet(1), label: 'definite', labelAt: [-0.9, -1.3], color: '#60a5fa' },
          { kind: 'line', points: lineEq(1, 1, 1, -1.5, 2.5), label: 'semidefinite', labelAt: [0.3, -1.7], color: '#34d399' },
          { kind: 'line', points: lineEq(1, 1, -1, -2.5, 1.5), color: '#34d399' },
          { kind: 'line', points: branch(1), label: 'indefinite', labelAt: [1.05, 1.8], color: '#f472b6' },
          { kind: 'line', points: branch(-1), color: '#f472b6' },
        ],
      },
    },
    {
      id: 'classes',
      kind: 'table',
      label: 'Classify by the signs of the eigenvalues',
      sub: 'q(x) = xᵀ S x in principal axes is Σ λᵢ uᵢ²',
      headers: ['class', 'q(x) for x ≠ 0', 'eigenvalues', 'shape of q'],
      values: [
        ['positive definite', 'always > 0', 'all > 0', 'bowl'],
        ['positive semidefinite', 'always ≥ 0', 'all ≥ 0, some 0', 'trough: a flat direction'],
        ['negative definite', 'always < 0', 'all < 0', 'upside-down bowl'],
        ['indefinite', 'both signs', 'mixed signs', 'saddle'],
      ],
    },
  ],
  edges: [],
}
