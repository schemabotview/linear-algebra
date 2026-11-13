import type { Section } from '../types'

export const projectionsSection: Section = {
  id: 'projections',
  title: 'Projection onto a vector or subspace',
  scene: 'projections',
  focus: 'drop',
  narration:
    "What is the closest point to b on a line? Drop a perpendicular. The foot of that perpendicular is the projection p, and the leftover, b minus p, is the residual e, which meets the line at a right angle. That one condition gives the formula. For a line through a, the residual must be perpendicular to a, so the coefficient is a transpose b over a transpose a. Here a is two, one and b is one, three. The coefficient is five over five, so p is two, one, and the residual is minus one, two. Its dot product with a is zero, as promised. For a whole subspace, the column space of A, the residual must be perpendicular to every column at once. That gives A transpose A times x hat equals A transpose b, the equation at the heart of the next chapter. Why is perpendicular the same as closest? By Pythagoras, the distance to any other point adds a second, nonnegative square. And projecting twice changes nothing. Next, building an orthonormal basis from any basis.",
}
