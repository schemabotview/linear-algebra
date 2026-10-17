import type { Scene } from '@graphlearning/flow'

// §9.5 — repeated maps, numbers computed. A two-state chain (columns sum to 1) settles at (2/3, 1/3),
// set by λ = 1 and the decay of λ = 0.7. And a warning: J = [0.9 1; 0 0.9] has |λ| = 0.9 < 1, yet
// ‖Jᵏ e₂‖ grows to 3.89 at k = 9 before decaying. Eigenvalues alone do not bound finite-time growth.
const MARKOV = [0, 0.2, 0.34, 0.438, 0.5066, 0.5546, 0.5882, 0.6118, 0.6282, 0.6398, 0.6478, 0.6535, 0.6574, 0.6602, 0.6621, 0.6635]
const STEPS = [0, 1, 2, 5, 10, 15]
const share = (k: number) => MARKOV[k].toFixed(2)
const gap = (k: number) => (2 / 3 - MARKOV[k]).toPrecision(2)
const JNORM = [1, 1.345, 1.974, 2.537, 2.989, 3.333, 3.583, 3.751, 3.851, 3.894, 3.89, 3.848, 3.776, 3.68, 3.566, 3.438, 3.299, 3.155, 3.006, 2.855, 2.704, 2.555, 2.409, 2.267, 2.129, 1.995, 1.868, 1.745, 1.629, 1.518, 1.414]

export const dynamics: Scene = {
  id: 'dynamics',
  title: 'Matrix powers and repeated maps',
  flow: 'TB',
  nodes: [
    {
      id: 'growth',
      kind: 'plot',
      label: 'Size after k steps',
      sub: 'Jᵏ e₂ with J = [0.9 1; 0 0.9], against 0.9ᵏ',
      plot: {
        x: { min: 0, max: 30, step: 5, label: 'k' },
        y: { min: 0, max: 4.5, step: 1 },
        series: [
          { kind: 'line', points: JNORM.map((v, k): [number, number] => [k, v]), label: '‖Jᵏ e₂‖: peaks at 3.89', labelAt: [10.5, 4.15], color: '#f472b6' },
          { kind: 'line', points: JNORM.map((_, k): [number, number] => [k, 0.9 ** k]), label: '0.9ᵏ: what |λ| suggests', labelAt: [14, 0.55], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'markov',
      kind: 'table',
      label: 'A two-state chain: xₖ₊₁ = P xₖ',
      sub: 'P = [0.9 0.2; 0.1 0.8], columns sum to 1; λ = 1 and 0.7',
      headers: ['k', '0', '1', '2', '5', '10', '15', '∞'],
      values: [
        ['share in state 1', ...STEPS.map(share), '2/3'],
        ['gap to 2/3', ...STEPS.map(gap), '× 0.7 per step'],
      ],
    },
  ],
  edges: [],
}
