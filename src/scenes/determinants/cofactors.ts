import type { Scene } from '@graphlearning/flow'

// §6.4 — cofactor expansion along row 1 of the workshop matrix, term by term, agreeing with §6.3's
// −16. The second table is why nobody expands an n × n matrix this way for large n.
export const cofactors: Scene = {
  id: 'cofactors',
  title: 'Cofactor expansion',
  flow: 'TB',
  nodes: [
    {
      id: 'expansion',
      kind: 'table',
      label: 'Expand A = [4 10 6; 2 3 1; 1 2 3] along row 1',
      sub: 'signs alternate + − +; each minor deletes a row and a column',
      headers: ['entry', 'sign', 'minor', 'term'],
      values: [
        ['a₁₁ = 4', '+', 'det [3 1; 2 3] = 7', '+ 4 · 7 = 28'],
        ['a₁₂ = 10', '−', 'det [2 1; 1 3] = 5', '− 10 · 5 = −50'],
        ['a₁₃ = 6', '+', 'det [2 3; 1 2] = 1', '+ 6 · 1 = 6'],
        ['total', '', '', 'det A = −16 ✓'],
      ],
    },
    {
      id: 'growth',
      kind: 'table',
      label: 'Cost: cofactors grow like n!',
      sub: 'elimination grows like n³/3',
      headers: ['n', 'cofactor terms (n!)', 'elimination (≈ n³/3)'],
      values: [
        ['2', '2', '3'],
        ['3', '6', '9'],
        ['5', '120', '42'],
        ['10', '3,628,800', '333'],
        ['20', '≈ 2.4 × 10¹⁸', '≈ 2,667'],
      ],
    },
  ],
  edges: [],
}
