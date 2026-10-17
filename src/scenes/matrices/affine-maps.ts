import type { Scene } from '@graphlearning/flow'
import { arrow, GREY } from '../plot-kit'

// §2.6 — translation by b = (2, 1). The shape moves rigidly, but T(0) = b ≠ 0, so T is not linear.
// The table is the optional homogeneous-coordinates trick: one 3×3 matrix that does the translation.
const tri: [number, number][] = [[0, 0], [1, 0], [0, 1], [0, 0]]
const moved = tri.map(([x, y]): [number, number] => [x + 2, y + 1])

export const affineMaps: Scene = {
  id: 'affine-maps',
  title: 'Translation is not linear',
  flow: 'TB',
  nodes: [
    {
      id: 'shift',
      kind: 'plot',
      label: 'T(x) = x + b, with b = (2, 1)',
      sub: 'T(0) = b, so T fails the zero test',
      plot: {
        equal: true,
        x: { min: -1, max: 5, step: 1 },
        y: { min: -0.5, max: 2.5, step: 1 },
        series: [
          { kind: 'line', points: tri, dashed: true, label: 'shape', labelAt: [-0.8, 0.5], color: GREY },
          { kind: 'line', points: moved, label: 'T(shape)', labelAt: [3.1, 1.3], color: '#60a5fa' },
          { ...arrow([2, 1], 'b', '#f59e0b'), labelAt: [1.1, 0.3] },
          { kind: 'marker', at: [2, 1], label: 'T(0) = (2, 1)', labelAt: [2.15, 0.65], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'homogeneous',
      kind: 'table',
      label: 'Optional: translation as a 3×3 matrix',
      sub: 'append a 1: (x, y) becomes (x, y, 1)',
      headers: ['output', 'x', 'y', '1'],
      values: [
        ['x′ = x + 2', '1', '0', '2'],
        ['y′ = y + 1', '0', '1', '1'],
        ['1', '0', '0', '1'],
      ],
    },
  ],
  edges: [],
}
