import { board, caution, fact, facts } from '../frame'
import { UNIT_SQUARE, image, fmt, type M2, GREY } from '../plot-kit'

// §2.3 — rotate by 90° (R) then shear (S), against the reverse order. S R and R S send the unit
// square to different parallelograms, so matrix products do not commute.
const R: M2 = [[0, -1], [1, 0]]
const S: M2 = [[1, 1], [0, 1]]
const SR: M2 = [[1, -1], [1, 0]]
const RS: M2 = [[0, -1], [1, 1]]
export const composition = board({
  id: 'composition',
  figure: 'Order matters',
  diagram: [
    {
      type: 'plot',
      id: 'orders',
      title: 'The unit square under S R and under R S: R: rotate 90°. S: shear right by y',
      equal: true,
      x: { min: -2.5, max: 2.5, step: 1 },
      y: { min: -0.5, max: 2.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: UNIT_SQUARE,
          dashed: true,
          label: 'unit square',
          labelAt: [1.05, 0.15],
          tone: GREY
        },
        {
          kind: 'line',
          points: image(SR, UNIT_SQUARE),
          label: 'S R: rotate, then shear',
          labelAt: [0.6, 1.25],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: image(RS, UNIT_SQUARE),
          label: 'R S: shear, then rotate',
          labelAt: [-2.45, 2.25],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'products',
      title: 'Read right to left: the matrix nearest x acts first',
      columns: ['product', 'matrix', 'acts first'],
      rows: [
        ['R', fmt(R), '—'],
        ['S', fmt(S), '—'],
        ['S R', fmt(SR), 'R'],
        ['R S', fmt(RS), 'S'],
        ['shapes', '(m×n)(n×p)', 'gives m×p'],
      ]
    },
  ],
  idea: 'Multiplication as composition',
  board: [
    fact('b-rule', 'A B does B first, then A', '(A B) x = A (B x): read right to left'),
    facts('b-1', 'Dimensions', ['(m × n)(n × p) gives m × p', 'column j of A B is A times b_j', 'A B C: C, then B, then A']),
    facts('b-2', 'Order matters', ['R rotates 90°; S shears by y', 'S R = [1 −1; 1 0]', 'R S = [0 −1; 1 1]: not the same']),
    caution('b-watch', 'A B and B A may both exist and still differ, or only one of them may exist at all.'),
  ]
})
