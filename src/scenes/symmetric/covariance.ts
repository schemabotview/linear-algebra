import { board, caution, fact, facts } from '../frame'
import { arrow } from '../plot-kit'

// §10.7 — five workshop jobs, centred. The Gram matrix XᵀX of the centred data is symmetric positive
// semidefinite; divided by n − 1 it is the covariance C. Its top eigenvector (0.62, 0.78) is the
// direction of greatest spread. Numbers computed (numpy).
const CENTRED: [
  number,
  number
][] = [[-4, -4], [-2, -3], [0, 0], [2, 1], [4, 6]]
const top: [
  number,
  number
] = [0.6231, 0.7821]
const s1 = Math.sqrt(25.0611)
const s2 = Math.sqrt(0.4389)
export const covariance = board({
  id: 'covariance',
  figure: 'Energy, ellipses and covariance',
  diagram: [
    {
      type: 'plot',
      id: 'spread',
      title: 'Five jobs, centred: labour against energy: arrows: eigenvectors of C, scaled by √λ',
      equal: true,
      x: { min: -6, max: 6, step: 2, label: 'labour − mean' },
      y: { min: -5, max: 7, step: 2, label: 'energy − mean' },
      series: [
        {
          kind: 'scatter',
          points: CENTRED,
          label: 'jobs',
          labelAt: [-3.8, -4.7],
          tone: 'infra'
        },
        { ...arrow([top[0] * s1, top[1] * s1], 'λ₁ = 25.1: most spread', 'ingest'), labelAt: [3.4, 3.4] },
        { ...arrow([-top[1] * s2 * 3, top[0] * s2 * 3], 'λ₂ = 0.44 (×3)', 'store'), labelAt: [-5.6, 1.7] },
      ]
    },
    {
      type: 'table',
      id: 'gram',
      title: 'From centred data to covariance: X: 5 × 2, one row per job, column means subtracted',
      columns: ['quantity', 'value', 'note'],
      rows: [
        ['Gram matrix XᵀX', '[40 48; 48 62]', 'symmetric, positive semidefinite'],
        ['covariance C = XᵀX / (n − 1)', '[10 12; 12 15.5]', 'n = 5'],
        ['eigenvalues of C', '25.06 and 0.44', '98% of the spread on one axis'],
        ['top eigenvector', '(0.62, 0.78)', 'principal axis: chapter 11 (PCA)'],
      ]
    },
  ],
  idea: 'Energy, ellipsoids and covariance geometry',
  board: [
    fact('b-rule', 'Centred data X: C = XᵀX / (n − 1)', 'symmetric positive semidefinite: the sample covariance'),
    facts('b-1', 'Five workshop jobs', ['labour and energy, centred', 'C = [10 12; 12 15.5]', 'λ = 25.06 and 0.44', '98% of spread in one direction']),
    facts('b-2', 'Reading C geometrically', ['vᵀ C v: spread along v', 'top eigenvector (0.62, 0.78)', 'the direction of most spread']),
    caution('b-watch', 'Chapter outcome: you can explain why symmetry gives orthogonal diagonalisation, classify quadratic forms, and say when Cholesky applies.'),
  ]
})
