import type { Section } from '../types'

export const characteristicPolynomial: Section = {
  id: 'characteristic-polynomial',
  title: 'Characteristic polynomial, trace and determinant',
  scene: 'characteristic',
  focus: 'checks',
  narration:
    "How do we find the eigenvalues in the first place? Chapter six gave the key. Lambda is an eigenvalue exactly when A minus lambda times the identity is singular, and that happens exactly when its determinant is zero. Written out, that determinant is a polynomial in lambda, the characteristic polynomial. For the matrix with rows four, one and two, three, it is four minus lambda times three minus lambda, minus two, which simplifies to lambda squared minus seven lambda plus ten. Its roots are two and five, the points where the curve on the left crosses zero. For each root, solve the null space equation to get the eigenvectors. Two checks catch most arithmetic slips. The eigenvalues add up to the trace, the sum of the diagonal, here seven. And they multiply to the determinant, here ten. Use this method by hand for small matrices. For large ones, polynomial roots are numerically fragile, and software uses iterative methods instead. Next, what happens when an eigenvalue repeats.",
}
