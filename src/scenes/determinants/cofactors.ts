import { board, caution, fact, facts } from '../frame'

// §6.4 — cofactor expansion along row 1 of the workshop matrix, term by term, agreeing with §6.3's
// −16. The second table is why nobody expands an n × n matrix this way for large n.
export const cofactors = board({
  id: 'cofactors',
  figure: 'Cofactor expansion',
  diagram: [
    {
      type: 'table',
      id: 'expansion',
      title: 'Expand A = [4 10 6; 2 3 1; 1 2 3] along row 1: signs alternate + − +; each minor deletes a row and a column',
      columns: ['entry', 'sign', 'minor', 'term'],
      rows: [
        ['a₁₁ = 4', '+', 'det [3 1; 2 3] = 7', '+ 4 · 7 = 28'],
        ['a₁₂ = 10', '−', 'det [2 1; 1 3] = 5', '− 10 · 5 = −50'],
        ['a₁₃ = 6', '+', 'det [2 3; 1 2] = 1', '+ 6 · 1 = 6'],
        ['total', '', '', 'det A = −16 ✓'],
      ]
    },
    {
      type: 'table',
      id: 'growth',
      title: 'Cost: cofactors grow like n!: elimination grows like n³/3',
      columns: ['n', 'cofactor terms (n!)', 'elimination (≈ n³/3)'],
      rows: [
        ['2', '2', '3'],
        ['3', '6', '9'],
        ['5', '120', '42'],
        ['10', '3,628,800', '333'],
        ['20', '≈ 2.4 × 10¹⁸', '≈ 2,667'],
      ]
    },
  ],
  idea: 'Cofactor expansion',
  board: [
    fact('b-rule', 'Cofactor expansion along any row or column', 'each entry times a signed, smaller determinant'),
    facts('b-1', 'How it works', ['minor: delete row i, column j', 'signs: a + − + checkerboard', '4·7 − 10·5 + 6·1 = −16', 'pick the row with most zeros']),
    facts('b-2', 'Where it helps', ['small or symbolic matrices', 'rows with many zeros', 'proofs: det is a polynomial']),
    caution('b-watch', 'Fully expanded, it has n! terms: 3.6 million at n = 10, against about 333 operations for elimination.'),
  ]
})
