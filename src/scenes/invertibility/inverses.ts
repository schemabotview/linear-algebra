import { board, caution, fact, facts } from '../frame'
import { UNIT_SQUARE, image, type M2, GREY } from '../plot-kit'

// §5.2 — A = [2 1; 1 1] sends the unit square to a parallelogram, and A⁻¹ = [1 −1; −1 2] sends it
// straight back. The cards are the equivalent conditions; any one of them implies all the others.
const A: M2 = [[2, 1], [1, 1]]
export const inverses = board({
  id: 'inverses',
  figure: 'Inverses and the conditions that guarantee one',
  diagram: [
    {
      type: 'plot',
      id: 'round-trip',
      title: 'A = [2 1; 1 1] and A⁻¹ = [1 −1; −1 2]: A⁻¹ (A x) = x for every x',
      equal: true,
      x: { min: -0.5, max: 3.5, step: 1 },
      y: { min: -0.5, max: 2.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: UNIT_SQUARE,
          dashed: true,
          label: 'x: unit square',
          labelAt: [0.1, 1.15],
          tone: GREY
        },
        {
          kind: 'line',
          points: image(A, UNIT_SQUARE),
          label: 'A x',
          labelAt: [3.05, 1.95],
          tone: 'ingest'
        },
        {
          kind: 'segment',
          from: [2, 1],
          to: [1, 0],
          arrow: true,
          label: 'A⁻¹ brings (2, 1) back to (1, 0)',
          labelAt: [1.75, 0.3],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'group',
      id: 'conditions',
      title: 'For square A, each of these implies all the others',
      dir: 'grid',
      cols: 3,
      children: [
        { type: 'item', id: 'has-inverse', title: 'A⁻¹ exists', sub: 'A⁻¹ A = A A⁻¹ = I', icon: 'key', tone: 'ingest' },
        { type: 'item', id: 'full-rank', title: 'Rank n', sub: 'a pivot in every column', tone: 'ingest' },
        { type: 'item', id: 'trivial-null', title: 'N(A) = {0}', sub: 'A x = 0 only for x = 0', tone: 'ingest' },
        { type: 'item', id: 'basis', title: 'Columns a basis', sub: 'independent and spanning ℝⁿ', icon: 'layers', tone: 'store' },
        { type: 'item', id: 'unique', title: 'Unique solutions', sub: 'A x = b, exactly one x for every b', tone: 'store' },
        { type: 'item', id: 'det', title: 'det A ≠ 0', sub: 'chapter 6', tone: 'serve' },
      ]
    },
  ],
  idea: 'Inverses and equivalent conditions',
  board: [
    fact('b-rule', 'A is invertible if A⁻¹ undoes it', 'A⁻¹ A = A A⁻¹ = I'),
    facts('b-1', 'A reversible map', ['A = [2 1; 1 1]', 'A⁻¹ = [1 −1; −1 2]', 'A x = b has one solution: A⁻¹ b']),
    facts('b-2', 'One fact, many faces', ['A⁻¹ exists ⇔ rank n', '⇔ N(A) = {0}', '⇔ the columns are a basis', 'one fails: all fail, A is singular']),
    caution('b-watch', '(A B)⁻¹ = B⁻¹ A⁻¹: undo the last step first, as with socks and shoes.'),
  ]
})
