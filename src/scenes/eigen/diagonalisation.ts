import { board, fact, facts } from '../frame'
import { arrow, circle, image, type M2, GREY } from '../plot-kit'

// §9.4 — A = V D V⁻¹ with the eigenvectors in V. Geometrically: in the eigenvector directions A is
// just a stretch, so the unit circle becomes an ellipse whose axes ARE those directions.
const A: M2 = [[2, 1], [1, 2]]
export const diagonalisation = board({
  id: 'diagonalisation',
  figure: 'Diagonalisation',
  diagram: [
    {
      type: 'plot',
      id: 'axes',
      title: 'A × unit circle: an ellipse with eigenvector axes: stretch 3 along (1, 1), stretch 1 along (1, −1)',
      equal: true,
      x: { min: -3, max: 3, step: 1 },
      y: { min: -2.5, max: 2.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: circle(),
          dashed: true,
          label: 'unit circle',
          labelAt: [-1.9, -1.15],
          tone: GREY
        },
        {
          kind: 'line',
          points: image(A, circle()),
          label: 'A × circle',
          labelAt: [1.85, 2.15],
          tone: 'ingest'
        },
        arrow([2.121, 2.121], '3 × unit v₁', 'infra', [0, 0], [2.4, 1.3]),
        arrow([0.707, -0.707], '1 × unit v₂', 'store', [0, 0], [0.91, -0.71]),
      ]
    },
    {
      type: 'table',
      id: 'factorisation',
      title: 'A = V D V⁻¹: possible exactly when there are n independent eigenvectors',
      columns: ['factor', 'value', 'meaning'],
      rows: [
        ['V', '[1 1; 1 −1]', 'eigenvectors as columns'],
        ['D', 'diag(3, 1)', 'eigenvalues, in the same order'],
        ['V⁻¹', '[1 1; 1 −1] / 2', 'coordinates in the eigenbasis'],
        ['J = [2 1; 0 2]', 'no V exists', 'defective: one eigenvector'],
      ]
    },
  ],
  idea: 'Diagonalisation and defective matrices',
  board: [
    fact('b-rule', 'n independent eigenvectors: A = V D V⁻¹', 'eigenvectors in V, eigenvalues on D’s diagonal'),
    facts('b-1', 'Reading the factorisation', ['V⁻¹ x: eigen-coordinates', 'D: stretch each by λ', 'V: back to standard', 'chapter 5’s change of basis']),
    facts('b-2', 'For A = [2 1; 1 2]', ['V = [1 1; 1 −1]', 'D = diag(3, 1)', 'Aᵏ = V Dᵏ V⁻¹']),
    fact('b-3', 'Defective matrices', 'J = [2 1; 0 2] has one eigenvector direction: no V, never diagonal'),
  ]
})
