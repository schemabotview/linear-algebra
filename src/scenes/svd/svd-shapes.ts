import type { Scene } from '@graphlearning/flow'
import { matrixTable } from '../plot-kit'

// §11.1 — the SVD of a 3 × 2 matrix, A = [1 1; 0 1; 1 0], every factor written out. σ = √3 and 1
// (computed). u₃ spans N(Aᵀ) and is dropped by the reduced SVD.
const r = (x: number) => x.toFixed(3).replace('-', '−')
const s2 = Math.SQRT1_2
const s3 = 1 / Math.sqrt(3)
const s6 = 1 / Math.sqrt(6)

export const svdShapes: Scene = {
  id: 'svd-shapes',
  title: 'The singular value decomposition',
  flow: 'TB',
  nodes: [
    {
      id: 'factors',
      label: 'A = U Σ Vᵀ for A = [1 1; 0 1; 1 0]',
      pattern: 'group',
      cols: 2,
      children: [
        matrixTable('svd-u', 'U (3 × 3)', 'orthonormal: output directions', [[r(2 * s6), '0', r(s3)], [r(s6), r(-s2), r(-s3)], [r(s6), r(s2), r(-s3)]], ['u₁', 'u₂', 'u₃']),
        matrixTable('svd-sigma', 'Σ (3 × 2)', 'singular values, decreasing', [[r(Math.sqrt(3)), '0'], ['0', '1'], ['0', '0']], ['', '']),
        matrixTable('svd-vt', 'Vᵀ (2 × 2)', 'orthonormal: input directions', [[r(s2), r(s2)], [r(s2), r(-s2)]], ['', '']),
      ],
      edges: [],
    },
    {
      id: 'shapes',
      kind: 'table',
      label: 'Full and reduced SVD of an m × n matrix of rank r',
      sub: 'every real matrix has one; the σ are unique, the vectors nearly so',
      headers: ['form', 'U', 'Σ', 'Vᵀ', 'here'],
      values: [
        ['full', 'm × m', 'm × n', 'n × n', '3×3, 3×2, 2×2'],
        ['reduced', 'm × r', 'r × r', 'r × n', '3×2, 2×2, 2×2'],
        ['what is dropped', 'uᵣ₊₁, …: N(Aᵀ)', 'zero rows', 'vᵣ₊₁, …: N(A)', 'u₃ only'],
      ],
    },
  ],
  edges: [],
}
