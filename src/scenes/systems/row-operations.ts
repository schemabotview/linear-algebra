import { board, caution, fact, facts } from '../frame'
import { lineEq } from '../plot-kit'

// §3.2 — a row operation replaces one equation by another WITHOUT moving the solution. R2 − ½R1 turns
// x + y = 5 into y = 3: a different line through the same point (2, 3).
export const rowOperations = board({
  id: 'row-operations',
  figure: 'Row operations keep the solution',
  diagram: [
    {
      type: 'plot',
      id: 'replace',
      title: 'R2 − ½ R1 replaces a line, not the solution: x + y = 5 becomes 1.5y = 4.5, that is y = 3',
      equal: true,
      x: { min: -1, max: 6, step: 1 },
      y: { min: -1, max: 5, step: 1 },
      series: [
        {
          kind: 'line',
          points: lineEq(2, -1, 1, 0, 3),
          label: 'R1: 2x − y = 1',
          labelAt: [2.72, 4.31],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: lineEq(1, 1, 5, 0, 6),
          dashed: true,
          label: 'old R2: x + y = 5',
          labelAt: [4.4, 0.7],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: lineEq(0, 1, 3, -1, 6),
          label: 'new R2: y = 3',
          labelAt: [4.4, 3.25],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[2, 3]],
          label: '(2, 3) still',
          labelAt: [-0.26, 3.22],
          tone: 'store'
        },
      ]
    },
    {
      type: 'group',
      id: 'ops',
      title: 'Three operations, each reversible',
      dir: 'grid',
      cols: 3,
      children: [
        { type: 'item', id: 'swap', title: 'Swap', sub: 'Rᵢ ↔ Rⱼ; undo by swapping back', tone: 'ingest' },
        { type: 'item', id: 'scale', title: 'Scale', sub: 'Rᵢ → c Rᵢ with c ≠ 0; undo with 1/c', tone: 'ingest' },
        { type: 'item', id: 'add', title: 'Add a multiple', sub: 'Rᵢ → Rᵢ + c Rⱼ; undo with − c Rⱼ', tone: 'ingest' },
      ]
    },
  ],
  idea: 'Equivalent systems and row operations',
  board: [
    fact('b-rule', 'Equivalent systems have the same solutions', 'elimination moves between them until the answer is obvious'),
    facts('b-1', 'The three operations', ['swap two rows', 'scale a row by c ≠ 0', 'add a multiple of another row']),
    facts('b-2', 'Why the solutions survive', ['new rows are built from old ones', 'each step can be undone', 'R2 − ½R1: y = 3, same point']),
    caution('b-watch', 'Scaling by zero is not allowed: it deletes an equation, cannot be undone, and the solution set can grow.'),
  ]
})
