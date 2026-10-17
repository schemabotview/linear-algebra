import type { Section } from '../types'

export const qrLeastSquares: Section = {
  id: 'qr-least-squares',
  title: 'Solving least squares with QR',
  scene: 'qr-solve',
  focus: 'conditioning',
  slide: `## Least squares through QR

With full column rank, factor A = Q R. Then the normal equations collapse to a triangular system: **R x̂ = Qᵀ b**.

### Why it works
- AᵀA = Rᵀ Qᵀ Q R = Rᵀ R, because Qᵀ Q = I
- Cancel the invertible Rᵀ from Rᵀ R x̂ = Rᵀ Qᵀ b
- For our data: R = [√3 √3; 0 √2], Qᵀb ≈ (4.041, 2.121), x̂ = (5/6, 3/2)

### Why it matters numerically
- Forming AᵀA **squares** the condition number: κ(AᵀA) = κ(A)²
- For a degree-5 polynomial fit on 11 points: κ(A) ≈ 3.1 × 10³, but κ(AᵀA) ≈ 9.8 × 10⁶
- QR works with κ(A) itself, so it keeps roughly twice as many correct digits

### Watch out
QR needs full column rank. For rank-deficient problems, use SVD (chapter 11).`,
  narration:
    "Is there a better way to solve least squares than the normal equations? Yes: factor A as Q times R, from the previous chapter. Because Q has orthonormal columns, Q transpose Q is the identity, and A transpose A becomes R transpose R. Cancelling R transpose, which is invertible when the columns are independent, leaves R x hat equals Q transpose b. That is a triangular system, solved from the bottom up. For our three measurements it gives the same five sixths and three halves. Why bother, when the answer is identical? Because of rounding. Forming A transpose A squares the condition number, which measures how much a problem amplifies small errors. For a fifth degree polynomial fit on eleven points, the condition number of A is about three thousand, but A transpose A's is nearly ten million. Working with Q and R avoids the squaring, so roughly twice as many digits survive. This is why library routines use QR. When the columns are dependent, QR is not enough, and chapter eleven's SVD takes over. Next, what goes into the columns.",
}
