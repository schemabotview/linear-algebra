import type { Section } from '../types'

export const rowOperationsSection: Section = {
  id: 'row-operations',
  title: 'Equivalent systems and row operations',
  scene: 'row-operations',
  focus: 'replace',
  narration:
    "What are we allowed to do to a system without changing its answer? Three things, and each one can be undone. We can swap two rows. We can multiply a row by a number that is not zero. And we can add a multiple of one row to another. Why is the solution set safe? Any point that satisfies the old equations satisfies the new one, because the new one is built from them. And since every operation can be reversed, the new system cannot admit anything the old one excluded. On the left, subtracting half of the first equation from the second replaces the line x plus y equals five with the horizontal line y equals three. It is a different line, but it passes through exactly the same solution, two, three. That is the whole idea of elimination: keep replacing equations with simpler ones that share the same solutions. One warning. Multiplying a row by zero is not allowed, because it throws an equation away. Next, elimination itself.",
}
