import type { Scene } from '@graphlearning/flow'
import { augmented } from '../plot-kit'

// §3.3 — forward elimination on the workshop system, one table per stage (numbered, read row by
// row; edges would force a single tall column), then back substitution.
// Swapping R3 to the top first gives a pivot of 1, so every intermediate stays an integer.
const Q = ['q₁', 'q₂', 'q₃']

export const elimination: Scene = {
  id: 'elimination',
  title: 'Elimination, then back substitution',
  flow: 'TB',
  nodes: [
    {
      id: 'stages',
      label: 'Forward elimination on [A | b]',
      pattern: 'group',
      cols: 2,
      children: [
        augmented('start', '1. Start', 'the workshop system', [[4, 10, 6, 34], [2, 3, 1, 11], [1, 2, 3, 11]], Q),
        augmented('swapped', '2. R1 ↔ R3', 'pivot 1 in column 1', [[1, 2, 3, 11], [2, 3, 1, 11], [4, 10, 6, 34]], Q),
        augmented('col1', '3. R2 − 2R1, R3 − 4R1', 'zeros below the first pivot', [[1, 2, 3, 11], [0, -1, -5, -11], [0, 2, -6, -10]], Q),
        augmented('echelon', '4. R3 + 2R2', 'echelon form: pivots 1, −1, −16', [[1, 2, 3, 11], [0, -1, -5, -11], [0, 0, -16, -32]], Q),
      ],
      edges: [],
    },
    {
      id: 'back',
      kind: 'table',
      label: 'Back substitution, bottom row first',
      sub: 'each row now has one new unknown',
      headers: ['row', 'equation', 'gives'],
      values: [
        ['R3', '−16 q₃ = −32', 'q₃ = 2'],
        ['R2', '−q₂ − 5·2 = −11', 'q₂ = 1'],
        ['R1', 'q₁ + 2·1 + 3·2 = 11', 'q₁ = 3'],
        ['check', 'A (3, 1, 2)', '(34, 11, 11) ✓'],
      ],
    },
  ],
  edges: [],
}
