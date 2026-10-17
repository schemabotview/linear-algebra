import type { Scene } from '@graphlearning/flow'

// §4.6 — the counting: rank + nullity = n, and the trap. R's pivot columns (1,0,0), (0,1,0) span the
// plane z = 0, which does NOT contain A's column (1, 2, 3); the basis must come from A itself.
export const rankNullity: Scene = {
  id: 'rank-nullity',
  title: 'Rank, nullity and the pivot-column trap',
  flow: 'TB',
  nodes: [
    {
      id: 'counts',
      kind: 'table',
      label: 'Counting for A (3 × 4), rank 2',
      sub: 'every dimension follows from r, m and n',
      headers: ['quantity', 'rule', 'value'],
      values: [
        ['rank r', 'number of pivots', '2'],
        ['nullity', 'n − r = free variables', '4 − 2 = 2'],
        ['dim C(A) = dim C(Aᵀ)', 'r', '2'],
        ['dim N(Aᵀ)', 'm − r', '3 − 2 = 1'],
        ['rank + nullity', 'r + (n − r)', '4 = n ✓'],
      ],
    },
    {
      id: 'trap',
      label: 'Which pivot columns form a basis for C(A)?',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'right',
          kind: 'table',
          label: 'Columns 1 and 3 of A',
          sub: 'correct: these are in C(A)',
          headers: ['vector', 'value'],
          values: [['a₁', '(1, 2, 3)'], ['a₃', '(0, 1, 1)'], ['a₂ = 2 a₁', '(2, 4, 6)'], ['a₄ = a₁ + 2 a₃', '(1, 4, 5)']],
        },
        {
          id: 'wrong',
          kind: 'table',
          label: 'Columns 1 and 3 of R',
          sub: 'wrong: they span z = 0',
          headers: ['vector', 'value'],
          values: [['r₁', '(1, 0, 0)'], ['r₃', '(0, 1, 0)'], ['is a₁ in their span?', 'no: z = 3'], ['what R keeps', 'the dependencies']],
        },
      ],
      edges: [],
    },
  ],
  edges: [],
}
