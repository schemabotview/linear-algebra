import type { Section } from '../types'

export const definitenessSection: Section = {
  id: 'definiteness',
  title: 'Definite, semidefinite and indefinite forms',
  scene: 'definiteness',
  focus: 'classes',
  slide: `## Definiteness

In principal axes, q(x) = λ₁u₁² + λ₂u₂² + …. So the **signs of the eigenvalues** decide the sign of q.

### The classes
- **Positive definite**: q > 0 for every x ≠ 0. All λ > 0. A bowl
- **Positive semidefinite**: q ≥ 0. All λ ≥ 0, some zero. A trough with a flat direction
- **Negative definite**: all λ < 0. An upside-down bowl
- **Indefinite**: some λ > 0 and some < 0. A saddle

### On the left: where q = 1
- Definite [5 2; 2 2]: a closed ellipse
- Semidefinite [1 1; 1 1] = (x + y)²: two parallel lines, flat along (1, −1)
- Indefinite [1 0; 0 −1] = x² − y²: a hyperbola

### Why it matters
Positive definite S gives an energy that is positive for every nonzero state, and it makes Cholesky (§10.6) possible.`,
  narration:
    "Is a quadratic form always positive? It depends on the signs of the eigenvalues, because in principal axes the form is a weighted sum of squares, with the eigenvalues as weights. If every eigenvalue is positive, the form is positive for every nonzero x. That is positive definite, and its graph is a bowl. If they are all nonnegative but some are zero, the form is positive semidefinite: a trough, flat along the zero-eigenvalue direction. All negative gives an upside-down bowl. And mixed signs give an indefinite form, a saddle, rising in some directions and falling in others. The plot shows where each form equals one. The definite one is a closed ellipse. The semidefinite x plus y, squared, equals one along two parallel lines, and it is zero all along the flat direction one, minus one. The indefinite x squared minus y squared gives a hyperbola. Positive definiteness is the property that makes an energy positive for every nonzero state, and it makes the next factorisation possible. Next, how to test for it.",
}
