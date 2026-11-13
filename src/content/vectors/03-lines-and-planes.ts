import type { Section } from '../types'

export const linesAndPlanes: Section = {
  id: 'lines-and-planes',
  title: 'Lines and planes',
  scene: 'lines-planes',
  focus: 'lines',
  narration:
    "How do we describe a line using vectors, rather than a slope and an intercept? Start from a point p, choose a direction d, and add every multiple of d. That is x equals p plus t times d, with one free scalar t. On the left, d is two across and one up. The lower line is t times d, and it passes through the origin. The upper line starts from p equals zero, two. It is the same line shifted up, and the two are parallel because they share a direction. That difference will matter later. The line through the origin is closed under addition and scaling: add two of its points and you stay on it. The shifted line is not. Add two of its points and you leave it. Give the description a second free scalar and a second direction, not parallel to the first, and you have a plane. The same formula works in three dimensions and beyond, with no new ideas. Next, we measure length and angle.",
}
