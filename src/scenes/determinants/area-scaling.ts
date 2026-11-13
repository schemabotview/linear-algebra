import { board, caution, fact, facts } from '../frame'
import { arrow, UNIT_SQUARE, image, type M2, GREY } from '../plot-kit'

// §6.1 — the determinant is the signed area factor. A = [2 1; 1 3] keeps orientation and scales area
// by 5; B = [1 3; 2 1] also scales by 5 but flips orientation (e₁'s image now sits above e₂'s):
// det B = −5. Same size, opposite sign.
const A: M2 = [[2, 1], [1, 3]]
const B: M2 = [[1, 3], [2, 1]]
const BLUE = 'ingest'
const ORANGE = 'infra'
export const areaScaling = board({
  id: 'area-scaling',
  figure: 'Determinant as signed area',
  diagram: [
    {
      type: 'plot',
      id: 'areas',
      title: 'The unit square under A and under B: both have area 5; only B flips orientation',
      equal: true,
      x: { min: -0.5, max: 5, step: 1 },
      y: { min: -0.5, max: 4.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: UNIT_SQUARE,
          dashed: true,
          label: 'area 1',
          labelAt: [0.6, 0.97],
          tone: GREY
        },
        {
          kind: 'line',
          points: image(A, UNIT_SQUARE),
          label: 'A: det 5',
          labelAt: [3.1, 4.1],
          tone: BLUE
        },
        {
          kind: 'line',
          points: image(B, UNIT_SQUARE),
          label: 'B: det −5',
          labelAt: [4.05, 2.7],
          tone: ORANGE
        },
        arrow([2, 1], 'A e₁', BLUE, [0, 0], [2.1, 1]),
        arrow([1, 3], 'A e₂', BLUE, [0, 0], [0.9, 3.15]),
        arrow([1, 2], 'B e₁', ORANGE, [0, 0], [0.9, 2.08]),
        arrow([3, 1], 'B e₂', ORANGE, [0, 0], [3.1, 1]),
      ]
    },
    {
      type: 'table',
      id: 'readings',
      title: 'What det A says about the map: for 2 × 2, det [a b; c d] = a d − b c',
      columns: ['matrix', 'det', 'area factor', 'orientation'],
      rows: [
        ['A = [2 1; 1 3]', '2·3 − 1·1 = 5', '5', 'kept'],
        ['B = [1 3; 2 1]', '1·1 − 3·2 = −5', '5', 'flipped'],
        ['[1 2; 2 4]', '1·4 − 2·2 = 0', '0: flattened', 'none'],
      ]
    },
  ],
  idea: 'Area, volume and orientation',
  board: [
    fact('b-rule', 'A square matrix scales every area by one factor', 'that factor, with a sign, is det A'),
    facts('b-1', 'Size: how much area changes', ['det [a b; c d] = a d − b c', '[2 1; 1 3]: area 1 → 5', 'every region, any shape: × 5']),
    facts('b-2', 'Sign: orientation', ['positive: no flip', 'negative: a flip; [1 3; 2 1] → −5', 'zero: flattened, no undo']),
    caution('b-watch', 'det is defined only for square matrices: a 3 × 2 map has no determinant.'),
  ]
})
