import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'

// §10.7 — five workshop jobs, centred. The Gram matrix XᵀX of the centred data is symmetric positive
// semidefinite; divided by n − 1 it is the covariance C. Its top eigenvector (0.62, 0.78) is the
// direction of greatest spread. Numbers computed (numpy).
const CENTRED: [number, number][] = [[-4, -4], [-2, -3], [0, 0], [2, 1], [4, 6]]
const top: [number, number] = [0.6231, 0.7821]
const s1 = Math.sqrt(25.0611)
const s2 = Math.sqrt(0.4389)

export const covariance: Scene = {
  id: 'covariance',
  title: 'Energy, ellipses and covariance',
  flow: 'TB',
  nodes: [
    {
      id: 'spread',
      kind: 'plot',
      label: 'Five jobs, centred: labour against energy',
      sub: 'arrows: eigenvectors of C, scaled by √λ',
      plot: {
        equal: true,
        x: { min: -6, max: 6, step: 2, label: 'labour − mean' },
        y: { min: -5, max: 7, step: 2, label: 'energy − mean' },
        series: [
          { kind: 'scatter', points: CENTRED, label: 'jobs', labelAt: [-3.8, -4.7], color: '#f59e0b' },
          { ...arrow([top[0] * s1, top[1] * s1], 'λ₁ = 25.1: most spread', '#60a5fa'), labelAt: [3.4, 3.4] },
          { ...arrow([-top[1] * s2 * 3, top[0] * s2 * 3], 'λ₂ = 0.44 (×3)', '#34d399'), labelAt: [-5.6, 1.7] },
        ],
      },
    },
    {
      id: 'gram',
      kind: 'table',
      label: 'From centred data to covariance',
      sub: 'X: 5 × 2, one row per job, column means subtracted',
      headers: ['quantity', 'value', 'note'],
      values: [
        ['Gram matrix XᵀX', '[40 48; 48 62]', 'symmetric, positive semidefinite'],
        ['covariance C = XᵀX / (n − 1)', '[10 12; 12 15.5]', 'n = 5'],
        ['eigenvalues of C', '25.06 and 0.44', '98% of the spread on one axis'],
        ['top eigenvector', '(0.62, 0.78)', 'principal axis: chapter 11 (PCA)'],
      ],
    },
  ],
  edges: [],
}
