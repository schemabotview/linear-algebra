import type { Section } from '../types'

export const diagonalisationSection: Section = {
  id: 'diagonalisation',
  title: 'Diagonalisation and defective matrices',
  scene: 'diagonalisation',
  focus: 'factorisation',
  narration:
    "Why do eigenvectors matter so much? Because when there are enough of them, they make a matrix diagonal. If an n by n matrix has n independent eigenvectors, put them in the columns of a matrix V and the eigenvalues on the diagonal of D. Then A equals V D V inverse. Read it from right to left. V inverse writes x in eigenvector coordinates. D stretches each coordinate by its own eigenvalue, independently. And V converts back. It is chapter five's change of basis, with the eigenvectors as the basis. For our running example, V has columns one, one and one, minus one, and D is diag three, one. The plot shows what that means. The unit circle becomes an ellipse whose axes point exactly along the eigenvectors, stretched by three along one and by one along the other. Not every matrix qualifies. The matrix J from the previous section has only one eigenvector direction, so there is no V. It is called defective, and no choice of basis makes it diagonal. Next, what diagonalisation does for repeated maps.",
}
