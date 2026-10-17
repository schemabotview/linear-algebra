import type { Scene } from '@graphlearning/flow'
import { UNIT_SQUARE, image, fmt, type M2, GREY } from '../plot-kit'

// §2.3 — rotate by 90° (R) then shear (S), against the reverse order. S R and R S send the unit
// square to different parallelograms, so matrix products do not commute.
const R: M2 = [[0, -1], [1, 0]]
const S: M2 = [[1, 1], [0, 1]]
const SR: M2 = [[1, -1], [1, 0]]
const RS: M2 = [[0, -1], [1, 1]]

export const composition: Scene = {
  id: 'composition',
  title: 'Order matters',
  flow: 'TB',
  nodes: [
    {
      id: 'orders',
      kind: 'plot',
      label: 'The unit square under S R and under R S',
      sub: 'R: rotate 90°. S: shear right by y',
      plot: {
        equal: true,
        x: { min: -2.5, max: 2.5, step: 1 },
        y: { min: -0.5, max: 2.5, step: 1 },
        series: [
          { kind: 'line', points: UNIT_SQUARE, dashed: true, label: 'unit square', labelAt: [1.05, 0.15], color: GREY },
          { kind: 'line', points: image(SR, UNIT_SQUARE), label: 'S R: rotate, then shear', labelAt: [0.6, 1.25], color: '#60a5fa' },
          { kind: 'line', points: image(RS, UNIT_SQUARE), label: 'R S: shear, then rotate', labelAt: [-2.45, 2.25], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'products',
      kind: 'table',
      label: 'Read right to left',
      sub: 'the matrix nearest x acts first',
      headers: ['product', 'matrix', 'acts first'],
      values: [
        ['R', fmt(R), '—'],
        ['S', fmt(S), '—'],
        ['S R', fmt(SR), 'R'],
        ['R S', fmt(RS), 'S'],
        ['shapes', '(m×n)(n×p)', 'gives m×p'],
      ],
    },
  ],
  edges: [],
}
