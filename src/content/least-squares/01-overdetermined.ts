import type { Section } from '../types'

export const overdetermined: Section = {
  id: 'overdetermined',
  title: 'Overdetermined systems and residuals',
  scene: 'ls-residuals',
  focus: 'compare',
  narration:
    "Projection finds the closest attainable output when a system cannot be solved exactly. This chapter explains least-squares fitting, and separates two things that are easy to confuse: unique predictions and unique coefficients. Suppose the workshop's meters give three readings over time, and we want a straight line through them. Three equations, two unknowns, an intercept and a slope. The points zero, one, then one, two, then two, four do not lie on any line, so the system has no solution. Instead of giving up, we measure how badly each candidate misses. The residual is the vector of misses, b minus A x, and least squares chooses the x that makes the sum of squared misses as small as possible. Here the best line has intercept five sixths and slope one and a half. Its squared misses total about a sixth. The best horizontal line, at the mean, leaves more than four and a half. Best always means best for this objective. Next, how to find it without calculus.",
}
