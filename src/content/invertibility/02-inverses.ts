import type { Section } from '../types'

export const inversesSection: Section = {
  id: 'inverses',
  title: 'Inverses and equivalent conditions',
  scene: 'inverses',
  focus: 'conditions',
  slide: `## Inverses

A square matrix A is **invertible** if some A⁻¹ undoes it: A⁻¹ A = A A⁻¹ = I.

### A reversible map
- A = [2 1; 1 1] has A⁻¹ = [1 −1; −1 2]
- On the left, A turns the unit square into a parallelogram, and A⁻¹ sends each point back
- Then A x = b has exactly one solution: x = A⁻¹ b

### One fact, many faces
- For square A, all of these say the same thing: A⁻¹ exists, rank n, N(A) = {0}, the columns form a basis
- Check whichever is easiest; the others follow
- If any one fails, they all fail, and A is **singular**
- An invertible linear map is an **isomorphism**: a relabelling that loses nothing

### Watch out
(A B)⁻¹ = B⁻¹ A⁻¹: undo the last step first, as with socks and shoes.`,
  narration:
    "When can a map be run backwards? When it is square and loses nothing. Then there is an inverse matrix that undoes it, in either order. On the left, A with rows two, one and one, one turns the unit square into a parallelogram. Its inverse, with rows one, minus one and minus one, two, sends every point straight back. For example, A sends one, zero to two, one, and the inverse brings two, one back to one, zero. With an inverse in hand, A x equals b has exactly one solution for every b. What makes this chapter tidy is that many conditions turn out to be the same condition. For a square matrix, having an inverse, having full rank, having only the zero vector in the null space, and having columns that form a basis all imply one another. So you can check whichever is easiest. One rule to remember: the inverse of a product reverses the order, the same way you take off shoes before socks. Next, how to compute an inverse, and why you usually should not.",
}
