import { board, fact, facts } from '../frame'
import { lineEq } from '../plot-kit'

// §3.5 — the three possible outcomes in one picture: x + 2y = 4 meets x − y = 1 once, never meets the
// parallel 2x + 4y = 10, and coincides with 2x + 4y = 8. The table shows each case's echelon signature.
export const solutionCases = board({
  id: 'solution-cases',
  figure: 'One, none, or infinitely many',
  diagram: [
    {
      type: 'plot',
      id: 'cases',
      title: 'Pair x + 2y = 4 with three different partners: the blue line is also 2x + 4y = 8: the same line twice',
      equal: true,
      x: { min: -1, max: 6, step: 1 },
      y: { min: -1, max: 3.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: lineEq(1, 2, 4, -1, 6),
          label: 'x + 2y = 4',
          labelAt: [-0.9, 1.45],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: lineEq(2, 4, 10, -1, 6),
          label: '2x + 4y = 10: parallel',
          labelAt: [3.3, 1.8],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: lineEq(1, -1, 1, 0.2, 4.2),
          label: 'x − y = 1',
          labelAt: [3.6, 3.18],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[2, 1]],
          label: '(2, 1)',
          labelAt: [2.01, 0.38],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'signatures',
      title: 'What elimination leaves in the last row: read the case off the echelon form',
      columns: ['partner', 'last row after elimination', 'solutions'],
      rows: [
        ['x − y = 1', '[0 −3 | −3]: a pivot', 'exactly one'],
        ['2x + 4y = 10', '[0 0 | 2]: 0 = 2', 'none'],
        ['2x + 4y = 8', '[0 0 | 0]: 0 = 0', 'infinitely many'],
      ]
    },
  ],
  idea: 'Unique, inconsistent and infinite solution sets',
  board: [
    fact('b-rule', 'Exactly one solution, none, or infinitely many', 'never two, never five'),
    facts('b-1', 'Reading the echelon form', ['[0 … 0 | c], c ≠ 0: inconsistent', 'a pivot in every column: unique', 'a free variable: infinitely many']),
    facts('b-2', 'In the workshop', ['conflicting targets: no solution', 'a repeat: a free variable', 'in 3D: planes, same three cases']),
    fact('b-3', 'Why never exactly two', 'if x and y both solve it, so does every (1 − t) x + t y: a whole line'),
  ]
})
