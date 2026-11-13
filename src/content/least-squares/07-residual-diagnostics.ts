import type { Section } from '../types'

export const residualDiagnostics: Section = {
  id: 'residual-diagnostics',
  title: 'Residual diagnostics and the limits of fit',
  scene: 'diagnostics',
  focus: 'patterns',
  narration:
    "Least squares always returns an answer. How do we know whether it is a good one? Start with the residuals, the part of the data the model did not explain. Plot them against t. If the model captured the structure, they should scatter around zero with no visible shape. On the left, the straight line's residuals go positive, then negative, then positive again: a U shape, the signature of curvature the line could not follow. The quadratic's residuals show no pattern at all. Residuals have limits, though. One unusual measurement can pull the whole fit towards itself. A fit says nothing reliable outside the range of the data. And attaching uncertainty to coefficients, error bars or confidence intervals, needs assumptions about the noise, which is the statistics course's territory. That completes the chapter. You can explain least squares as projection, say when coefficients are unique, and compare plain, weighted and regularised fits. Next, a square map applied again and again, and the directions it preserves.",
}
