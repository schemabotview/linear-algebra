import { board, caution, fact, facts } from '../frame'
import { lineEq } from '../plot-kit'

// §6.7 — Cramer's rule on 2x + y = 5, x + 3y = 10: each unknown is a ratio of determinants. Exact and
// elegant for 2 × 2; the cost table is why solvers never use it.
export const cramer = board({
  id: 'cramer',
  figure: "Cramer's rule",
  diagram: [
    {
      type: 'plot',
      id: 'system',
      title: '2x + y = 5 and x + 3y = 10: det A = 5, solution (1, 3)',
      equal: true,
      x: { min: -1, max: 5, step: 1 },
      y: { min: -0.5, max: 4.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: lineEq(2, 1, 5, 0.25, 2.75),
          label: '2x + y = 5',
          labelAt: [1.9, 1.6],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: lineEq(1, 3, 10, -1, 5),
          label: 'x + 3y = 10',
          labelAt: [3.4, 2.5],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[1, 3]],
          label: '(1, 3)',
          labelAt: [1.2, 3.35],
          tone: 'store'
        },
      ]
    },
    {
      type: 'group',
      id: 'ratios',
      title: 'Each unknown is a ratio of determinants',
      dir: 'row',
      children: [
        {
          type: 'table',
          id: 'formula',
          title: 'Replace one column by b: b = (5, 10)',
          columns: ['unknown', 'numerator', 'value'],
          rows: [
            ['x', 'det [5 1; 10 3] = 5', '5 / 5 = 1'],
            ['y', 'det [2 5; 1 10] = 15', '15 / 5 = 3'],
          ]
        },
        {
          type: 'table',
          id: 'cost',
          title: 'Cost for n = 10: leading-order operation counts',
          columns: ['method', 'work'],
          rows: [
            ['elimination', '≈ 333'],
            ['Cramer, dets by elimination', '≈ 3,700'],
            ['Cramer, dets by cofactors', '≈ 4 × 10⁷'],
          ]
        },
      ]
    },
  ],
  idea: 'Cramer’s rule and its trade-offs',
  board: [
    fact('b-rule', 'Cramer: xᵢ = det Aᵢ / det A when det A ≠ 0', 'Aᵢ is A with column i replaced by b'),
    facts('b-1', 'For 2x + y = 5, x + 3y = 10', ['det A = 2·3 − 1·1 = 5', 'x = det [5 1; 10 3] / 5 = 1', 'y = det [2 5; 1 10] / 5 = 3']),
    facts('b-2', 'Where it helps, and not', ['exact formulas, small systems', 'theory: smooth in A and b', 'n = 10: ~3,700 ops vs 333']),
    caution('b-watch', 'Chapter outcome: you can explain det through volume and elimination, and recognise when it is the wrong tool.'),
  ]
})
