import type { Scene } from '@graphlearning/flow'
import { lineEq } from '../plot-kit'

// §3.2 — a row operation replaces one equation by another WITHOUT moving the solution. R2 − ½R1 turns
// x + y = 5 into y = 3: a different line through the same point (2, 3).
export const rowOperations: Scene = {
  id: 'row-operations',
  title: 'Row operations keep the solution',
  flow: 'TB',
  nodes: [
    {
      id: 'replace',
      kind: 'plot',
      label: 'R2 − ½ R1 replaces a line, not the solution',
      sub: 'x + y = 5 becomes 1.5y = 4.5, that is y = 3',
      plot: {
        equal: true,
        x: { min: -1, max: 6, step: 1 },
        y: { min: -1, max: 5, step: 1 },
        series: [
          { kind: 'line', points: lineEq(2, -1, 1, 0, 3), label: 'R1: 2x − y = 1', labelAt: [2.6, 4.4], color: '#60a5fa' },
          { kind: 'line', points: lineEq(1, 1, 5, 0, 6), dashed: true, label: 'old R2: x + y = 5', labelAt: [4.4, 0.7], color: '#9ca3af' },
          { kind: 'line', points: lineEq(0, 1, 3, -1, 6), label: 'new R2: y = 3', labelAt: [4.4, 3.25], color: '#f59e0b' },
          { kind: 'marker', at: [2, 3], label: '(2, 3) still', labelAt: [0.7, 3.4], color: '#34d399' },
        ],
      },
    },
    {
      id: 'ops',
      label: 'Three operations, each reversible',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'swap', label: 'Swap', sub: 'Rᵢ ↔ Rⱼ; undo by swapping back', pattern: 'service', icon: 'swap' },
        { id: 'scale', label: 'Scale', sub: 'Rᵢ → c Rᵢ with c ≠ 0; undo with 1/c', pattern: 'service', icon: 'scale' },
        { id: 'add', label: 'Add a multiple', sub: 'Rᵢ → Rᵢ + c Rⱼ; undo with − c Rⱼ', pattern: 'service', icon: 'merge' },
      ],
    },
  ],
  edges: [],
}
