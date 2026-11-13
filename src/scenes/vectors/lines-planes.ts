import { board, caution, fact, facts, FIG_PLOT_W } from '../frame'
import { arrow, point, TONE, type P } from '../plot-kit'

// §1.3 — a line as p + t d. The line through the origin and its translate share d, so they are
// parallel; only the first is closed under addition. The table carries the forms into ℝ³ and ℝⁿ.
const d: P = [2, 1]
const p: P = [0, 2]
const at = (base: P, t: number): P => [base[0] + t * d[0], base[1] + t * d[1]]

export const linesPlanes = board({
  id: 'lines-planes',
  figure: 'Lines and planes from vectors',
  diagram: [
    {
      type: 'plot', id: 'lines', title: 'Same direction, two lines: d = (2, 1), p = (0, 2)', equal: true, w: FIG_PLOT_W,
      x: { min: -2, max: 6, step: 1 }, y: { min: -2, max: 5, step: 1 },
      series: [
        { kind: 'line', points: [at([0, 0], -1), at([0, 0], 3)], label: 't d', tone: TONE.u, labelAt: [5.1, 2.0] },
        { kind: 'line', points: [at(p, -1), at(p, 3)], label: 'p + t d', tone: TONE.sum, labelAt: [1.6, 4.0] },
        arrow(d, 'd', TONE.v, [0, 0], [1.9, 0.4]),
        arrow(p, 'p', TONE.w, [0, 0], [0.2, 1.5]),
        point(at(p, 1), 't = 1', [2.2, 2.45]),
      ],
    },
    {
      type: 'table', id: 'forms', title: 'Parametric forms: the same formulas in ℝ³ and ℝⁿ',
      columns: ['set', 'form', 'free scalars', 'closed under + ?'],
      rows: [
        ['line through 0', 't d', '1', 'yes'],
        { cells: ['translated line', 'p + t d', '1', 'no'], tone: 'consume' },
        ['plane through 0', 's u + t v', '2', 'yes'],
        { cells: ['translated plane', 'p + s u + t v', '2', 'no'], tone: 'consume' },
      ],
    },
  ],
  idea: 'Lines and planes',
  board: [
    fact('rule', 'A line is a point plus every multiple of one direction', 'x = p + t d, with one free scalar t'),
    facts('origin', 'Through the origin, or not', ['p = 0: closed under + and scaling', 'p ≠ 0: a sum of points leaves it', 'lines sharing d are parallel']),
    facts('plane', 'One more free scalar', ['plane: x = p + s u + t v, u ∦ v', 'one scalar: a line; two: a plane', 'no slope or intercept, in any ℝⁿ']),
    caution('watch', 'The description is not unique: any point on the line, with any nonzero multiple of d, gives the same line. Only the set of points is fixed.'),
  ],
})
