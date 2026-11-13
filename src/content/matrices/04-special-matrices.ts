import type { Section } from '../types'

export const specialMatricesSection: Section = {
  id: 'special-matrices',
  title: 'Identity, diagonal, triangular and transpose',
  scene: 'special-matrices',
  focus: 'diagonal',
  narration:
    "Which matrices should you recognise immediately? A short list covers most of the course. The identity matrix has ones on the diagonal and zeros elsewhere. It sends every vector to itself, so it plays the role that one plays for numbers. The zero matrix sends everything to zero. A diagonal matrix scales each coordinate axis on its own. On the left, diag two, one half stretches the horizontal direction by two and squashes the vertical by half, so the unit circle becomes an ellipse aligned with the axes. Triangular matrices have zeros on one side of the diagonal. They are what elimination produces in the next chapter, and they can be solved one variable at a time. The transpose turns rows into columns. One rule to remember: the transpose of a product reverses the order, so A B transposed is B transposed times A transposed. Much of this course is about rewriting a general matrix in terms of these simpler ones. Next, the geometry of two by two maps.",
}
