import type { Scene } from '@graphlearning/flow'

// §1.5 — three workshop jobs as (material kg, energy). In kWh, A's nearest job is B; rewrite energy
// in Wh and the same three jobs say C. The plot is the kWh view; the table carries both.
const A: [number, number] = [4, 1]
const B: [number, number] = [5, 3]
const C: [number, number] = [7, 1.2]

export const units: Scene = {
  id: 'units',
  title: 'Units change the geometry',
  flow: 'TB',
  nodes: [
    {
      id: 'jobs',
      kind: 'plot',
      label: 'Three jobs, energy in kWh',
      sub: 'nearest to A is B',
      plot: {
        equal: true,
        x: { min: 0, max: 8, step: 1, label: 'material (kg)' },
        y: { min: 0, max: 4, step: 1, label: 'energy (kWh)' },
        series: [
          { kind: 'segment', from: A, to: B, label: '2.24', labelAt: [4.1, 2.2] },
          { kind: 'segment', from: A, to: C, label: '3.01', labelAt: [5.5, 0.7] },
          { kind: 'marker', at: A, label: 'A', labelAt: [3.7, 1.25] },
          { kind: 'marker', at: B, label: 'B', labelAt: [5.2, 3.2] },
          { kind: 'marker', at: C, label: 'C', labelAt: [7.2, 1.45] },
        ],
      },
    },
    {
      id: 'distances',
      kind: 'table',
      label: 'Same jobs, two unit choices',
      sub: 'distance from A',
      headers: ['pair', 'kg and kWh', 'kg and Wh'],
      values: [
        ['A to B', '√(1 + 4) ≈ 2.24', '≈ 2000.0'],
        ['A to C', '√(9 + 0.04) ≈ 3.01', '≈ 200.0'],
        ['nearest to A', 'B', 'C'],
      ],
    },
  ],
  edges: [],
}
