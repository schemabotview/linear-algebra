import type { Section } from '../types'

export const choleskySection: Section = {
  id: 'cholesky',
  title: 'Cholesky factorisation',
  scene: 'cholesky',
  focus: 'factors',
  slide: `## Cholesky factorisation

Every symmetric positive definite S factors as **S = L Lᵀ**, with L lower triangular and a positive diagonal.

### How it is computed
- Work column by column, as in LU, but take a square root on the diagonal
- For S = [4 2 2; 2 5 3; 2 3 6]: L = [2 0 0; 1 2 0; 1 1 2]
- Each square root is of a positive number, **because** S is positive definite

### Why use it
- About n³/6 operations: half the work of LU
- Solve S x = b with two triangular solves, L c = b then Lᵀ x = c
- Numerically stable without any pivoting

### Watch out
If a square root of a negative number appears, S is not positive definite. Cholesky doubles as the cheapest practical definiteness test.`,
  narration:
    "Does positive definiteness buy anything computationally? Yes, a faster and more stable factorisation. Every symmetric positive definite matrix can be written as L times L transpose, with L lower triangular and positive on its diagonal. It is like LU, but the symmetry means the upper factor is just the transpose of the lower one, so half the work disappears. The computation goes column by column. The first diagonal entry is the square root of four, which is two. The entries below it are divided by that two, giving one and one. The next diagonal entry is the square root of five minus one squared, which is two, and so on. Every square root along the way is of a positive number, and that is guaranteed precisely by positive definiteness. Cholesky costs about n cubed over six operations, half of LU, needs no pivoting, and solving a system is two triangular solves. And if you ever meet the square root of a negative number, the matrix was not positive definite, so Cholesky is also the cheapest practical test. Next, covariance.",
}
