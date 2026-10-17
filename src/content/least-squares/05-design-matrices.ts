import type { Section } from '../types'

export const designMatricesSection: Section = {
  id: 'design-matrices',
  title: 'Design matrices, intercepts and polynomial features',
  scene: 'design-matrices',
  focus: 'design',
  slide: `## Design matrices and features

The **design matrix** has one row per measurement and one column per **feature**. Least squares fits any model that is linear in its coefficients.

### Building columns
- A column of ones gives the **intercept**
- A column t gives a slope; t² gives curvature
- Any fixed function of t can be a column: log t, sin t, an indicator

### Linear in the parameters
- y = c₀ + c₁ t + c₂ t² is curved in t but **linear in c**
- So the same normal equations and QR apply unchanged
- On six curved measurements, ‖e‖² falls from 6.74 for a line to 0.54 for a quadratic

### Watch out
More columns always lower ‖e‖² on the data used to fit. That alone does not show the model is better; checking it on new data is the job of the statistics and ML courses.`,
  narration:
    "What exactly does linear mean in linear least squares? It means linear in the coefficients, not linear in the inputs. Each row of the design matrix is one measurement, and each column is one feature computed from it. A column of ones gives an intercept. A column of t gives a slope. A column of t squared adds curvature, and any fixed function of t, a logarithm, a sine, an on-off indicator, can be a column too. The model y equals c zero plus c one t plus c two t squared is a curve in t, but it is a linear combination of known columns, so the normal equations and QR apply without change. On the left, six measurements bend upwards. The best straight line leaves a total squared error of about six point seven. Adding a t squared column drops it to about half a unit. One caution. Adding columns always lowers the error on the data you fitted. That alone does not prove the model is better, and judging that belongs to the statistics and machine learning courses. Next, two geometric extensions.",
}
