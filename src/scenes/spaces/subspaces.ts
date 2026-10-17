import type { Scene } from '@graphlearning/flow'
import { arrow, lineEq } from '../plot-kit'

// §4.2 — a line through the origin is a subspace; the parallel line one unit up is an affine set.
// u and v lie on the affine line, but u + v does not, and neither line's partner rule holds for it.
export const subspaces: Scene = {
  id: 'subspaces',
  title: 'Subspaces and affine sets',
  flow: 'TB',
  nodes: [
    {
      id: 'test',
      kind: 'plot',
      label: 'Closed under addition, or not',
      sub: 'u = (0, 1) and v = (2, 2) lie on y = x/2 + 1; u + v does not',
      plot: {
        equal: true,
        x: { min: -2, max: 5, step: 1 },
        y: { min: -1, max: 3.5, step: 1 },
        series: [
          { kind: 'line', points: lineEq(1, -2, 0, -2, 5), label: 'y = x/2: a subspace', labelAt: [2.9, 0.9], color: '#60a5fa' },
          { kind: 'line', points: lineEq(1, -2, -2, -2, 5), label: 'y = x/2 + 1: affine', labelAt: [-1.95, 1.4], color: '#f59e0b' },
          arrow([0, 1], 'u', '#f59e0b'),
          arrow([2, 2], 'v', '#f59e0b'),
          arrow([2, 3], 'u + v = (2, 3): off the line', '#f472b6'),
        ],
      },
    },
    {
      id: 'rules',
      label: 'Subspace test, and what preserves it',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'contains-zero', label: 'Contains 0', sub: 'fails for every affine set', pattern: 'service', icon: 'circlecheck' },
        { id: 'add', label: 'Closed under +', sub: 'u + v stays inside', pattern: 'service', icon: 'circlecheck' },
        { id: 'scale', label: 'Closed under c·', sub: 'c u stays inside', pattern: 'service', icon: 'circlecheck' },
        { id: 'span', label: 'Span', sub: 'all combinations: always a subspace', pattern: 'storage', icon: 'layers' },
        { id: 'meet', label: 'U ∩ W and U + W', sub: 'both are subspaces', pattern: 'storage', icon: 'merge' },
        { id: 'union', label: 'U ∪ W', sub: 'usually not a subspace', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [],
}
