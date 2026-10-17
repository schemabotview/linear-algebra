import type { Section } from '../types'

export const reducedEchelonSection: Section = {
  id: 'reduced-echelon',
  title: 'Reduced echelon form and parameterised solutions',
  scene: 'reduced-echelon',
  focus: 'family',
  slide: `## Reduced echelon form and free variables

**Reduced echelon form** goes further: every pivot is 1 and is the only nonzero entry in its column.

### Pivot and free variables
- Columns with a pivot give **pivot variables**: here x₁ and x₃
- Columns without one give **free variables**: here x₂ = t, any number
- Each pivot row then expresses one pivot variable in terms of the free ones

### Reading the solution set
- x₁ = 2 − 2t, x₂ = t, x₃ = 3
- As a vector: **x = (2, 0, 3) + t (−2, 1, 0)**, a line in ℝ³
- On the left, t = 0, 1, 2 give three of its points

### Watch out
The choice of which variables are free comes from the pivot columns. The solution set itself does not depend on that choice.`,
  narration:
    "What does the answer look like when a system has infinitely many solutions? Take two equations in three unknowns. Elimination subtracts twice the first row from the second, which leaves x three equals three. Then we go one step further than before. Subtracting three of the second row from the first clears the entry above that pivot. This is reduced echelon form: every pivot is one, and it is alone in its column. Columns with a pivot belong to pivot variables, here x one and x three. The column without one belongs to a free variable, x two, which can be any number. Call it t. Then the rows read off everything else: x one is two minus two t, and x three is three. Written as vectors, the solution set is the point two, zero, three plus any multiple of minus two, one, zero. That is a line in three dimensions, and it is exactly the parametric form from chapter one. Next, the three outcomes every system can have.",
}
