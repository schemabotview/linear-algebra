import type { Section } from '../types'

export const scalarsAndVectors: Section = {
  id: 'scalars-and-vectors',
  title: 'Scalars, vectors and points',
  scene: 'points-and-vectors',
  focus: 'plane',
  slide: `## Scalars, vectors and points

A **scalar** is one number. A **vector** is an ordered list of numbers treated as one object: v = (4, 3) lives in ℝ², an order q = (3, 1, 2) in ℝ³.

### Point or vector?
- A **point** is a location: P = (4, 3) is a place in the plane
- A **vector** is a displacement: v = (4, 3) means four across and three up, from any start
- Fix an origin O, and each point P matches the vector from O to P

### Notation
- v₁, v₂, …, vₙ are the **components** of v
- ℝⁿ is the set of all vectors with n real components
- A list of n components is an **n-vector**: the workshop order is a 3-vector

### Watch out
Coordinates depend on the chosen axes and origin. Change them and the numbers change, but the arrow, the displacement itself, does not.`,
  narration:
    "What does it mean to treat a list of numbers as a single object? That is where this course begins. In this first chapter we interpret vectors as mathematical objects, and connect every operation to a geometric and a practical meaning. A scalar is one number, like three or minus a half. A vector is an ordered list of numbers taken together. The pair four, three is a vector in the plane, and the triple three, one, two is a vector in three dimensions. In our recurring example, it records a workshop order: three chairs, one table and two shelves. Now, one distinction matters from the start. A point is a location. A vector is a displacement, an instruction to move four across and three up from wherever you happen to be. On the left, the same vector is drawn twice, from two different starting places, and it is still one vector. Once we fix an origin, every point matches the vector from the origin to it. Next, we combine vectors.",
}
