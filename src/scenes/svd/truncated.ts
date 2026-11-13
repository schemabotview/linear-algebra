import { board, caution, fact, facts } from '../frame'

// §11.5 — a 4 × 3 table of job measurements that is nearly rank one. Singular values (computed):
// 16.87, 0.164, 0.136. Keeping one term leaves Frobenius error √(σ₂² + σ₃²) = 0.213, as Eckart–Young
// promises; no rank-one matrix does better. Drawn as a stem plot on a zero-based axis: the evolution
// node enforces a minimum column height, which made 0.164 look a third the size of 16.87.
export const truncated = board({
  id: 'truncated',
  figure: 'Truncated SVD and low-rank approximation',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'spectrum',
      title: 'Singular values of the measurement table: drawn to scale: σ₂ and σ₃ are under 1% of σ₁',
      x: { min: 0.5, max: 3.5, step: 1, label: 'i' },
      y: { min: 0, max: 18, step: 3, label: 'σᵢ' },
      series: [
        {
          kind: 'segment',
          from: [1, 0],
          to: [1, 16.87],
          dashed: false,
          tone: 'ingest'
        },
        {
          kind: 'segment',
          from: [2, 0],
          to: [2, 0.164],
          dashed: false,
          tone: 'ingest'
        },
        {
          kind: 'segment',
          from: [3, 0],
          to: [3, 0.136],
          dashed: false,
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[1, 16.87]],
          label: 'σ₁ = 16.87',
          labelAt: [1.1, 16.3],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[2, 0.164]],
          label: 'σ₂ = 0.164',
          labelAt: [2.05, 1.4],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[3, 0.136]],
          label: 'σ₃ = 0.136',
          labelAt: [2.85, 1.4],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'group',
      id: 'approximations',
      title: 'Original table and its rank-one approximation',
      dir: 'row',
      children: [
        {
          type: 'table',
          id: 'original',
          title: 'M: 4 jobs × 3 resources: material, labour, energy',
          columns: ['job', 'mat', 'lab', 'en'],
          rows: [['1', '4', '2', '1'], ['2', '8', '4', '2.1'], ['3', '10', '5', '2.4'], ['4', '6', '3.2', '1.5']]
        },
        {
          type: 'table',
          id: 'rank1',
          title: 'M₁ = σ₁ u₁ v₁ᵀ: error ‖M − M₁‖ = 0.213',
          columns: ['job', 'mat', 'lab', 'en'],
          rows: [['1', '3.99', '2.02', '0.99'], ['2', '8.00', '4.05', '1.99'], ['3', '9.96', '5.04', '2.48'], ['4', '6.06', '3.07', '1.51']]
        },
      ]
    },
  ],
  idea: 'Truncated SVD and best rank-k approximation',
  board: [
    fact('b-rule', 'Keep k terms: Aₖ = σ₁u₁v₁ᵀ + … + σₖuₖvₖᵀ'),
    facts('b-1', 'Eckart–Young', ['no rank-k matrix is closer', '‖A − Aₖ‖₂ = σₖ₊₁', '‖A − Aₖ‖_F = √(σₖ₊₁² + …)']),
    facts('b-2', 'A measurement table', ['4 × 3, σ = 16.87, 0.164, 0.136', 'rank 1: 99.98% of Σσ²', 'error √(0.164² + 0.136²) = 0.213', '12 numbers → 8']),
    caution('b-watch', 'A quickly falling spectrum is what makes compression work. A flat spectrum has no good low-rank summary.'),
  ]
})
