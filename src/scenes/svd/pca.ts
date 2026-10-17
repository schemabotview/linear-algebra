import type { Scene } from '@graphlearning/flow'

// §11.6 — PCA of chapter 10's five centred jobs by SVD of X. PC1 = v₁ = (0.62, 0.78); scores X v₁
// (computed) are each job's coordinate along it. Dashed: each job's drop onto the PC1 line.
const X: [number, number][] = [[-4, -4], [-2, -3], [0, 0], [2, 1], [4, 6]]
const v: [number, number] = [0.6231, 0.7821]
const proj = ([a, b]: [number, number]): [number, number] => {
  const t = a * v[0] + b * v[1]
  return [t * v[0], t * v[1]]
}

export const pca: Scene = {
  id: 'pca',
  title: 'Principal component analysis',
  flow: 'TB',
  nodes: [
    {
      id: 'components',
      kind: 'plot',
      label: 'PC1: the direction of greatest variance',
      sub: 'centred jobs; dashed: projection onto PC1',
      plot: {
        equal: true,
        x: { min: -6, max: 6, step: 2, label: 'labour − mean' },
        y: { min: -5, max: 7, step: 2, label: 'energy − mean' },
        series: [
          { kind: 'line', points: [[-6 * v[0], -6 * v[1]], [8 * v[0], 8 * v[1]]], label: 'PC1 = (0.62, 0.78)', labelAt: [-5.8, -2.4], color: '#60a5fa' },
          ...X.map((p) => ({ kind: 'segment' as const, from: p, to: proj(p), color: '#f472b6' })),
          { kind: 'scatter', points: X, color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'scores',
      kind: 'table',
      label: 'From the SVD X = U Σ Vᵀ',
      sub: 'σ = 10.01, 1.33; variance σ² / (n − 1) = 25.06, 0.44',
      headers: ['quantity', 'value', 'meaning'],
      values: [
        ['components', 'columns of V', 'directions: PC1 = (0.62, 0.78)'],
        ['scores X v₁', '(−5.62, −3.59, 0, 2.03, 7.19)', 'each job along PC1'],
        ['explained variance', '25.06 / 25.50 = 98.3%', 'PC2 carries 1.7%'],
        ['why centre first', 'otherwise PC1 points at the mean', 'not at the spread'],
      ],
    },
  ],
  edges: [],
}
