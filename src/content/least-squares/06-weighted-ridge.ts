import type { Section } from '../types'

export const weightedRidgeSection: Section = {
  id: 'weighted-ridge',
  title: 'Weighted least squares and ridge regularisation',
  scene: 'weighted-ridge',
  focus: 'ridge',
  slide: `## Weighted least squares and ridge

Both change the geometry of the problem rather than the data.

### Weighted least squares
- Minimise (b − A x)ᵀ W (b − A x) with weights on the diagonal of W
- Normal equations become AᵀW A x̂ = AᵀW b: projection in the weighted inner product
- Trusting the third measurement 4× moves the line to 0.81 + 1.57 t

### Ridge regularisation
- Minimise ‖b − A x‖² + λ‖x‖², with λ > 0
- Normal equations: (AᵀA + λ I) x̂ = Aᵀb, and AᵀA + λ I is **always invertible**
- The duplicated-feature fit becomes unique; larger λ shrinks x̂ and raises the residual

### Watch out
Here λ penalises every coefficient, intercept included. Leaving the intercept unpenalised is a common variant with slightly different equations.`,
  narration:
    "Can we change what best means, while keeping the same machinery? Two common ways. Weighted least squares gives some measurements more influence than others, for example because one instrument is more reliable. The weights sit on the diagonal of a matrix W, and the normal equations pick up W in the middle. Geometrically, this is projection in the weighted inner product from chapter seven. On the left, trusting the third measurement four times as much tilts the line slightly towards it. Ridge regularisation adds a penalty on the size of the coefficients, lambda times their squared length. The normal equations gain lambda times the identity, and that makes the matrix invertible for any positive lambda, even with dependent columns. So the duplicated-feature problem now has a unique answer. The table shows the trade-off. As lambda grows, the coefficients shrink and the residual grows. In this simple version every coefficient is penalised, including the intercept. Leaving the intercept out is a common variant with slightly different equations. Next, reading what a fit leaves behind.",
}
