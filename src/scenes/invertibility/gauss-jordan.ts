import { board, caution, fact, facts } from '../frame'
import { augmented } from '../plot-kit'

// §5.3 — Gauss–Jordan on [A | I] turns the left half into I and the right half into A⁻¹. The cost
// table is why software solves A x = b directly instead of forming A⁻¹ first.
const V = ['c₁', 'c₂']
export const gaussJordan = board({
  id: 'gauss-jordan',
  figure: 'Computing an inverse, and why to avoid it',
  diagram: [
    {
      type: 'group',
      id: 'stages',
      title: 'Gauss–Jordan on [A | I]: the right half becomes A⁻¹',
      dir: 'grid',
      cols: 2,
      children: [
        { ...augmented('gj-start', '1. [A | I]', 'A = [2 1; 1 1]', [[2, 1, 1, 0], [1, 1, 0, 1]], V), columns: ['row', 'c₁', 'c₂', '| I', ''] },
        { ...augmented('gj-swap', '2. R1 ↔ R2', 'pivot 1 in column 1', [[1, 1, 0, 1], [2, 1, 1, 0]], V), columns: ['row', 'c₁', 'c₂', '| I', ''] },
        { ...augmented('gj-clear', '3. R2 − 2R1, then −R2', 'second pivot is 1', [[1, 1, 0, 1], [0, 1, -1, 2]], V), columns: ['row', 'c₁', 'c₂', '| I', ''] },
        { ...augmented('gj-done', '4. R1 − R2', '[I | A⁻¹]', [[1, 0, 1, -1], [0, 1, -1, 2]], V), columns: ['row', 'c₁', 'c₂', '| A⁻¹', ''] },
      ]
    },
    {
      type: 'table',
      id: 'cost',
      title: 'Solve A x = b; do not form A⁻¹: n × n, leading-order operation counts',
      columns: ['approach', 'work', 'rounding'],
      rows: [
        ['eliminate A x = b', '≈ n³/3', 'smaller errors'],
        ['form A⁻¹, then A⁻¹ b', '≈ n³', 'more rounding, more risk'],
        ['many b, same A', 'factor once (§5.4)', 'reuse the factors'],
      ]
    },
  ],
  idea: 'Computing an inverse, and solving without one',
  board: [
    fact('b-rule', 'Gauss–Jordan: row-reduce [A', 'I] | when the left half is I, the right half is A⁻¹'),
    facts('b-1', 'For A = [2 1; 1 1]', ['swap, clear, scale, clear', '[I | A⁻¹], A⁻¹ = [1 −1; −1 2]', 'no I on the left: no inverse']),
    facts('b-2', 'Solve, do not invert', ['eliminate on [A | b] directly', 'A⁻¹ costs ~3× the work', 'and adds rounding error']),
    caution('b-watch', '"x = A⁻¹ b" is notation for the solution, not an instruction to compute A⁻¹.'),
  ]
})
