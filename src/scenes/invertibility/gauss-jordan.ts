import type { Scene } from '@graphlearning/flow'
import { augmented } from '../plot-kit'

// §5.3 — Gauss–Jordan on [A | I] turns the left half into I and the right half into A⁻¹. The cost
// table is why software solves A x = b directly instead of forming A⁻¹ first.
const V = ['c₁', 'c₂']

export const gaussJordan: Scene = {
  id: 'gauss-jordan',
  title: 'Computing an inverse, and why to avoid it',
  flow: 'TB',
  nodes: [
    {
      id: 'stages',
      label: 'Gauss–Jordan on [A | I]: the right half becomes A⁻¹',
      pattern: 'group',
      cols: 2,
      children: [
        { ...augmented('gj-start', '1. [A | I]', 'A = [2 1; 1 1]', [[2, 1, 1, 0], [1, 1, 0, 1]], V), headers: ['row', 'c₁', 'c₂', '| I', ''] },
        { ...augmented('gj-swap', '2. R1 ↔ R2', 'pivot 1 in column 1', [[1, 1, 0, 1], [2, 1, 1, 0]], V), headers: ['row', 'c₁', 'c₂', '| I', ''] },
        { ...augmented('gj-clear', '3. R2 − 2R1, then −R2', 'second pivot is 1', [[1, 1, 0, 1], [0, 1, -1, 2]], V), headers: ['row', 'c₁', 'c₂', '| I', ''] },
        { ...augmented('gj-done', '4. R1 − R2', '[I | A⁻¹]', [[1, 0, 1, -1], [0, 1, -1, 2]], V), headers: ['row', 'c₁', 'c₂', '| A⁻¹', ''] },
      ],
      edges: [],
    },
    {
      id: 'cost',
      kind: 'table',
      label: 'Solve A x = b; do not form A⁻¹',
      sub: 'n × n, leading-order operation counts',
      headers: ['approach', 'work', 'rounding'],
      values: [
        ['eliminate A x = b', '≈ n³/3', 'smaller errors'],
        ['form A⁻¹, then A⁻¹ b', '≈ n³', 'more rounding, more risk'],
        ['many b, same A', 'factor once (§5.4)', 'reuse the factors'],
      ],
    },
  ],
  edges: [],
}
