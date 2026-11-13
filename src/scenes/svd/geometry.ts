import { board, caution, fact, facts } from '../frame'
import { arrow, circle, image, type M2, GREY } from '../plot-kit'

// §11.2 — A = [3 0; 4 5]: rotate (Vᵀ), stretch (Σ), rotate (U). The unit circle's v₁, v₂ land on the
// ellipse's axes σ₁u₁, σ₂u₂, with σ₁ = 3√5 ≈ 6.71 and σ₂ = √5 ≈ 2.24 (computed).
const A: M2 = [[3, 0], [4, 5]]
const r2 = Math.SQRT1_2
const r10 = 1 / Math.sqrt(10)
export const geometry = board({
  id: 'svd-geometry',
  figure: 'Rotate, stretch, rotate',
  diagram: [
    {
      type: 'plot',
      id: 'ellipse',
      title: 'A = [3 0; 4 5] maps the unit circle to an ellipse: v₁, v₂ on the circle go to σ₁u₁, σ₂u₂ on the ellipse',
      equal: true,
      x: { min: -4, max: 4, step: 1 },
      y: { min: -7, max: 7, step: 2 },
      series: [
        { kind: 'line', points: circle(), dashed: true, tone: GREY },
        {
          kind: 'line',
          points: image(A, circle()),
          label: 'A × circle',
          labelAt: [3.3, 4.6],
          tone: 'ingest'
        },
        { ...arrow([r2, r2], 'v₁', 'ingest'), labelAt: [0.48, 1.1] },
        { ...arrow([r2, -r2], 'v₂', 'infra'), labelAt: [0.75, -1.47] },
        arrow([3 * Math.sqrt(5) * r10, 9 * Math.sqrt(5) * r10], 'σ₁ u₁ (6.71)', 'infra', [0, 0], [2.12, 6.02]),
        arrow([3 * r10 * Math.sqrt(5), -1 * r10 * Math.sqrt(5)], 'σ₂ u₂ (2.24)', 'store', [0, 0], [2.4, -2.3]),
      ]
    },
    {
      type: 'table',
      id: 'relations',
      title: 'Where U, Σ, V come from: AᵀA = [25 20; 20 25] has eigenvalues 45 and 5',
      columns: ['relation', 'meaning', 'here'],
      rows: [
        ['A vᵢ = σᵢ uᵢ', 'each input axis lands on an output axis', 'v₁ = (1, 1)/√2 → σ₁ u₁'],
        ['AᵀA vᵢ = σᵢ² vᵢ', 'V: eigenvectors of AᵀA', 'σ² = 45, 5'],
        ['AAᵀ uᵢ = σᵢ² uᵢ', 'U: eigenvectors of AAᵀ', 'u₁ = (1, 3)/√10'],
        ['σᵢ = √λᵢ(AᵀA)', 'stretch factors, ≥ 0', '3√5 ≈ 6.71, √5 ≈ 2.24'],
      ]
    },
  ],
  idea: 'Singular vectors, stretch factors, AᵀA and AAᵀ',
  board: [
    fact('b-rule', 'A x = U Σ Vᵀ x, right to left', 'rotate by Vᵀ, stretch by σᵢ, rotate by U'),
    facts('b-1', 'The picture', ['unit circle → ellipse', 'A vᵢ = σᵢ uᵢ: the axes', '[3 0; 4 5]: 6.71 and 2.24', 'only Σ changes lengths']),
    facts('b-2', 'Where the factors come from', ['AᵀA = V Σᵀ Σ Vᵀ', 'V: its eigenvectors; σᵢ²: its λ', 'here λ = 45 and 5', 'U: eigenvectors of AAᵀ']),
    caution('b-watch', 'This explains the SVD; it is not how to compute it. Forming AᵀA squares the condition number, as in chapter 8.'),
  ]
})
