import type { Scene } from '@graphlearning/flow'
import { lineEq } from '../plot-kit'

// §10.1 — symmetric versus not. S = [5 2; 2 2] has eigen-directions (2, 1) and (1, −2): perpendicular.
// B = [3 1; 0 2] (not symmetric) has (1, 0) and (1, −1): 45° apart.
export const symmetricEigen: Scene = {
  id: 'symmetric-eigen',
  title: 'Symmetric matrices have perpendicular eigenvectors',
  flow: 'TB',
  nodes: [
    {
      id: 'directions',
      kind: 'plot',
      label: 'Eigen-directions of S (solid) and B (dashed)',
      sub: 'S = [5 2; 2 2] = Sᵀ; B = [3 1; 0 2] ≠ Bᵀ',
      plot: {
        equal: true,
        x: { min: -2.5, max: 2.5, step: 1 },
        y: { min: -2, max: 2, step: 1 },
        series: [
          { kind: 'line', points: lineEq(1, -2, 0, -2.5, 2.5), label: 'S: λ = 6 along (2, 1)', labelAt: [0.45, 1.45], color: '#60a5fa' },
          { kind: 'line', points: lineEq(2, 1, 0, -1, 1), label: 'S: λ = 1 along (1, −2)', labelAt: [1.05, -1.75], color: '#60a5fa' },
          { kind: 'line', points: lineEq(0, 1, 0, -2.5, 2.5), dashed: true, label: 'B: λ = 3 along (1, 0)', labelAt: [-2.45, 0.15], color: '#f59e0b' },
          { kind: 'line', points: lineEq(1, 1, 0, -2, 2), dashed: true, label: 'B: λ = 2 along (1, −1)', labelAt: [-2.45, 1.75], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'facts',
      kind: 'table',
      label: 'What symmetry guarantees',
      sub: 'for every real S with Sᵀ = S',
      headers: ['property', 'symmetric S', 'non-symmetric B'],
      values: [
        ['eigenvalues', 'real: 6 and 1', 'real here: 3 and 2; can be complex'],
        ['eigenvectors', 'perpendicular', '(1, 0), (1, −1): 45° apart'],
        ['diagonalisable', 'always, with orthonormal Q', 'not always'],
        ['factorisation', 'S = Q Λ Qᵀ', 'B = V D V⁻¹'],
      ],
    },
  ],
  edges: [],
}
