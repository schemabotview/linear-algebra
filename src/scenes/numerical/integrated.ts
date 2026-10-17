import type { Scene } from '@graphlearning/flow'

// §12.6 — two integrated cases, numbers computed. A flow network with 4 nodes and 5 edges, written as
// its incidence matrix D (one row per edge: −1 where flow leaves, +1 where it arrives). rank D = 3, so
// N(Dᵀ) has dimension 5 − 3 = 2: two independent loops, both checked (yᵀD = 0). And the workshop:
// κ(A) ≈ 19.4, so 0.5% noise in the measured needs moved the recovered order by 3.2% (bound 9.7%).
// The network is a matrix, not a drawn graph: the layout engine stacks its loop edges on one line.
export const integrated: Scene = {
  id: 'integrated',
  title: 'Integrated cases',
  flow: 'TB',
  nodes: [
    {
      id: 'network',
      label: 'A flow network as a matrix: 4 nodes, 5 edges',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'incidence',
          kind: 'table',
          label: 'Incidence matrix D (5 × 4)',
          sub: '−1: flow leaves, +1: flow arrives',
          headers: ['edge', 'n1', 'n2', 'n3', 'n4'],
          values: [
            ['e₁: 1 → 2', '−1', '1', '0', '0'],
            ['e₂: 2 → 3', '0', '−1', '1', '0'],
            ['e₃: 3 → 4', '0', '0', '−1', '1'],
            ['e₄: 4 → 1', '1', '0', '0', '−1'],
            ['e₅: 1 → 3', '−1', '0', '1', '0'],
          ],
        },
        {
          id: 'subspaces',
          kind: 'table',
          label: "D's subspaces, read physically",
          sub: 'rank D = 3 = nodes − 1',
          headers: ['subspace', 'meaning', 'basis'],
          values: [
            ['N(D)', 'equal potentials: no flow', '(1, 1, 1, 1)'],
            ['N(Dᵀ), dim 2', 'loop around 1→2→3→1', 'e₁ + e₂ − e₅'],
            ['', 'loop around 1→3→4→1', 'e₅ + e₃ + e₄'],
            ['check', 'yᵀ D = 0 for both loops', '✓'],
          ],
        },
      ],
      edges: [],
    },
    {
      id: 'cases',
      kind: 'table',
      label: 'The workshop, with measured needs',
      sub: 'solve A q = b with b known only to 0.5%',
      headers: ['quantity', 'value'],
      values: [
        ['κ(A) = σ₁ / σ₃', '13.28 / 0.684 ≈ 19.4'],
        ['noise in b', '0.5%'],
        ['recovered q', '(2.89, 1.05, 2.02) instead of (3, 1, 2)'],
        ['error in q', '3.2%'],
        ['bound κ × noise', '9.7%: the guarantee held'],
      ],
    },
  ],
  edges: [],
}
