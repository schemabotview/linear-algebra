import { board, caution, fact, facts } from '../frame'

// §11.7 — PCA answers the question its preprocessing asks. Same five jobs, three unit choices; PC1
// computed each time. Recording energy in Wh hands PC1 to energy alone.
export const pcaLimits = board({
  id: 'pca-limits',
  figure: 'Scaling, repeated values and interpretation',
  diagram: [
    {
      type: 'table',
      id: 'scaling',
      title: 'Same jobs, three preprocessing choices: PC1 computed each time',
      columns: ['columns', 'PC1 (labour, energy)', 'explained', 'what PC1 now measures'],
      rows: [
        ['hours, kWh', '(0.62, 0.78)', '98.3%', 'joint size of a job'],
        ['hours, Wh', '(0.0008, 1.000)', '≈ 100%', 'energy only: biggest numbers win'],
        ['standardised', '(0.71, 0.71)', '98.2%', 'equal say for each column'],
      ]
    },
    {
      type: 'group',
      id: 'cautions',
      title: 'What PCA does not tell you',
      dir: 'grid',
      cols: 2,
      children: [
        { type: 'item', id: 'units', title: 'Units matter', sub: 'rescale a column, change the answer', tone: 'consume' },
        { type: 'item', id: 'ties', title: 'Repeated σ', sub: 'equal σ: any rotation of those PCs is valid', tone: 'store' },
        { type: 'item', id: 'signs', title: 'Signs are arbitrary', sub: 'v and −v are equally valid', tone: 'store' },
        { type: 'item', id: 'relevance', title: 'Variance ≠ relevance', sub: 'a small PC can predict best', tone: 'consume' },
      ]
    },
  ],
  idea: 'Scaling choices, repeated singular values and limits',
  board: [
    fact('b-rule', 'PCA answers exactly what its preprocessing asks', 'and nothing more'),
    facts('b-1', 'Scaling changes the question', ['hours and kWh: (0.62, 0.78)', 'energy in Wh: PC1 ≈ (0, 1)', 'standardised: (0.71, 0.71)']),
    facts('b-2', 'Other limits', ['repeated σ: any rotation works', 'variance is not relevance']),
    caution('b-watch', 'Chapter outcome: you can interpret SVD factors, explain pseudoinverse solutions, and justify low-rank approximation and PCA under explicit preprocessing choices.'),
  ]
})
