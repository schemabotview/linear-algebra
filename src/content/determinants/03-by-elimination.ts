import type { Section } from '../types'

export const byEliminationSection: Section = {
  id: 'by-elimination',
  title: 'Determinants through elimination',
  scene: 'by-elimination',
  focus: 'workshop',
  slide: `## Determinants by elimination

The efficient way to compute det A is the elimination you already know, with one extra bookkeeping column.

### The rules
- A swap multiplies det by −1
- Scaling a row by c multiplies det by c
- Adding a multiple of a row changes nothing
- A triangular matrix has det = **product of its diagonal**
- So det A is ± the product of the pivots, the sign set by the number of swaps

### The workshop matrix
- Chapter 3 used one swap, then only row additions
- The echelon form U has pivots 1, −1 and −16, so det U = 16
- One swap means det A = −det U = **−16**

### Watch out
Nonzero det, so the workshop map is invertible: every resource need comes from exactly one order.`,
  narration:
    "How do we compute a determinant without a huge formula? We reuse elimination and keep track of three effects. A row swap multiplies the determinant by minus one. Scaling a row by c multiplies it by c. And adding a multiple of one row to another changes nothing. Once the matrix is triangular, the determinant is simply the product of the diagonal entries. Take the workshop matrix from chapter three. Elimination began with one swap, bringing the third row to the top, and then used only row additions. The resulting echelon form had pivots one, minus one and minus sixteen, whose product is sixteen. The single swap flipped the sign along the way, so the determinant of the workshop matrix is minus sixteen. Because it is not zero, the workshop map is invertible, which matches what chapter three found: every set of resource needs comes from exactly one order. This costs about n cubed over three operations, the same as elimination itself. Next, a formula that is better for theory than for computation.",
}
