import type { Section } from '../types'

export const floatingPointSection: Section = {
  id: 'floating-point',
  title: 'Floating point, cancellation and errors',
  scene: 'floating-point',
  focus: 'cancellation',
  slide: `## Floating-point arithmetic

Computers store about 16 significant decimal digits. Each operation rounds its result to the nearest representable number.

### Absolute and relative error
- Absolute: |x̃ − x|. Relative: |x̃ − x| / |x|
- Rounding keeps the **relative** error below ε ≈ 2.2 × 10⁻¹⁶ per operation
- 0.1 + 0.2 = 0.30000000000000004: decimals like 0.1 are not exact

### Cancellation
- Subtracting nearly equal numbers cancels the leading digits and leaves the rounding errors
- (1 + 10⁻¹⁵) − 1 comes out 11% wrong
- On the left, ((1 + h) − 1)/h drifts from 1 as h shrinks, and is 0 at h = 10⁻¹⁶

### Watch out
The arithmetic gives no warning. Rewriting a formula to avoid subtracting close numbers is often the whole fix.`,
  narration:
    "Exact decompositions clarify structure. Computation decides how reliably we can recover that structure from finite-precision data. This chapter is about choosing methods and interpreting numerical evidence. A computer stores numbers to about sixteen significant digits, and every operation rounds. The guarantee is about relative error: each rounding is wrong by at most about two times ten to the minus sixteen of the true value. Even simple decimals suffer. Zero point one plus zero point two does not print as zero point three. The serious danger is cancellation. Subtract two nearly equal numbers, and the leading digits cancel, leaving mostly rounding error. One plus ten to the minus fifteen, minus one, comes out eleven percent wrong. On the left, the expression one plus h, minus one, over h should always be exactly one. For moderate h it is. As h shrinks, it wanders, and at ten to the minus sixteen, one plus h rounds to one, and the answer is zero. Nothing warned us. Next, measuring the size of vectors and matrices.",
}
