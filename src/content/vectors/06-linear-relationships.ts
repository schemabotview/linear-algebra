import type { Section } from '../types'

export const linearRelationships: Section = {
  id: 'linear-relationships',
  title: 'Linear relationships',
  scene: 'linearity',
  focus: 'tests',
  narration:
    "Which relationships deserve the name linear? A map is linear when it respects both vector operations. The image of a sum is the sum of the images, and the image of a scaled vector is the scaled image. Together these give superposition: the response to a combination is the same combination of responses. The workshop's resource needs are linear in the order. Double the order and the needs double. Add two orders and their needs add. Now the counterexamples, because they are easy to miss. A fixed setup cost gives two q plus three. Its graph is a straight line, but it sends zero to three, and every linear map sends zero to zero. So a straight graph is not enough. A squared term fails too: doubling q multiplies it by four. That completes the chapter. You can interpret linear combinations, explain each operation, and name the assumptions behind a comparison. Next, we organise many linear relationships at once, using matrices.",
}
