import type { Section } from '../types'

export const echelonForm: Section = {
  id: 'echelon-form',
  title: 'Echelon form, pivots and back substitution',
  scene: 'elimination',
  focus: 'echelon',
  slide: `## Elimination and back substitution

**Forward elimination** uses row operations to create zeros below each pivot, column by column, until the system is **echelon** (staircase) form.

### Pivots
- A **pivot** is the first nonzero entry in a row of the echelon form
- Swapping R3 to the top gives a pivot of 1, so the workshop stays in integers
- Its pivots are 1, −1 and −16: one per unknown

### Back substitution
- The last row has one unknown: −16 q₃ = −32, so q₃ = 2
- Each row above adds one new unknown: q₂ = 1, then q₁ = 3
- Check: A (3, 1, 2) = (34, 11, 11)

### Watch out
The pivots belong to the echelon form, not to the original matrix. A different sequence of swaps gives different pivot values.`,
  narration:
    "How do we turn a system into one we can read the answer from? We clear entries below the diagonal, one column at a time. First, a swap. Moving the third row to the top gives a pivot of one, which keeps the arithmetic in whole numbers. Then subtract two of the first row from the second, and four of it from the third. The first column is now clear below its pivot. One more step, adding twice the second row to the third, clears the second column. What remains is echelon form, a staircase with pivots one, minus one and minus sixteen. Now we read upwards. The last row says minus sixteen q three equals minus thirty two, so q three is two. The second row then gives q two equals one, and the first gives q one equals three. Three chairs, one table, two shelves: exactly the order from chapter two. Always substitute back to check. Next, how to describe the answer when there is more than one.",
}
