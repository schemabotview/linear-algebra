import type { Section } from '../types'

export const subspacesSection: Section = {
  id: 'subspaces',
  title: 'Subspaces, spans and affine sets',
  scene: 'subspaces',
  focus: 'test',
  slide: `## Subspaces

A **subspace** is a subset that is a vector space in its own right. Three checks are enough.

### The subspace test
- It contains the zero vector
- It is closed under addition
- It is closed under scaling

### Where subspaces come from
- The **span** of some vectors, all their combinations, is always a subspace
- U ∩ W and U + W are subspaces; U ∪ W usually is not
- Lines and planes through the origin are subspaces of ℝ³; shifted copies of them are not

### Affine sets are not
- y = x/2 + 1 misses the origin, so it fails the first check
- On the left, u and v lie on it, but u + v = (2, 3) does not
- An affine set is a subspace shifted away from the origin`,
  narration:
    "Which subsets of a vector space are vector spaces themselves? Those that pass three checks. They contain zero, they are closed under addition, and they are closed under scaling. Lines and planes through the origin pass, and so does the span of any collection of vectors, which is the set of all their combinations. On the left are two parallel lines. The lower one, y equals half x, passes through the origin. Add two of its points, or scale one, and you stay on it. It is a subspace. The upper line, one unit higher, is an affine set. It misses the origin, so it fails immediately. The plot shows why that matters. The vectors u and v both end on the upper line, but their sum, two, three, lands above it. Intersections and sums of subspaces are again subspaces. Unions usually are not, because adding a vector from each piece can leave both. Next, how to tell whether a list of vectors has any redundancy.",
}
