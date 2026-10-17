import type { Section } from '../types'

export const injectiveSurjective: Section = {
  id: 'injective-surjective',
  title: 'One-to-one and onto maps',
  scene: 'losing-information',
  focus: 'collapse',
  slide: `## One-to-one and onto

Can an output be traced back to a single input? Can every output be reached? These are two different questions, and a map can fail either one.

### One-to-one (injective)
- Different inputs always give different outputs
- Equivalent: N(A) = {0}, so r = n
- A = [1 2; 2 4] fails: (2, 0) and (0, 1) both map to (2, 4)
- One-to-one means A x = b has **at most one** solution

### Onto (surjective)
- Every vector in ℝᵐ is some A x
- Equivalent: C(A) = ℝᵐ, so r = m
- The same A fails again: its outputs lie on the line y = 2x
- Onto means A x = b has **at least one** solution

### Shape limits what is possible
Tall matrices are never onto; wide matrices are never one-to-one. A square matrix is either both or neither.`,
  narration:
    "A basis describes information. This chapter asks when that information can be recovered, explains reversible maps, and uses factorisations to organise repeated work. Start with two questions about a map. Is it one-to-one, so that different inputs always give different outputs? And is it onto, so that every possible output is actually reached? On the left, the matrix with rows one, two and two, four fails both. Its second column is twice its first, so it squeezes the whole plane onto a single line. The inputs two, zero and zero, one land on the same output, so from that output we cannot tell which input we started from. And anything off the line is never reached. In the language of chapter four, one-to-one means the null space is just zero, and onto means the column space is everything. Shape limits what is possible: a tall matrix can never be onto, and a wide one can never be one-to-one. A square matrix is both or neither. Next, inverses.",
}
