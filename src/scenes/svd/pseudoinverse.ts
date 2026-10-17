import type { Scene } from '@graphlearning/flow'

// §11.4 — chapter 8's duplicated-feature fit. Every (d, e) on d + 2e = 1.5 is a least-squares
// minimiser; the pseudoinverse picks the one closest to the origin, (0.3, 0.6) — the foot of the
// perpendicular, since (0.3, 0.6) · (2, −1) = 0.
export const pseudoinverse: Scene = {
  id: 'pseudoinverse',
  title: 'The pseudoinverse and minimum-norm solutions',
  flow: 'TB',
  nodes: [
    {
      id: 'shortest',
      kind: 'plot',
      label: 'A⁺ b picks the shortest minimiser',
      sub: 'chapter 8: y = c + d t + e (2t); every (d, e) on the line fits equally well',
      plot: {
        equal: true,
        x: { min: -1, max: 2.5, step: 0.5, label: 'd' },
        y: { min: -0.75, max: 1.25, step: 0.5, label: 'e' },
        series: [
          { kind: 'line', points: [[-1, 1.25], [2.5, -0.5]], label: 'd + 2e = 1.5', labelAt: [1.7, 0.45], color: '#60a5fa' },
          { kind: 'segment', from: [0, 0], to: [0.3, 0.6], arrow: true, dashed: false, label: 'A⁺ b: (0.3, 0.6)', labelAt: [-0.95, 0.55], color: '#34d399' },
          { kind: 'marker', at: [1.5, 0], label: '(1.5, 0): longer', labelAt: [1.3, -0.25], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'definition',
      kind: 'table',
      label: 'A⁺ = V Σ⁺ Uᵀ',
      sub: 'Σ⁺: transpose Σ and invert each nonzero σ',
      headers: ['case', 'A⁺ b is', 'example'],
      values: [
        ['A invertible', 'A⁻¹ b', 'the unique solution'],
        ['full column rank', '(AᵀA)⁻¹ Aᵀ b', 'chapter 8, unique fit'],
        ['rank deficient', 'the shortest least-squares minimiser', '(c, d, e) = (5/6, 0.3, 0.6)'],
        ['tiny σ', '1/σ is huge: treat as 0', 'needs a tolerance (chapter 12)'],
      ],
    },
  ],
  edges: [],
}
