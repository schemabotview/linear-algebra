import { board, caution, fact, facts } from '../frame'
import { arrow, lineEq } from '../plot-kit'

// §5.6 — reflection across y = x. In the standard basis its matrix is [0 1; 1 0]; in the basis
// b₁ = (1, 1) (on the mirror) and b₂ = (1, −1) (across it) the same map is diag(1, −1) = P⁻¹ A P.
export const changeOfBasis = board({
  id: 'change-of-basis',
  figure: 'One map, two matrices',
  diagram: [
    {
      type: 'plot',
      id: 'mirror',
      title: 'Reflection across y = x: b₁ stays put; b₂ flips to −b₂; w = 2.5 b₁ + 1.5 b₂',
      equal: true,
      x: { min: -2, max: 5.5, step: 1 },
      y: { min: -1.25, max: 4.25, step: 1 },
      series: [
        {
          kind: 'line',
          points: lineEq(1, -1, 0, -1.5, 4.5),
          dashed: true,
          label: 'mirror y = x',
          labelAt: [3.97, 3.78],
          tone: 'neutral'
        },
        arrow([1, 1], 'b₁ = T b₁', 'ingest', [0, 0], [1.22, 1]),
        arrow([1, -1], 'b₂', 'infra'),
        arrow([-1, 1], 'T b₂ = −b₂', 'infra', [0, 0], [-2.0, 1.25]),
        arrow([2.5, 2.5], '2.5 b₁', 'ingest', [0, 0], [2.72, 2.5]),
        {
          kind: 'segment',
          from: [2.5, 2.5],
          to: [4, 1],
          arrow: true,
          label: '1.5 b₂',
          labelAt: [3.4, 2.05],
          tone: 'infra'
        },
        arrow([4, 1], 'w = (4, 1)', 'store'),
        arrow([1, 4], 'T w = (1, 4)', 'serve', [0, 0], [1, 3.87]),
      ]
    },
    {
      type: 'table',
      id: 'matrices',
      title: 'Same map, two coordinate systems: P = [b₁ b₂] = [1 1; 1 −1] converts B-coordinates to standard',
      columns: ['object', 'standard basis', 'basis B = (b₁, b₂)'],
      rows: [
        ['w', '(4, 1)', '(2.5, 1.5) = P⁻¹ w'],
        ['T', 'A = [0 1; 1 0]', 'D = P⁻¹ A P = [1 0; 0 −1]'],
        ['T w', '(1, 4)', '(2.5, −1.5)'],
      ]
    },
  ],
  idea: 'Change of basis and similarity',
  board: [
    fact('b-rule', 'A matrix describes a map in a basis', 'change the basis: the matrix changes, the map does not'),
    facts('b-1', 'Converting coordinates', ['P = [b₁ b₂]: B-coords → standard', 'P⁻¹ goes the other way', 'w = (4, 1) → (2.5, 1.5)']),
    facts('b-2', 'Similar matrices', ['in basis B: D = P⁻¹ A P', 'reflect across y = x: [0 1; 1 0]', 'in B: diag(1, −1)', 'keep b₁, flip b₂']),
    caution('b-watch', 'Chapter outcome: you can tell when a map is invertible, use LU factors, and separate a change of basis from a change of map.'),
  ]
})
