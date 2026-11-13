import { board, fact, facts } from '../frame'
import { lineEq } from '../plot-kit'

// §12.3 — an ill-conditioned system, numbers computed. A = [1 1; 1 1.0001], b = (2, 2.0001), true x =
// (1, 1). The candidate x̃ = (2, 0) has a tiny residual yet is 100% wrong: the two lines are nearly the
// same line, so many points look "almost on both".
export const conditioning = board({
  id: 'conditioning',
  figure: 'Small residual, large error',
  diagram: [
    {
      type: 'plot',
      id: 'near-parallel',
      title: 'x + y = 2 and x + 1.0001 y = 2.0001: the lines differ by less than a pixel; κ(A) ≈ 4.0 × 10⁴',
      equal: true,
      x: { min: -0.5, max: 3, step: 0.5 },
      y: { min: -0.75, max: 2.5, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: lineEq(1, 1, 2, -0.5, 2.75),
          label: 'both lines',
          labelAt: [-0.27, 2.2],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[1, 1]],
          label: 'true x = (1, 1)',
          labelAt: [1.15, 1.2],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[2, 0]],
          label: 'x̃ = (2, 0): residual 10⁻⁴',
          labelAt: [0.61, -0.69],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'errors',
      title: 'Two different questions about x̃: relative error ≤ κ(A) × relative residual',
      columns: ['measure', 'asks', 'for x̃ = (2, 0)'],
      rows: [
        ['residual (backward)', 'exact for a nearby problem?', '3.5 × 10⁻⁵: yes'],
        ['forward error', 'close to the true x?', '1.0, i.e. 100%: no'],
        ['bound κ × residual', 'how far apart can they be?', '≈ 1.4: κ × residual'],
        ['conditioning', 'a property of the problem', 'no algorithm can fix it'],
        ['stability', 'a property of the algorithm', 'pivoted LU, QR: stable'],
      ]
    },
  ],
  idea: 'Conditioning, stability and residuals',
  board: [
    fact('b-rule', 'Two separate questions', 'how sensitive is the problem? how careful is the algorithm?'),
    facts('b-1', 'Conditioning: the problem', ['κ(A) = ‖A‖ ‖A⁻¹‖', 'error ≤ κ × residual', '[1 1; 1 1.0001]: κ ≈ 4 × 10⁴']),
    facts('b-2', 'Small residual, large error', ['x̃ = (2, 0): residual 3.5 × 10⁻⁵', 'truth (1, 1): 100% error', 'x̃ solves a nearby problem']),
    facts('b-3', 'Stability: the algorithm', ['exact for a nearby problem', 'pivoted LU, Householder QR', 'not classical Gram–Schmidt']),
  ]
})
