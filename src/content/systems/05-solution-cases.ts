import type { Section } from '../types'

export const solutionCasesSection: Section = {
  id: 'solution-cases',
  title: 'Unique, inconsistent and infinite solution sets',
  scene: 'solution-cases',
  focus: 'signatures',
  slide: `## One, none, or infinitely many

Every linear system has **exactly one** solution, **no** solution, or **infinitely many**. Never two, never five.

### Reading the echelon form
- A row [0 … 0 | c] with c ≠ 0 says 0 = c: the system is **inconsistent**
- Otherwise it is consistent. Every column has a pivot: **unique** solution
- Consistent with a free variable: **infinitely many**

### In the workshop
- Change one target and the constraints can contradict each other
- Duplicate an equation and it adds no information: a free variable appears
- With three unknowns each equation is a plane, and the same three cases hold

### Why never exactly two
If x and y both solve A x = b, then every point (1 − t) x + t y does too, so the solutions fill a whole line.`,
  narration:
    "How many solutions can a linear system have? Only three answers are possible: one, none, or infinitely many. The plot shows all three. The line x plus two y equals four crosses x minus y equals one exactly once, at two, one. It never meets two x plus four y equals ten, which is parallel. And two x plus four y equals eight is the same line written differently, so they share every point. Elimination tells these cases apart without a picture. If a row reduces to zeros on the left and a nonzero number on the right, it claims zero equals two, and the system is inconsistent. Otherwise there is a solution, and it is unique only if every unknown has a pivot. A free variable means infinitely many. Why can there never be exactly two? If two different points both solve the system, every point on the line through them does too. In the workshop, changing one target can make constraints contradict each other. Next, systems whose right-hand side is zero.",
}
