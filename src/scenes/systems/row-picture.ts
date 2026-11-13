import { board, caution, fact, facts } from '../frame'
import { augmented, lineEq } from '../plot-kit'

// §3.1 — a 2×2 system drawn as two lines (the row picture) meeting at its solution, and the
// workshop system written as an augmented matrix: the same information, no variable names.
export const rowPicture = board({
  id: 'row-picture',
  figure: 'A system as lines, and as a matrix',
  diagram: [
    {
      type: 'plot',
      id: 'lines',
      title: 'Row picture: each equation is a line: 2x − y = 1 and x + y = 5 meet at (2, 3)',
      equal: true,
      x: { min: -1, max: 6, step: 1 },
      y: { min: -1, max: 5, step: 1 },
      series: [
        {
          kind: 'line',
          points: lineEq(2, -1, 1, 0, 3),
          label: '2x − y = 1',
          labelAt: [2.72, 4.31],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: lineEq(1, 1, 5, 0, 6),
          label: 'x + y = 5',
          labelAt: [4.6, 0.7],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[2, 3]],
          label: 'solution (2, 3)',
          labelAt: [2.25, 3.3],
          tone: 'store'
        },
      ]
    },
    {
      type: 'group',
      id: 'forms',
      title: 'The workshop system A q = b, two ways',
      dir: 'row',
      children: [
        {
          type: 'table',
          id: 'equations',
          title: 'Equations: one per resource',
          columns: ['resource', 'equation'],
          rows: [
            ['material', '4q₁ + 10q₂ + 6q₃ = 34'],
            ['labour', '2q₁ + 3q₂ + q₃ = 11'],
            ['energy', 'q₁ + 2q₂ + 3q₃ = 11'],
          ]
        },
        augmented('augmented', 'Augmented [A | b]', 'coefficients, then targets', [
          [4, 10, 6, 34],
          [2, 3, 1, 11],
          [1, 2, 3, 11],
        ], ['q₁', 'q₂', 'q₃']),
      ]
    },
  ],
  edges: [
    { from: 'equations', to: 'augmented', label: 'drop names' }
  ],
  idea: 'Equations and augmented matrices',
  board: [
    fact('b-rule', 'A system asks which x gives A x = b', '[A | b] stores exactly the numbers that matter'),
    facts('b-1', 'Two pictures of one system', ['rows: lines meeting at x', 'columns: weights making b', '2x − y = 1, x + y = 5 → (2, 3)']),
    facts('b-2', 'The workshop, run backwards', ['chapter 2: order q gave needs b', 'now b = (34, 11, 11) is given', 'and the order q is unknown']),
    caution('b-watch', 'More equations do not guarantee a solution, or a unique one. That depends on how the equations relate.'),
  ]
})
