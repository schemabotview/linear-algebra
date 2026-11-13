import { board, fact, facts } from '../frame'
import { arrow, circle, image, type M2, GREY } from '../plot-kit'

// §2.4 — the special matrices. The plot shows the one with the clearest picture: a diagonal matrix
// stretches each axis independently, so the unit circle becomes an axis-aligned ellipse.
const D: M2 = [[2, 0], [0, 0.5]]
export const specialMatrices = board({
  id: 'special-matrices',
  figure: 'Matrices worth recognising',
  diagram: [
    {
      type: 'plot',
      id: 'diagonal',
      title: 'D = diag(2, 0.5) on the unit circle: each axis scales on its own',
      equal: true,
      x: { min: -2.5, max: 2.5, step: 1 },
      y: { min: -1.25, max: 1.25, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: circle(),
          dashed: true,
          label: 'unit circle',
          labelAt: [-1.2, 1.05],
          tone: GREY
        },
        {
          kind: 'line',
          points: image(D, circle()),
          label: 'D × circle',
          labelAt: [1.3, 0.62],
          tone: 'ingest'
        },
        arrow([2, 0], 'D e₁ = (2, 0)', 'infra'),
        arrow([0, 0.5], 'D e₂', 'store'),
      ]
    },
    {
      type: 'group',
      id: 'kinds',
      title: 'Six shapes to recognise on sight',
      dir: 'grid',
      cols: 3,
      children: [
        { type: 'item', id: 'identity', title: 'Identity I', sub: 'I x = x: changes nothing', tone: 'ingest' },
        { type: 'item', id: 'zero', title: 'Zero 0', sub: 'sends every x to 0', tone: 'consume' },
        { type: 'item', id: 'diag', title: 'Diagonal', sub: 'scales each axis on its own', tone: 'ingest' },
        { type: 'item', id: 'upper', title: 'Upper triangular', sub: 'zeros below the diagonal', icon: 'layers', tone: 'store' },
        { type: 'item', id: 'lower', title: 'Lower triangular', sub: 'zeros above the diagonal', icon: 'layers', tone: 'store' },
        { type: 'item', id: 'transpose', title: 'Transpose Aᵀ', sub: 'rows become columns', tone: 'serve' },
      ]
    },
  ],
  idea: 'Identity, diagonal, triangular and transpose',
  board: [
    fact('b-rule', 'A few shapes recur: spotting one saves work', 'and tells you how the map behaves'),
    facts('b-1', 'The reference shapes', ['identity I: I x = x', 'zero matrix: every output is 0', 'symmetric: Aᵀ = A (chapter 10)']),
    facts('b-2', 'Structure that simplifies', ['diagonal: scales axis i by dᵢ', 'diag(2, 0.5): circle → ellipse', 'triangular: elimination’s output', '(A B)ᵀ = Bᵀ Aᵀ']),
    fact('b-3', 'Why they matter', 'diagonal and triangular systems solve one variable at a time, so later chapters factor matrices into them'),
  ]
})
