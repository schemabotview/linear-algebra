import type { Scene } from '@graphlearning/flow'

// §11.5 — a 4 × 3 table of job measurements that is nearly rank one. Singular values (computed):
// 16.87, 0.164, 0.136. Keeping one term leaves Frobenius error √(σ₂² + σ₃²) = 0.213, as Eckart–Young
// promises; no rank-one matrix does better. Drawn as a stem plot on a zero-based axis: the evolution
// node enforces a minimum column height, which made 0.164 look a third the size of 16.87.
export const truncated: Scene = {
  id: 'truncated',
  title: 'Truncated SVD and low-rank approximation',
  flow: 'TB',
  nodes: [
    {
      id: 'spectrum',
      kind: 'plot',
      label: 'Singular values of the measurement table',
      sub: 'drawn to scale: σ₂ and σ₃ are under 1% of σ₁',
      plot: {
        x: { min: 0.5, max: 3.5, step: 1, label: 'i' },
        y: { min: 0, max: 18, step: 3, label: 'σᵢ' },
        series: [
          { kind: 'segment', from: [1, 0], to: [1, 16.87], dashed: false, color: '#60a5fa' },
          { kind: 'segment', from: [2, 0], to: [2, 0.164], dashed: false, color: '#60a5fa' },
          { kind: 'segment', from: [3, 0], to: [3, 0.136], dashed: false, color: '#60a5fa' },
          { kind: 'marker', at: [1, 16.87], label: 'σ₁ = 16.87', labelAt: [1.1, 16.3], color: '#60a5fa' },
          { kind: 'marker', at: [2, 0.164], label: 'σ₂ = 0.164', labelAt: [2.05, 1.4], color: '#f59e0b' },
          { kind: 'marker', at: [3, 0.136], label: 'σ₃ = 0.136', labelAt: [2.85, 1.4], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'approximations',
      label: 'Original table and its rank-one approximation',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'original',
          kind: 'table',
          label: 'M: 4 jobs × 3 resources',
          sub: 'material, labour, energy',
          headers: ['job', 'mat', 'lab', 'en'],
          values: [['1', '4', '2', '1'], ['2', '8', '4', '2.1'], ['3', '10', '5', '2.4'], ['4', '6', '3.2', '1.5']],
        },
        {
          id: 'rank1',
          kind: 'table',
          label: 'M₁ = σ₁ u₁ v₁ᵀ',
          sub: 'error ‖M − M₁‖ = 0.213',
          headers: ['job', 'mat', 'lab', 'en'],
          values: [['1', '3.99', '2.02', '0.99'], ['2', '8.00', '4.05', '1.99'], ['3', '9.96', '5.04', '2.48'], ['4', '6.06', '3.07', '1.51']],
        },
      ],
      edges: [],
    },
  ],
  edges: [],
}
