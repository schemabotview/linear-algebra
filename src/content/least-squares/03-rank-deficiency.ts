import type { Section } from '../types'

export const rankDeficiency: Section = {
  id: 'rank-deficiency',
  title: 'Coefficient uniqueness and rank-deficient minimisers',
  scene: 'rank-deficient',
  focus: 'same-fit',
  slide: `## Unique predictions, non-unique coefficients

The fitted values A x̂ are always unique: there is one projection. The coefficients x̂ are unique only when A has **full column rank**.

### A duplicated feature
- Add a column 2t beside t: the model is y = c + d t + e (2t)
- The columns are dependent, so AᵀA is singular
- Every (d, e) with d + 2e = 1.5 gives the **same** best line

### Describing all the minimisers
- They form x̂ₚ + N(A): a particular minimiser plus the null space
- Among them, one has the smallest length: (5/6, 0.3, 0.6)
- Chapter 11 finds it with the pseudoinverse

### Watch out
Never read meaning into individual coefficients of a rank-deficient model. Only their identifiable combination, here d + 2e, is determined.`,
  narration:
    "Is the best fit always unique? The answer splits in two. The fitted values are always unique, because a vector has exactly one projection onto a subspace. The coefficients are unique only when the columns of A are independent. Here is how that fails in practice. Suppose a dataset records the same measurement twice, once as t and once as two t. The model now has three coefficients, but the last two columns are dependent. Any choice with d plus two e equal to one and a half gives exactly the same line, with the same residual. The plot shows the whole set of best choices, a straight line of them. Three different coefficient vectors, three identical predictions. In the language of chapter three, the minimisers are one particular solution plus the null space. One of them is shortest, and chapter eleven will compute it with the pseudoinverse. The practical lesson: in a rank-deficient model, individual coefficients mean nothing. Only the combination d plus two e is determined. Next, a more reliable way to compute least squares.",
}
