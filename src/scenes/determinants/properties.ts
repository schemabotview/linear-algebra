import { board, caution, fact, facts } from '../frame'
import { UNIT_SQUARE, image, type M2, GREY } from '../plot-kit'

// §6.2 — the three defining properties, seen as area. Doubling column 2 doubles the area (linearity
// in that column); adding column 1 to column 2 is a shear, which keeps it.
const SCALE: M2 = [[1, 0], [0, 2]]
const SHEAR: M2 = [[1, 1], [0, 1]]
export const properties = board({
  id: 'properties',
  figure: 'Three properties define the determinant',
  diagram: [
    {
      type: 'plot',
      id: 'area-rules',
      title: 'Scale a column: area scales. Add a column: area stays: same base, same height, so the sheared square still has area 1',
      equal: true,
      x: { min: -0.5, max: 2.5, step: 0.5 },
      y: { min: -0.25, max: 2.25, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: image(SCALE, UNIT_SQUARE),
          label: 'column 2 × 2: area 2',
          labelAt: [-0.45, 2.1],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: image(SHEAR, UNIT_SQUARE),
          label: 'column 2 + column 1: area 1',
          labelAt: [1.3, 1.15],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: UNIT_SQUARE,
          dashed: true,
          label: 'I: area 1',
          labelAt: [0.05, 0.75],
          tone: GREY
        },
      ]
    },
    {
      type: 'group',
      id: 'axioms',
      title: 'The defining properties, and two consequences',
      dir: 'grid',
      cols: 3,
      children: [
        { type: 'item', id: 'normalised', title: 'Normalised', sub: 'det I = 1', icon: 'key', tone: 'ingest' },
        { type: 'item', id: 'multilinear', title: 'Linear in each row', sub: 'scale a row by c: det scales by c', tone: 'ingest' },
        { type: 'item', id: 'alternating', title: 'Alternating', sub: 'swap two rows: det changes sign', tone: 'ingest' },
        { type: 'item', id: 'equal-rows', title: 'Equal rows', sub: 'det = 0', tone: 'store' },
        { type: 'item', id: 'add-multiple', title: 'Add a multiple', sub: 'det unchanged', tone: 'store' },
        { type: 'item', id: 'not-additive', title: 'Not additive', sub: 'det(A + B) ≠ det A + det B', tone: 'consume' },
      ]
    },
  ],
  idea: 'Multilinear, alternating and normalised',
  board: [
    fact('b-rule', 'Exactly one function satisfies all three', 'everything else follows from them'),
    facts('b-1', 'The three', ['normalised: det I = 1', 'linear in each row', 'a row swap flips the sign']),
    facts('b-2', 'Consequences', ['equal rows: det = 0', 'row addition: det unchanged', 'double a column: double area']),
    caution('b-watch', 'Linear in each row separately is not linear overall: det(A + B) is usually not det A + det B.'),
  ]
})
