import { board, caution, fact, facts } from '../frame'

// §4.7 — A x = b is solvable exactly when b is in C(A). For this A, the left-null vector y = (1, 1, −1)
// turns that into one test: b₁ + b₂ − b₃ = 0. Uniqueness is the null space's question.
export const solvability = board({
  id: 'solvability',
  figure: 'Existence and uniqueness through subspaces',
  diagram: [
    {
      type: 'table',
      id: 'membership',
      title: 'Is b in C(A)? Test with y = (1, 1, −1): y · b must be 0, because y · (A x) = (yᵀ A) x = 0',
      columns: ['b', 'y · b', 'solvable?', 'how many'],
      rows: [
        ['(1, 3, 4)', '1 + 3 − 4 = 0', 'yes', 'infinitely many: N(A) ≠ {0}'],
        ['(1, 3, 5)', '1 + 3 − 5 = −1', 'no', 'none'],
        ['(0, 0, 0)', '0', 'yes', 'all of N(A)'],
      ]
    },
    {
      type: 'group',
      id: 'cases',
      title: 'Rank decides existence and uniqueness',
      dir: 'grid',
      cols: 2,
      children: [
        { type: 'item', id: 'full-row', title: 'Full row rank', sub: 'r = m: a solution for every b', tone: 'ingest' },
        { type: 'item', id: 'full-col', title: 'Full column rank', sub: 'r = n: at most one solution', tone: 'ingest' },
        { type: 'item', id: 'both', title: 'Both: r = m = n', sub: 'exactly one for every b', icon: 'key', tone: 'store' },
        { type: 'item', id: 'neither', title: 'Neither, like A', sub: 'r < m, r < n: zero or infinitely many', tone: 'consume' },
      ]
    },
  ],
  idea: 'Consistency and uniqueness through subspaces',
  board: [
    fact('b-rule', 'Subspaces answer by structure', 'what chapter 3 answered by elimination'),
    facts('b-1', 'Existence: is b in C(A)?', ['b a combination of the columns', 'y = (1, 1, −1) spans N(Aᵀ)', 'solvable ⇔ y · b = 0', '(1, 3, 4) passes; (1, 3, 5) fails']),
    facts('b-2', 'Uniqueness: is N(A) = {0}?', ['solutions are xₚ + N(A)', 'unique ⇔ N(A) = {0}', '⇔ r = n: a pivot per column']),
    caution('b-watch', 'Chapter outcome: you can explain span, basis and rank, relate free variables to nullity, and test solvability through the column space.'),
  ]
})
