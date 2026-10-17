import type { Scene } from '@graphlearning/flow'
import { arrow, GREY } from '../plot-kit'

// §9.1 — A = [2 1; 1 2]. Along (1, 1) it stretches by 3; along (1, −1) it does nothing; any other
// vector, such as (1, 0), turns: A (1, 0) = (2, 1) is not a multiple of (1, 0).
export const eigenEquation: Scene = {
  id: 'eigen-equation',
  title: 'Directions a map does not turn',
  flow: 'TB',
  nodes: [
    {
      id: 'directions',
      kind: 'plot',
      label: 'A = [2 1; 1 2]: two directions survive',
      sub: 'A v₁ = 3 v₁, A v₂ = 1 v₂; a generic x is turned',
      plot: {
        equal: true,
        x: { min: -1.5, max: 3.5, step: 1 },
        y: { min: -1.5, max: 3.5, step: 1 },
        series: [
          arrow([3, 3], 'A v₁ = 3 v₁', '#bfdbfe'),
          arrow([1, 1], 'v₁ = (1, 1)', '#60a5fa'),
          arrow([1, -1], 'v₂ = A v₂ = (1, −1)', '#f59e0b'),
          { ...arrow([1, 0], 'x', GREY), labelAt: [0.95, 0.15] },
          { ...arrow([2, 1], 'A x = (2, 1): turned', '#f472b6'), dashed: true },
        ],
      },
    },
    {
      id: 'definition',
      kind: 'table',
      label: 'A v = λ v, with v ≠ 0',
      sub: 'the eigenspace for λ is N(A − λ I)',
      headers: ['λ', 'eigenvector', 'A v', 'eigenspace'],
      values: [
        ['3', '(1, 1)', '(3, 3) = 3 (1, 1)', 'the line through (1, 1)'],
        ['1', '(1, −1)', '(1, −1) = 1 (1, −1)', 'the line through (1, −1)'],
        ['—', '(1, 0)', '(2, 1)', 'not an eigenvector'],
      ],
    },
  ],
  edges: [],
}
