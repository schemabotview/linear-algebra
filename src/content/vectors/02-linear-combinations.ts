import type { Section } from '../types'

export const linearCombinations: Section = {
  id: 'linear-combinations',
  title: 'Adding, scaling and combining',
  scene: 'combinations',
  focus: 'sum',
  slide: `## Adding, scaling and combining

Vectors add **component by component**, and a scalar multiplies **every** component. Together they build **linear combinations**: a u + b v.

### Geometry
- **u + v**: start v at the tip of u; the sum runs from the start of u to the tip of the moved v
- **u − v** = u + (−1)v, drawn from the tip of v to the tip of u, as on the left
- **c u** stretches u by c; a negative c also reverses it

### The workshop
- A chair needs c = (4, 2, 1): kg of material, hours of labour, kWh of energy
- A table needs t = (10, 3, 2)
- Three chairs and a table need **3c + t = (22, 9, 5)**

### Watch out
Only vectors with the same number of components, in matching units, can be added.`,
  narration:
    "If one chair needs a certain bundle of resources, what do three chairs and a table need? The answer is the operation this whole subject is built on. Vectors add component by component, and multiplying by a scalar scales every component. On the plot, u plus v is drawn head to tail. Start v at the tip of u, and the sum runs from the start to the finish. Subtraction is adding minus one times a vector, so u minus v is the arrow from the tip of v to the tip of u. Combine both operations and you get a linear combination: a times u plus b times v. Now the workshop. A chair needs four kilograms of material, two hours of labour and one kilowatt hour of energy. A table needs ten, three and two. So three chairs and a table need three times the chair bundle plus the table bundle: twenty two, nine and five. Each entry keeps its own unit. Next, combinations with one free scalar describe lines and planes.",
}
