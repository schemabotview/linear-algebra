import { board, caution, fact, facts, FIG_PLOT_W } from '../frame'
import { guide, point, TONE, type P } from '../plot-kit'

// §1.5 — three workshop jobs as (material kg, energy). In kWh, A's nearest job is B; rewrite energy
// in Wh and the same three jobs say C. The plot is the kWh view; the table carries both.
// Distances: √(1² + 2²) = 2.236, √(3² + 0.2²) = 3.007; in Wh √(1 + 2000²) ≈ 2000.0, √(9 + 200²) ≈ 200.0.
const A: P = [4, 1]
const B: P = [5, 3]
const C: P = [7, 1.2]

export const units = board({
  id: 'units',
  figure: 'Units change the geometry',
  diagram: [
    {
      type: 'plot', id: 'jobs', title: 'Three jobs, energy in kWh: nearest to A is B', equal: true, w: FIG_PLOT_W,
      x: { min: 0, max: 8, step: 1, label: 'material (kg)' }, y: { min: 0, max: 4, step: 1, label: 'energy (kWh)' },
      series: [
        guide(A, B, '2.24', [3.75, 2.15]),
        guide(A, C, '3.01', [5.4, 0.55]),
        point(A, 'A', [3.55, 1.2], TONE.u),
        point(B, 'B', [5.15, 3.15], TONE.v),
        point(C, 'C', [7.15, 1.35], TONE.w),
      ],
    },
    {
      type: 'table', id: 'distances', title: 'Same jobs, two unit choices: distance from A',
      columns: ['pair', 'kg and kWh', 'kg and Wh'],
      rows: [
        ['A to B', '√(1 + 4) ≈ 2.24', '≈ 2000.0'],
        ['A to C', '√(9 + 0.04) ≈ 3.01', '≈ 200.0'],
        { cells: ['nearest to A', 'B', 'C'], tone: 'consume' },
      ],
    },
  ],
  idea: 'Vectors of measurements',
  board: [
    fact('rule', 'Many vectors are records: one component per measured quantity', 'n counts quantities; it is not a dimension you can see'),
    facts('geometry', 'Units decide the geometry', ['distance sums squared gaps', 'kWh → Wh: energy gaps × 1000', 'nearest to A: B in kWh, C in Wh']),
    facts('honest', 'Comparing honestly', ['add matching quantities only', 'rescale to comparable units', 'and say which scales you chose']),
    caution('watch', 'The arithmetic never complains. A distance across mixed units is still a number, just not a meaningful one.'),
  ],
})
