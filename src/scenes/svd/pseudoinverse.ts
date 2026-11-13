import { board, caution, fact, facts } from '../frame'

// §11.4 — chapter 8's duplicated-feature fit. Every (d, e) on d + 2e = 1.5 is a least-squares
// minimiser; the pseudoinverse picks the one closest to the origin, (0.3, 0.6) — the foot of the
// perpendicular, since (0.3, 0.6) · (2, −1) = 0.
export const pseudoinverse = board({
  id: 'pseudoinverse',
  figure: 'The pseudoinverse and minimum-norm solutions',
  diagram: [
    {
      type: 'plot',
      id: 'shortest',
      title: 'A⁺ b picks the shortest minimiser: chapter 8: y = c + d t + e (2t); every (d, e) on the line fits equally well',
      equal: true,
      x: { min: -1, max: 2.5, step: 0.5, label: 'd' },
      y: { min: -0.75, max: 1.25, step: 0.5, label: 'e' },
      series: [
        {
          kind: 'line',
          points: [[-1, 1.25], [2.5, -0.5]],
          label: 'd + 2e = 1.5',
          labelAt: [1.7, 0.45],
          tone: 'ingest'
        },
        {
          kind: 'segment',
          from: [0, 0],
          to: [0.3, 0.6],
          arrow: true,
          dashed: false,
          label: 'A⁺ b: (0.3, 0.6)',
          labelAt: [-0.95, 0.55],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[1.5, 0]],
          label: '(1.5, 0): longer',
          labelAt: [1.14, -0.31],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'definition',
      title: 'A⁺ = V Σ⁺ Uᵀ: Σ⁺: transpose Σ and invert each nonzero σ',
      columns: ['case', 'A⁺ b is', 'example'],
      rows: [
        ['A invertible', 'A⁻¹ b', 'the unique solution'],
        ['full column rank', '(AᵀA)⁻¹ Aᵀ b', 'chapter 8, unique fit'],
        ['rank deficient', 'the shortest least-squares minimiser', '(c, d, e) = (5/6, 0.3, 0.6)'],
        ['tiny σ', '1/σ is huge: treat as 0', 'needs a tolerance (chapter 12)'],
      ]
    },
  ],
  idea: 'The pseudoinverse and minimum-norm least squares',
  board: [
    fact('b-rule', 'A⁺ = V Σ⁺ Uᵀ exists for every matrix', 'Σ⁺ inverts each nonzero σ, keeps zeros'),
    facts('b-1', 'What A⁺ b gives', ['full rank: the least-squares x̂', 'deficient: the shortest minimiser', 'chapter 8: d + 2e = 1.5', 'A⁺ b: (5/6, 0.3, 0.6)']),
    fact('b-2', 'Why the shortest', 'null-space additions keep the fit and only add length: N(A) ⟂ the row space'),
    caution('b-watch', 'Inverting a tiny σ creates huge entries. In practice, σ below a tolerance is treated as zero.'),
  ]
})
