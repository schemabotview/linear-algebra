import type { Scene } from '@graphlearning/flow'
import { augmented } from '../plot-kit'

// §3.7 — a zero pivot forces a swap; a TINY pivot ε = 10⁻²⁰ does not force anything in exact
// arithmetic, but in floating point it destroys x₁. The results row is double precision, computed.
export const pivoting: Scene = {
  id: 'pivoting',
  title: 'Pivots in exact and floating-point arithmetic',
  flow: 'TB',
  nodes: [
    {
      id: 'pivots',
      label: 'Two troublesome pivots',
      pattern: 'group',
      flow: 'LR',
      children: [
        augmented('zero-pivot', 'Zero pivot: must swap', 'no multiple of R1 can clear R2', [[0, 1, 1], [1, 1, 2]], ['x₁', 'x₂']),
        augmented('tiny-pivot', 'Tiny pivot ε = 10⁻²⁰', 'legal, but dangerous', [['ε', 1, 1], [1, 1, 2]], ['x₁', 'x₂']),
      ],
      edges: [],
    },
    {
      id: 'results',
      kind: 'table',
      label: 'Solving the tiny-pivot system in double precision',
      sub: 'true solution ≈ (1, 1)',
      headers: ['method', 'multiplier', 'x₁', 'x₂'],
      values: [
        ['exact arithmetic', '1/ε', '1.0000', '1.0000'],
        ['no pivoting', '10²⁰', '0.0000', '1.0000'],
        ['partial pivoting', 'ε = 10⁻²⁰', '1.0000', '1.0000'],
      ],
    },
    {
      id: 'rules',
      label: 'Habits that prevent it',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'partial', label: 'Partial pivoting', sub: 'largest |entry| as the pivot', pattern: 'service', icon: 'sortarrows' },
        { id: 'exact', label: 'Exact by hand', sub: 'fractions, not rounded decimals', pattern: 'storage', icon: 'pencil' },
        { id: 'verify', label: 'Substitute back', sub: 'check the answer in every equation', pattern: 'network', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [],
}
