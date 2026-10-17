import type { Section } from '../types'

export const residualDiagnostics: Section = {
  id: 'residual-diagnostics',
  title: 'Residual diagnostics and the limits of fit',
  scene: 'diagnostics',
  focus: 'patterns',
  slide: `## Reading residuals

A least-squares fit always exists. Whether it is any good is a separate question, and the residuals answer part of it.

### Patterns mean missing structure
- Plot residuals against t, or against each feature
- The line's residuals go positive, negative, positive: a curve was missed
- The quadratic's residuals scatter around zero with no shape

### What residuals cannot tell you
- A single far-off point can pull the whole fit towards it
- A fit describes the range of the data, not beyond it
- Error bars and confidence need statistical assumptions about the noise

### Chapter outcome
You can explain the geometry of least squares, identify when coefficients are unique, and compare exact, weighted and regularised fits.`,
  narration:
    "Least squares always returns an answer. How do we know whether it is a good one? Start with the residuals, the part of the data the model did not explain. Plot them against t. If the model captured the structure, they should scatter around zero with no visible shape. On the left, the straight line's residuals go positive, then negative, then positive again: a U shape, the signature of curvature the line could not follow. The quadratic's residuals show no pattern at all. Residuals have limits, though. One unusual measurement can pull the whole fit towards itself. A fit says nothing reliable outside the range of the data. And attaching uncertainty to coefficients, error bars or confidence intervals, needs assumptions about the noise, which is the statistics course's territory. That completes the chapter. You can explain least squares as projection, say when coefficients are unique, and compare plain, weighted and regularised fits. Next, a square map applied again and again, and the directions it preserves.",
}
