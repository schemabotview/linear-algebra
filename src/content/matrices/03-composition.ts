import type { Section } from '../types'

export const compositionSection: Section = {
  id: 'composition',
  title: 'Multiplication as composition',
  scene: 'composition',
  focus: 'orders',
  slide: `## Matrix multiplication is composition

The product A B is the single matrix that does **B first, then A**: (A B) x = A (B x).

### Dimensions
- (m × n)(n × p) gives m × p: the inner sizes must agree
- Column j of A B is A times column j of B

### Order matters
- R rotates by 90°; S shears right by y
- S R = [1 −1; 1 0] but R S = [0 −1; 1 1]
- On the left, the unit square lands in **two different places**

### Reading a product
- Read right to left: the matrix next to x acts first
- A product of three, A B C, applies C, then B, then A

### Watch out
A B and B A may both exist and still differ, or only one of them may exist at all.`,
  narration:
    "What does it mean to multiply two matrices? The answer is not a rule about rows and columns. It is composition. The product A times B is the one matrix that does B first and then A. Apply it to a vector, and you get A applied to B x. That explains the shape rule. If B takes p components to n, A has to accept n, so the inner sizes must agree, and the result goes from p to m. It also explains why order matters. On the left, R rotates by ninety degrees and S is a shear. Rotate and then shear, and the unit square lands in one place. Shear and then rotate, and it lands somewhere else. S R and R S are different matrices, and nothing is wrong with either. So read a product from right to left: the matrix nearest the vector acts first. Next, a handful of special matrices worth recognising on sight.",
}
