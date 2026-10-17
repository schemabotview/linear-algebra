import type { Scene } from '@graphlearning/flow'

// §12.5 — which factorisation for which problem (costs count multiply-adds, n × n), and the library calls. The code card's printed values
// were produced by running exactly this code (NumPy, double precision).
export const choosing: Scene = {
  id: 'choosing',
  title: 'Choosing a factorisation',
  flow: 'TB',
  nodes: [
    {
      id: 'decision',
      label: 'Match the method to the structure',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'lu', label: 'LU, pivoted', sub: 'square, general: ≈ n³/3', pattern: 'service', icon: 'layers' },
        { id: 'chol', label: 'Cholesky', sub: 'symmetric pos. def.: ≈ n³/6', pattern: 'service', icon: 'zap' },
        { id: 'qr', label: 'QR', sub: 'least squares, full rank: ≈ m n²', pattern: 'storage', icon: 'ruler' },
        { id: 'svd', label: 'SVD', sub: 'rank in question: several × QR', pattern: 'storage', icon: 'search' },
        { id: 'sparse', label: 'Sparse or iterative', sub: 'large and sparse: no dense A⁻¹', pattern: 'network', icon: 'network' },
        { id: 'reuse', label: 'Factor once', sub: 'reuse for every right-hand side', pattern: 'network', icon: 'repeat' },
      ],
    },
    {
      id: 'code',
      kind: 'code',
      filename: 'workshop.py',
      label: `import numpy as np
A = np.array([[4., 10, 6], [2, 3, 1], [1, 2, 3]])
b = np.array([34., 11, 11])
np.linalg.solve(A, b)       # [3. 1. 2.]   LU
S = A.T @ A                 # symmetric pos. def.
L = np.linalg.cholesky(S)   # S = L Lᵀ
np.linalg.cond(A)           # 19.4
np.linalg.svd(A, compute_uv=False)
                            # [13.283  1.761  0.684]`,
    },
  ],
  edges: [],
}
