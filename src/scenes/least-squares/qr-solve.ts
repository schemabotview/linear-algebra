import type { Scene } from '@graphlearning/flow'
import { matrixTable } from '../plot-kit'

// §8.4 — with A = Q R, the normal equations collapse to R x̂ = Qᵀ b, a triangular solve. Conditioning
// numbers are computed: a degree-5 polynomial design on 11 points in [0, 1].
export const qrSolve: Scene = {
  id: 'qr-solve',
  title: 'Least squares through QR',
  flow: 'TB',
  nodes: [
    {
      id: 'factors',
      label: 'A = [1 0; 1 1; 1 2] = Q R',
      pattern: 'group',
      flow: 'LR',
      children: [
        matrixTable('qr-q', 'Q (3 × 2)', 'orthonormal columns: QᵀQ = I', [['0.577', '−0.707'], ['0.577', '0'], ['0.577', '0.707']], ['q₁', 'q₂']),
        matrixTable('qr-r', 'R (2 × 2)', 'upper triangular', [['1.732', '1.732'], ['0', '1.414']], ['c', 'd']),
      ],
      edges: [{ source: 'qr-q', target: 'qr-r', label: '×' }],
    },
    {
      id: 'steps',
      kind: 'table',
      label: 'Same data, solved with A = Q R',
      sub: 'q₁ = (1, 1, 1)/√3, q₂ = (−1, 0, 1)/√2',
      headers: ['step', 'result'],
      values: [
        ['R', '[√3 √3; 0 √2] ≈ [1.732 1.732; 0 1.414]'],
        ['Qᵀ b', '(7/√3, 3/√2) ≈ (4.041, 2.121)'],
        ['back-solve R x̂ = Qᵀ b', 'd = 1.5, then c = 5/6'],
        ['agrees with §8.2', 'x̂ = (5/6, 3/2) ✓'],
      ],
    },
    {
      id: 'conditioning',
      kind: 'table',
      label: 'Why QR rather than AᵀA',
      sub: 'κ(AᵀA) = κ(A)²; measured for a degree-5 polynomial fit',
      headers: ['method', 'solves with', 'condition number'],
      values: [
        ['normal equations', 'AᵀA', '9.8 × 10⁶ = κ²'],
        ['QR', 'R', '3.1 × 10³ = κ'],
        ['digits at risk, double precision', '', 'about 7 versus about 3'],
      ],
    },
  ],
  edges: [],
}
