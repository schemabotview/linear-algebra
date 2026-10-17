import type { Section } from '../types'

export const truncatedSvd: Section = {
  id: 'truncated-svd',
  title: 'Truncated SVD and best rank-k approximation',
  scene: 'truncated',
  focus: 'approximations',
  slide: `## Best low-rank approximation

Keep only the first k terms: **Aₖ = σ₁u₁v₁ᵀ + … + σₖuₖvₖᵀ**.

### Eckart–Young
- No rank-k matrix is closer to A than Aₖ, in the spectral or the Frobenius norm
- Spectral error: ‖A − Aₖ‖₂ = σₖ₊₁
- Frobenius error: ‖A − Aₖ‖_F = √(σₖ₊₁² + … + σᵣ²)

### A measurement table
- 4 jobs × 3 resources, with σ = 16.87, 0.164, 0.136
- Rank one keeps 99.98% of Σσ², with Frobenius error √(0.164² + 0.136²) = 0.213
- Rank two leaves error σ₃ = 0.136
- Storage drops from 12 numbers to 4 + 3 + 1 = 8, and far more for large tables

### Watch out
A quickly falling spectrum is what makes compression work. A flat spectrum has no good low-rank summary.`,
  narration:
    "What is the best simple summary of a table of numbers? Keep only the first few terms of the SVD. Truncating after k terms gives a matrix of rank k, and the Eckart–Young theorem says that no other matrix of rank k is closer to the original. In the spectral norm the error is the next singular value. In the Frobenius norm it is the square root of the sum of the squares of all the discarded ones. Here is a small measurement table: four jobs, three resources each. Its singular values are about sixteen point nine, then point one six and point one four. The first dwarfs the others, so one term already captures nearly all of the table, ninety nine point nine eight percent of the sum of squared singular values. The table on the right is that rank-one reconstruction, and it is within a fifth of a unit everywhere. For four rows that saves little storage, but for a table with a million rows the saving is enormous. Compression works when the spectrum falls quickly. A flat spectrum has no good summary. Next, applying this to data.",
}
