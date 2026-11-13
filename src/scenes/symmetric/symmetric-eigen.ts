import { board, fact, facts } from '../frame'
import { lineEq } from '../plot-kit'

// §10.1 — symmetric versus not. S = [5 2; 2 2] has eigen-directions (2, 1) and (1, −2): perpendicular.
// B = [3 1; 0 2] (not symmetric) has (1, 0) and (1, −1): 45° apart.
export const symmetricEigen = board({
  id: 'symmetric-eigen',
  figure: 'Symmetric matrices have perpendicular eigenvectors',
  diagram: [
    {
      type: 'plot',
      id: 'directions',
      title: 'Eigen-directions of S (solid) and B (dashed): S = [5 2; 2 2] = Sᵀ; B = [3 1; 0 2] ≠ Bᵀ',
      equal: true,
      x: { min: -2.5, max: 2.5, step: 1 },
      y: { min: -2, max: 2, step: 1 },
      series: [
        {
          kind: 'line',
          points: lineEq(1, -2, 0, -2.5, 2.5),
          label: 'S: λ = 6 along (2, 1)',
          labelAt: [0.45, 1.45],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: lineEq(2, 1, 0, -1, 1),
          label: 'S: λ = 1 along (1, −2)',
          labelAt: [1.45, -1.57],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: lineEq(0, 1, 0, -2.5, 2.5),
          dashed: true,
          label: 'B: λ = 3 along (1, 0)',
          labelAt: [-2.45, 0.15],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: lineEq(1, 1, 0, -2, 2),
          dashed: true,
          label: 'B: λ = 2 along (1, −1)',
          labelAt: [-3.57, 1.27],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'facts',
      title: 'What symmetry guarantees: for every real S with Sᵀ = S',
      columns: ['property', 'symmetric S', 'non-symmetric B'],
      rows: [
        ['eigenvalues', 'real: 6 and 1', 'real here: 3 and 2; can be complex'],
        ['eigenvectors', 'perpendicular', '(1, 0), (1, −1): 45° apart'],
        ['diagonalisable', 'always, with orthonormal Q', 'not always'],
        ['factorisation', 'S = Q Λ Qᵀ', 'B = V D V⁻¹'],
      ]
    },
  ],
  idea: 'Real symmetric matrices and orthogonal eigenvectors',
  board: [
    fact('b-rule', 'Symmetric: Sᵀ = S, a mirror across the diagonal', 'symmetry buys strong guarantees'),
    facts('b-1', 'What symmetry guarantees', ['every eigenvalue is real', 'distinct λ: perpendicular vectors', 'never defective', 'S = Q Λ Qᵀ (next section)']),
    facts('b-2', 'Compare', ['[5 2; 2 2]: (2, 1) ⟂ (1, −2)', '[3 1; 0 2]: 45° apart', 'solid lines meet at 90°']),
    fact('b-3', 'Why perpendicular', 'λ (v · w) = (S v) · w = v · (S w) = μ (v · w), so v · w = 0 when λ ≠ μ'),
  ]
})
