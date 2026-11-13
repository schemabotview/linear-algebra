import type { Section } from '../types'

export const complexEigenvaluesSection: Section = {
  id: 'complex-eigenvalues',
  title: 'Complex eigenvalues and rotation',
  scene: 'complex-eigenvalues',
  focus: 'spiral',
  narration:
    "What are the eigenvectors of a rotation? There are none in the plane, because a rotation turns every direction. Yet the characteristic polynomial still has roots. They are complex numbers. Here is just enough of them. The number i satisfies i squared equals minus one, and a complex number a plus b i has a size, the square root of a squared plus b squared. For a ninety degree rotation, the characteristic polynomial is lambda squared plus one, with roots plus and minus i. For a real matrix, complex eigenvalues always come in such conjugate pairs. They still describe the motion. The size of lambda tells how much each step grows or shrinks, and its angle tells how far each step turns. On the left, the matrix is a thirty degree rotation scaled by zero point nine. Its eigenvalues have size zero point nine and angle thirty degrees, so the orbit turns thirty degrees per step while shrinking, and spirals inward. That completes the chapter. Next, symmetric matrices, where everything is real and the eigenvectors are perpendicular.",
}
