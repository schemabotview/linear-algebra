import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'

// §4.4 — one vector, two bases. w = (4, 1) in the standard basis is 2.5 b₁ + 1.5 b₂ in the basis
// b₁ = (1, 1), b₂ = (1, −1). The coordinates change; the vector does not.
export const bases: Scene = {
  id: 'bases',
  title: 'Bases and coordinates',
  flow: 'TB',
  nodes: [
    {
      id: 'two-bases',
      kind: 'plot',
      label: 'w = (4, 1) = 2.5 b₁ + 1.5 b₂',
      sub: 'b₁ = (1, 1), b₂ = (1, −1)',
      plot: {
        equal: true,
        x: { min: -1, max: 5, step: 1 },
        y: { min: -1.5, max: 3, step: 1 },
        series: [
          arrow([2.5, 2.5], '2.5 b₁', '#bfdbfe'),
          arrow([1, 1], 'b₁', '#60a5fa'),
          arrow([1, -1], 'b₂', '#f59e0b'),
          { kind: 'segment', from: [2.5, 2.5], to: [4, 1], arrow: true, label: '1.5 b₂', labelAt: [3.4, 2.0], color: '#f59e0b' },
          arrow([4, 1], 'w', '#34d399'),
        ],
      },
    },
    {
      id: 'coordinates',
      kind: 'table',
      label: 'Same vector, different coordinates',
      sub: 'a basis spans and is independent',
      headers: ['space', 'a basis', 'dimension'],
      values: [
        ['ℝ², standard', '(1, 0), (0, 1): w ↦ (4, 1)', '2'],
        ['ℝ², tilted', '(1, 1), (1, −1): w ↦ (2.5, 1.5)', '2'],
        ['ℝ³', 'e₁, e₂, e₃', '3'],
        ['P₂, polynomials', '1, t, t²', '3'],
      ],
    },
  ],
  edges: [],
}
