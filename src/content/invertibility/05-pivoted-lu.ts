import type { Section } from '../types'

export const pivotedLuSection: Section = {
  id: 'pivoted-lu',
  title: 'Permutation matrices and pivoted LU',
  scene: 'pivoted-lu',
  focus: 'factors',
  narration:
    "What if elimination meets a zero pivot? Then plain LU does not exist, because there is nothing to divide by. The fix is the one from chapter three: swap rows. A permutation matrix is the identity matrix with its rows reordered, and multiplying by it reorders the rows of A the same way. Here the top-left entry is zero, so P swaps the first two rows. Then elimination on P times A runs smoothly. The first column needs multipliers zero and two, the second needs one, and every pivot comes out as one. The result is P A equals L U. To solve A x equals b, apply the same swap to b, then do the two triangular solves as before. A permutation matrix is easy to invert: its inverse is its transpose. One practical note. Real software swaps not only when a pivot is zero, but whenever a larger entry is available below it, because tiny pivots amplify rounding. So its permutation is usually different from the minimal swap here. Next, changing the basis.",
}
