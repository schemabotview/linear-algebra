import type { Scene } from '@graphlearning/flow'

// §6.3 — det of the workshop matrix by elimination, reusing chapter 3's steps. One swap flips the
// sign; the row additions change nothing; the triangular result's diagonal product gives |det|.
export const byElimination: Scene = {
  id: 'by-elimination',
  title: 'Determinants by elimination',
  flow: 'TB',
  nodes: [
    {
      id: 'effects',
      kind: 'table',
      label: 'What each row operation does to det',
      sub: 'track the factor, then read off a triangular matrix',
      headers: ['operation', 'effect on det', 'why'],
      values: [
        ['swap two rows', '× (−1)', 'alternating'],
        ['scale a row by c', '× c', 'linear in that row'],
        ['add c × another row', 'unchanged', 'a shear'],
        ['triangular matrix', 'product of the diagonal', 'expand down the diagonal'],
      ],
    },
    {
      id: 'workshop',
      kind: 'table',
      label: 'The workshop matrix A = [4 10 6; 2 3 1; 1 2 3]',
      sub: 'the same steps as chapter 3',
      headers: ['stage', 'operation', 'det so far'],
      values: [
        ['start', '—', 'det A'],
        ['R1 ↔ R3', 'one swap', '−det A'],
        ['R2 − 2R1, R3 − 4R1', 'additions', '−det A'],
        ['R3 + 2R2', 'addition', '−det A'],
        ['U, pivots 1, −1, −16', 'diagonal product', '1 · (−1) · (−16) = 16'],
        ['so', '−det A = 16', 'det A = −16'],
      ],
    },
  ],
  edges: [],
}
