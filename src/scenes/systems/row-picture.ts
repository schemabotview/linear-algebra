import type { Scene } from '@graphlearning/flow'
import { augmented, lineEq } from '../plot-kit'

// §3.1 — a 2×2 system drawn as two lines (the row picture) meeting at its solution, and the
// workshop system written as an augmented matrix: the same information, no variable names.
export const rowPicture: Scene = {
  id: 'row-picture',
  title: 'A system as lines, and as a matrix',
  flow: 'TB',
  nodes: [
    {
      id: 'lines',
      kind: 'plot',
      label: 'Row picture: each equation is a line',
      sub: '2x − y = 1 and x + y = 5 meet at (2, 3)',
      plot: {
        equal: true,
        x: { min: -1, max: 6, step: 1 },
        y: { min: -1, max: 5, step: 1 },
        series: [
          { kind: 'line', points: lineEq(2, -1, 1, 0, 3), label: '2x − y = 1', labelAt: [2.6, 4.4], color: '#60a5fa' },
          { kind: 'line', points: lineEq(1, 1, 5, 0, 6), label: 'x + y = 5', labelAt: [4.6, 0.7], color: '#f59e0b' },
          { kind: 'marker', at: [2, 3], label: 'solution (2, 3)', labelAt: [2.25, 3.3], color: '#34d399' },
        ],
      },
    },
    {
      id: 'forms',
      label: 'The workshop system A q = b, two ways',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'equations',
          kind: 'table',
          label: 'Equations',
          sub: 'one per resource',
          headers: ['resource', 'equation'],
          values: [
            ['material', '4q₁ + 10q₂ + 6q₃ = 34'],
            ['labour', '2q₁ + 3q₂ + q₃ = 11'],
            ['energy', 'q₁ + 2q₂ + 3q₃ = 11'],
          ],
        },
        augmented('augmented', 'Augmented [A | b]', 'coefficients, then targets', [
          [4, 10, 6, 34],
          [2, 3, 1, 11],
          [1, 2, 3, 11],
        ], ['q₁', 'q₂', 'q₃']),
      ],
      edges: [{ source: 'equations', target: 'augmented', label: 'drop names' }],
    },
  ],
  edges: [],
}
