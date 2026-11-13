import type { Section } from '../types'

export const rankDeficiency: Section = {
  id: 'rank-deficiency',
  title: 'Coefficient uniqueness and rank-deficient minimisers',
  scene: 'rank-deficient',
  focus: 'same-fit',
  narration:
    "Is the best fit always unique? The answer splits in two. The fitted values are always unique, because a vector has exactly one projection onto a subspace. The coefficients are unique only when the columns of A are independent. Here is how that fails in practice. Suppose a dataset records the same measurement twice, once as t and once as two t. The model now has three coefficients, but the last two columns are dependent. Any choice with d plus two e equal to one and a half gives exactly the same line, with the same residual. The plot shows the whole set of best choices, a straight line of them. Three different coefficient vectors, three identical predictions. In the language of chapter three, the minimisers are one particular solution plus the null space. One of them is shortest, and chapter eleven will compute it with the pseudoinverse. The practical lesson: in a rank-deficient model, individual coefficients mean nothing. Only the combination d plus two e is determined. Next, a more reliable way to compute least squares.",
}
