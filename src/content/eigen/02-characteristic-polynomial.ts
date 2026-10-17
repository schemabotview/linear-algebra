import type { Section } from '../types'

export const characteristicPolynomial: Section = {
  id: 'characteristic-polynomial',
  title: 'Characteristic polynomial, trace and determinant',
  scene: 'characteristic',
  focus: 'checks',
  slide: `## Finding eigenvalues

λ is an eigenvalue exactly when A − λ I is singular: **det(A − λ I) = 0**. The left side is the **characteristic polynomial**.

### For B = [4 1; 2 3]
- det(B − λ I) = (4 − λ)(3 − λ) − 2 = λ² − 7λ + 10
- Roots λ = 2 and λ = 5
- Then solve (B − λ I) v = 0 for each: v = (−1, 2) and (1, 1)
- An n × n matrix has n eigenvalues, counting repeats, possibly complex

### Two quick checks
- **Sum of eigenvalues = trace** (sum of the diagonal): 2 + 5 = 4 + 3
- **Product of eigenvalues = det**: 2 · 5 = 12 − 2
- For A = [2 1; 1 2]: 3 + 1 = 4 and 3 · 1 = 3

### Watch out
This is the right method by hand for 2 × 2 and 3 × 3. For larger matrices, software uses iterative methods, not polynomial roots, which are numerically fragile.`,
  narration:
    "How do we find the eigenvalues in the first place? Chapter six gave the key. Lambda is an eigenvalue exactly when A minus lambda times the identity is singular, and that happens exactly when its determinant is zero. Written out, that determinant is a polynomial in lambda, the characteristic polynomial. For the matrix with rows four, one and two, three, it is four minus lambda times three minus lambda, minus two, which simplifies to lambda squared minus seven lambda plus ten. Its roots are two and five, the points where the curve on the left crosses zero. For each root, solve the null space equation to get the eigenvectors. Two checks catch most arithmetic slips. The eigenvalues add up to the trace, the sum of the diagonal, here seven. And they multiply to the determinant, here ten. Use this method by hand for small matrices. For large ones, polynomial roots are numerically fragile, and software uses iterative methods instead. Next, what happens when an eigenvalue repeats.",
}
