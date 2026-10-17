import type { Section } from '../types'

export const integratedCases: Section = {
  id: 'integrated-cases',
  title: 'Integrated cases',
  scene: 'integrated',
  focus: 'cases',
  slide: `## Integrated cases

The same ideas carry across very different problems.

### The workshop, with measured needs
- Recovering the order q from measured resources b is solving A q = b
- κ(A) ≈ 19.4, so 0.5% noise in b can move q by up to about 9.7%
- Computed: q moved by 3.2%, inside the bound

### A flow network
- 4 nodes, 5 edges; the incidence matrix D has one row per edge, shown on the left
- rank D = 3 = nodes − 1: N(D) holds equal potentials at every node
- N(Dᵀ) holds the conserved flows: 5 − 3 = **2 independent loops**

### Course outcome
You can formulate linear models; explain systems, spaces, maps and decompositions; reason about existence and uniqueness; and justify computational choices under stated assumptions.`,
  narration:
    "Do these ideas hold together on real problems? Two cases bring them together. First, the workshop, but with measured resource needs, each reading slightly noisy. Recovering the order means solving the same system as chapter three. Its condition number is about nineteen, so half a percent of noise in the measurements can move the order by up to nearly ten percent. In the computed case it moved by about three percent, inside the bound, as it must be. Second, a small flow network: four stations and five connections between them. Its incidence matrix has one row per connection, with a minus one where flow leaves and a plus one where it arrives. Its rank is three, one less than the number of stations, and the null space holds equal potentials. Its left null space holds the flows that are conserved at every station, and its dimension, five minus three, counts two independent loops. That completes the course. From here, continue into calculus and optimisation, probability and statistics, numerical linear algebra, or machine learning, all built on these shared foundations.",
}
