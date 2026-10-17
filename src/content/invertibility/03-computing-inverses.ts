import type { Section } from '../types'

export const computingInverses: Section = {
  id: 'computing-inverses',
  title: 'Computing an inverse, and solving without one',
  scene: 'gauss-jordan',
  focus: 'stages',
  slide: `## Computing A⁻¹, and why to avoid it

**Gauss–Jordan**: row-reduce [A | I]. When the left half becomes I, the right half is A⁻¹.

### For A = [2 1; 1 1]
- Swap, clear below, scale, clear above
- The result is [I | A⁻¹] with A⁻¹ = [1 −1; −1 2]
- If the left half cannot reach I, A has no inverse

### Solve, do not invert
- To solve A x = b, eliminate on [A | b] directly
- Forming A⁻¹ costs about three times as much work for large n
- It also adds rounding error, and A⁻¹ b is no more accurate for it

### Watch out
"x = A⁻¹ b" is notation for the solution, not an instruction to compute A⁻¹.`,
  narration:
    "How do we actually find an inverse? Row reduce A next to the identity matrix. Every row operation is applied to both halves at once. When the left half has become the identity, the right half has become the inverse. On the left, four stages: swap the rows, clear below the first pivot, scale the second row, clear above it. The right half ends as one, minus one, minus one, two, which matches the previous section. If the left half can never reach the identity, a pivot is missing, and the matrix has no inverse. Now the practical advice, which surprises many people. To solve a system, do not compute the inverse at all. Eliminate on A with b directly. For large matrices, forming the inverse costs roughly three times as much work, and it adds rounding error without making the answer any better. Writing x equals A inverse b is notation for the solution, not an instruction. And when the same A meets many right-hand sides, there is a better way. Next, the LU factorisation.",
}
