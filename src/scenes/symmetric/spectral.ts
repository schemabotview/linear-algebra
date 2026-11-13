import { board, fact, facts } from '../frame'
import { arrow, circle, image, type M2, GREY } from '../plot-kit'
import { Q1, Q2, scale } from './common'

// §10.2 — the spectral theorem as geometry: S maps the unit circle to an ellipse whose axes are the
// orthonormal eigenvectors, with semi-axes equal to the eigenvalues. And as algebra: S = Σ λᵢ qᵢ qᵢᵀ.
const S: M2 = [[5, 2], [2, 2]]
export const spectral = board({
  id: 'spectral',
  figure: 'The spectral theorem',
  diagram: [
    {
      type: 'plot',
      id: 'ellipse',
      title: 'S × unit circle: axes along q₁, q₂; semi-axes 6 and 1',
      equal: true,
      x: { min: -6, max: 6, step: 2 },
      y: { min: -3.5, max: 3.5, step: 1 },
      series: [
        { kind: 'line', points: circle(), dashed: true, tone: GREY },
        {
          kind: 'line',
          points: image(S, circle()),
          label: 'S × circle',
          labelAt: [3.3, 3.0],
          tone: 'ingest'
        },
        arrow(scale(Q1, 6), '6 q₁', 'infra'),
        { ...arrow(Q2, 'q₂', 'store'), labelAt: [0.55, -1.25] },
      ]
    },
    {
      type: 'table',
      id: 'pieces',
      title: 'S = 6 q₁q₁ᵀ + 1 q₂q₂ᵀ: a sum of rank-one projections, weighted by eigenvalues',
      columns: ['piece', 'matrix'],
      rows: [
        ['6 q₁q₁ᵀ, q₁ = (2, 1)/√5', '[4.8 2.4; 2.4 1.2]'],
        ['1 q₂q₂ᵀ, q₂ = (1, −2)/√5', '[0.2 −0.4; −0.4 0.8]'],
        ['sum', '[5 2; 2 2] = S ✓'],
        ['repeated λ, e.g. 3 I', 'any orthonormal basis works'],
      ]
    },
  ],
  idea: 'The spectral theorem',
  board: [
    fact('b-rule', 'Every real symmetric S = Q Λ Qᵀ', 'Q orthogonal (eigenvectors), Λ diagonal (eigenvalues)'),
    facts('b-1', 'As geometry', ['Qᵀ rotates into the axes', 'Λ stretches, Q rotates back', 'circle → ellipse, axes q₁, q₂', 'chapter 9’s V⁻¹ is now Qᵀ']),
    facts('b-2', 'As a sum', ['S = Σ λᵢ qᵢ qᵢᵀ', 'weighted projections', '[5 2; 2 2] = 6 q₁q₁ᵀ + q₂q₂ᵀ']),
    fact('b-3', 'Repeated eigenvalues', 'any orthonormal basis of that eigenspace works: Q is not unique there'),
  ]
})
