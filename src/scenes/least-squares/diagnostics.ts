import { board, caution, fact, facts } from '../frame'
import { FIT1, FIT2, PTS6 } from './data'

// §8.7 — residuals against t. The line's residuals curve (positive, negative, positive): structure the
// model missed. The quadratic's scatter around zero. The cards name what least squares cannot check.
const resid = (f: (t: number) => number) => PTS6.map(([t, y]): [
  number,
  number
] => [t, y - f(t)])
export const diagnostics = board({
  id: 'diagnostics',
  figure: 'Reading residuals',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'patterns',
      title: 'Residuals against t: a pattern means the model missed structure',
      x: { min: -0.25, max: 5.25, step: 1, label: 't' },
      y: { min: -1.5, max: 2, step: 0.5, label: 'residual' },
      series: [
        {
          kind: 'line',
          points: resid(FIT1),
          label: 'line: a U shape',
          labelAt: [2.3, -1.32],
          tone: 'serve'
        },
        { kind: 'scatter', points: resid(FIT1), tone: 'serve' },
        {
          kind: 'line',
          points: resid(FIT2),
          label: 'quadratic: no pattern',
          labelAt: [2.4, 0.4],
          tone: 'ingest'
        },
        { kind: 'scatter', points: resid(FIT2), tone: 'ingest' },
      ]
    },
    {
      type: 'group',
      id: 'limits',
      title: 'What a good fit does not establish',
      dir: 'grid',
      cols: 2,
      children: [
        { type: 'item', id: 'linear-params', title: 'Right features', sub: 'a missing feature leaves a pattern', icon: 'filter', tone: 'ingest' },
        { type: 'item', id: 'outliers', title: 'Outliers', sub: 'one point can pull the whole fit', tone: 'consume' },
        { type: 'item', id: 'extrapolate', title: 'Extrapolation', sub: 'a fit says nothing beyond the data', tone: 'consume' },
        { type: 'item', id: 'inference', title: 'Uncertainty', sub: 'error bars need statistical assumptions', icon: 'pie', tone: 'serve' },
      ]
    },
  ],
  idea: 'Residual diagnostics and the limits of fit',
  board: [
    fact('b-rule', 'A least-squares fit always exists', 'whether it is good is a separate question; residuals answer part of it'),
    facts('b-1', 'Patterns mean missing structure', ['plot residuals against t', 'line: +, −, + → a missed curve', 'quadratic: no shape left']),
    facts('b-2', 'What residuals cannot tell you', ['one far point pulls the fit', 'no promise beyond the data', 'error bars need noise models']),
    caution('b-watch', 'Chapter outcome: you can explain the geometry of least squares, tell when coefficients are unique, and compare exact, weighted and regularised fits.'),
  ]
})
