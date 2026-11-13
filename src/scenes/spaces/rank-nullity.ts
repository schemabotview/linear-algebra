import { board, caution, fact, facts } from '../frame'

// §4.6 — the counting: rank + nullity = n, and the trap. R's pivot columns (1,0,0), (0,1,0) span the
// plane z = 0, which does NOT contain A's column (1, 2, 3); the basis must come from A itself.
export const rankNullity = board({
  id: 'rank-nullity',
  figure: 'Rank, nullity and the pivot-column trap',
  diagram: [
    {
      type: 'table',
      id: 'counts',
      title: 'Counting for A (3 × 4), rank 2: every dimension follows from r, m and n',
      columns: ['quantity', 'rule', 'value'],
      rows: [
        ['rank r', 'number of pivots', '2'],
        ['nullity', 'n − r = free variables', '4 − 2 = 2'],
        ['dim C(A) = dim C(Aᵀ)', 'r', '2'],
        ['dim N(Aᵀ)', 'm − r', '3 − 2 = 1'],
        ['rank + nullity', 'r + (n − r)', '4 = n ✓'],
      ]
    },
    {
      type: 'group',
      id: 'trap',
      title: 'Which pivot columns form a basis for C(A)?',
      dir: 'row',
      children: [
        {
          type: 'table',
          id: 'right',
          title: 'Columns 1 and 3 of A: correct: these are in C(A)',
          columns: ['vector', 'value'],
          rows: [['a₁', '(1, 2, 3)'], ['a₃', '(0, 1, 1)'], ['a₂ = 2 a₁', '(2, 4, 6)'], ['a₄ = a₁ + 2 a₃', '(1, 4, 5)']]
        },
        {
          type: 'table',
          id: 'wrong',
          title: 'Columns 1 and 3 of R: wrong: they span z = 0',
          columns: ['vector', 'value'],
          rows: [['r₁', '(1, 0, 0)'], ['r₃', '(0, 1, 0)'], ['is a₁ in their span?', 'no: z = 3'], ['what R keeps', 'the dependencies']]
        },
      ]
    },
  ],
  idea: 'Rank, nullity and dimension counting',
  board: [
    fact('b-rule', 'The rank r is the number of pivots', 'it sets the dimension of all four subspaces'),
    facts('b-1', 'The counts', ['dim C(A) = dim C(Aᵀ) = r', 'nullity = n − r: free variables', 'dim N(Aᵀ) = m − r', 'r + nullity = n: 2 + 2 = 4']),
    facts('b-2', 'The pivot-column trap', ['row operations move C(A)', 'R’s pivot columns span z = 0', 'take A’s columns 1 and 3']),
    caution('b-watch', 'Row operations preserve the row space and the null space, but not the column space.'),
  ]
})
