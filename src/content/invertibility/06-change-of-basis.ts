import type { Section } from '../types'

export const changeOfBasisSection: Section = {
  id: 'change-of-basis',
  title: 'Change of basis and similarity',
  scene: 'change-of-basis',
  focus: 'matrices',
  narration:
    "Is a matrix the same thing as a map? Not quite. A matrix describes a map in one particular basis. Change the basis, and the same map gets a different matrix. Put the new basis vectors in the columns of a matrix P. Multiplying by P converts coordinates in the new basis into standard coordinates, and P inverse converts back. The direction matters, and it is easy to get backwards. On the left, the map reflects across the line y equals x. In standard coordinates its matrix swaps the two entries. Now choose the basis b one, along the mirror, and b two, across it. The reflection keeps b one fixed and sends b two to minus b two. So in that basis its matrix is simply diagonal: one and minus one. The two matrices are related by P inverse A P, and matrices related this way are called similar. They describe the same map. That completes the chapter. Next, the geometric signature of reversibility: how a map scales volume.",
}
