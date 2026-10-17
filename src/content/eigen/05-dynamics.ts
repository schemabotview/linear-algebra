import type { Section } from '../types'

export const dynamicsSection: Section = {
  id: 'dynamics',
  title: 'Matrix powers and discrete dynamical systems',
  scene: 'dynamics',
  focus: 'growth',
  slide: `## Repeated maps

For xₖ₊₁ = A xₖ, the state after k steps is Aᵏ x₀, and **Aᵏ = V Dᵏ V⁻¹**: each eigen-direction scales by λᵏ.

### A two-state chain
- P = [0.9 0.2; 0.1 0.8], with each column summing to 1 (the stated convention)
- Eigenvalues 1 and 0.7: the λ = 1 part stays, the other decays by 0.7 per step
- From (0, 1), the share in state 1 approaches **2/3**

### When eigenvalues mislead
- J = [0.9 1; 0 0.9] has |λ| = 0.9 < 1, so Jᵏ → 0 eventually
- But ‖Jᵏ e₂‖ first **grows**, to 3.89 at k = 9
- Defective and non-symmetric matrices can amplify for a long time before decaying

### Watch out
Convergence to a steady state needs assumptions, such as a unique eigenvalue of largest size. Check them; do not assume them.`,
  narration:
    "What happens when a map is applied over and over? If x k plus one is A times x k, then after k steps we have A to the k times x zero. Diagonalisation makes powers easy: each eigen-direction is simply scaled by lambda to the k. Directions with eigenvalues above one grow, those below one fade. A two-state chain shows it. Each column of P sums to one, so the total is preserved. Its eigenvalues are one and seven tenths. The part along the first eigenvector stays, and the rest shrinks by seven tenths each step, so the share in state one climbs steadily towards two thirds. Now a warning that catches people out. The matrix J has both eigenvalues equal to zero point nine, below one, so its powers do eventually shrink to zero. But on the left, the size of J to the k times e two first grows, almost to four, before it decays. For defective matrices, and non-symmetric ones in general, eigenvalues alone do not bound short-term growth. Next, eigenvalues that are not real.",
}
