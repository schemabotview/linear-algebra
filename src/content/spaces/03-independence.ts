import type { Section } from '../types'

export const independenceSection: Section = {
  id: 'independence',
  title: 'Linear dependence and independence',
  scene: 'independence',
  focus: 'redundant',
  narration:
    "When does a list of vectors contain redundancy? When one of them can be built from the others. Here, a is two, one and b is one, two. The vector c, three, three, is exactly a plus b, so it adds no direction that a and b do not already reach. The precise definition avoids picking out any one vector. A list is linearly independent if the only way to combine its vectors into zero is to use all zero weights. For a, b and c, the weights one, one and minus one also give zero, so the list is dependent. In general, decide it by elimination. Put the vectors in the columns of a matrix and solve the homogeneous system. A pivot in every column means only the trivial solution exists, so the vectors are independent. A free variable means a nontrivial relation. The workshop's three product columns had three pivots in chapter three, so they are independent. Next, independent lists that also reach everything.",
}
