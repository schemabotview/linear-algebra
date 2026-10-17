import type { Scene } from '@graphlearning/flow'
import { arrow, lineEq } from '../plot-kit'

// §7.5 — project b = (1, 3) onto the line through a = (2, 1). p = (aᵀb / aᵀa) a = (5/5) a = (2, 1);
// the residual e = b − p = (−1, 2) is perpendicular to a. The residual is drawn dashed on purpose.
export const projections: Scene = {
  id: 'projections',
  title: 'Projection onto a line',
  flow: 'TB',
  nodes: [
    {
      id: 'drop',
      kind: 'plot',
      label: 'p is the closest point to b on the line',
      sub: 'a = (2, 1), b = (1, 3), p = (2, 1), e = (−1, 2)',
      plot: {
        equal: true,
        x: { min: -1, max: 4.5, step: 1 },
        y: { min: -0.5, max: 3.5, step: 1 },
        series: [
          { kind: 'line', points: lineEq(1, -2, 0, -1, 4.5), label: 'line through a', labelAt: [3.3, 1.35], color: '#9ca3af' },
          arrow([1, 3], 'b', '#34d399'),
          arrow([2, 1], 'p = projection', '#60a5fa'),
          { kind: 'segment', from: [2, 1], to: [1, 3], label: 'e = b − p ⟂ a', labelAt: [1.65, 2.3], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'formulas',
      kind: 'table',
      label: 'From the one condition aᵀ(b − x̂ a) = 0',
      sub: 'the residual must be perpendicular to what we project onto',
      headers: ['quantity', 'formula', 'here'],
      values: [
        ['coefficient x̂', 'aᵀb / aᵀa', '5 / 5 = 1'],
        ['projection p', 'x̂ a', '(2, 1)'],
        ['residual e', 'b − p, with aᵀe = 0', '(−1, 2) · (2, 1) = 0'],
        ['matrix P', 'a aᵀ / aᵀa', '[4 2; 2 1] / 5'],
        ['onto C(A)', 'P = A (AᵀA)⁻¹ Aᵀ', 'P² = P'],
      ],
    },
  ],
  edges: [],
}
