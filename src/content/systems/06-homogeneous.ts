import type { Section } from '../types'

export const homogeneousSection: Section = {
  id: 'homogeneous',
  title: 'Homogeneous systems and particular solutions',
  scene: 'homogeneous',
  focus: 'decomposition',
  slide: `## Particular plus homogeneous

A system A x = 0 is **homogeneous**. It always has the solution x = 0, and its solutions are closed under addition and scaling.

### The general solution
- Find **one** particular solution xₚ of A x = b
- Find **all** solutions xₕ of A x = 0
- Then every solution of A x = b is **xₚ + xₕ**, and nothing else

### Why it works
- A (xₚ + xₕ) = b + 0 = b, so every such sum is a solution
- If x and xₚ both solve A x = b, then A (x − xₚ) = 0
- So a solution is **unique** exactly when A x = 0 has only x = 0

### Watch out
The homogeneous solutions pass through the origin; the solutions of A x = b do not, unless b = 0. On the left, the lines lie in different x₃ slices: x₃ = 0 and x₃ = 3.`,
  narration:
    "Is there a structure behind every solution set? Yes, and it comes from systems whose right-hand side is zero. A homogeneous system, A x equals zero, always has at least one solution, the zero vector. And its solutions can be added and scaled without leaving the set, just like the line through the origin in chapter one. Now take any system A x equals b. Find one solution, any one, and call it the particular solution. Then every solution of the full system is that particular solution plus some solution of the homogeneous system. Why? Adding a homogeneous solution changes A x by zero, so the sum still works. And the difference of any two solutions of A x equals b is a homogeneous solution. On the left, the homogeneous solutions form a line through the origin, and the full solution set is the same line shifted by the particular solution. One condition decides uniqueness: whether A x equals zero has only the zero solution. Next, what changes when the arithmetic is not exact.",
}
