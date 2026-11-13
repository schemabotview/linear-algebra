import { board, fact, facts } from '../frame'

// §12.5 — which factorisation for which problem (costs count multiply-adds, n × n), and the library calls. The code card's printed values
// were produced by running exactly this code (NumPy, double precision).
export const choosing = board({
  id: 'choosing',
  figure: 'Choosing a factorisation',
  diagram: [
    {
      type: 'group',
      id: 'decision',
      title: 'Match the method to the structure',
      dir: 'grid',
      cols: 2,
      children: [
        { type: 'item', id: 'lu', title: 'LU, pivoted', sub: 'square, general: ≈ n³/3', icon: 'layers', tone: 'ingest' },
        { type: 'item', id: 'chol', title: 'Cholesky', sub: 'symmetric pos. def.: ≈ n³/6', icon: 'zap', tone: 'ingest' },
        { type: 'item', id: 'qr', title: 'QR', sub: 'least squares, full rank: ≈ m n²', tone: 'store' },
        { type: 'item', id: 'svd', title: 'SVD', sub: 'rank in question: several × QR', icon: 'search', tone: 'store' },
        { type: 'item', id: 'sparse', title: 'Sparse or iterative', sub: 'large and sparse: no dense A⁻¹', icon: 'network', tone: 'serve' },
        { type: 'item', id: 'reuse', title: 'Factor once', sub: 'reuse for every right-hand side', tone: 'serve' },
      ]
    },
    {
      type: 'code',
      id: 'code',
      filename: 'workshop.py',
      code: `import numpy as np
A = np.array([[4., 10, 6], [2, 3, 1], [1, 2, 3]])
b = np.array([34., 11, 11])
np.linalg.solve(A, b)       # [3. 1. 2.]   LU
S = A.T @ A                 # symmetric pos. def.
L = np.linalg.cholesky(S)   # S = L Lᵀ
np.linalg.cond(A)           # 19.4
np.linalg.svd(A, compute_uv=False)
                            # [13.283  1.761  0.684]`
    },
  ],
  idea: 'Choosing LU, QR, Cholesky or SVD',
  board: [
    fact('b-rule', 'Match the method to the structure', 'and to the question being asked'),
    facts('b-1', 'A short decision guide', ['square: pivoted LU', 'SPD: Cholesky, half the cost', 'least squares: QR', 'rank in doubt: SVD']),
    facts('b-2', 'Scale and structure', ['factor once, reuse the factors', 'large sparse: iterative methods', 'never form A⁻¹ or AᵀA', 'the code: a real NumPy run']),
  ]
})
