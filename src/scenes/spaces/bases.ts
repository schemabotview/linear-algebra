import { board, fact, facts } from '../frame'
import { arrow } from '../plot-kit'

// §4.4 — one vector, two bases. w = (4, 1) in the standard basis is 2.5 b₁ + 1.5 b₂ in the basis
// b₁ = (1, 1), b₂ = (1, −1). The coordinates change; the vector does not.
export const bases = board({
  id: 'bases',
  figure: 'Bases and coordinates',
  diagram: [
    {
      type: 'plot',
      id: 'two-bases',
      title: 'w = (4, 1) = 2.5 b₁ + 1.5 b₂: b₁ = (1, 1), b₂ = (1, −1)',
      equal: true,
      x: { min: -1, max: 5, step: 1 },
      y: { min: -1.5, max: 3, step: 1 },
      series: [
        arrow([2.5, 2.5], '2.5 b₁', 'ingest'),
        arrow([1, 1], 'b₁', 'ingest', [0, 0], [1.18, 1]),
        arrow([1, -1], 'b₂', 'infra'),
        {
          kind: 'segment',
          from: [2.5, 2.5],
          to: [4, 1],
          arrow: true,
          label: '1.5 b₂',
          labelAt: [3.4, 2.0],
          tone: 'infra'
        },
        arrow([4, 1], 'w', 'store'),
      ]
    },
    {
      type: 'table',
      id: 'coordinates',
      title: 'Same vector, different coordinates: a basis spans and is independent',
      columns: ['space', 'a basis', 'dimension'],
      rows: [
        ['ℝ², standard', '(1, 0), (0, 1): w ↦ (4, 1)', '2'],
        ['ℝ², tilted', '(1, 1), (1, −1): w ↦ (2.5, 1.5)', '2'],
        ['ℝ³', 'e₁, e₂, e₃', '3'],
        ['P₂, polynomials', '1, t, t²', '3'],
      ]
    },
  ],
  idea: 'Bases, coordinates and dimension',
  board: [
    fact('b-rule', 'A basis is independent and spans', 'every vector is a combination of it in exactly one way'),
    facts('b-1', 'Coordinates', ['the weights of that combination', 'b₁ = (1, 1), b₂ = (1, −1)', 'w = (4, 1) → (2.5, 1.5)', 'new basis: new numbers']),
    facts('b-2', 'Dimension', ['every basis has the same size', 'dim ℝⁿ = n', 'dim P₂ = 3: 1, t, t²']),
    fact('b-3', 'Extending a basis', 'add vectors from outside the span, one at a time'),
  ]
})
