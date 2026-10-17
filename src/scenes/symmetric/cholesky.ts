import type { Scene } from '@graphlearning/flow'
import { matrixTable } from '../plot-kit'

// §10.6 — S = L Lᵀ for a symmetric positive definite S, worked entry by entry. Every square root is of
// a positive number exactly because S is positive definite; a failed root is a definiteness test.
const X = ['c₁', 'c₂', 'c₃']

export const cholesky: Scene = {
  id: 'cholesky',
  title: 'Cholesky factorisation',
  flow: 'TB',
  nodes: [
    {
      id: 'factors',
      label: 'S = L Lᵀ',
      pattern: 'group',
      flow: 'LR',
      children: [
        matrixTable('ch-s', 'S', 'symmetric positive definite', [[4, 2, 2], [2, 5, 3], [2, 3, 6]], X),
        matrixTable('ch-l', 'L', 'lower triangular, positive diagonal', [[2, 0, 0], [1, 2, 0], [1, 1, 2]], X),
      ],
      edges: [{ source: 'ch-s', target: 'ch-l', label: 'factor' }],
    },
    {
      id: 'steps',
      kind: 'table',
      label: 'Column by column',
      sub: 'each diagonal entry is a square root of something positive',
      headers: ['entry', 'formula', 'value'],
      values: [
        ['l₁₁', '√4', '2'],
        ['l₂₁, l₃₁', '2 / 2, 2 / 2', '1, 1'],
        ['l₂₂', '√(5 − 1²)', '2'],
        ['l₃₂', '(3 − 1·1) / 2', '1'],
        ['l₃₃', '√(6 − 1² − 1²)', '2'],
        ['cost', 'about n³/6', 'half of LU'],
      ],
    },
  ],
  edges: [],
}
