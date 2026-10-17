import type { Scene } from '@graphlearning/flow'
import { arrow, lineEq } from '../plot-kit'

// §5.1 — A = [1 2; 2 4] squeezes the plane onto the line y = 2x. Two different inputs, (2, 0) and
// (0, 1), land on the same output (2, 4), so the input cannot be recovered: A is not one-to-one.
export const losingInformation: Scene = {
  id: 'losing-information',
  title: 'A map that loses a dimension',
  flow: 'TB',
  nodes: [
    {
      id: 'collapse',
      kind: 'plot',
      label: 'A = [1 2; 2 4]: two inputs, one output',
      sub: 'A (2, 0) = A (0, 1) = (2, 4); every output lies on y = 2x',
      plot: {
        equal: true,
        x: { min: -2, max: 4, step: 1 },
        y: { min: -0.5, max: 4.5, step: 1 },
        series: [
          { kind: 'line', points: lineEq(2, -1, 0, -0.25, 2.25), label: 'C(A): y = 2x', labelAt: [-1.9, 3.6], color: '#9ca3af' },
          arrow([2, 0], 'input (2, 0)', '#60a5fa'),
          { ...arrow([0, 1], 'input (0, 1)', '#f59e0b'), labelAt: [-1.7, 1.0] },
          arrow([2, 4], 'output (2, 4)', '#34d399'),
        ],
      },
    },
    {
      id: 'shapes',
      kind: 'table',
      label: 'One-to-one and onto, by shape and rank',
      sub: 'm × n matrix of rank r',
      headers: ['property', 'meaning', 'test'],
      values: [
        ['one-to-one (injective)', 'different inputs, different outputs', 'N(A) = {0}, r = n'],
        ['onto (surjective)', 'every output is reached', 'C(A) = ℝᵐ, r = m'],
        ['tall, m > n', 'can be one-to-one, never onto', 'r ≤ n < m'],
        ['wide, m < n', 'can be onto, never one-to-one', 'r ≤ m < n'],
        ['square, m = n', 'both, or neither', 'r = n'],
      ],
    },
  ],
  edges: [],
}
