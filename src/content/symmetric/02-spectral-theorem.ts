import type { Section } from '../types'

export const spectralTheorem: Section = {
  id: 'spectral-theorem',
  title: 'The spectral theorem',
  scene: 'spectral',
  focus: 'ellipse',
  narration:
    "What does a symmetric matrix do to space? The spectral theorem gives the complete answer. Every real symmetric matrix factors as Q Lambda Q transpose. The columns of Q are orthonormal eigenvectors, and Lambda holds the eigenvalues. Compare it with chapter nine's diagonalisation. The awkward V inverse has become simply Q transpose, because the eigenvectors are orthonormal. Geometrically: rotate into the eigenvector axes, stretch along each axis by its eigenvalue, and rotate back. So the unit circle becomes an ellipse whose axes are the eigenvectors, with semi-axes six and one for our example. The same factorisation reads as a sum. S is six times the projection onto q one, plus one times the projection onto q two, and the table checks that the two pieces add back to S. When an eigenvalue repeats, there is freedom. Its eigenspace has full dimension, and any orthonormal basis of that space will do. For three times the identity, every orthonormal basis diagonalises it. Next, the functions that symmetric matrices describe.",
}
