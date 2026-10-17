import type { Scene } from '@graphlearning/flow'

// §12.4 — a 3 × 3 matrix built with singular values 1, 10⁻³ and 10⁻¹⁰ (computed back to within 4 × 10⁻¹⁷).
// Plotted on a log₁₀ scale. Its exact rank is 3; its numerical rank is whatever the tolerance says.
const LOGS = [0, -3, -10]

export const numericalRank: Scene = {
  id: 'numerical-rank',
  title: 'Numerical rank and tolerances',
  flow: 'TB',
  nodes: [
    {
      id: 'spectrum',
      kind: 'plot',
      label: 'log₁₀ σᵢ for a matrix with σ = 1, 10⁻³, 10⁻¹⁰',
      sub: 'dashed: three tolerances; count the σ above each',
      plot: {
        x: { min: 0.5, max: 3.5, step: 1, label: 'i' },
        y: { min: -17, max: 1, step: 2, label: 'log₁₀ σ' },
        series: [
          { kind: 'line', points: [[0.5, -2], [3.5, -2]], dashed: true, label: 'tol 10⁻²: rank 1', labelAt: [2.45, -1.6], color: '#f472b6' },
          { kind: 'line', points: [[0.5, -6], [3.5, -6]], dashed: true, label: 'tol 10⁻⁶: rank 2', labelAt: [2.45, -5.6], color: '#f59e0b' },
          { kind: 'line', points: [[0.5, -15.2], [3.5, -15.2]], dashed: true, label: 'default ≈ 6.7 × 10⁻¹⁶: rank 3', labelAt: [1.2, -14.8], color: '#9ca3af' },
          { kind: 'scatter', points: LOGS.map((v, i): [number, number] => [i + 1, v]), label: 'σ₁, σ₂, σ₃', labelAt: [1.1, 0.4], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'readings',
      kind: 'table',
      label: 'One matrix, several honest answers',
      sub: 'singular vs numerically rank deficient',
      headers: ['question', 'answer'],
      values: [
        ['exact rank', '3: no σ is exactly 0'],
        ['κ₂ = σ₁ / σ₃', '10¹⁰: about 10 of 16 digits at risk'],
        ['numerical rank', 'number of σ above the tolerance'],
        ['default tolerance', 'max(m, n) · ε · σ₁ ≈ 6.7 × 10⁻¹⁶'],
        ['det', '≈ 10⁻¹³: says nothing useful (chapter 6)'],
      ],
    },
  ],
  edges: [],
}
