import { board, caution, fact, facts } from '../frame'

// §10.5 — two practical tests and their exact scope. Leading principal minors certify positive
// DEFINITENESS (Sylvester); they do not certify semidefiniteness, as the 2 × 2 counterexample shows.
export const tests = board({
  id: 'definiteness-tests',
  figure: 'Testing definiteness',
  diagram: [
    {
      type: 'table',
      id: 'minors',
      title: 'Leading principal minors: the top-left k × k determinants: all > 0 ⇔ positive definite (S symmetric)',
      columns: ['S', 'minors d₁, d₂, d₃', 'eigenvalues', 'verdict'],
      rows: [
        ['[5 2; 2 2]', '5, 6', '6, 1', 'positive definite'],
        ['[2 −1 0; −1 2 −1; 0 −1 2]', '2, 3, 4', '0.59, 2, 3.41', 'positive definite'],
        ['[1 2; 2 1]', '1, −3', '3, −1', 'indefinite'],
        ['[0 0; 0 −1]', '0, 0: all ≥ 0', '0, −1', 'NOT semidefinite'],
      ]
    },
    {
      type: 'group',
      id: 'rules',
      title: 'Which test, when',
      dir: 'grid',
      cols: 2,
      children: [
        { type: 'item', id: 'eig-test', title: 'Eigenvalues', sub: 'signs decide every class', tone: 'ingest' },
        { type: 'item', id: 'leading', title: 'Leading minors', sub: 'all > 0: definite, only', tone: 'ingest' },
        { type: 'item', id: 'all-minors', title: 'All minors', sub: 'every principal minor ≥ 0: semidefinite', icon: 'layers', tone: 'store' },
        { type: 'item', id: 'symmetric-only', title: 'Symmetric only', sub: 'apply the tests to S = Sᵀ', tone: 'consume' },
      ]
    },
  ],
  idea: 'Eigenvalue and principal-minor tests',
  board: [
    fact('b-rule', 'Two common tests, each with an exact scope', 'mixing them up is a classic error'),
    facts('b-1', 'The two tests', ['eigenvalues: every class', 'Sylvester: dₖ, top-left k × k', 'all dₖ > 0 ⇔ definite']),
    facts('b-2', 'The trap', ['minors ≥ 0 ⇏ semidefinite', '[0 0; 0 −1]: 0, 0, yet λ = −1', 'need all principal minors']),
    caution('b-watch', 'Both tests assume S = Sᵀ. For a general A, test (A + Aᵀ)/2.'),
  ]
})
