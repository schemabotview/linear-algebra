import type { Section } from '../types'

export const subspacesSection: Section = {
  id: 'subspaces',
  title: 'Subspaces, spans and affine sets',
  scene: 'subspaces',
  focus: 'test',
  narration:
    "Which subsets of a vector space are vector spaces themselves? Those that pass three checks. They contain zero, they are closed under addition, and they are closed under scaling. Lines and planes through the origin pass, and so does the span of any collection of vectors, which is the set of all their combinations. On the left are two parallel lines. The lower one, y equals half x, passes through the origin. Add two of its points, or scale one, and you stay on it. It is a subspace. The upper line, one unit higher, is an affine set. It misses the origin, so it fails immediately. The plot shows why that matters. The vectors u and v both end on the upper line, but their sum, two, three, lands above it. Intersections and sums of subspaces are again subspaces. Unions usually are not, because adding a vector from each piece can leave both. Next, how to tell whether a list of vectors has any redundancy.",
}
