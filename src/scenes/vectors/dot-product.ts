import type { Scene } from '@graphlearning/flow'

// §1.4 — one dot product gives length, distance and angle. The arc is sampled between the two
// directions (scene files may compute data, never positions); the table shows every step.
const u: [number, number] = [4, 1]
const v: [number, number] = [1, 3]
const w: [number, number] = [-2, 1] // the obtuse case: u · w = −7
const a0 = Math.atan2(u[1], u[0])
const a1 = Math.atan2(v[1], v[0])
const arc = Array.from({ length: 24 }, (_, i): [number, number] => {
  const a = a0 + ((a1 - a0) * i) / 23
  return [0.9 * Math.cos(a), 0.9 * Math.sin(a)]
})

export const dotProduct: Scene = {
  id: 'dot-product',
  title: 'Length, distance, angle',
  flow: 'TB',
  nodes: [
    {
      id: 'angle',
      kind: 'plot',
      label: 'u = (4, 1), v = (1, 3), w = (−2, 1)',
      sub: 'u · v = 7 is acute; u · w = −7 is obtuse',
      plot: {
        equal: true,
        x: { min: -3, max: 5, step: 1 },
        y: { min: -1, max: 4, step: 1 },
        series: [
          { kind: 'segment', from: [0, 0], to: u, arrow: true, dashed: false, label: 'u' },
          { kind: 'segment', from: [0, 0], to: v, arrow: true, dashed: false, label: 'v' },
          { kind: 'segment', from: v, to: u, label: '‖u − v‖ = √13', labelAt: [2.7, 2.3] },
          { kind: 'segment', from: [0, 0], to: w, arrow: true, dashed: false, label: 'w: u · w = −7', labelAt: [-2.9, 1.4] },
          { kind: 'line', points: arc, label: 'θ', labelAt: [1.05, 0.75], color: '#fbbf24' },
        ],
      },
    },
    {
      id: 'steps',
      kind: 'table',
      label: 'Every measure from dot products',
      sub: 'exact first, then rounded',
      headers: ['quantity', 'working', 'value'],
      values: [
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
  edges: [],
}
