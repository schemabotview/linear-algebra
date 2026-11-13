import { board, caution, fact, facts } from '../frame'

// §6.3 — det of the workshop matrix by elimination, reusing chapter 3's steps. One swap flips the
// sign; the row additions change nothing; the triangular result's diagonal product gives |det|.
export const byElimination = board({
  id: 'by-elimination',
  figure: 'Determinants by elimination',
  diagram: [
    {
      type: 'table',
      id: 'effects',
      title: 'What each row operation does to det: track the factor, then read off a triangular matrix',
      columns: ['operation', 'effect on det', 'why'],
      rows: [
        ['swap two rows', '× (−1)', 'alternating'],
        ['scale a row by c', '× c', 'linear in that row'],
        ['add c × another row', 'unchanged', 'a shear'],
        ['triangular matrix', 'product of the diagonal', 'expand down the diagonal'],
      ]
    },
    {
      type: 'table',
      id: 'workshop',
      title: 'The workshop matrix A = [4 10 6; 2 3 1; 1 2 3]: the same steps as chapter 3',
      columns: ['stage', 'operation', 'det so far'],
      rows: [
        ['start', '—', 'det A'],
        ['R1 ↔ R3', 'one swap', '−det A'],
        ['R2 − 2R1, R3 − 4R1', 'additions', '−det A'],
        ['R3 + 2R2', 'addition', '−det A'],
        ['U, pivots 1, −1, −16', 'diagonal product', '1 · (−1) · (−16) = 16'],
        ['so', '−det A = 16', 'det A = −16'],
      ]
    },
  ],
  idea: 'Determinants through elimination',
  board: [
    fact('b-rule', 'Compute det A by elimination', 'with one extra bookkeeping column'),
    facts('b-1', 'The rules', ['a swap: × −1', 'scale a row by c: × c', 'add a row multiple: no change', 'triangular: product of diagonal']),
    facts('b-2', 'The workshop matrix', ['one swap, then row additions', 'pivots 1, −1, −16: det U = 16', 'one swap: det A = −16']),
    caution('b-watch', 'Nonzero det, so the workshop map is invertible: every resource need comes from exactly one order.'),
  ]
})
