import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §9.2 — det(B − λ I) = λ² − 7λ + 10 for B = [4 1; 2 3]: roots 5 and 2. Their sum is the trace (7)
// and their product the determinant (10), which the table checks for both chapter examples.
export const characteristic = board({
  id: 'characteristic',
  figure: 'The characteristic polynomial',
  diagram: [
    {
      type: 'plot',
      id: 'roots',
      title: 'p(λ) = det (B − λ I) for B = [4 1; 2 3]: (4 − λ)(3 − λ) − 2 = λ² − 7λ + 10 = (λ − 2)(λ − 5)',
      x: { min: 0, max: 7, step: 1, label: 'λ' },
      y: { min: -3, max: 6, step: 1 },
      series: [
        {
          kind: 'line',
          points: sample(0, 7, 80, (l) => l * l - 7 * l + 10),
          label: 'p(λ)',
          labelAt: [6.3, 4.6],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[2, 0]],
          label: 'λ = 2',
          labelAt: [1.2, -0.7],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[5, 0]],
          label: 'λ = 5',
          labelAt: [5.15, -0.7],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'checks',
      title: 'Trace and determinant, read off the eigenvalues: sum of λ = trace; product of λ = det',
      columns: ['matrix', 'eigenvalues', 'trace', 'det', 'eigenvectors'],
      rows: [
        ['A = [2 1; 1 2]', '3, 1', '4 = 3 + 1', '3 = 3 · 1', '(1, 1), (1, −1)'],
        ['B = [4 1; 2 3]', '5, 2', '7 = 5 + 2', '10 = 5 · 2', '(1, 1), (−1, 2)'],
      ]
    },
  ],
  idea: 'Characteristic polynomial, trace and determinant',
  board: [
    fact('b-rule', 'λ is an eigenvalue ⇔ det(A − λ I) = 0', 'the characteristic polynomial'),
    facts('b-1', 'For B = [4 1; 2 3]', ['λ² − 7λ + 10 = 0', 'λ = 2 and λ = 5', 'v = (−1, 2) and (1, 1)', 'n × n: n roots, maybe complex']),
    facts('b-2', 'Two quick checks', ['Σ λ = trace: 2 + 5 = 4 + 3', 'Π λ = det: 2 · 5 = 10', '[2 1; 1 2]: 3 + 1 = 4, 3 · 1 = 3']),
    caution('b-watch', 'Right by hand for 2 × 2 and 3 × 3. For larger matrices software uses iterative methods: polynomial roots are numerically fragile.'),
  ]
})
