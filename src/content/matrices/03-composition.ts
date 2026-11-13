import type { Section } from '../types'

export const compositionSection: Section = {
  id: 'composition',
  title: 'Multiplication as composition',
  scene: 'composition',
  focus: 'orders',
  narration:
    "What does it mean to multiply two matrices? The answer is not a rule about rows and columns. It is composition. The product A times B is the one matrix that does B first and then A. Apply it to a vector, and you get A applied to B x. That explains the shape rule. If B takes p components to n, A has to accept n, so the inner sizes must agree, and the result goes from p to m. It also explains why order matters. On the left, R rotates by ninety degrees and S is a shear. Rotate and then shear, and the unit square lands in one place. Shear and then rotate, and it lands somewhere else. S R and R S are different matrices, and nothing is wrong with either. So read a product from right to left: the matrix nearest the vector acts first. Next, a handful of special matrices worth recognising on sight.",
}
