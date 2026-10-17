import type { Scene } from '@graphlearning/flow'

// One vector, one colour: all three arrows are v, so they share a hue.
const V = '#c084fc'

// §1.1 — a point is a place, a vector is a displacement. The same v is drawn from the origin and
// from two other starts: three arrows, one vector. The P marker comes first so v's head draws over it. The order q below it is the workshop's first vector.
export const pointsAndVectors: Scene = {
  id: 'points-and-vectors',
  title: 'A point is a place; a vector is a move',
  flow: 'TB',
  nodes: [
    {
      id: 'plane',
      kind: 'plot',
      label: 'One vector, drawn from three places',
      sub: 'v = (4, 3): four across, three up',
      plot: {
        equal: true,
        x: { min: -1, max: 9, step: 1 },
        y: { min: -1, max: 5.5, step: 1 },
        series: [
          { kind: 'marker', at: [4, 3], label: 'point P = (4, 3)', labelAt: [4.25, 3.3], color: '#fbbf24' },
          { kind: 'marker', at: [0, 0], label: 'O', labelAt: [-0.6, -0.6], color: '#9ca3af' },
          { kind: 'segment', from: [0, 0], to: [4, 3], arrow: true, dashed: false, label: 'v', labelAt: [1.7, 1.9], color: V },
          { kind: 'segment', from: [1, 2], to: [5, 5], arrow: true, dashed: false, label: 'v again, from (1, 2)', color: V },
          { kind: 'segment', from: [4, -0.5], to: [8, 2.5], arrow: true, dashed: false, label: 'and from (4, −0.5)', color: V },
        ],
      },
    },
    {
      id: 'order',
      kind: 'table',
      label: 'A workshop order q in ℝ³',
      sub: 'one vector, three components',
      headers: ['component', 'counts', 'value'],
      values: [
        ['q₁', 'chairs', '3'],
        ['q₂', 'tables', '1'],
        ['q₃', 'shelves', '2'],
      ],
    },
  ],
  edges: [],
}
