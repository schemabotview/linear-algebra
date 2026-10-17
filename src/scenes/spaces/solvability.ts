import type { Scene } from '@graphlearning/flow'

// §4.7 — A x = b is solvable exactly when b is in C(A). For this A, the left-null vector y = (1, 1, −1)
// turns that into one test: b₁ + b₂ − b₃ = 0. Uniqueness is the null space's question.
export const solvability: Scene = {
  id: 'solvability',
  title: 'Existence and uniqueness through subspaces',
  flow: 'TB',
  nodes: [
    {
      id: 'membership',
      kind: 'table',
      label: 'Is b in C(A)? Test with y = (1, 1, −1)',
      sub: 'y · b must be 0, because y · (A x) = (yᵀ A) x = 0',
      headers: ['b', 'y · b', 'solvable?', 'how many'],
      values: [
        ['(1, 3, 4)', '1 + 3 − 4 = 0', 'yes', 'infinitely many: N(A) ≠ {0}'],
        ['(1, 3, 5)', '1 + 3 − 5 = −1', 'no', 'none'],
        ['(0, 0, 0)', '0', 'yes', 'all of N(A)'],
      ],
    },
    {
      id: 'cases',
      label: 'Rank decides existence and uniqueness',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'full-row', label: 'Full row rank', sub: 'r = m: a solution for every b', pattern: 'service', icon: 'circlecheck' },
        { id: 'full-col', label: 'Full column rank', sub: 'r = n: at most one solution', pattern: 'service', icon: 'circlecheck' },
        { id: 'both', label: 'Both: r = m = n', sub: 'exactly one for every b', pattern: 'storage', icon: 'key' },
        { id: 'neither', label: 'Neither, like A', sub: 'r < m, r < n: zero or infinitely many', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [],
}
