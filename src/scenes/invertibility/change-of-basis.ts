import type { Scene } from '@graphlearning/flow'
import { arrow, lineEq } from '../plot-kit'

// §5.6 — reflection across y = x. In the standard basis its matrix is [0 1; 1 0]; in the basis
// b₁ = (1, 1) (on the mirror) and b₂ = (1, −1) (across it) the same map is diag(1, −1) = P⁻¹ A P.
export const changeOfBasis: Scene = {
  id: 'change-of-basis',
  title: 'One map, two matrices',
  flow: 'TB',
  nodes: [
    {
      id: 'mirror',
      kind: 'plot',
      label: 'Reflection across y = x',
      sub: 'b₁ stays put; b₂ flips to −b₂; w = 2.5 b₁ + 1.5 b₂',
      plot: {
        equal: true,
        x: { min: -2, max: 5.5, step: 1 },
        y: { min: -1.25, max: 4.25, step: 1 },
        series: [
          { kind: 'line', points: lineEq(1, -1, 0, -1.5, 4.5), dashed: true, label: 'mirror y = x', labelAt: [3.2, 4.2], color: '#9ca3af' },
          arrow([1, 1], 'b₁ = T b₁', '#60a5fa'),
          arrow([1, -1], 'b₂', '#f59e0b'),
          arrow([-1, 1], 'T b₂ = −b₂', '#fbbf24'),
          arrow([2.5, 2.5], '2.5 b₁', '#bfdbfe'),
          { kind: 'segment', from: [2.5, 2.5], to: [4, 1], arrow: true, label: '1.5 b₂', labelAt: [3.4, 2.05], color: '#f59e0b' },
          arrow([4, 1], 'w = (4, 1)', '#34d399'),
          arrow([1, 4], 'T w = (1, 4)', '#f472b6'),
        ],
      },
    },
    {
      id: 'matrices',
      kind: 'table',
      label: 'Same map, two coordinate systems',
      sub: 'P = [b₁ b₂] = [1 1; 1 −1] converts B-coordinates to standard',
      headers: ['object', 'standard basis', 'basis B = (b₁, b₂)'],
      values: [
        ['w', '(4, 1)', '(2.5, 1.5) = P⁻¹ w'],
        ['T', 'A = [0 1; 1 0]', 'D = P⁻¹ A P = [1 0; 0 −1]'],
        ['T w', '(1, 4)', '(2.5, −1.5)'],
      ],
    },
  ],
  edges: [],
}
