import type { Section } from '../types'

export const svdShapesSection: Section = {
  id: 'svd-shapes',
  title: 'Full and reduced SVD',
  scene: 'svd-shapes',
  focus: 'factors',
  slide: `## The singular value decomposition

**Every** real m × n matrix, square or not, factors as **A = U Σ Vᵀ**.

### The three factors
- **V** (n × n): orthonormal input directions
- **Σ** (m × n): singular values σ₁ ≥ σ₂ ≥ … ≥ 0 on the diagonal, zeros elsewhere
- **U** (m × m): orthonormal output directions

### For A = [1 1; 0 1; 1 0]
- σ₁ = √3 and σ₂ = 1
- v₁ = (1, 1)/√2 and u₁ = (2, 1, 1)/√6
- u₃ is perpendicular to every output: it spans N(Aᵀ)

### Full or reduced
- The **reduced** SVD keeps only the r columns of U and V that meet a nonzero σ
- It is smaller, and it rebuilds A exactly

### Watch out
Eigendecomposition needs a square, diagonalisable matrix. The SVD needs nothing.`,
  narration:
    "Eigenvectors describe square maps, and only some of them. Rectangular maps need a decomposition that separates input directions from output directions. This chapter explains the singular value decomposition, and uses it to reason about information and approximation. Every real matrix, of any shape, factors as U Sigma V transpose. V holds orthonormal directions in the input space. Sigma holds the singular values, nonnegative and in decreasing order, on its diagonal. And U holds orthonormal directions in the output space. For this three by two matrix, the singular values are root three and one. The first input direction is one, one over root two, and it lands on the first output direction, two, one, one over root six. The third column of U is perpendicular to every output, so it spans the left null space. The reduced SVD drops the columns that meet a zero singular value. It is smaller, and still rebuilds A exactly. Unlike an eigendecomposition, the SVD needs nothing: no squareness, no special structure. Next, what it means geometrically.",
}
