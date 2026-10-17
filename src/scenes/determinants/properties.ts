import type { Scene } from '@graphlearning/flow'
import { UNIT_SQUARE, image, type M2, GREY } from '../plot-kit'

// §6.2 — the three defining properties, seen as area. Doubling column 2 doubles the area (linearity
// in that column); adding column 1 to column 2 is a shear, which keeps it.
const SCALE: M2 = [[1, 0], [0, 2]]
const SHEAR: M2 = [[1, 1], [0, 1]]

export const properties: Scene = {
  id: 'properties',
  title: 'Three properties define the determinant',
  flow: 'TB',
  nodes: [
    {
      id: 'area-rules',
      kind: 'plot',
      label: 'Scale a column: area scales. Add a column: area stays',
      sub: 'same base, same height, so the sheared square still has area 1',
      plot: {
        equal: true,
        x: { min: -0.5, max: 2.5, step: 0.5 },
        y: { min: -0.25, max: 2.25, step: 0.5 },
        series: [
          { kind: 'line', points: image(SCALE, UNIT_SQUARE), label: 'column 2 × 2: area 2', labelAt: [-0.45, 2.1], color: '#60a5fa' },
          { kind: 'line', points: image(SHEAR, UNIT_SQUARE), label: 'column 2 + column 1: area 1', labelAt: [1.3, 1.15], color: '#f59e0b' },
          { kind: 'line', points: UNIT_SQUARE, dashed: true, label: 'I: area 1', labelAt: [0.05, 0.75], color: GREY },
        ],
      },
    },
    {
      id: 'axioms',
      label: 'The defining properties, and two consequences',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'normalised', label: 'Normalised', sub: 'det I = 1', pattern: 'service', icon: 'key' },
        { id: 'multilinear', label: 'Linear in each row', sub: 'scale a row by c: det scales by c', pattern: 'service', icon: 'scale' },
        { id: 'alternating', label: 'Alternating', sub: 'swap two rows: det changes sign', pattern: 'service', icon: 'swap' },
        { id: 'equal-rows', label: 'Equal rows', sub: 'det = 0', pattern: 'storage', icon: 'copy' },
        { id: 'add-multiple', label: 'Add a multiple', sub: 'det unchanged', pattern: 'storage', icon: 'merge' },
        { id: 'not-additive', label: 'Not additive', sub: 'det(A + B) ≠ det A + det B', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [],
}
