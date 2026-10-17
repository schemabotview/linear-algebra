import type { Scene } from '@graphlearning/flow'
import { arrow, augmented, lineEq } from '../plot-kit'

// §3.4 — two equations, three unknowns. RREF leaves x₂ free; the solutions are a line,
// (2, 0, 3) + t(−2, 1, 0). The plot shows that line in the (x₁, x₂) plane, where x₃ = 3 throughout.
export const reducedEchelon: Scene = {
  id: 'reduced-echelon',
  title: 'Free variables and solution sets',
  flow: 'TB',
  nodes: [
    {
      id: 'rref',
      label: 'Reduce until each pivot is 1 and stands alone in its column',
      pattern: 'group',
      flow: 'LR',
      children: [
        augmented('system', 'System', '2 equations, 3 unknowns', [[1, 2, 3, 11], [2, 4, 7, 25]]),
        augmented('reduced', 'Reduced echelon form', 'R2 − 2R1, then R1 − 3R2', [[1, 2, 0, 2], [0, 0, 1, 3]]),
      ],
      edges: [{ source: 'system', target: 'reduced', label: 'reduce' }],
    },
    {
      id: 'family',
      kind: 'plot',
      label: 'x = (2, 0, 3) + t (−2, 1, 0), drawn in the (x₁, x₂) plane',
      sub: 'x₂ = t is free; x₁ = 2 − 2t; x₃ = 3 for every t',
      plot: {
        equal: true,
        x: { min: -4, max: 4, step: 1, label: 'x₁' },
        y: { min: -1, max: 3, step: 1, label: 'x₂' },
        series: [
          { kind: 'line', points: lineEq(1, 2, 2, -4, 4), label: 'x₁ + 2x₂ = 2', labelAt: [-3.9, 2.55], color: '#60a5fa' },
          { kind: 'marker', at: [2, 0], label: 't = 0', labelAt: [2.15, 0.3], color: '#34d399' },
          { kind: 'marker', at: [0, 1], label: 't = 1', labelAt: [0.15, 1.3], color: '#34d399' },
          { kind: 'marker', at: [-2, 2], label: 't = 2', labelAt: [-1.85, 2.3], color: '#34d399' },
          { ...arrow([0, 1], 'direction (−2, 1)', '#f59e0b', [2, 0]), labelAt: [-1.5, 0.6] },
        ],
      },
    },
  ],
  edges: [],
}
