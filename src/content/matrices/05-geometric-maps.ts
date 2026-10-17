import type { Section } from '../types'

export const geometricMapsSection: Section = {
  id: 'geometric-maps',
  title: 'Scaling, reflection, rotation and shear',
  scene: 'geometric-maps',
  focus: 'rotate',
  slide: `## Maps of the plane

A 2 × 2 matrix is completely decided by where it sends e₁ = (1, 0) and e₂ = (0, 1): those images **are its columns**, and every other vector is a combination of e₁ and e₂.

### Four maps, four pictures
- **Scaling** [1.5 0; 0 0.5] stretches one axis and squashes the other
- **Reflection** [−1 0; 0 1] flips across the y-axis
- **Rotation** by θ has columns (cos θ, sin θ) and (−sin θ, cos θ)
- **Shear** [1 1; 0 1] slides each point right by its height

### Changing dimension
A 2 × 3 matrix maps ℝ³ to ℝ², for example by dropping a coordinate. A 3 × 2 matrix places ℝ² as a plane inside ℝ³.

### Watch out
All four keep the origin fixed and straight lines straight, which is what linear means geometrically. Only rotation also keeps lengths and angles.`,
  narration:
    "How can you see what a two by two matrix does without computing anything? Look at its columns. The first column is where the vector one, zero lands, and the second is where zero, one lands. Every other vector is a combination of those two, so the matrix is completely decided by them. On the left, the unit square is drawn under two of them, and the cards give all four matrices. Scaling stretches one axis and squashes the other. Reflection flips the square across the vertical axis. Rotation by thirty degrees turns both basis vectors together, keeping lengths and angles. And a shear slides each point sideways in proportion to its height, so the square leans over. Matrices do not have to be square. A two by three matrix takes three dimensional vectors to the plane, and a three by two matrix places the plane inside space. Every one of these keeps the origin fixed and keeps lines straight. Next, a map that looks just as simple but is not linear.",
}
