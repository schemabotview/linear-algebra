import type { Section } from '../types'

export const scalarsAndVectors: Section = {
  id: 'scalars-and-vectors',
  title: 'Scalars, vectors and points',
  scene: 'points-and-vectors',
  focus: 'plane',
  narration:
    "What does it mean to treat a list of numbers as a single object? That is where this course begins. In this first chapter we interpret vectors as mathematical objects, and connect every operation to a geometric and a practical meaning. A scalar is one number, like three or minus a half. A vector is an ordered list of numbers taken together. The pair four, three is a vector in the plane, and the triple three, one, two is a vector in three dimensions. In our recurring example, it records a workshop order: three chairs, one table and two shelves. Now, one distinction matters from the start. A point is a location. A vector is a displacement, an instruction to move four across and three up from wherever you happen to be. On the left, the same vector is drawn twice, from two different starting places, and it is still one vector. Once we fix an origin, every point matches the vector from the origin to it. Next, we combine vectors.",
}
