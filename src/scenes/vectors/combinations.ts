import { board, caution, fact, facts, FIG_PLOT_W } from '../frame'
import { arrow, TONE } from '../plot-kit'
import { PRODUCTS, requirement, resourceTable } from '../workshop'

// §1.2 — addition head to tail, subtraction tip to tip, 2u as scaling, and the workshop's first
// linear combination: three chairs and a table, 3c + t, computed from the shared product columns.
// Colour is identity: the moved v keeps v's tone; 2u (a scaled u) shares u's and draws UNDER it.
export const combinations = board({
  id: 'combinations',
  figure: 'Adding and scaling',
  diagram: [
    {
      type: 'plot', id: 'sum', title: 'u + v head to tail; u = (3, 1), v = (1, 2)', equal: true, w: FIG_PLOT_W,
      x: { min: -1, max: 7, step: 1 }, y: { min: -1.5, max: 3.5, step: 1 },
      series: [
        arrow([6, 2], '2u', TONE.u, [0, 0], [5.6, 1.45]),
        arrow([3, 1], 'u', TONE.u, [0, 0], [2.9, 0.5]),
        arrow([1, 2], 'v', TONE.v, [0, 0], [0.35, 2.1]),
        arrow([4, 3], 'v, moved', TONE.v, [3, 1], [3.75, 1.75]),
        arrow([4, 3], 'u + v', TONE.sum, [0, 0], [4.1, 3.1]),
        arrow([2, -1], 'u − v', TONE.w, [0, 0], [2.1, -1.2]),
      ],
    },
    resourceTable('order-need', 'Three chairs and a table', '3c + t, one resource per row', [
      ['chair c', PRODUCTS.chair],
      ['table t', PRODUCTS.table],
      ['3c + t', requirement({ chair: 3, table: 1 })],
    ]),
  ],
  idea: 'Adding, scaling and combining',
  board: [
    fact('rule', 'Add component by component; a scalar multiplies every component', 'together they build linear combinations: a u + b v'),
    facts('geometry', 'Geometry', ['u + v: start v at the tip of u', 'u − v: from v’s tip to u’s tip', 'c u stretches; c < 0 reverses']),
    facts('workshop', 'The workshop', ['chair c = (4, 2, 1): kg, hours, kWh', 'table t = (10, 3, 2)', '3c + t = (22, 9, 5)']),
    caution('watch', 'Only vectors with the same number of components, in matching units, can be added.'),
  ],
})
