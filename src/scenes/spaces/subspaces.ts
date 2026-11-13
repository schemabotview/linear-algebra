import { board, fact, facts } from '../frame'
import { arrow, lineEq } from '../plot-kit'

// §4.2 — a line through the origin is a subspace; the parallel line one unit up is an affine set.
// u and v lie on the affine line, but u + v does not, and neither line's partner rule holds for it.
export const subspaces = board({
  id: 'subspaces',
  figure: 'Subspaces and affine sets',
  diagram: [
    {
      type: 'plot',
      id: 'test',
      title: 'Closed under addition, or not: u = (0, 1) and v = (2, 2) lie on y = x/2 + 1; u + v does not',
      equal: true,
      x: { min: -2, max: 5, step: 1 },
      y: { min: -1, max: 3.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: lineEq(1, -2, 0, -2, 5),
          label: 'y = x/2: a subspace',
          labelAt: [2.9, 0.9],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: lineEq(1, -2, -2, -2, 5),
          label: 'y = x/2 + 1: affine',
          labelAt: [-1.95, 1.4],
          tone: 'infra'
        },
        arrow([0, 1], 'u', 'infra', [0, 0], [-0.09, 1]),
        arrow([2, 2], 'v', 'infra', [0, 0], [1.91, 2]),
        arrow([2, 3], 'u + v = (2, 3): off the line', 'serve', [0, 0], [1.55, 3.2]),
      ]
    },
    {
      type: 'group',
      id: 'rules',
      title: 'Subspace test, and what preserves it',
      dir: 'grid',
      cols: 3,
      children: [
        { type: 'item', id: 'contains-zero', title: 'Contains 0', sub: 'fails for every affine set', tone: 'ingest' },
        { type: 'item', id: 'add', title: 'Closed under +', sub: 'u + v stays inside', tone: 'ingest' },
        { type: 'item', id: 'scale', title: 'Closed under c·', sub: 'c u stays inside', tone: 'ingest' },
        { type: 'item', id: 'span', title: 'Span', sub: 'all combinations: always a subspace', icon: 'layers', tone: 'store' },
        { type: 'item', id: 'meet', title: 'U ∩ W and U + W', sub: 'both are subspaces', tone: 'store' },
        { type: 'item', id: 'union', title: 'U ∪ W', sub: 'usually not a subspace', tone: 'consume' },
      ]
    },
  ],
  idea: 'Subspaces, spans and affine sets',
  board: [
    fact('b-rule', 'A subspace is a vector space inside one', 'three checks are enough'),
    facts('b-1', 'The subspace test', ['it contains 0', 'closed under addition', 'closed under scaling']),
    facts('b-2', 'Where subspaces come from', ['a span is always a subspace', 'U ∩ W, U + W are; U ∪ W rarely', 'lines, planes through 0']),
    facts('b-3', 'Affine sets are not', ['y = x/2 + 1 misses 0', 'u + v = (2, 3) leaves the line', 'a subspace shifted off 0']),
  ]
})
