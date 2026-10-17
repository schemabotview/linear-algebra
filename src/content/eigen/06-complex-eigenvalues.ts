import type { Section } from '../types'

export const complexEigenvaluesSection: Section = {
  id: 'complex-eigenvalues',
  title: 'Complex eigenvalues and rotation',
  scene: 'complex-eigenvalues',
  focus: 'spiral',
  slide: `## Complex eigenvalues

A rotation turns every direction, so it has no real eigenvector. Its eigenvalues are **complex**.

### Just enough complex numbers
- i² = −1; a complex number is a + b i, with size √(a² + b²)
- A real matrix's complex eigenvalues come in **conjugate pairs**, a ± b i
- Rotation by 90°: det(R − λ I) = λ² + 1, so λ = ± i

### What λ means for the motion
- **Size |λ|**: how much each step grows or shrinks
- **Angle of λ**: how far each step turns
- C = 0.9 × rotation by 30° has |λ| = 0.9 and angle 30°: an inward spiral
- |λ| > 1 spirals out; |λ| = 1 circles for ever

### Chapter outcome
You can find small eigenspaces, decide when a matrix diagonalises, and explain repeated-map behaviour under stated conditions.`,
  narration:
    "What are the eigenvectors of a rotation? There are none in the plane, because a rotation turns every direction. Yet the characteristic polynomial still has roots. They are complex numbers. Here is just enough of them. The number i satisfies i squared equals minus one, and a complex number a plus b i has a size, the square root of a squared plus b squared. For a ninety degree rotation, the characteristic polynomial is lambda squared plus one, with roots plus and minus i. For a real matrix, complex eigenvalues always come in such conjugate pairs. They still describe the motion. The size of lambda tells how much each step grows or shrinks, and its angle tells how far each step turns. On the left, the matrix is a thirty degree rotation scaled by zero point nine. Its eigenvalues have size zero point nine and angle thirty degrees, so the orbit turns thirty degrees per step while shrinking, and spirals inward. That completes the chapter. Next, symmetric matrices, where everything is real and the eigenvectors are perpendicular.",
}
