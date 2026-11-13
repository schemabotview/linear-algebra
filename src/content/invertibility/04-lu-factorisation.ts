import type { Section } from '../types'

export const luFactorisation: Section = {
  id: 'lu-factorisation',
  title: 'Elementary matrices and LU factorisation',
  scene: 'lu',
  focus: 'factors',
  narration:
    "If we solve many systems with the same matrix, should we eliminate from scratch every time? No. We record elimination once, as a factorisation. Every row operation is the same as multiplying by a simple elementary matrix, and undoing them all gives A equals L times U. U is the echelon form that elimination produces. L is lower triangular, with ones on its diagonal and the multipliers below it. For this matrix, eliminating the first column used multipliers two and four, and the second column used three. Those numbers sit in L exactly where they were used. Now solving is cheap. To solve A x equals b, first solve L c equals b from the top down, then solve U x equals c from the bottom up. Both are triangular, so each takes roughly n squared steps, compared with n cubed for full elimination. On the left, two different right-hand sides share one factorisation. Plain LU needs a nonzero pivot at every step. Next, what happens when one is zero.",
}
