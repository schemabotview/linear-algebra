import type { Section } from '../types'

export const covarianceSection: Section = {
  id: 'covariance',
  title: 'Energy, ellipsoids and covariance geometry',
  scene: 'covariance',
  focus: 'gram',
  narration:
    "Where do symmetric positive semidefinite matrices come from in data? From centred data tables. Take five workshop jobs, each with labour and energy, and subtract each column's mean, so the cloud of points is centred at zero. Call that table X. Then X transpose X, the Gram matrix of the centred data, is symmetric and positive semidefinite, because v transpose X transpose X v is the squared length of X v, which can never be negative. Divide it by n minus one and you get the sample covariance matrix. Here it has rows ten, twelve and twelve, fifteen and a half. The quadratic form of the covariance measures spread. For any unit direction, v transpose C v is how widely the data spread along v. So its eigenvectors are the directions of greatest and least spread. On the left, the top eigenvector points along the cloud, with eigenvalue about twenty five, while the other has less than half. Almost ninety eight percent of the spread lies along one line. That completes the chapter. Next, a decomposition for every matrix, including rectangular ones.",
}
