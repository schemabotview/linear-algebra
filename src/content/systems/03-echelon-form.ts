import type { Section } from '../types'

export const echelonForm: Section = {
  id: 'echelon-form',
  title: 'Echelon form, pivots and back substitution',
  scene: 'elimination',
  focus: 'echelon',
  narration:
    "How do we turn a system into one we can read the answer from? We clear entries below the diagonal, one column at a time. First, a swap. Moving the third row to the top gives a pivot of one, which keeps the arithmetic in whole numbers. Then subtract two of the first row from the second, and four of it from the third. The first column is now clear below its pivot. One more step, adding twice the second row to the third, clears the second column. What remains is echelon form, a staircase with pivots one, minus one and minus sixteen. Now we read upwards. The last row says minus sixteen q three equals minus thirty two, so q three is two. The second row then gives q two equals one, and the first gives q one equals three. Three chairs, one table, two shelves: exactly the order from chapter two. Always substitute back to check. Next, how to describe the answer when there is more than one.",
}
