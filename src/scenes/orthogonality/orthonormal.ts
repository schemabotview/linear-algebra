import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'

// §7.3 — with an orthonormal basis, coordinates are dot products. q₁ = (0.6, 0.8), q₂ = (−0.8, 0.6):
// x = (2, 1) has c₁ = q₁ · x = 2 and c₂ = q₂ · x = −1, so x = 2 q₁ − q₂. No system to solve.
export const orthonormal: Scene = {
  id: 'orthonormal',
  title: 'Orthonormal bases',
  flow: 'TB',
  nodes: [
    {
      id: 'recover',
      kind: 'plot',
      label: 'x = (2, 1) = 2 q₁ − 1 q₂',
      sub: 'q₁ = (0.6, 0.8), q₂ = (−0.8, 0.6): unit length, perpendicular',
      plot: {
        equal: true,
        x: { min: -1.5, max: 3, step: 1 },
        y: { min: -0.5, max: 2, step: 0.5 },
        series: [
          arrow([1.2, 1.6], '2 q₁', '#bfdbfe'),
          arrow([0.6, 0.8], 'q₁', '#60a5fa'),
          arrow([-0.8, 0.6], 'q₂', '#f59e0b'),
          { kind: 'segment', from: [1.2, 1.6], to: [2, 1], arrow: true, label: '−q₂', labelAt: [1.75, 1.5], color: '#f59e0b' },
          arrow([2, 1], 'x = (2, 1)', '#34d399'),
        ],
      },
    },
    {
      id: 'coordinates',
      kind: 'table',
      label: 'Coordinates by dot products',
      sub: 'cᵢ = qᵢ · x, because qᵢ · qⱼ = 0 for i ≠ j and qᵢ · qᵢ = 1',
      headers: ['coordinate', 'working', 'value'],
      values: [
        ['c₁ = q₁ · x', '0.6·2 + 0.8·1', '2'],
        ['c₂ = q₂ · x', '−0.8·2 + 0.6·1', '−1'],
        ['check', '2 (0.6, 0.8) − (−0.8, 0.6)', '(2, 1) ✓'],
        ['any basis', 'solve B c = x', 'needs elimination'],
      ],
    },
  ],
  edges: [],
}
