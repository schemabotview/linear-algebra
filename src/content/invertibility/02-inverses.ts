import type { Section } from '../types'

export const inversesSection: Section = {
  id: 'inverses',
  title: 'Inverses and equivalent conditions',
  scene: 'inverses',
  focus: 'conditions',
  narration:
    "When can a map be run backwards? When it is square and loses nothing. Then there is an inverse matrix that undoes it, in either order. On the left, A with rows two, one and one, one turns the unit square into a parallelogram. Its inverse, with rows one, minus one and minus one, two, sends every point straight back. For example, A sends one, zero to two, one, and the inverse brings two, one back to one, zero. With an inverse in hand, A x equals b has exactly one solution for every b. What makes this chapter tidy is that many conditions turn out to be the same condition. For a square matrix, having an inverse, having full rank, having only the zero vector in the null space, and having columns that form a basis all imply one another. So you can check whichever is easiest. One rule to remember: the inverse of a product reverses the order, the same way you take off shoes before socks. Next, how to compute an inverse, and why you usually should not.",
}
