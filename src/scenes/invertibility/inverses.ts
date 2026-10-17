import type { Scene } from '@graphlearning/flow'
import { UNIT_SQUARE, image, type M2, GREY } from '../plot-kit'

// §5.2 — A = [2 1; 1 1] sends the unit square to a parallelogram, and A⁻¹ = [1 −1; −1 2] sends it
// straight back. The cards are the equivalent conditions; any one of them implies all the others.
const A: M2 = [[2, 1], [1, 1]]

export const inverses: Scene = {
  id: 'inverses',
  title: 'Inverses and the conditions that guarantee one',
  flow: 'TB',
  nodes: [
    {
      id: 'round-trip',
      kind: 'plot',
      label: 'A = [2 1; 1 1] and A⁻¹ = [1 −1; −1 2]',
      sub: 'A⁻¹ (A x) = x for every x',
      plot: {
        equal: true,
        x: { min: -0.5, max: 3.5, step: 1 },
        y: { min: -0.5, max: 2.5, step: 1 },
        series: [
          { kind: 'line', points: UNIT_SQUARE, dashed: true, label: 'x: unit square', labelAt: [0.1, 1.15], color: GREY },
          { kind: 'line', points: image(A, UNIT_SQUARE), label: 'A x', labelAt: [3.05, 1.95], color: '#60a5fa' },
          { kind: 'segment', from: [2, 1], to: [1, 0], arrow: true, label: 'A⁻¹ brings (2, 1) back to (1, 0)', labelAt: [1.75, 0.3], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'conditions',
      label: 'For square A, each of these implies all the others',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'has-inverse', label: 'A⁻¹ exists', sub: 'A⁻¹ A = A A⁻¹ = I', pattern: 'service', icon: 'key' },
        { id: 'full-rank', label: 'Rank n', sub: 'a pivot in every column', pattern: 'service', icon: 'hash' },
        { id: 'trivial-null', label: 'N(A) = {0}', sub: 'A x = 0 only for x = 0', pattern: 'service', icon: 'circleslash' },
        { id: 'basis', label: 'Columns a basis', sub: 'independent and spanning ℝⁿ', pattern: 'storage', icon: 'layers' },
        { id: 'unique', label: 'Unique solutions', sub: 'A x = b, exactly one x for every b', pattern: 'storage', icon: 'circlecheck' },
        { id: 'det', label: 'det A ≠ 0', sub: 'chapter 6', pattern: 'network', icon: 'scale' },
      ],
    },
  ],
  edges: [],
}
