import type { Section } from '../types'

export const normalEquationsSection: Section = {
  id: 'normal-equations',
  title: 'The normal equations by projection',
  scene: 'normal-equations',
  focus: 'derivation',
  narration:
    "How do we find the best line? Not by trial and error, and not with calculus. With the geometry of the previous chapter. The set of all possible outputs A x is the column space. The output closest to b is its projection onto that space. And the residual of a projection is perpendicular to the space, so it is perpendicular to every column of A. Writing that down column by column gives A transpose times the residual equals zero. Expand the residual, and you get the normal equations: A transpose A times x hat equals A transpose b. For our three measurements, A transpose A is three, three, three, five, and A transpose b is seven, ten. Solving gives an intercept of five sixths and a slope of three halves, exactly the line we saw. The residual is one sixth, minus one third, one sixth, and dotting it with either column gives zero. The derivation is clean, but as a numerical method the normal equations can lose accuracy. Next, what happens when the columns are dependent.",
}
