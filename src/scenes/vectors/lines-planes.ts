import type { Scene } from '@graphlearning/flow'

// §1.3 — a line as p + t d. The line through the origin and its translate share d, so they are
// parallel; only the first is closed under addition. The four cards carry the forms into ℝ³ and ℝⁿ.
const d: [number, number] = [2, 1]
const p: [number, number] = [0, 2]
const at = (base: [number, number], t: number): [number, number] => [base[0] + t * d[0], base[1] + t * d[1]]

export const linesPlanes: Scene = {
  id: 'lines-planes',
  title: 'Lines and planes from vectors',
  flow: 'TB',
  nodes: [
    {
      id: 'lines',
      kind: 'plot',
      label: 'Same direction, two lines',
      sub: 'd = (2, 1), p = (0, 2)',
      plot: {
        equal: true,
        x: { min: -2, max: 6, step: 1 },
        y: { min: -2, max: 5, step: 1 },
        series: [
          { kind: 'line', points: [at([0, 0], -1), at([0, 0], 3)], label: 't d' },
          { kind: 'line', points: [at(p, -1), at(p, 3)], label: 'p + t d' },
          { kind: 'segment', from: [0, 0], to: d, arrow: true, dashed: false, label: 'd' },
          { kind: 'segment', from: [0, 0], to: p, arrow: true, dashed: false, label: 'p', labelAt: [0.25, 1.5] },
          { kind: 'marker', at: at(p, 1), label: 't = 1', labelAt: [2.2, 3.6] },
        ],
      },
    },
    {
      id: 'forms',
      label: 'Parametric forms',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'line', label: 'Line', sub: 'p + t d: one free scalar', pattern: 'service', icon: 'ruler' },
        { id: 'plane', label: 'Plane', sub: 'p + s u + t v: two free scalars', pattern: 'service', icon: 'layers' },
        { id: 'through-origin', label: 'Through 0', sub: 'p = 0: closed under + and scaling', pattern: 'storage', icon: 'circlecheck' },
        { id: 'translated', label: 'Translated', sub: 'p ≠ 0: sums leave the set', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [],
}
