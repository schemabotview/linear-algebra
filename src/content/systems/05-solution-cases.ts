import type { Section } from '../types'

export const solutionCasesSection: Section = {
  id: 'solution-cases',
  title: 'Unique, inconsistent and infinite solution sets',
  scene: 'solution-cases',
  focus: 'signatures',
  narration:
    "How many solutions can a linear system have? Only three answers are possible: one, none, or infinitely many. The plot shows all three. The line x plus two y equals four crosses x minus y equals one exactly once, at two, one. It never meets two x plus four y equals ten, which is parallel. And two x plus four y equals eight is the same line written differently, so they share every point. Elimination tells these cases apart without a picture. If a row reduces to zeros on the left and a nonzero number on the right, it claims zero equals two, and the system is inconsistent. Otherwise there is a solution, and it is unique only if every unknown has a pivot. A free variable means infinitely many. Why can there never be exactly two? If two different points both solve the system, every point on the line through them does too. In the workshop, changing one target can make constraints contradict each other. Next, systems whose right-hand side is zero.",
}
