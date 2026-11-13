import type { Section } from '../types'

export const reducedEchelonSection: Section = {
  id: 'reduced-echelon',
  title: 'Reduced echelon form and parameterised solutions',
  scene: 'reduced-echelon',
  focus: 'family',
  narration:
    "What does the answer look like when a system has infinitely many solutions? Take two equations in three unknowns. Elimination subtracts twice the first row from the second, which leaves x three equals three. Then we go one step further than before. Subtracting three of the second row from the first clears the entry above that pivot. This is reduced echelon form: every pivot is one, and it is alone in its column. Columns with a pivot belong to pivot variables, here x one and x three. The column without one belongs to a free variable, x two, which can be any number. Call it t. Then the rows read off everything else: x one is two minus two t, and x three is three. Written as vectors, the solution set is the point two, zero, three plus any multiple of minus two, one, zero. That is a line in three dimensions, and it is exactly the parametric form from chapter one. Next, the three outcomes every system can have.",
}
