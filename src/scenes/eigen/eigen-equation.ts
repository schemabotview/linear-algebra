import { board, caution, fact, facts } from '../frame'
import { arrow, GREY } from '../plot-kit'

// §9.1 — A = [2 1; 1 2]. Along (1, 1) it stretches by 3; along (1, −1) it does nothing; any other
// vector, such as (1, 0), turns: A (1, 0) = (2, 1) is not a multiple of (1, 0).
export const eigenEquation = board({
  id: 'eigen-equation',
  figure: 'Directions a map does not turn',
  diagram: [
    {
      type: 'plot',
      id: 'directions',
      title: 'A = [2 1; 1 2]: two directions survive: A v₁ = 3 v₁, A v₂ = 1 v₂; a generic x is turned',
      equal: true,
      x: { min: -1.5, max: 3.5, step: 1 },
      y: { min: -1.5, max: 3.5, step: 1 },
      series: [
        arrow([3, 3], 'A v₁ = 3 v₁', 'ingest'),
        arrow([1, 1], 'v₁ = (1, 1)', 'ingest', [0, 0], [1.2, 1]),
        arrow([1, -1], 'v₂ = A v₂ = (1, −1)', 'infra'),
        { ...arrow([1, 0], 'x', GREY), labelAt: [0.95, 0.15] },
        { ...arrow([2, 1], 'A x = (2, 1): turned', 'serve', [0, 0], [2.05, 0.55]), dashed: true },
      ]
    },
    {
      type: 'table',
      id: 'definition',
      title: 'A v = λ v, with v ≠ 0: the eigenspace for λ is N(A − λ I)',
      columns: ['λ', 'eigenvector', 'A v', 'eigenspace'],
      rows: [
        ['3', '(1, 1)', '(3, 3) = 3 (1, 1)', 'the line through (1, 1)'],
        ['1', '(1, −1)', '(1, −1) = 1 (1, −1)', 'the line through (1, −1)'],
        ['—', '(1, 0)', '(2, 1)', 'not an eigenvector'],
      ]
    },
  ],
  idea: 'Eigenvalues, eigenvectors and eigenspaces',
  board: [
    fact('b-rule', 'An eigenvector is a nonzero v that A does not turn', 'A v = λ v; λ is its eigenvalue'),
    facts('b-1', 'For A = [2 1; 1 2]', ['A (1, 1) = (3, 3): λ = 3', 'A (1, −1) = (1, −1): λ = 1', 'A (1, 0) = (2, 1): not one']),
    facts('b-2', 'Eigenspaces', ['(A − λ I) v = 0', 'N(A − λ I) is a subspace', 'any nonzero multiple is one too', 'named by direction, not length']),
    caution('b-watch', 'v = 0 always satisfies A v = λ v, so it is excluded by definition. But λ = 0 is allowed: it means A is singular.'),
  ]
})
