import { board, caution, fact, facts } from '../frame'
import { arrow, augmented } from '../plot-kit'

// §4.3 — a = (2, 1) and b = (1, 2) are independent; c = (3, 3) = a + b adds nothing. Elimination
// decides it in general: independent exactly when every column gets a pivot.
export const independence = board({
  id: 'independence',
  figure: 'Dependence and independence',
  diagram: [
    {
      type: 'plot',
      id: 'redundant',
      title: 'c = a + b adds no new direction: a = (2, 1), b = (1, 2), c = (3, 3)',
      equal: true,
      x: { min: -1, max: 5, step: 1 },
      y: { min: -0.5, max: 3.5, step: 1 },
      series: [
        arrow([3, 3], 'c', 'serve'),
        arrow([2, 1], 'a', 'ingest', [0, 0], [2.08, 1]),
        arrow([1, 2], 'b', 'infra'),
        {
          kind: 'segment',
          from: [2, 1],
          to: [3, 3],
          arrow: true,
          label: 'b, moved',
          labelAt: [2.75, 1.7],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'group',
      id: 'tests',
      title: 'Two ways to see it',
      dir: 'row',
      children: [
        {
          type: 'table',
          id: 'relation',
          title: 'A dependence relation: a nontrivial combination equal to 0',
          columns: ['weights', 'combination', 'result'],
          rows: [
            ['(1, 1, −1)', 'a + b − c', '(0, 0)'],
            ['(0, 0, 0)', 'the trivial one', '(0, 0)'],
          ]
        },
        augmented('pivots', 'Columns a, b, c reduced', '[a b c | 0]: no pivot in column 3', [[1, 2, 3, 0], [0, -3, -3, 0]], ['a', 'b', 'c']),
      ]
    },
  ],
  idea: 'Linear dependence and independence',
  board: [
    fact('b-rule', 'Independent: only the all-zero weights', 'give the zero combination'),
    facts('b-1', 'Dependence is redundancy', ['c = a + b: a + b − c = 0', 'span(a, b, c) = span(a, b)', 'drop any combination of others']),
    facts('b-2', 'Testing by elimination', ['columns of A, solve [A | 0]', 'pivot in every column: yes', 'a free variable: a relation', 'chair, table, shelf: 3 pivots']),
    caution('b-watch', 'Any list containing the zero vector is dependent, and more than n vectors in ℝⁿ are always dependent.'),
  ]
})
