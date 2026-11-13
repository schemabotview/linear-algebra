import type { Section } from '../types'

export const pivotingSection: Section = {
  id: 'pivoting',
  title: 'Pivoting, exact arithmetic and rounding',
  scene: 'pivoting',
  focus: 'results',
  narration:
    "Elimination is exact on paper. What changes on a computer? First, an exact zero pivot. If the top-left entry is zero, no multiple of the first row can clear the column below it, so we swap rows. That was always allowed. The real surprise is a pivot that is tiny but not zero. With epsilon equal to ten to the minus twenty, the exact solution is very close to one, one. Eliminate without swapping, and the multiplier is ten to the twenty. In double precision, the numbers it creates swamp everything else, and the computed x one comes back as zero. Completely wrong, with no error message. Swap the rows first, so the larger entry becomes the pivot, and the same computer returns one, one. This is partial pivoting, and every serious solver does it. By hand, use exact fractions and substitute back to check. That completes the chapter: you can trace elimination, describe every solution of a small system, and explain why the row operations are safe. Next, the spaces that these solution patterns reveal.",
}
