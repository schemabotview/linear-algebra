import type { Scene } from '@graphlearning/flow'
import { arrow, UNIT_SQUARE, image, type M2, GREY } from '../plot-kit'

// §6.1 — the determinant is the signed area factor. A = [2 1; 1 3] keeps orientation and scales area
// by 5; B = [1 3; 2 1] also scales by 5 but flips orientation (e₁'s image now sits above e₂'s):
// det B = −5. Same size, opposite sign.
const A: M2 = [[2, 1], [1, 3]]
const B: M2 = [[1, 3], [2, 1]]
const BLUE = '#60a5fa'
const ORANGE = '#f59e0b'

export const areaScaling: Scene = {
  id: 'area-scaling',
  title: 'Determinant as signed area',
  flow: 'TB',
  nodes: [
    {
      id: 'areas',
      kind: 'plot',
      label: 'The unit square under A and under B',
      sub: 'both have area 5; only B flips orientation',
      plot: {
        equal: true,
        x: { min: -0.5, max: 5, step: 1 },
        y: { min: -0.5, max: 4.5, step: 1 },
        series: [
          { kind: 'line', points: UNIT_SQUARE, dashed: true, label: 'area 1', labelAt: [0.2, 0.45], color: GREY },
          { kind: 'line', points: image(A, UNIT_SQUARE), label: 'A: det 5', labelAt: [3.1, 4.1], color: BLUE },
          { kind: 'line', points: image(B, UNIT_SQUARE), label: 'B: det −5', labelAt: [4.05, 2.7], color: ORANGE },
          arrow([2, 1], 'A e₁', BLUE),
          arrow([1, 3], 'A e₂', BLUE),
          arrow([1, 2], 'B e₁', ORANGE),
          arrow([3, 1], 'B e₂', ORANGE),
        ],
      },
    },
    {
      id: 'readings',
      kind: 'table',
      label: 'What det A says about the map',
      sub: 'for 2 × 2, det [a b; c d] = a d − b c',
      headers: ['matrix', 'det', 'area factor', 'orientation'],
      values: [
        ['A = [2 1; 1 3]', '2·3 − 1·1 = 5', '5', 'kept'],
        ['B = [1 3; 2 1]', '1·1 − 3·2 = −5', '5', 'flipped'],
        ['[1 2; 2 4]', '1·4 − 2·2 = 0', '0: flattened', 'none'],
      ],
    },
  ],
  edges: [],
}
