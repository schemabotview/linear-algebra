import type { Section } from '../types'

export const cramerSection: Section = {
  id: 'cramer',
  title: "Cramer's rule and its trade-offs",
  scene: 'cramer',
  focus: 'ratios',
  narration:
    "Can determinants solve a system directly? Yes. Cramer's rule says each unknown is a ratio of two determinants. The denominator is det A. The numerator is the determinant of A with one column replaced by the right-hand side. For two x plus y equals five and x plus three y equals ten, det A is five. Replacing the first column by five, ten gives determinant five, so x is one. Replacing the second column gives fifteen, so y is three. The lines on the left meet at exactly one, three. Cramer's rule is valuable in theory. It gives explicit formulas for small symbolic systems, and it shows that the solution changes smoothly with A and b, as long as the determinant is not zero. As an algorithm, though, it is wasteful. It needs n plus one determinants. At n equals ten that is roughly ten times the work of elimination, and with cofactor expansion, tens of millions of operations. That completes the chapter. Next, inner products, which let us measure alignment and closest approximations.",
}
