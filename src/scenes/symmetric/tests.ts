import type { Scene } from '@graphlearning/flow'

// §10.5 — two practical tests and their exact scope. Leading principal minors certify positive
// DEFINITENESS (Sylvester); they do not certify semidefiniteness, as the 2 × 2 counterexample shows.
export const tests: Scene = {
  id: 'definiteness-tests',
  title: 'Testing definiteness',
  flow: 'TB',
  nodes: [
    {
      id: 'minors',
      kind: 'table',
      label: 'Leading principal minors: the top-left k × k determinants',
      sub: 'all > 0 ⇔ positive definite (S symmetric)',
      headers: ['S', 'minors d₁, d₂, d₃', 'eigenvalues', 'verdict'],
      values: [
        ['[5 2; 2 2]', '5, 6', '6, 1', 'positive definite'],
        ['[2 −1 0; −1 2 −1; 0 −1 2]', '2, 3, 4', '0.59, 2, 3.41', 'positive definite'],
        ['[1 2; 2 1]', '1, −3', '3, −1', 'indefinite'],
        ['[0 0; 0 −1]', '0, 0: all ≥ 0', '0, −1', 'NOT semidefinite'],
      ],
    },
    {
      id: 'rules',
      label: 'Which test, when',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'eig-test', label: 'Eigenvalues', sub: 'signs decide every class', pattern: 'service', icon: 'circlecheck' },
        { id: 'leading', label: 'Leading minors', sub: 'all > 0: definite, only', pattern: 'service', icon: 'circlecheck' },
        { id: 'all-minors', label: 'All minors', sub: 'every principal minor ≥ 0: semidefinite', pattern: 'storage', icon: 'layers' },
        { id: 'symmetric-only', label: 'Symmetric only', sub: 'apply the tests to S = Sᵀ', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [],
}
