import { board, caution, fact, facts } from '../frame'
import { matrixTable } from '../plot-kit'

// §8.4 — with A = Q R, the normal equations collapse to R x̂ = Qᵀ b, a triangular solve. Conditioning
// numbers are computed: a degree-5 polynomial design on 11 points in [0, 1].
export const qrSolve = board({
  id: 'qr-solve',
  figure: 'Least squares through QR',
  diagram: [
    {
      type: 'group',
      id: 'factors',
      title: 'A = [1 0; 1 1; 1 2] = Q R',
      dir: 'row',
      children: [
        matrixTable('qr-q', 'Q (3 × 2)', 'orthonormal columns: QᵀQ = I', [['0.577', '−0.707'], ['0.577', '0'], ['0.577', '0.707']], ['q₁', 'q₂']),
        matrixTable('qr-r', 'R (2 × 2)', 'upper triangular', [['1.732', '1.732'], ['0', '1.414']], ['c', 'd']),
      ]
    },
    {
      type: 'table',
      id: 'steps',
      title: 'Same data, solved with A = Q R: q₁ = (1, 1, 1)/√3, q₂ = (−1, 0, 1)/√2',
      columns: ['step', 'result'],
      rows: [
        ['R', '[√3 √3; 0 √2] ≈ [1.732 1.732; 0 1.414]'],
        ['Qᵀ b', '(7/√3, 3/√2) ≈ (4.041, 2.121)'],
        ['back-solve R x̂ = Qᵀ b', 'd = 1.5, then c = 5/6'],
        ['agrees with §8.2', 'x̂ = (5/6, 3/2) ✓'],
      ]
    },
    {
      type: 'table',
      id: 'conditioning',
      title: 'Why QR rather than AᵀA: κ(AᵀA) = κ(A)²; measured for a degree-5 polynomial fit',
      columns: ['method', 'solves with', 'condition number'],
      rows: [
        ['normal equations', 'AᵀA', '9.8 × 10⁶ = κ²'],
        ['QR', 'R', '3.1 × 10³ = κ'],
        ['digits at risk, double precision', '', 'about 7 versus about 3'],
      ]
    },
  ],
  edges: [
    { from: 'qr-q', to: 'qr-r', label: '×' }
  ],
  idea: 'Solving least squares with QR',
  board: [
    fact('b-rule', 'With full column rank, A = Q R', 'the normal equations become R x̂ = Qᵀ b'),
    facts('b-1', 'Why it works', ['AᵀA = Rᵀ Qᵀ Q R = Rᵀ R', 'cancel the invertible Rᵀ', 'our data: x̂ = (5/6, 3/2)']),
    facts('b-2', 'Why it matters numerically', ['κ(AᵀA) = κ(A)²', 'degree 5, 11 points: 3.1 × 10³', 'but κ(AᵀA) ≈ 9.8 × 10⁶', 'QR keeps ~2× the digits']),
    caution('b-watch', 'QR needs full column rank. For rank-deficient problems, use the SVD (chapter 11).'),
  ]
})
