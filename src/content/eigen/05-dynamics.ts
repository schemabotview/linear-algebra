import type { Section } from '../types'

export const dynamicsSection: Section = {
  id: 'dynamics',
  title: 'Matrix powers and discrete dynamical systems',
  scene: 'dynamics',
  focus: 'growth',
  narration:
    "What happens when a map is applied over and over? If x k plus one is A times x k, then after k steps we have A to the k times x zero. Diagonalisation makes powers easy: each eigen-direction is simply scaled by lambda to the k. Directions with eigenvalues above one grow, those below one fade. A two-state chain shows it. Each column of P sums to one, so the total is preserved. Its eigenvalues are one and seven tenths. The part along the first eigenvector stays, and the rest shrinks by seven tenths each step, so the share in state one climbs steadily towards two thirds. Now a warning that catches people out. The matrix J has both eigenvalues equal to zero point nine, below one, so its powers do eventually shrink to zero. But on the left, the size of J to the k times e two first grows, almost to four, before it decays. For defective matrices, and non-symmetric ones in general, eigenvalues alone do not bound short-term growth. Next, eigenvalues that are not real.",
}
