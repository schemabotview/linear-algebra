import type { Section } from '../types'

export const covarianceSection: Section = {
  id: 'covariance',
  title: 'Energy, ellipsoids and covariance geometry',
  scene: 'covariance',
  focus: 'gram',
  slide: `## Covariance geometry

Centre a data table by subtracting each column's mean, giving X. Then **XᵀX** is symmetric positive semidefinite, and **C = XᵀX / (n − 1)** is the sample covariance matrix.

### Five workshop jobs
- Columns: labour and energy, both centred
- XᵀX = [40 48; 48 62], so C = [10 12; 12 15.5]
- Eigenvalues 25.06 and 0.44: about **98%** of the spread lies along one direction

### Reading C geometrically
- vᵀ C v is the spread of the data along the unit vector v
- The top eigenvector, (0.62, 0.78), is the direction of greatest spread

### Chapter outcome
You can explain why symmetry gives orthogonal diagonalisation, classify quadratic forms, and say when Cholesky applies. Inference about C belongs to statistics.`,
  narration:
    "Where do symmetric positive semidefinite matrices come from in data? From centred data tables. Take five workshop jobs, each with labour and energy, and subtract each column's mean, so the cloud of points is centred at zero. Call that table X. Then X transpose X, the Gram matrix of the centred data, is symmetric and positive semidefinite, because v transpose X transpose X v is the squared length of X v, which can never be negative. Divide it by n minus one and you get the sample covariance matrix. Here it has rows ten, twelve and twelve, fifteen and a half. The quadratic form of the covariance measures spread. For any unit direction, v transpose C v is how widely the data spread along v. So its eigenvectors are the directions of greatest and least spread. On the left, the top eigenvector points along the cloud, with eigenvalue about twenty five, while the other has less than half. Almost ninety eight percent of the spread lies along one line. That completes the chapter. Next, a decomposition for every matrix, including rectangular ones.",
}
