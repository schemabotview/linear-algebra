import type { Section } from '../types'

export const augmentedMatrices: Section = {
  id: 'augmented-matrices',
  title: 'Equations and augmented matrices',
  scene: 'row-picture',
  focus: 'augmented',
  slide: `## Systems and augmented matrices

A **linear system** asks which x satisfies A x = b. The **augmented matrix** [A | b] stores exactly the numbers that matter.

### Two pictures of one system
- **Row picture**: each equation is a line (a plane in ℝ³); solutions lie on all of them
- **Column picture**: find weights so the columns of A combine to b
- 2x − y = 1 and x + y = 5 meet at (2, 3), and 2·(2, 1) + 3·(−1, 1) = (1, 5)

### The workshop, run backwards
- Chapter 2 computed the needs b from an order q
- Now b = (34, 11, 11) is given, and the order q is unknown

### Watch out
More equations do not guarantee a solution, and they do not guarantee a unique one. That depends on how the equations relate.`,
  narration:
    "So far a matrix has turned an input into an output. This chapter runs that backwards: given the output, which inputs could have produced it? We construct and solve systems, and explain why the method works. Take two equations, two x minus y equals one, and x plus y equals five. In the row picture, each equation is a line, and the solution is where they meet, at two, three. In the column picture, we ask for weights on the columns that produce the right-hand side, and two of the first column plus three of the second gives exactly one, five. For the workshop, chapter two computed resource needs from an order. Now the needs are given, thirty four, eleven and eleven, and the order is the unknown. Writing the coefficients and the targets side by side, without the variable names, gives the augmented matrix. It holds every number the problem needs. Next, the operations we are allowed to perform on it.",
}
