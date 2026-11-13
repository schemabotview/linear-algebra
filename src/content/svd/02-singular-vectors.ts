import type { Section } from '../types'

export const singularVectors: Section = {
  id: 'singular-vectors',
  title: 'Singular vectors, stretch factors, AᵀA and AAᵀ',
  scene: 'svd-geometry',
  focus: 'ellipse',
  narration:
    "What does a matrix do geometrically, in general? The SVD says: rotate, stretch, rotate. Read A x as U times Sigma times V transpose times x. First, V transpose rotates the input so its special directions line up with the axes. Then Sigma stretches each axis by its singular value. Then U rotates the result into place. So the unit circle always becomes an ellipse. On the left, the matrix with rows three, zero and four, five sends the circle to a long, tilted ellipse. The input direction v one, along one, one, lands on the long axis, stretched by about six point seven. The input direction v two lands on the short axis, stretched by about two point two. Where do these come from? A transpose A has V as its eigenvectors and the squared singular values as its eigenvalues, here forty five and five. Similarly, U holds the eigenvectors of A A transpose. That explains the SVD, but it is not how to compute it: forming A transpose A squares the condition number, exactly as in chapter eight. Next, the SVD as a sum.",
}
