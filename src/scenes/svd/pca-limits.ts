import type { Scene } from '@graphlearning/flow'

// §11.7 — PCA answers the question its preprocessing asks. Same five jobs, three unit choices; PC1
// computed each time. Recording energy in Wh hands PC1 to energy alone.
export const pcaLimits: Scene = {
  id: 'pca-limits',
  title: 'Scaling, repeated values and interpretation',
  flow: 'TB',
  nodes: [
    {
      id: 'scaling',
      kind: 'table',
      label: 'Same jobs, three preprocessing choices',
      sub: 'PC1 computed each time',
      headers: ['columns', 'PC1 (labour, energy)', 'explained', 'what PC1 now measures'],
      values: [
        ['hours, kWh', '(0.62, 0.78)', '98.3%', 'joint size of a job'],
        ['hours, Wh', '(0.0008, 1.000)', '≈ 100%', 'energy only: biggest numbers win'],
        ['standardised', '(0.71, 0.71)', '98.2%', 'equal say for each column'],
      ],
    },
    {
      id: 'cautions',
      label: 'What PCA does not tell you',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'units', label: 'Units matter', sub: 'rescale a column, change the answer', pattern: 'warn', icon: 'ruler' },
        { id: 'ties', label: 'Repeated σ', sub: 'equal σ: any rotation of those PCs is valid', pattern: 'storage', icon: 'repeat' },
        { id: 'signs', label: 'Signs are arbitrary', sub: 'v and −v are equally valid', pattern: 'storage', icon: 'swap' },
        { id: 'relevance', label: 'Variance ≠ relevance', sub: 'a small PC can predict best', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [],
}
