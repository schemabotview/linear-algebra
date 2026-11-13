import { board, fact, facts } from '../frame'
import { arrow } from '../plot-kit'
import { Q1, Q2, levelSet, scale } from './common'

// §10.3 — q(x) = xᵀ S x = 5x² + 4xy + 2y². Its level curves are ellipses tilted along q₁ and q₂.
// In those coordinates the cross term disappears: q = 6u² + v².
export const quadraticForms = board({
  id: 'quadratic-forms',
  figure: 'Quadratic forms and principal axes',
  diagram: [
    {
      type: 'plot',
      id: 'levels',
      title: 'Level curves of q = 5x² + 4xy + 2y²: q = 1, 4, 9 from the inside out: tilted ellipses, axes along q₁ and q₂',
      equal: true,
      x: { min: -3, max: 3, step: 1 },
      y: { min: -3, max: 3, step: 1 },
      series: [
        { kind: 'line', points: levelSet(1), tone: 'ingest' },
        { kind: 'line', points: levelSet(4), tone: 'ingest' },
        { kind: 'line', points: levelSet(9), tone: 'ingest' },
        arrow(scale(Q1, 1.25), 'q₁: steepest', 'infra'),
        arrow(scale(Q2, 2.75), 'q₂: flattest', 'store', [0, 0], [1.59, -2.55]),
      ]
    },
    {
      type: 'table',
      id: 'rotate',
      title: 'Rotate to remove the cross term: substitute x = Q u, where Q = [q₁ q₂]',
      columns: ['form', 'in x, y', 'in u, v'],
      rows: [
        ['q(x)', '5x² + 4xy + 2y²', '6u² + v²'],
        ['matrix', 'S = [5 2; 2 2]', 'Λ = diag(6, 1)'],
        ['q = 1 crosses an axis at', 'mixed', 'u = 1/√6, v = 1'],
      ]
    },
  ],
  idea: 'Quadratic forms, cross terms and principal axes',
  board: [
    fact('b-rule', 'A quadratic form is q(x) = xᵀ S x', 'every ax² + bxy + cy² is one'),
    facts('b-1', 'Reading S off the form', ['5x² + 4xy + 2y²', 'S = [5 2; 2 2]', 'the 4 is split across the corners']),
    facts('b-2', 'Principal axes', ['substitute x = Q u', 'q = 6u² + v²: no cross term', 'level curves: ellipses on q₁, q₂', 'q = 1 reaches 0.41 and 1']),
    fact('b-3', 'What the eigenvalues say', 'q grows fastest along the largest λ’s eigenvector: here q₁ steep, q₂ flat'),
  ]
})
