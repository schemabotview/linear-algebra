import type { Scene } from '@graphlearning/flow'

// §12.1 — ((1 + h) − 1) / h should be exactly 1. Computed in double precision for h = 10⁻ᵏ: fine to
// about k = 8, then cancellation takes over, and at k = 16 the 1 + h rounds to 1 and the answer is 0.
const VALUES = [1.0000000000000009, 1.0000000000000009, 0.9999999999998899, 0.9999999999998899, 1.0000000000065512, 0.9999999999177334, 1.0000000005838672, 0.999999993922529, 1.000000082740371, 1.000000082740371, 1.000000082740371, 1.000088900582341, 0.9992007221626409, 0.9992007221626409, 1.1102230246251565, 0]

export const floatingPoint: Scene = {
  id: 'floating-point',
  title: 'Floating point and cancellation',
  flow: 'TB',
  nodes: [
    {
      id: 'cancellation',
      kind: 'plot',
      label: '((1 + h) − 1) / h in double precision, h = 10⁻ᵏ',
      sub: 'exactly 1 in real arithmetic; computed values below',
      plot: {
        x: { min: 0.5, max: 16.5, step: 1, label: 'k' },
        y: { min: -0.1, max: 1.25, step: 0.25 },
        series: [
          { kind: 'line', points: [[0.5, 1], [16.5, 1]], dashed: true, label: 'exact answer: 1', labelAt: [1, 1.08], color: '#9ca3af' },
          { kind: 'line', points: VALUES.map((v, i): [number, number] => [i + 1, v]), color: '#60a5fa' },
          { kind: 'scatter', points: VALUES.map((v, i): [number, number] => [i + 1, v]), color: '#f59e0b' },
          { kind: 'marker', at: [16, 0], label: 'k = 16: 1 + h rounds to 1', labelAt: [10.4, 0.12], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'facts',
      kind: 'table',
      label: 'Double precision, in four lines',
      sub: 'computed, not quoted',
      headers: ['expression', 'computed', 'lesson'],
      values: [
        ['machine epsilon ε', '2.22 × 10⁻¹⁶', 'relative spacing near 1'],
        ['0.1 + 0.2', '0.30000000000000004', 'decimals are not exact'],
        ['(1 + 10⁻¹⁵) − 1', '1.11 × 10⁻¹⁵', '11% relative error'],
        ['1 − cos(10⁻⁸)', '0', 'true value ≈ 5 × 10⁻¹⁷'],
      ],
    },
  ],
  edges: [],
}
