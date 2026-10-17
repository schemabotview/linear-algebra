import type { Section } from '../types'

export const symmetricEigenSection: Section = {
  id: 'symmetric-eigen',
  title: 'Real symmetric matrices and orthogonal eigenvectors',
  scene: 'symmetric-eigen',
  focus: 'facts',
  slide: `## Symmetric matrices

A matrix is **symmetric** when Sᵀ = S: it mirrors across its diagonal. Symmetry buys strong guarantees.

### What symmetry guarantees
- Every eigenvalue is **real**
- Eigenvectors for different eigenvalues are **perpendicular**
- There is always a full set of them: S is never defective
- So S = Q Λ Qᵀ with Q orthogonal (next section)

### Compare
- S = [5 2; 2 2]: λ = 6 along (2, 1), λ = 1 along (1, −2); dot product 0
- B = [3 1; 0 2]: λ = 3 along (1, 0), λ = 2 along (1, −1); 45° apart
- On the left, the solid lines meet at 90°; the dashed ones do not

### Why perpendicular
If S v = λ v and S w = μ w with λ ≠ μ, then λ (v · w) = (S v) · w = v · (S w) = μ (v · w), so v · w = 0.`,
  narration:
    "Eigenvectors can point in awkward directions and can even be complex. Symmetry removes all of that, and connects eigenvalues to energy and curvature. This chapter connects orthogonal eigendecomposition to quadratic geometry. A matrix is symmetric when it equals its own transpose, mirrored across the diagonal. For real symmetric matrices, three things are guaranteed. Every eigenvalue is real. Eigenvectors for different eigenvalues are perpendicular. And there are always enough of them, so the matrix is never defective. On the left, the symmetric matrix with rows five, two and two, two has eigenvalue six along two, one and eigenvalue one along one, minus two. Those directions are exactly perpendicular. The non-symmetric matrix B also has two real eigenvalues, but its eigenvector directions are only forty five degrees apart. The reason for perpendicularity is a one-line argument. Move S from one side of a dot product to the other, which symmetry allows, and two different eigenvalues force the dot product to be zero. Next, the theorem that packages all this.",
}
