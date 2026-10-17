import type { Section } from '../types'

export const singularVectors: Section = {
  id: 'singular-vectors',
  title: 'Singular vectors, stretch factors, AᵀA and AAᵀ',
  scene: 'svd-geometry',
  focus: 'ellipse',
  slide: `## Rotate, stretch, rotate

Read A x = U Σ Vᵀ x right to left: **rotate** by Vᵀ, **stretch** each axis by σᵢ, **rotate** by U.

### The picture
- A maps the unit circle to an ellipse
- The input directions v₁, v₂ land on the ellipse's axes: **A vᵢ = σᵢ uᵢ**
- For A = [3 0; 4 5]: semi-axes σ₁ = 3√5 ≈ 6.71 and σ₂ = √5 ≈ 2.24
- Both rotations are orthogonal, so only Σ changes lengths

### Where the factors come from
- AᵀA = V Σᵀ Σ Vᵀ, so V holds its eigenvectors and σᵢ² its eigenvalues
- Here AᵀA = [25 20; 20 25], with eigenvalues 45 and 5
- Likewise U holds the eigenvectors of AAᵀ

### Watch out
This explains the SVD. It is not how to compute it: forming AᵀA squares the condition number, as in chapter 8.`,
  narration:
    "What does a matrix do geometrically, in general? The SVD says: rotate, stretch, rotate. Read A x as U times Sigma times V transpose times x. First, V transpose rotates the input so its special directions line up with the axes. Then Sigma stretches each axis by its singular value. Then U rotates the result into place. So the unit circle always becomes an ellipse. On the left, the matrix with rows three, zero and four, five sends the circle to a long, tilted ellipse. The input direction v one, along one, one, lands on the long axis, stretched by about six point seven. The input direction v two lands on the short axis, stretched by about two point two. Where do these come from? A transpose A has V as its eigenvectors and the squared singular values as its eigenvalues, here forty five and five. Similarly, U holds the eigenvectors of A A transpose. That explains the SVD, but it is not how to compute it: forming A transpose A squares the condition number, exactly as in chapter eight. Next, the SVD as a sum.",
}
