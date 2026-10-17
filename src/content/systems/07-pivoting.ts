import type { Section } from '../types'

export const pivotingSection: Section = {
  id: 'pivoting',
  title: 'Pivoting, exact arithmetic and rounding',
  scene: 'pivoting',
  focus: 'results',
  slide: `## Pivoting and rounding

By hand, a pivot only has to be **nonzero**. On a computer, a nonzero but **tiny** pivot can ruin the answer.

### Zero pivot
- [0 1 | 1; 1 1 | 2] cannot clear column 1 from R1
- Swap the rows first; the swap is a legal row operation
- If every entry below is zero too, the column has no pivot: a free variable

### Tiny pivot, ε = 10⁻²⁰
- Exactly, the solution is about (1, 1)
- Without a swap the multiplier is 10²⁰; rounding wipes out x₂'s information and x₁ comes back as **0**
- **Partial pivoting** swaps in the largest entry and gets (1, 1)

### Chapter outcome
You can trace elimination, describe every solution of a small system, and explain why row operations preserve its solution set.`,
  narration:
    "Elimination is exact on paper. What changes on a computer? First, an exact zero pivot. If the top-left entry is zero, no multiple of the first row can clear the column below it, so we swap rows. That was always allowed. The real surprise is a pivot that is tiny but not zero. With epsilon equal to ten to the minus twenty, the exact solution is very close to one, one. Eliminate without swapping, and the multiplier is ten to the twenty. In double precision, the numbers it creates swamp everything else, and the computed x one comes back as zero. Completely wrong, with no error message. Swap the rows first, so the larger entry becomes the pivot, and the same computer returns one, one. This is partial pivoting, and every serious solver does it. By hand, use exact fractions and substitute back to check. That completes the chapter: you can trace elimination, describe every solution of a small system, and explain why the row operations are safe. Next, the spaces that these solution patterns reveal.",
}
