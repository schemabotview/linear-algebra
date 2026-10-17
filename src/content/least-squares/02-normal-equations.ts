import type { Section } from '../types'

export const normalEquationsSection: Section = {
  id: 'normal-equations',
  title: 'The normal equations by projection',
  scene: 'normal-equations',
  focus: 'derivation',
  slide: `## The normal equations

Minimising ‖b − A x‖ is projection: A x̂ must be the point of C(A) closest to b.

### The derivation, in four steps
- The closest point is the projection of b onto C(A)
- So the residual e = b − A x̂ is perpendicular to C(A)
- Perpendicular to every column: **Aᵀ e = 0**, one equation per column
- Rearranged: **AᵀA x̂ = Aᵀ b**

### For the three measurements
- AᵀA = [3 3; 3 5] and Aᵀb = (7, 10)
- Solving gives x̂ = (5/6, 3/2)
- Check: e = (1/6, −1/3, 1/6), and Aᵀe = (0, 0)
- The column of ones forces the residuals to sum to zero

### Watch out
The normal equations are ideal for derivations. As a numerical method they can lose accuracy, as §8.4 shows.`,
  narration:
    "How do we find the best line? Not by trial and error, and not with calculus. With the geometry of the previous chapter. The set of all possible outputs A x is the column space. The output closest to b is its projection onto that space. And the residual of a projection is perpendicular to the space, so it is perpendicular to every column of A. Writing that down column by column gives A transpose times the residual equals zero. Expand the residual, and you get the normal equations: A transpose A times x hat equals A transpose b. For our three measurements, A transpose A is three, three, three, five, and A transpose b is seven, ten. Solving gives an intercept of five sixths and a slope of three halves, exactly the line we saw. The residual is one sixth, minus one third, one sixth, and dotting it with either column gives zero. The derivation is clean, but as a numerical method the normal equations can lose accuracy. Next, what happens when the columns are dependent.",
}
