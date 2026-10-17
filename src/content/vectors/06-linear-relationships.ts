import type { Section } from '../types'

export const linearRelationships: Section = {
  id: 'linear-relationships',
  title: 'Linear relationships',
  scene: 'linearity',
  focus: 'tests',
  slide: `## Linear relationships

A map f is **linear** when it respects both vector operations: f(u + v) = f(u) + f(v) and f(a u) = a f(u).

### Superposition
- The response to a combination is the same combination of the responses
- The workshop's needs r(q) = q₁c + q₂t + q₃s are linear in the order q

### Counterexamples
- **Setup cost**: 2q + 3 gives f(0) = 3, but every linear map sends 0 to 0
- **Squared term**: doubling q multiplies 0.6q² by four
- A straight graph is not enough: 2q + 3 is a line, not a linear map

### Chapter outcome
You can interpret a linear combination, explain each vector operation, and name the assumptions behind a geometric comparison.`,
  narration:
    "Which relationships deserve the name linear? A map is linear when it respects both vector operations. The image of a sum is the sum of the images, and the image of a scaled vector is the scaled image. Together these give superposition: the response to a combination is the same combination of responses. The workshop's resource needs are linear in the order. Double the order and the needs double. Add two orders and their needs add. Now the counterexamples, because they are easy to miss. A fixed setup cost gives two q plus three. Its graph is a straight line, but it sends zero to three, and every linear map sends zero to zero. So a straight graph is not enough. A squared term fails too: doubling q multiplies it by four. That completes the chapter. You can interpret linear combinations, explain each operation, and name the assumptions behind a comparison. Next, we organise many linear relationships at once, using matrices.",
}
