import { board, caution, fact, facts } from '../frame'
import { arrow, GREY } from '../plot-kit'

// §2.2 — A = [2 −1; 1 1], x = (2, 1). Column view: A x = 2·a₁ + 1·a₂, drawn head to tail. Row view:
// each entry of A x is one row dotted with x. Both land on (3, 3).
const A1 = 'ingest'
const A2 = 'infra'
export const twoViews = board({
  id: 'two-views',
  figure: 'Two ways to read A x',
  diagram: [
    {
      type: 'plot',
      id: 'columns',
      title: 'Column view: A x = 2 a₁ + 1 a₂: a₁ = (2, 1), a₂ = (−1, 1), x = (2, 1)',
      equal: true,
      x: { min: -2, max: 5, step: 1 },
      y: { min: -1, max: 4, step: 1 },
      series: [
        arrow([4, 2], '2 a₁', 'ingest', [0, 0], [4, 1.93]),
        arrow([2, 1], 'a₁', A1, [0, 0], [1.9, 1.08]),
        arrow([-1, 1], 'a₂', A2),
        {
          kind: 'segment',
          from: [4, 2],
          to: [3, 3],
          arrow: true,
          label: 'a₂, moved',
          labelAt: [3.75, 2.25],
          tone: A2
        },
        arrow([3, 3], 'A x = (3, 3)', 'store'),
        { kind: 'scatter', points: [[0, 0]], tone: GREY },
      ]
    },
    {
      type: 'table',
      id: 'rows',
      title: 'Row view: one dot product per entry: same answer, different bookkeeping',
      columns: ['entry', 'row · x', 'value'],
      rows: [
        ['(A x)₁', '(2, −1) · (2, 1) = 4 − 1', '3'],
        ['(A x)₂', '(1, 1) · (2, 1) = 2 + 1', '3'],
        ['columns', '2·(2, 1) + 1·(−1, 1)', '(3, 3)'],
      ]
    },
  ],
  idea: 'Column and row views of A x',
  board: [
    fact('b-rule', 'One product A x, read two ways', 'the same numbers, different questions'),
    facts('b-1', 'Column view', ['A x = x₁ a₁ + … + xₙ aₙ', 'here 2 a₁ + 1 a₂ = (3, 3)', 'which outputs can A make?']),
    facts('b-2', 'Row view', ['entry i is row i · x', '(2, −1) · (2, 1) = 3', 'what does each entry measure?']),
    caution('b-watch', 'The column view is the one that generalises: whether A x = b has a solution is a question about the columns of A.'),
  ]
})
