import type { Scene } from '@graphlearning/flow'
import { lineEq } from '../plot-kit'

// §12.3 — an ill-conditioned system, numbers computed. A = [1 1; 1 1.0001], b = (2, 2.0001), true x =
// (1, 1). The candidate x̃ = (2, 0) has a tiny residual yet is 100% wrong: the two lines are nearly the
// same line, so many points look "almost on both".
export const conditioning: Scene = {
  id: 'conditioning',
  title: 'Small residual, large error',
  flow: 'TB',
  nodes: [
    {
      id: 'near-parallel',
      kind: 'plot',
      label: 'x + y = 2 and x + 1.0001 y = 2.0001',
      sub: 'the lines differ by less than a pixel; κ(A) ≈ 4.0 × 10⁴',
      plot: {
        equal: true,
        x: { min: -0.5, max: 3, step: 0.5 },
        y: { min: -0.75, max: 2.5, step: 0.5 },
        series: [
          { kind: 'line', points: lineEq(1, 1, 2, -0.5, 2.75), label: 'both lines', labelAt: [-0.4, 2.2], color: '#60a5fa' },
          { kind: 'marker', at: [1, 1], label: 'true x = (1, 1)', labelAt: [1.15, 1.2], color: '#34d399' },
          { kind: 'marker', at: [2, 0], label: 'x̃ = (2, 0): residual 10⁻⁴', labelAt: [1.2, -0.45], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'errors',
      kind: 'table',
      label: 'Two different questions about x̃',
      sub: 'relative error ≤ κ(A) × relative residual',
      headers: ['measure', 'asks', 'for x̃ = (2, 0)'],
      values: [
        ['residual (backward error)', 'is x̃ the exact answer to a nearby problem?', '3.5 × 10⁻⁵: yes'],
        ['forward error', 'is x̃ close to the true x?', '1.0, i.e. 100%: no'],
        ['bound κ × residual', 'how far can those two differ?', '4.0 × 10⁴ × 3.5 × 10⁻⁵ = 1.4'],
        ['conditioning', 'a property of the problem', 'no algorithm can fix it'],
        ['stability', 'a property of the algorithm', 'pivoted LU, QR: stable'],
      ],
    },
  ],
  edges: [],
}
