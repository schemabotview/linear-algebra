import type { Section } from '../types'

export const cofactorsSection: Section = {
  id: 'cofactors',
  title: 'Cofactor expansion',
  scene: 'cofactors',
  focus: 'expansion',
  narration:
    "Is there a formula for the determinant that does not need elimination? Yes, cofactor expansion, and it is worth knowing when it helps and when it does not. Pick any row. For each entry, delete its row and its column to get a smaller matrix, take that smaller determinant, and attach a sign from a checkerboard pattern of pluses and minuses. Then add up entry times signed minor. For the workshop matrix along its first row, that is four times seven, minus ten times five, plus six times one, which is minus sixteen, exactly what elimination gave. Cofactors are good for small matrices, for matrices with symbolic entries, and for rows full of zeros, because zero entries contribute nothing. They also prove useful facts, for instance that the determinant is a polynomial in the entries. But the cost explodes. Expanded all the way down, an n by n determinant has n factorial terms, over three and a half million at n equals ten, while elimination needs a few hundred operations. Next, the rules that make determinants useful.",
}
