import type { Section } from '../types'

export const floatingPointSection: Section = {
  id: 'floating-point',
  title: 'Floating point, cancellation and errors',
  scene: 'floating-point',
  focus: 'cancellation',
  narration:
    "Exact decompositions clarify structure. Computation decides how reliably we can recover that structure from finite-precision data. This chapter is about choosing methods and interpreting numerical evidence. A computer stores numbers to about sixteen significant digits, and every operation rounds. The guarantee is about relative error: each rounding is wrong by at most about two times ten to the minus sixteen of the true value. Even simple decimals suffer. Zero point one plus zero point two does not print as zero point three. The serious danger is cancellation. Subtract two nearly equal numbers, and the leading digits cancel, leaving mostly rounding error. One plus ten to the minus fifteen, minus one, comes out eleven percent wrong. On the left, the expression one plus h, minus one, over h should always be exactly one. For moderate h it is. As h shrinks, it wanders, and at ten to the minus sixteen, one plus h rounds to one, and the answer is zero. Nothing warned us. Next, measuring the size of vectors and matrices.",
}
