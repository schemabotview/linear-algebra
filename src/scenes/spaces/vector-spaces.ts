import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §4.1 — vectors need not be arrows. Polynomials of degree ≤ 2 add and scale like vectors, and their
// coefficient lists add and scale the same way: P₂ behaves exactly like ℝ³.
const p = (t: number) => 1 + 2 * t
const q = (t: number) => 3 - t + t * t

export const vectorSpaces: Scene = {
  id: 'vector-spaces',
  title: 'Vectors that are not arrows',
  flow: 'TB',
  nodes: [
    {
      id: 'polys',
      kind: 'plot',
      label: 'Polynomials add like vectors',
      sub: 'p(t) = 1 + 2t, q(t) = 3 − t + t²',
      plot: {
        x: { min: -1.5, max: 1.5, step: 0.5, label: 't' },
        y: { min: -2.5, max: 8, step: 2 },
        series: [
          { kind: 'line', points: sample(-1.5, 1.5, 60, p), label: 'p', labelAt: [1.3, 3.0], color: '#60a5fa' },
          { kind: 'line', points: sample(-1.5, 1.5, 60, q), label: 'q', labelAt: [-1.45, 5.6], color: '#f59e0b' },
          { kind: 'line', points: sample(-1.5, 1.5, 60, (t) => p(t) + q(t)), label: 'p + q', labelAt: [1.05, 7.3], color: '#34d399' },
        ],
      },
    },
    {
      id: 'structure',
      label: 'Coordinates and the rules behind them',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'coords',
          kind: 'table',
          label: 'Coefficients in the basis 1, t, t²',
          sub: 'adding polynomials adds their coefficient vectors',
          headers: ['vector', '1', 't', 't²'],
          values: [
            ['p', '1', '2', '0'],
            ['q', '3', '−1', '1'],
            ['p + q', '4', '1', '1'],
            ['2p', '2', '4', '0'],
          ],
        },
        {
          id: 'axioms',
          label: 'What makes a set a vector space',
          pattern: 'group',
          cols: 2,
          children: [
            { id: 'closed-add', label: 'Closed under +', sub: 'u + v stays in the set', pattern: 'service', icon: 'merge' },
            { id: 'closed-scale', label: 'Closed under scaling', sub: 'c u stays in the set', pattern: 'service', icon: 'scale' },
            { id: 'zero', label: 'Zero vector', sub: 'u + 0 = u', pattern: 'storage', icon: 'circleslash' },
            { id: 'negatives', label: 'Negatives', sub: 'u + (−u) = 0', pattern: 'storage', icon: 'swap' },
            { id: 'order', label: 'Order-free +', sub: 'commutative and associative', pattern: 'network', icon: 'repeat' },
            { id: 'distrib', label: 'Distributive', sub: 'c (u + v) = c u + c v', pattern: 'network', icon: 'sigma' },
          ],
        },
      ],
      edges: [],
    },
  ],
  edges: [],
}
