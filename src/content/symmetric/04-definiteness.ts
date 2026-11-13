import type { Section } from '../types'

export const definitenessSection: Section = {
  id: 'definiteness',
  title: 'Definite, semidefinite and indefinite forms',
  scene: 'definiteness',
  focus: 'classes',
  narration:
    "Is a quadratic form always positive? It depends on the signs of the eigenvalues, because in principal axes the form is a weighted sum of squares, with the eigenvalues as weights. If every eigenvalue is positive, the form is positive for every nonzero x. That is positive definite, and its graph is a bowl. If they are all nonnegative but some are zero, the form is positive semidefinite: a trough, flat along the zero-eigenvalue direction. All negative gives an upside-down bowl. And mixed signs give an indefinite form, a saddle, rising in some directions and falling in others. The plot shows where each form equals one. The definite one is a closed ellipse. The semidefinite x plus y, squared, equals one along two parallel lines, and it is zero all along the flat direction one, minus one. The indefinite x squared minus y squared gives a hyperbola. Positive definiteness is the property that makes an energy positive for every nonzero state, and it makes the next factorisation possible. Next, how to test for it.",
}
