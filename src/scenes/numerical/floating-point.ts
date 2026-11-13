import { board, caution, fact, facts } from '../frame'

// §12.1 — ((1 + h) − 1) / h should be exactly 1. Computed in double precision for h = 10⁻ᵏ: fine to
// about k = 8, then cancellation takes over, and at k = 16 the 1 + h rounds to 1 and the answer is 0.
const VALUES = [1.0000000000000009, 1.0000000000000009, 0.9999999999998899, 0.9999999999998899, 1.0000000000065512, 0.9999999999177334, 1.0000000005838672, 0.999999993922529, 1.000000082740371, 1.000000082740371, 1.000000082740371, 1.000088900582341, 0.9992007221626409, 0.9992007221626409, 1.1102230246251565, 0]
export const floatingPoint = board({
  id: 'floating-point',
  figure: 'Floating point and cancellation',
  diagram: [
    {
      type: 'plot',
      id: 'cancellation',
      title: '((1 + h) − 1) / h in double precision, h = 10⁻ᵏ: exactly 1 in real arithmetic; computed values below',
      x: { min: 0.5, max: 16.5, step: 1, label: 'k' },
      y: { min: -0.1, max: 1.25, step: 0.25 },
      series: [
        {
          kind: 'line',
          points: [[0.5, 1], [16.5, 1]],
          dashed: true,
          label: 'exact answer: 1',
          labelAt: [1, 1.08],
          tone: 'neutral'
        },
        { kind: 'line', points: VALUES.map((v, i): [
            number,
            number
          ] => [i + 1, v]), tone: 'ingest' },
        { kind: 'scatter', points: VALUES.map((v, i): [
            number,
            number
          ] => [i + 1, v]), tone: 'infra' },
        {
          kind: 'scatter',
          points: [[16, 0]],
          label: 'k = 16: 1 + h rounds to 1',
          labelAt: [10.4, 0.12],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'facts',
      title: 'Double precision, in four lines: computed, not quoted',
      columns: ['expression', 'computed', 'lesson'],
      rows: [
        ['machine epsilon ε', '2.22 × 10⁻¹⁶', 'relative spacing near 1'],
        ['0.1 + 0.2', '0.30000000000000004', 'decimals are not exact'],
        ['(1 + 10⁻¹⁵) − 1', '1.11 × 10⁻¹⁵', '11% relative error'],
        ['1 − cos(10⁻⁸)', '0', 'true value ≈ 5 × 10⁻¹⁷'],
      ]
    },
  ],
  idea: 'Floating point, cancellation and errors',
  board: [
    fact('b-rule', 'About 16 significant digits', 'each operation rounds to the nearest representable number'),
    facts('b-1', 'Absolute and relative error', ['absolute |x̃ − x|', 'relative |x̃ − x| / |x|', 'per operation ≤ ε ≈ 2.2 × 10⁻¹⁶', '0.1 + 0.2 ≠ 0.3 exactly']),
    facts('b-2', 'Cancellation', ['close numbers: digits cancel', '(1 + 10⁻¹⁵) − 1: 11% off', '((1 + h) − 1)/h drifts from 1']),
    caution('b-watch', 'The arithmetic gives no warning. Rewriting a formula to avoid subtracting close numbers is often the whole fix.'),
  ]
})
