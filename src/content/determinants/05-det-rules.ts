import type { Section } from '../types'

export const detRules: Section = {
  id: 'det-rules',
  title: 'Products, transposes, inverses and singularity',
  scene: 'rules',
  focus: 'checks',
  slide: `## Rules for determinants

Because det measures volume scaling, composing maps multiplies their factors.

### The rules
- **det(A B) = det A · det B**: scale by B, then by A
- det Aᵀ = det A, so every row rule also holds for columns
- det A⁻¹ = 1 / det A
- det(c A) = cⁿ det A for an n × n matrix, not c det A

### The singularity criterion
- **det A = 0 exactly when A is singular**
- Zero volume means a dimension was lost, and no map can restore it
- On the left, [2 4; 1 2] flattens the square onto a segment
- So det A ≠ 0 is one more equivalent condition from chapter 5

### Watch out
det(A + B) has no rule. And det(2A) for a 3 × 3 matrix is 8 det A, not 2 det A.`,
  narration:
    "Why do determinants appear in so many theorems? Because they behave well under composition. If B scales volume by one factor and A by another, then doing B and then A scales by the product. So the determinant of A B is the determinant of A times the determinant of B. On the right, five times minus three gives minus fifteen, and the product matrix confirms it. Transposing changes nothing, so every rule about rows also holds for columns. The inverse undoes the scaling, so its determinant is one over the original. And scaling a whole n by n matrix by c scales every one of its n rows, so the determinant picks up c to the n, not just c. Most important is the singularity test. The determinant is zero exactly when the matrix is singular. Zero volume means some direction was crushed, and no linear map can restore it. On the left, the square collapses onto a segment. Next, the limits of what a determinant's size can tell you.",
}
