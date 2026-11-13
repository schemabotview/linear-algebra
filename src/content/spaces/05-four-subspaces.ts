import type { Section } from '../types'

export const fourSubspacesSection: Section = {
  id: 'four-subspaces',
  title: 'The four fundamental subspaces',
  scene: 'four-subspaces',
  focus: 'subspaces',
  narration:
    "Every matrix carries four subspaces, and together they describe everything it can do. Two live on the output side. The column space holds every possible output, A times x. The left null space holds the vectors y that annihilate the rows of A, the combinations of equations that collapse to zero. Two live on the input side. The row space is spanned by the rows. The null space holds every input that A sends to zero. For this three by four matrix, reduction finds pivots in columns one and three. So the original first and third columns give a basis for the column space. The nonzero rows of the reduced form give a basis for the row space. Each free variable gives one null space vector, here two. And because the third row equals the first plus the second, the vector one, one, minus one spans the left null space. In chapter seven we will see that these come in perpendicular pairs. Next, the counting rules that connect their dimensions.",
}
