import { board, caution, fact, facts } from '../frame'
import { UNIT_SQUARE, image, type M2, GREY } from '../plot-kit'

// §6.5 — the product rule and friends, checked on A = [2 1; 1 3] and B = [1 2; 2 1]. The plot is the
// singularity criterion: det 0 means the square is flattened onto a segment, so it has no inverse.
const S: M2 = [[2, 4], [1, 2]]
export const rules = board({
  id: 'rules',
  figure: 'Rules for determinants',
  diagram: [
    {
      type: 'plot',
      id: 'singular',
      title: 'det [2 4; 1 2] = 0: the square is flattened: zero area cannot be undone, so the map has no inverse',
      equal: true,
      x: { min: -0.5, max: 6.5, step: 1 },
      y: { min: -0.5, max: 3.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: UNIT_SQUARE,
          dashed: true,
          label: 'unit square',
          labelAt: [1.1, 0.25],
          tone: GREY
        },
        {
          kind: 'line',
          points: image(S, UNIT_SQUARE),
          label: 'its image: a segment',
          labelAt: [3.6, 1.2],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'checks',
      title: 'The rules, checked on A = [2 1; 1 3], B = [1 2; 2 1]: det A = 5, det B = −3',
      columns: ['rule', 'here', 'value'],
      rows: [
        ['det (A B) = det A · det B', 'A B = [4 5; 7 5]', '−15 = 5 · (−3)'],
        ['det Aᵀ = det A', 'Aᵀ = A', '5'],
        ['det A⁻¹ = 1 / det A', 'A⁻¹ = [3 −1; −1 2] / 5', '1/5'],
        ['det (c A) = cⁿ det A', 'c = 2, n = 2', '4 · 5 = 20'],
        ['det A = 0 ⇔ singular', '[2 4; 1 2]', '0'],
      ]
    },
  ],
  idea: 'Products, transposes, inverses and singularity',
  board: [
    fact('b-rule', 'Composing maps multiplies their factors', 'because det measures volume scaling'),
    facts('b-1', 'The rules', ['det(A B) = det A · det B', 'det Aᵀ = det A', 'det A⁻¹ = 1 / det A', 'det(c A) = cⁿ det A']),
    facts('b-2', 'The singularity criterion', ['det A = 0 ⇔ A singular', 'zero volume: a dimension lost', '[2 4; 1 2]: square → segment']),
    caution('b-watch', 'det(A + B) has no rule. And det(2A) for a 3 × 3 matrix is 8 det A, not 2 det A.'),
  ]
})
