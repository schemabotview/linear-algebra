import type { Section } from '../types'

export const pcaSection: Section = {
  id: 'pca',
  title: 'Centred data, PCA scores and explained variance',
  scene: 'pca',
  focus: 'components',
  slide: `## Principal component analysis

PCA is the SVD of a **centred** data table X, with one row per observation and one column per variable.

### The pieces
- **Components**: the columns of V, the directions of greatest variance in turn
- **Scores**: X V, each observation's coordinates along the components
- **Variance along component i**: σᵢ² / (n − 1), the eigenvalues of chapter 10's covariance

### Five workshop jobs
- PC1 = (0.62, 0.78): labour and energy rise together
- Scores along PC1: −5.62, −3.59, 0, 2.03, 7.19
- PC1 explains 25.06 / 25.50 = **98.3%** of the variance
- Keeping only PC1 compresses each job to one number: its score

### Why centre
Without centring, the first component points towards the mean of the data instead of along its spread.`,
  narration:
    "How do we find the main directions of variation in a dataset? Principal component analysis, which is simply the SVD of the centred data table. Each row is one observation, here one workshop job, and each column is one variable, here labour and energy, with its mean subtracted. The columns of V are the principal components: the direction of greatest variance, then the greatest remaining, and so on. Multiplying the data by V gives the scores, each observation's coordinates along those directions. And each squared singular value, divided by n minus one, is the variance along its component. Those are exactly the eigenvalues of the covariance matrix from chapter ten. For the five jobs, the first component points along zero point six two, zero point seven eight: labour and energy rise together. The dashed lines drop each job onto it, and the drop lengths are tiny. That one direction explains ninety eight percent of the variance. Centring matters. Without it, the first component points at the average job rather than along the spread. Next, PCA's limits.",
}
