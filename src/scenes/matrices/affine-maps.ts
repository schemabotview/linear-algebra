import { board, fact, facts } from '../frame'
import { arrow, GREY } from '../plot-kit'

// §2.6 — translation by b = (2, 1). The shape moves rigidly, but T(0) = b ≠ 0, so T is not linear.
// The table is the optional homogeneous-coordinates trick: one 3×3 matrix that does the translation.
const tri: [
  number,
  number
][] = [[0, 0], [1, 0], [0, 1], [0, 0]]
const moved = tri.map(([x, y]): [
  number,
  number
] => [x + 2, y + 1])
export const affineMaps = board({
  id: 'affine-maps',
  figure: 'Translation is not linear',
  diagram: [
    {
      type: 'plot',
      id: 'shift',
      title: 'T(x) = x + b, with b = (2, 1): T(0) = b, so T fails the zero test',
      equal: true,
      x: { min: -1, max: 5, step: 1 },
      y: { min: -0.5, max: 2.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: tri,
          dashed: true,
          label: 'shape',
          labelAt: [-0.8, 0.5],
          tone: GREY
        },
        {
          kind: 'line',
          points: moved,
          label: 'T(shape)',
          labelAt: [3.1, 1.3],
          tone: 'ingest'
        },
        { ...arrow([2, 1], 'b', 'infra'), labelAt: [1.1, 0.3] },
        {
          kind: 'scatter',
          points: [[2, 1]],
          label: 'T(0) = (2, 1)',
          labelAt: [2.15, 0.65],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'homogeneous',
      title: 'Optional: translation as a 3×3 matrix: append a 1: (x, y) becomes (x, y, 1)',
      columns: ['output', 'x', 'y', '1'],
      rows: [
        ['x′ = x + 2', '1', '0', '2'],
        ['y′ = y + 1', '0', '1', '1'],
        ['1', '0', '0', '1'],
      ]
    },
  ],
  idea: 'Linearity tests and affine maps',
  board: [
    fact('b-rule', 'T is linear when T(u + v) = T(u) + T(v) and T(c u) = c T(u)', 'quick test: T(0) must be 0'),
    facts('b-1', 'Translation fails', ['T(x) = x + b keeps the shape', 'but T(0) = b ≠ 0: not linear', 'no 2 × 2 matrix translates']),
    facts('b-2', 'Affine maps', ['linear plus a shift: A x + b', 'graphics, measurement offsets', 'composed: shifts add up']),
    fact('b-3', 'Homogeneous coordinates', 'write (x, y, 1): a 3 × 3 matrix with last column (2, 1, 1) translates by (2, 1)'),
  ]
})
