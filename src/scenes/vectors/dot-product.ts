import type { SceneModel } from '@graphlearning/graphl-flow'
import { board, caution, fact, facts, FIG_PLOT_W } from '../frame'
import { arc, arrow, guide, TONE, type P } from '../plot-kit'

// §1.4 — one dot product gives length, distance and angle. The arc is sampled between the two
// directions (scene files compute data, never positions); the table shows every step, exact first.
const u: P = [4, 1]
const v: P = [1, 3]
const w: P = [-2, 1] // the obtuse case: u · w = −7

export const dotProduct: SceneModel = board({
  figure: 'Length, distance, angle',
  diagram: [
    {
      type: 'plot', id: 'angle', title: 'u = (4, 1), v = (1, 3), w = (−2, 1)', equal: true, compact: true, w: FIG_PLOT_W,
      x: { min: -3, max: 5, step: 1 }, y: { min: -1, max: 4, step: 1 },
      series: [
        arrow(u, 'u', TONE.u, [0, 0], [4.05, 1.15]),
        arrow(v, 'v', TONE.v, [0, 0], [1.05, 3.1]),
        guide(v, u, '‖u − v‖ = √13', [2.7, 2.3]),
        arrow(w, 'w: u · w = −7', TONE.w, [0, 0], [-2.95, 1.35]),
        { kind: 'line', points: arc(u, v, 0.9), label: 'θ', labelAt: [1.0, 0.7], tone: TONE.sum },
      ],
    },
    {
      type: 'table', id: 'steps', title: 'Every measure from dot products: exact first, then rounded',
      columns: ['quantity', 'working', 'value'],
      rows: [
        ['u · v', '4·1 + 1·3', '7'],
        ['‖u‖', '√(16 + 1)', '√17 ≈ 4.12'],
        ['‖v‖', '√(1 + 9)', '√10 ≈ 3.16'],
        ['cos θ', '7 / (√17 · √10)', '≈ 0.537'],
        ['θ', 'arccos 0.537', '≈ 57.5°'],
        ['‖u − v‖', '√(3² + (−2)²)', '√13 ≈ 3.61'],
        ['u · w', '4·(−2) + 1·1', '−7: obtuse'],
      ],
    },
  ],
  idea: 'Length, distance and angles',
  board: [
    fact('rule', 'The dot product u · v = u₁v₁ + … + uₙvₙ is one number carrying length and angle'),
    facts('measures', 'Three measures from one product', ['length: ‖u‖ = √(u · u)', 'distance: ‖u − v‖', 'angle: cos θ = u · v / (‖u‖ ‖v‖)', 'unit vector: u / ‖u‖ has length 1']),
    facts('sign', 'Reading the sign', ['u · v > 0: the angle is under 90°', 'u · v = 0: orthogonal', 'u · v < 0: the angle is over 90°']),
    caution('watch', 'The zero vector has length 0, so the angle formula divides by zero: its angle with another vector is undefined, not 90°.'),
  ],
})
