import type { SceneModel } from '@graphlearning/graphl-flow'
import { board, caution, fact, facts, FIG_PLOT_W } from '../frame'
import { arrow, point, TONE } from '../plot-kit'

// §1.1 — a point is a place, a vector is a displacement. The same v is drawn from the origin and
// from two other starts: three arrows, one vector, one tone. P comes first so v's head draws over it.
// The order q below it is the workshop's first vector.
export const pointsAndVectors: SceneModel = board({
  figure: 'A point is a place; a vector is a move',
  diagram: [
    {
      type: 'plot', id: 'plane', title: 'One vector v = (4, 3), drawn from three places', equal: true, w: FIG_PLOT_W,
      x: { min: -1, max: 9, step: 1 }, y: { min: -1, max: 5.5, step: 1 },
      series: [
        point([4, 3], 'point P = (4, 3)', [4.3, 2.6], TONE.v),
        point([0, 0], 'O', [-0.75, -0.8]),
        arrow([4, 3], 'v', TONE.w, [0, 0], [1.6, 1.9]),
        arrow([5, 5], 'v again, from (1, 2)', TONE.w, [1, 2]),
        arrow([8, 2.5], 'and from (4, −0.5)', TONE.w, [4, -0.5], [6.4, 0.3]),
      ],
    },
    {
      type: 'table', id: 'order', title: 'A workshop order q in ℝ³: one vector, three components',
      columns: ['component', 'counts', 'value'],
      rows: [['q₁', 'chairs', '3'], ['q₂', 'tables', '1'], ['q₃', 'shelves', '2']],
    },
  ],
  idea: 'Scalars, vectors and points',
  board: [
    fact('scalar-vector', 'A scalar is one number; a vector is an ordered list treated as one object', 'v = (4, 3) in ℝ², the order q = (3, 1, 2) in ℝ³'),
    facts('point-or-vector', 'Point or vector?', ['a point is a location: P = (4, 3)', 'a vector is a move: 4 across, 3 up', 'fix O: each point P is O → P']),
    facts('notation', 'Notation', ['v₁, …, vₙ are the components of v', 'ℝⁿ: every real n-vector']),
    caution('watch', 'Coordinates depend on the axes and origin you choose. Change them and the numbers change; the displacement itself does not.'),
  ],
})
