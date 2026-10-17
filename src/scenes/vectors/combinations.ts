import type { Scene } from '@graphlearning/flow'
import { PRODUCTS, requirement, resourceTable } from '../workshop'

// Colour is identity: the moved v keeps v's hue, and 2u is a lighter u drawn UNDER u.
const U = '#60a5fa'
const V = '#f59e0b'

// §1.2 — addition head to tail, subtraction as tip-to-tip, 2u as scaling, and the workshop's first linear
// combination: three chairs and a table, 3c + t, computed from the shared product columns.
export const combinations: Scene = {
  id: 'combinations',
  title: 'Adding and scaling',
  flow: 'TB',
  nodes: [
    {
      id: 'sum',
      kind: 'plot',
      label: 'u + v, head to tail',
      sub: 'u = (3, 1), v = (1, 2)',
      plot: {
        equal: true,
        x: { min: -1, max: 7, step: 1 },
        y: { min: -1.5, max: 3.5, step: 1 },
        series: [
          { kind: 'segment', from: [0, 0], to: [6, 2], arrow: true, dashed: false, label: '2u', color: '#bfdbfe' },
          { kind: 'segment', from: [0, 0], to: [3, 1], arrow: true, dashed: false, label: 'u', labelAt: [2.9, 0.55], color: U },
          { kind: 'segment', from: [0, 0], to: [1, 2], arrow: true, dashed: false, label: 'v', color: V },
          { kind: 'segment', from: [3, 1], to: [4, 3], arrow: true, label: 'v, moved', labelAt: [3.75, 1.7], color: V },
          { kind: 'segment', from: [0, 0], to: [4, 3], arrow: true, dashed: false, label: 'u + v', color: '#34d399' },
          { kind: 'segment', from: [0, 0], to: [2, -1], arrow: true, dashed: false, label: 'u − v', color: '#f472b6' },
        ],
      },
    },
    resourceTable('order-need', 'Three chairs and a table', '3c + t, one resource per row', [
      ['chair c', PRODUCTS.chair],
      ['table t', PRODUCTS.table],
      ['3c + t', requirement({ chair: 3, table: 1 })],
    ]),
  ],
  edges: [],
}
