import type { Section } from '../types'

export const numericalRankSection: Section = {
  id: 'numerical-rank',
  title: 'Condition numbers and numerical rank',
  scene: 'numerical-rank',
  focus: 'spectrum',
  slide: `## Numerical rank

In exact arithmetic, rank counts nonzero singular values. In floating point, almost nothing is exactly zero, so rank needs a **tolerance**.

### The condition number from the SVD
- For invertible square A, **κ₂(A) = σ₁ / σₙ**
- Here σ = 1, 10⁻³, 10⁻¹⁰, so κ₂ = 10¹⁰: about 10 of 16 digits are at risk

### Rank depends on the tolerance
- Default tolerance max(m, n) · ε · σ₁ ≈ 6.7 × 10⁻¹⁶: rank 3
- Tolerance 10⁻⁶, matching data accurate to 6 digits: rank 2
- Tolerance 10⁻²: rank 1
- So set the tolerance from how accurately the data are known

### Watch out
Singular means some σ is exactly 0. Numerically rank deficient means some σ is below your tolerance. det = 10⁻¹³ tells you neither.`,
  narration:
    "What is the rank of a computed matrix? In exact arithmetic it is the number of nonzero singular values. But after rounding, almost nothing is exactly zero, so the honest question is how many singular values are too small to trust. This matrix was built with singular values one, one thousandth, and ten to the minus ten. Its condition number is the ratio of the largest to the smallest, ten to the ten, so roughly ten of our sixteen digits are at risk. The plot shows the singular values on a logarithmic scale, with three tolerances. The default used by numerical libraries is tiny, about seven times ten to the minus sixteen, and it reports rank three. If the data are only accurate to six digits, the sensible tolerance is ten to the minus six, and the rank is two. A tolerance of a hundredth gives rank one. None of these is wrong. Choose the tolerance from how accurately the data are known. And notice that the determinant, about ten to the minus thirteen, tells you nothing useful here. Next, choosing a method.",
}
