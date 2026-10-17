import type { Section } from '../types'

export const choosingFactorisations: Section = {
  id: 'choosing-factorisations',
  title: 'Choosing LU, QR, Cholesky or SVD',
  scene: 'choosing',
  focus: 'decision',
  slide: `## Choosing a factorisation

Match the method to the **structure** of the problem and to the **question** being asked.

### A short decision guide
- Square, general: **LU with partial pivoting**
- Symmetric positive definite: **Cholesky**, at half the cost
- Least squares with full column rank: **QR**, which avoids squaring κ
- Rank deficient, ill-conditioned, or rank itself in question: **SVD**

### Scale and structure
- Factor once, then reuse the factors for many right-hand sides
- Large sparse matrices need sparse or iterative methods, which this course only orients towards
- Never form A⁻¹ or AᵀA unless you need them as objects
- On the left: the same calls in NumPy, with outputs from a real run`,
  narration:
    "With four factorisations available, which should you use? Match the method to the structure of the matrix and to the question you are asking. For a general square system, LU with partial pivoting is the standard: stable in practice and efficient. If the matrix is symmetric positive definite, Cholesky does the same job with half the work and no pivoting. For least squares with independent columns, QR, because it avoids squaring the condition number as the normal equations do. And when the matrix may be rank deficient, badly conditioned, or when the rank itself is the question, use the SVD. It costs several times more, but it tells you the most. Some habits apply everywhere. Factor once and reuse the factors. Never form an inverse, or A transpose A, unless you need them as objects in their own right. For very large sparse problems, specialised iterative methods take over, beyond this course. On the left is the library version: NumPy recovers the workshop order three, one, two, and reports a condition number of about nineteen. Next, the integrated cases.",
}
