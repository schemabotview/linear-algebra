import { board, caution, fact, facts } from '../frame'
import { augmented } from '../plot-kit'

// §3.7 — a zero pivot forces a swap; a TINY pivot ε = 10⁻²⁰ does not force anything in exact
// arithmetic, but in floating point it destroys x₁. The results row is double precision, computed.
export const pivoting = board({
  id: 'pivoting',
  figure: 'Pivots in exact and floating-point arithmetic',
  diagram: [
    {
      type: 'group',
      id: 'pivots',
      title: 'Two troublesome pivots',
      dir: 'row',
      children: [
        augmented('zero-pivot', 'Zero pivot: must swap', 'no multiple of R1 can clear R2', [[0, 1, 1], [1, 1, 2]], ['x₁', 'x₂']),
        augmented('tiny-pivot', 'Tiny pivot ε = 10⁻²⁰', 'legal, but dangerous', [['ε', 1, 1], [1, 1, 2]], ['x₁', 'x₂']),
      ]
    },
    {
      type: 'table',
      id: 'results',
      title: 'Solving the tiny-pivot system in double precision: true solution ≈ (1, 1)',
      columns: ['method', 'multiplier', 'x₁', 'x₂'],
      rows: [
        ['exact arithmetic', '1/ε', '1.0000', '1.0000'],
        ['no pivoting', '10²⁰', '0.0000', '1.0000'],
        ['partial pivoting', 'ε = 10⁻²⁰', '1.0000', '1.0000'],
      ]
    },
    {
      type: 'group',
      id: 'rules',
      title: 'Habits that prevent it',
      dir: 'grid',
      cols: 3,
      children: [
        { type: 'item', id: 'partial', title: 'Partial pivoting', sub: 'largest |entry| as the pivot', tone: 'ingest' },
        { type: 'item', id: 'exact', title: 'Exact by hand', sub: 'fractions, not rounded decimals', tone: 'store' },
        { type: 'item', id: 'verify', title: 'Substitute back', sub: 'check the answer in every equation', tone: 'serve' },
      ]
    },
  ],
  idea: 'Pivoting, exact arithmetic and rounding',
  board: [
    fact('b-rule', 'By hand a pivot need only be nonzero', 'on a computer, a tiny pivot can ruin the answer'),
    facts('b-1', 'Zero pivot', ['[0 1 | 1; 1 1 | 2]: swap first', 'a swap is a legal row operation', 'all zeros below: a free variable']),
    facts('b-2', 'Tiny pivot, ε = 10⁻²⁰', ['exactly, x ≈ (1, 1)', 'no swap: multiplier 10²⁰', 'rounding returns x₁ = 0', 'partial pivoting gets (1, 1)']),
    caution('b-watch', 'Chapter outcome: you can trace elimination, describe every solution of a small system, and explain why row operations preserve its solution set.'),
  ]
})
