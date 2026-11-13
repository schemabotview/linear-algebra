import type { Section } from '../types'

export const designMatricesSection: Section = {
  id: 'design-matrices',
  title: 'Design matrices, intercepts and polynomial features',
  scene: 'design-matrices',
  focus: 'design',
  narration:
    "What exactly does linear mean in linear least squares? It means linear in the coefficients, not linear in the inputs. Each row of the design matrix is one measurement, and each column is one feature computed from it. A column of ones gives an intercept. A column of t gives a slope. A column of t squared adds curvature, and any fixed function of t, a logarithm, a sine, an on-off indicator, can be a column too. The model y equals c zero plus c one t plus c two t squared is a curve in t, but it is a linear combination of known columns, so the normal equations and QR apply without change. On the left, six measurements bend upwards. The best straight line leaves a total squared error of about six point seven. Adding a t squared column drops it to about half a unit. One caution. Adding columns always lowers the error on the data you fitted. That alone does not prove the model is better, and judging that belongs to the statistics and machine learning courses. Next, two geometric extensions.",
}
