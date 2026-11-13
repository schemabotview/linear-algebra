import { board, fact, facts } from '../frame'
import { arrow, lineEq } from '../plot-kit'

// §5.1 — A = [1 2; 2 4] squeezes the plane onto the line y = 2x. Two different inputs, (2, 0) and
// (0, 1), land on the same output (2, 4), so the input cannot be recovered: A is not one-to-one.
export const losingInformation = board({
  id: 'losing-information',
  figure: 'A map that loses a dimension',
  diagram: [
    {
      type: 'plot',
      id: 'collapse',
      title: 'A = [1 2; 2 4]: two inputs, one output: A (2, 0) = A (0, 1) = (2, 4); every output lies on y = 2x',
      equal: true,
      x: { min: -2, max: 4, step: 1 },
      y: { min: -0.5, max: 4.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: lineEq(2, -1, 0, -0.25, 2.25),
          label: 'C(A): y = 2x',
          labelAt: [-1.9, 3.6],
          tone: 'neutral'
        },
        arrow([2, 0], 'input (2, 0)', 'ingest'),
        { ...arrow([0, 1], 'input (0, 1)', 'infra'), labelAt: [-1.8, 1] },
        arrow([2, 4], 'output (2, 4)', 'store', [0, 0], [2.1, 4]),
      ]
    },
    {
      type: 'table',
      id: 'shapes',
      title: 'One-to-one and onto, by shape and rank: m × n matrix of rank r',
      columns: ['property', 'meaning', 'test'],
      rows: [
        ['one-to-one (injective)', 'distinct inputs, distinct outputs', 'N(A) = {0}, r = n'],
        ['onto (surjective)', 'every output is reached', 'C(A) = ℝᵐ, r = m'],
        ['tall, m > n', 'can be one-to-one, never onto', 'r ≤ n < m'],
        ['wide, m < n', 'can be onto, never one-to-one', 'r ≤ m < n'],
        ['square, m = n', 'both, or neither', 'r = n'],
      ]
    },
  ],
  idea: 'One-to-one and onto maps',
  board: [
    fact('b-rule', 'Two questions a map can fail', 'can an output be traced back? can every output be reached?'),
    facts('b-1', 'One-to-one (injective)', ['distinct inputs, distinct outputs', 'N(A) = {0}, so r = n', '[1 2; 2 4]: (2, 0), (0, 1) → (2, 4)', 'at most one solution']),
    facts('b-2', 'Onto (surjective)', ['every b in ℝᵐ is some A x', 'C(A) = ℝᵐ, so r = m', 'same A: outputs on y = 2x', 'at least one solution']),
    fact('b-3', 'Shape limits what is possible', 'tall: never onto; wide: never one-to-one; square: both or neither'),
  ]
})
