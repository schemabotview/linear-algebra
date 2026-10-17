import type { Section } from '../types'

export const cofactorsSection: Section = {
  id: 'cofactors',
  title: 'Cofactor expansion',
  scene: 'cofactors',
  focus: 'expansion',
  slide: `## Cofactor expansion

Expand along any row or column: each entry times its **cofactor**, a signed determinant one size smaller.

### How it works
- The **minor** of aᵢⱼ deletes row i and column j
- Its sign follows a checkerboard: + − + along the first row
- For the workshop A: 4·7 − 10·5 + 6·1 = −16, matching elimination
- Any row or column gives the same answer; pick the one with most zeros

### Where it helps
- Small matrices, especially with symbolic entries
- Rows or columns with many zeros: only nonzero entries contribute
- Proofs: it shows det is a polynomial in the entries

### Watch out
Fully expanded, it has n! terms: 3.6 million at n = 10, against about 333 operations for elimination.`,
  narration:
    "Is there a formula for the determinant that does not need elimination? Yes, cofactor expansion, and it is worth knowing when it helps and when it does not. Pick any row. For each entry, delete its row and its column to get a smaller matrix, take that smaller determinant, and attach a sign from a checkerboard pattern of pluses and minuses. Then add up entry times signed minor. For the workshop matrix along its first row, that is four times seven, minus ten times five, plus six times one, which is minus sixteen, exactly what elimination gave. Cofactors are good for small matrices, for matrices with symbolic entries, and for rows full of zeros, because zero entries contribute nothing. They also prove useful facts, for instance that the determinant is a polynomial in the entries. But the cost explodes. Expanded all the way down, an n by n determinant has n factorial terms, over three and a half million at n equals ten, while elimination needs a few hundred operations. Next, the rules that make determinants useful.",
}
