import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §4.1 — vectors need not be arrows. Polynomials of degree ≤ 2 add and scale like vectors, and their
// coefficient lists add and scale the same way: P₂ behaves exactly like ℝ³.
const p = (t: number) => 1 + 2 * t
const q = (t: number) => 3 - t + t * t
export const vectorSpaces = board({
  id: 'vector-spaces',
  figure: 'Vectors that are not arrows',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'polys',
      title: 'Polynomials add like vectors: p(t) = 1 + 2t, q(t) = 3 − t + t²',
      x: { min: -1.5, max: 1.5, step: 0.5, label: 't' },
      y: { min: -2.5, max: 8, step: 2 },
      series: [
        {
          kind: 'line',
          points: sample(-1.5, 1.5, 60, p),
          label: 'p',
          labelAt: [1.3, 2.55],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-1.5, 1.5, 60, q),
          label: 'q',
          labelAt: [-1.48, 5.6],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: sample(-1.5, 1.5, 60, (t) => p(t) + q(t)),
          label: 'p + q',
          labelAt: [1.05, 6.95],
          tone: 'store'
        },
      ]
    },
    {
      type: 'group',
      id: 'structure',
      title: 'Coordinates and the rules behind them',
      dir: 'row',
      children: [
        {
          type: 'table',
          id: 'coords',
          title: 'Coefficients in the basis 1, t, t²: adding polynomials adds their coefficient vectors',
          columns: ['vector', '1', 't', 't²'],
          rows: [
            ['p', '1', '2', '0'],
            ['q', '3', '−1', '1'],
            ['p + q', '4', '1', '1'],
            ['2p', '2', '4', '0'],
          ]
        },
        {
          type: 'group',
          id: 'axioms',
          title: 'What makes a set a vector space',
          dir: 'grid',
          cols: 2,
          children: [
            { type: 'item', id: 'closed-add', title: 'Closed under +', sub: 'u + v stays in the set', tone: 'ingest' },
            { type: 'item', id: 'closed-scale', title: 'Closed under scaling', sub: 'c u stays in the set', tone: 'ingest' },
            { type: 'item', id: 'zero', title: 'Zero vector', sub: 'u + 0 = u', tone: 'store' },
            { type: 'item', id: 'negatives', title: 'Negatives', sub: 'u + (−u) = 0', tone: 'store' },
            { type: 'item', id: 'order', title: 'Order-free +', sub: 'commutative and associative', tone: 'serve' },
            { type: 'item', id: 'distrib', title: 'Distributive', sub: 'c (u + v) = c u + c v', tone: 'serve' },
          ]
        },
      ]
    },
  ],
  idea: 'Vector spaces and their axioms',
  board: [
    fact('b-rule', 'A vector space: a set you can add and scale', 'by the same rules as arrows in ℝⁿ'),
    facts('b-1', 'The rules, in short', ['closed: u + v and c u stay in', 'a zero vector, and every −u', '+ commutes; scaling distributes']),
    facts('b-2', 'Vectors that are not arrows', ['P₂: degree ≤ 2, p(t) = 1 + 2t', 'p + q and 2p stay in P₂', 'basis 1, t, t²: lists in ℝ³']),
    caution('b-watch', 'Polynomials of degree exactly 2 do not form a vector space: t² + (−t²) = 0 has degree 0.'),
  ]
})
