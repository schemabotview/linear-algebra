import type { Section } from '../types'

export const eigenEquationSection: Section = {
  id: 'eigen-equation',
  title: 'Eigenvalues, eigenvectors and eigenspaces',
  scene: 'eigen-equation',
  focus: 'directions',
  narration:
    "Least squares applied a map once. Now we apply a square map again and again, and ask which directions it leaves alone. This chapter explains these invariant directions, and when they make a map simple. An eigenvector of a square matrix is a nonzero vector that the matrix does not turn: it only stretches, shrinks or flips it. The factor is the eigenvalue. Take the matrix with rows two, one and one, two. It sends one, one to three, three, so that direction is stretched by three. It sends one, minus one to itself, eigenvalue one. But one, zero goes to two, one, a different direction, so it is not an eigenvector. Rewriting A v equals lambda v as A minus lambda I times v equals zero shows that the eigenvectors for one eigenvalue form a null space, called the eigenspace. The zero vector is excluded by definition, because it would satisfy the equation for every lambda. An eigenvalue of zero is allowed, though, and it means the matrix is singular. Next, how to find eigenvalues.",
}
