import type { Section } from '../types'

export const luFactorisation: Section = {
  id: 'lu-factorisation',
  title: 'Elementary matrices and LU factorisation',
  scene: 'lu',
  focus: 'factors',
  slide: `## LU factorisation

Elimination can be **recorded** instead of repeated: A = L U, with L lower triangular and U upper triangular.

### Where L and U come from
- Each row operation is multiplication by an **elementary matrix**
- U is the echelon form that elimination produces
- L holds the multipliers: here 2 and 4 in column 1, then 3 in column 2
- L's diagonal is all ones, so only the multipliers need storing

### Reusing the factors
- To solve A x = b: forward-solve L c = b, then back-solve U x = c
- Both are triangular, so each costs about n² operations
- On the left, two different b reuse one factorisation

### Watch out
Plain LU needs a nonzero pivot at every step. When one is zero, rows must be swapped first.`,
  narration:
    "If we solve many systems with the same matrix, should we eliminate from scratch every time? No. We record elimination once, as a factorisation. Every row operation is the same as multiplying by a simple elementary matrix, and undoing them all gives A equals L times U. U is the echelon form that elimination produces. L is lower triangular, with ones on its diagonal and the multipliers below it. For this matrix, eliminating the first column used multipliers two and four, and the second column used three. Those numbers sit in L exactly where they were used. Now solving is cheap. To solve A x equals b, first solve L c equals b from the top down, then solve U x equals c from the bottom up. Both are triangular, so each takes roughly n squared steps, compared with n cubed for full elimination. On the left, two different right-hand sides share one factorisation. Plain LU needs a nonzero pivot at every step. Next, what happens when one is zero.",
}
