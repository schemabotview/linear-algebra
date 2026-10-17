import type { Section } from '../types'

export const overdetermined: Section = {
  id: 'overdetermined',
  title: 'Overdetermined systems and residuals',
  scene: 'ls-residuals',
  focus: 'compare',
  slide: `## Overdetermined systems

With more measurements than unknowns, A x = b usually has **no** solution: b is not in C(A). So we ask for the best approximate one.

### Residuals
- For any x, the **residual** is e = b − A x
- **Least squares** chooses x̂ to minimise ‖e‖² = e₁² + … + eₘ²
- Squares penalise large misses and make the geometry work

### Three measurements, two unknowns
- Fit y = c + d t to (0, 1), (1, 2), (2, 4): no line hits all three
- Best line: c = 5/6, d = 1.5, with ‖e‖² ≈ 0.17
- The best constant, y = 7/3, leaves ‖e‖² ≈ 4.67

### Watch out
"Best" is relative to the squared-error objective. A different objective, such as the largest single miss, picks a different line.`,
  narration:
    "Projection finds the closest attainable output when a system cannot be solved exactly. This chapter explains least-squares fitting, and separates two things that are easy to confuse: unique predictions and unique coefficients. Suppose the workshop's meters give three readings over time, and we want a straight line through them. Three equations, two unknowns, an intercept and a slope. The points zero, one, then one, two, then two, four do not lie on any line, so the system has no solution. Instead of giving up, we measure how badly each candidate misses. The residual is the vector of misses, b minus A x, and least squares chooses the x that makes the sum of squared misses as small as possible. Here the best line has intercept five sixths and slope one and a half. Its squared misses total about a sixth. The best horizontal line, at the mean, leaves more than four and a half. Best always means best for this objective. Next, how to find it without calculus.",
}
