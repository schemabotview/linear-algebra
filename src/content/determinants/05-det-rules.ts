import type { Section } from '../types'

export const detRules: Section = {
  id: 'det-rules',
  title: 'Products, transposes, inverses and singularity',
  scene: 'rules',
  focus: 'checks',
  narration:
    "Why do determinants appear in so many theorems? Because they behave well under composition. If B scales volume by one factor and A by another, then doing B and then A scales by the product. So the determinant of A B is the determinant of A times the determinant of B. On the right, five times minus three gives minus fifteen, and the product matrix confirms it. Transposing changes nothing, so every rule about rows also holds for columns. The inverse undoes the scaling, so its determinant is one over the original. And scaling a whole n by n matrix by c scales every one of its n rows, so the determinant picks up c to the n, not just c. Most important is the singularity test. The determinant is zero exactly when the matrix is singular. Zero volume means some direction was crushed, and no linear map can restore it. On the left, the square collapses onto a segment. Next, the limits of what a determinant's size can tell you.",
}
