import type { Section } from '../types'

export const definingProperties: Section = {
  id: 'defining-properties',
  title: 'Multilinear, alternating and normalised',
  scene: 'properties',
  focus: 'axioms',
  narration:
    "Is the determinant just a formula to memorise? No. It is the one function of square matrices with three properties, and the formula follows from them. First, the identity has determinant one, because the unit square keeps area one. Second, the determinant is linear in each row separately: scale one row by c, and the determinant scales by c. Third, it is alternating: swap two rows, and the sign changes. Two consequences matter constantly. If two rows are equal, swapping them changes nothing, yet it must flip the sign, so the determinant is zero. And adding a multiple of one row to another does not change the determinant at all. Geometrically, that is a shear. On the left, sliding the top of the square sideways keeps the same base and the same height, so the area stays one, while doubling a column doubles the area. One caution: linear in each row does not mean linear overall, so the determinant of a sum is not the sum of determinants. Next, computing it efficiently.",
}
