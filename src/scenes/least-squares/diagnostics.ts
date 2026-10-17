import type { Scene } from '@graphlearning/flow'
import { FIT1, FIT2, PTS6 } from './data'

// §8.7 — residuals against t. The line's residuals curve (positive, negative, positive): structure the
// model missed. The quadratic's scatter around zero. The cards name what least squares cannot check.
const resid = (f: (t: number) => number) => PTS6.map(([t, y]): [number, number] => [t, y - f(t)])

export const diagnostics: Scene = {
  id: 'diagnostics',
  title: 'Reading residuals',
  flow: 'TB',
  nodes: [
    {
      id: 'patterns',
      kind: 'plot',
      label: 'Residuals against t',
      sub: 'a pattern means the model missed structure',
      plot: {
        x: { min: -0.25, max: 5.25, step: 1, label: 't' },
        y: { min: -1.5, max: 2, step: 0.5, label: 'residual' },
        series: [
          { kind: 'line', points: resid(FIT1), label: 'line: a U shape', labelAt: [2.3, -1.25], color: '#f472b6' },
          { kind: 'scatter', points: resid(FIT1), color: '#f472b6' },
          { kind: 'line', points: resid(FIT2), label: 'quadratic: no pattern', labelAt: [2.4, 0.4], color: '#60a5fa' },
          { kind: 'scatter', points: resid(FIT2), color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'limits',
      label: 'What a good fit does not establish',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'linear-params', label: 'Right features', sub: 'a missing feature leaves a pattern', pattern: 'service', icon: 'funnel' },
        { id: 'outliers', label: 'Outliers', sub: 'one point can pull the whole fit', pattern: 'warn', icon: 'bug' },
        { id: 'extrapolate', label: 'Extrapolation', sub: 'a fit says nothing beyond the data', pattern: 'warn', icon: 'ban' },
        { id: 'inference', label: 'Uncertainty', sub: 'error bars need statistical assumptions', pattern: 'network', icon: 'chartpie' },
      ],
    },
  ],
  edges: [],
}
