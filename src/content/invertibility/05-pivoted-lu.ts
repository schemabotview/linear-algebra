import type { Section } from '../types'

export const pivotedLuSection: Section = {
  id: 'pivoted-lu',
  title: 'Permutation matrices and pivoted LU',
  scene: 'pivoted-lu',
  focus: 'factors',
  slide: `## Pivoted LU: P A = L U

When a pivot is zero, plain A = L U does not exist. Swapping rows first fixes it: **P A = L U**.

### Permutation matrices
- P is the identity with its rows reordered
- P A reorders the rows of A in the same way; P⁻¹ = Pᵀ
- Here P swaps rows 1 and 2 because a₁₁ = 0
- Every invertible A has some P for which P A = L U exists

### The factorisation
- Eliminate on P A: multipliers 0 and 2, then 1
- L = [1 0 0; 0 1 0; 2 1 1], U = [1 1 1; 0 1 2; 0 0 1]
- To solve A x = b, solve L U x = P b
- On the left, b = (3, 3, 10) gives c = (3, 3, 1), then x = (1, 1, 1)

### Watch out
Software also swaps when a pivot is merely small (chapter 3). Its P is usually not the minimal swap shown here.`,
  narration:
    "What if elimination meets a zero pivot? Then plain LU does not exist, because there is nothing to divide by. The fix is the one from chapter three: swap rows. A permutation matrix is the identity matrix with its rows reordered, and multiplying by it reorders the rows of A the same way. Here the top-left entry is zero, so P swaps the first two rows. Then elimination on P times A runs smoothly. The first column needs multipliers zero and two, the second needs one, and every pivot comes out as one. The result is P A equals L U. To solve A x equals b, apply the same swap to b, then do the two triangular solves as before. A permutation matrix is easy to invert: its inverse is its transpose. One practical note. Real software swaps not only when a pivot is zero, but whenever a larger entry is available below it, because tiny pivots amplify rounding. So its permutation is usually different from the minimal swap here. Next, changing the basis.",
}
