import { board, caution, fact, facts } from '../frame'
import { matrixTable } from '../plot-kit'

// §11.1 — the SVD of a 3 × 2 matrix, A = [1 1; 0 1; 1 0], every factor written out. σ = √3 and 1
// (computed). u₃ spans N(Aᵀ) and is dropped by the reduced SVD.
const r = (x: number) => x.toFixed(3).replace('-', '−')
const s2 = Math.SQRT1_2
const s3 = 1 / Math.sqrt(3)
const s6 = 1 / Math.sqrt(6)
export const svdShapes = board({
  id: 'svd-shapes',
  figure: 'The singular value decomposition',
  diagram: [
    {
      type: 'group',
      id: 'factors',
      title: 'A = U Σ Vᵀ for A = [1 1; 0 1; 1 0]',
      dir: 'grid',
      cols: 2,
      children: [
        matrixTable('svd-u', 'U (3 × 3)', 'orthonormal: output directions', [[r(2 * s6), '0', r(s3)], [r(s6), r(-s2), r(-s3)], [r(s6), r(s2), r(-s3)]], ['u₁', 'u₂', 'u₃']),
        matrixTable('svd-sigma', 'Σ (3 × 2)', 'singular values, decreasing', [[r(Math.sqrt(3)), '0'], ['0', '1'], ['0', '0']], ['', '']),
        matrixTable('svd-vt', 'Vᵀ (2 × 2)', 'orthonormal: input directions', [[r(s2), r(s2)], [r(s2), r(-s2)]], ['', '']),
      ]
    },
    {
      type: 'table',
      id: 'shapes',
      title: 'Full and reduced SVD of an m × n matrix of rank r: every real matrix has one; the σ are unique, the vectors nearly so',
      columns: ['form', 'U', 'Σ', 'Vᵀ', 'here'],
      rows: [
        ['full', 'm × m', 'm × n', 'n × n', '3×3, 3×2, 2×2'],
        ['reduced', 'm × r', 'r × r', 'r × n', '3×2, 2×2, 2×2'],
        ['what is dropped', 'uᵣ₊₁, …: N(Aᵀ)', 'zero rows', 'vᵣ₊₁, …: N(A)', 'u₃ only'],
      ]
    },
  ],
  idea: 'Full and reduced SVD',
  board: [
    fact('b-rule', 'Every real m × n matrix: A = U Σ Vᵀ', 'square or not'),
    facts('b-1', 'The three factors', ['V: orthonormal inputs', 'Σ: σ₁ ≥ σ₂ ≥ … ≥ 0', 'U: orthonormal outputs', 'reduced: keep the r nonzero σ']),
    facts('b-2', 'For A = [1 1; 0 1; 1 0]', ['σ₁ = √3, σ₂ = 1', 'v₁ = (1, 1)/√2', 'u₁ = (2, 1, 1)/√6', 'u₃ spans N(Aᵀ)']),
    caution('b-watch', 'Eigendecomposition needs a square, diagonalisable matrix. The SVD needs nothing.'),
  ]
})
