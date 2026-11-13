import { board, caution, fact, facts } from '../frame'

// §12.4 — a 3 × 3 matrix built with singular values 1, 10⁻³ and 10⁻¹⁰ (computed back to within 4 × 10⁻¹⁷).
// Plotted on a log₁₀ scale. Its exact rank is 3; its numerical rank is whatever the tolerance says.
const LOGS = [0, -3, -10]
export const numericalRank = board({
  id: 'numerical-rank',
  figure: 'Numerical rank and tolerances',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'spectrum',
      title: 'log₁₀ σᵢ for a matrix with σ = 1, 10⁻³, 10⁻¹⁰: dashed: three tolerances; count the σ above each',
      x: { min: 0.5, max: 3.5, step: 1, label: 'i' },
      y: { min: -17, max: 1, step: 2, label: 'log₁₀ σ' },
      series: [
        {
          kind: 'line',
          points: [[0.5, -2], [3.5, -2]],
          dashed: true,
          label: 'tol 10⁻²: rank 1',
          labelAt: [2.45, -1.6],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: [[0.5, -6], [3.5, -6]],
          dashed: true,
          label: 'tol 10⁻⁶: rank 2',
          labelAt: [2.45, -5.6],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: [[0.5, -15.2], [3.5, -15.2]],
          dashed: true,
          label: 'default ≈ 6.7 × 10⁻¹⁶: rank 3',
          labelAt: [1.2, -14.8],
          tone: 'neutral'
        },
        {
          kind: 'scatter',
          points: LOGS.map((v, i): [
            number,
            number
          ] => [i + 1, v]),
          label: 'σ₁, σ₂, σ₃',
          labelAt: [1.1, 0.4],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'readings',
      title: 'One matrix, several honest answers: singular vs numerically rank deficient',
      columns: ['question', 'answer'],
      rows: [
        ['exact rank', '3: no σ is exactly 0'],
        ['κ₂ = σ₁ / σ₃', '10¹⁰: about 10 of 16 digits at risk'],
        ['numerical rank', 'number of σ above the tolerance'],
        ['default tolerance', 'max(m, n) · ε · σ₁ ≈ 6.7 × 10⁻¹⁶'],
        ['det', '≈ 10⁻¹³: says nothing useful (chapter 6)'],
      ]
    },
  ],
  idea: 'Condition numbers and numerical rank',
  board: [
    fact('b-rule', 'Rank counts nonzero σ', 'in floating point almost nothing is zero, so rank needs a tolerance'),
    facts('b-1', 'κ from the SVD', ['κ₂(A) = σ₁ / σₙ', 'σ = 1, 10⁻³, 10⁻¹⁰', 'κ₂ = 10¹⁰: 10 digits at risk']),
    facts('b-2', 'Rank depends on the tolerance', ['default ≈ 6.7 × 10⁻¹⁶: rank 3', '10⁻⁶ (6-digit data): rank 2', '10⁻²: rank 1', 'set it from the data’s accuracy']),
    caution('b-watch', 'Singular means some σ is exactly 0; numerically rank deficient means some σ is below your tolerance. det = 10⁻¹³ tells you neither.'),
  ]
})
