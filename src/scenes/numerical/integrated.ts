import { board, caution, fact, facts } from '../frame'

// §12.6 — two integrated cases, numbers computed. A flow network with 4 nodes and 5 edges, written as
// its incidence matrix D (one row per edge: −1 where flow leaves, +1 where it arrives). rank D = 3, so
// N(Dᵀ) has dimension 5 − 3 = 2: two independent loops, both checked (yᵀD = 0). And the workshop:
// κ(A) ≈ 19.4, so 0.5% noise in the measured needs moved the recovered order by 3.2% (bound 9.7%).
// The network is a matrix, not a drawn graph: the layout engine stacks its loop edges on one line.
export const integrated = board({
  id: 'integrated',
  figure: 'Integrated cases',
  diagram: [
    {
      type: 'group',
      id: 'network',
      title: 'A flow network as a matrix: 4 nodes, 5 edges',
      dir: 'row',
      children: [
        {
          type: 'table',
          id: 'incidence',
          title: 'Incidence D: −1 leaves, +1 arrives',
          columns: ['edge', 'n1', 'n2', 'n3', 'n4'],
          rows: [
            ['e₁: 1 → 2', '−1', '1', '0', '0'],
            ['e₂: 2 → 3', '0', '−1', '1', '0'],
            ['e₃: 3 → 4', '0', '0', '−1', '1'],
            ['e₄: 4 → 1', '1', '0', '0', '−1'],
            ['e₅: 1 → 3', '−1', '0', '1', '0'],
          ]
        },
        {
          type: 'table',
          id: 'subspaces',
          title: 'D’s subspaces: rank 3 = nodes − 1',
          columns: ['subspace', 'meaning', 'basis'],
          rows: [
            ['N(D)', 'equal potentials', '(1, 1, 1, 1)'],
            ['N(Dᵀ): 2', 'loop 1→2→3→1', 'e₁ + e₂ − e₅'],
            ['', 'loop 1→3→4→1', 'e₅ + e₃ + e₄'],
            ['check', 'yᵀ D = 0 for both', '✓'],
          ]
        },
      ]
    },
    {
      type: 'table',
      id: 'cases',
      title: 'The workshop, with measured needs: solve A q = b with b known only to 0.5%',
      columns: ['quantity', 'value'],
      rows: [
        ['κ(A) = σ₁ / σ₃', '13.28 / 0.684 ≈ 19.4'],
        ['noise in b', '0.5%'],
        ['recovered q', '(2.89, 1.05, 2.02) instead of (3, 1, 2)'],
        ['error in q', '3.2%'],
        ['bound κ × noise', '9.7%: the guarantee held'],
      ]
    },
  ],
  idea: 'Integrated cases',
  board: [
    fact('b-rule', 'The same ideas carry across problems'),
    facts('b-1', 'The workshop, measured', ['recover q from b: A q = b', 'κ(A) ≈ 19.4', '0.5% noise → up to 9.7%', 'computed: q moved 3.2%']),
    facts('b-2', 'A flow network', ['4 nodes, 5 edges: D', 'rank D = 3 = nodes − 1', 'N(D): equal potentials', 'N(Dᵀ): 2 independent loops']),
    caution('b-watch', 'Course outcome: you can formulate linear models; explain systems, spaces, maps and decompositions; reason about existence and uniqueness; and justify computational choices.'),
  ]
})
