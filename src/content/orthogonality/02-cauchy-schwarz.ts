import type { Section } from '../types'

export const cauchySchwarzSection: Section = {
  id: 'cauchy-schwarz',
  title: 'Cauchy–Schwarz and the triangle inequality',
  scene: 'cauchy-schwarz',
  focus: 'inequalities',
  slide: `## Cauchy–Schwarz and the triangle inequality

Two inequalities hold for every inner product. They make angles and distances behave the way geometry demands.

### Cauchy–Schwarz
- |⟨u, v⟩| ≤ ‖u‖ ‖v‖
- So ⟨u, v⟩ / (‖u‖ ‖v‖) lies in [−1, 1], and the angle formula always makes sense
- u = (3, 1), v = (1, 2): |5| ≤ √50 ≈ 7.07

### Triangle inequality
- ‖u + v‖ ≤ ‖u‖ + ‖v‖: the direct route is never longer
- Here 5 ≤ √10 + √5 ≈ 5.40

### Equality cases
- Cauchy–Schwarz is an equality exactly when u and v are parallel
- The triangle inequality is an equality when they point the **same** way`,
  narration:
    "Why can we always turn a dot product into an angle? Because of the Cauchy–Schwarz inequality. It says the size of the inner product of two vectors is at most the product of their lengths. Divide through, and the ratio always lands between minus one and one, so it is a legitimate cosine. For u equals three, one and v equals one, two, the dot product is five, and the product of the lengths is root fifty, about seven. The triangle inequality follows from it. The length of a sum is at most the sum of the lengths, which is the familiar fact that going straight is never longer than taking a detour. On the left, the direct arrow has length five, while the two-step route has length about five point four. Both inequalities become equalities only in special cases. Cauchy–Schwarz is tight exactly when the vectors are parallel, and the triangle inequality is tight when they point the same way. Next, bases whose vectors are all perpendicular.",
}
