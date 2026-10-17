import type { Scene } from '@graphlearning/flow'
import { arrow, UNIT_SQUARE, image, type M2, GREY } from '../plot-kit'

// §2.5 — what a 2×2 matrix does is decided by its columns, the images of e₁ and e₂. The plot draws
// two of the four maps at full size (four small plots shrank to unreadable); the cards give all four.
const c = Math.cos(Math.PI / 6)
const s = Math.sin(Math.PI / 6)
const ROT: M2 = [[c, -s], [s, c]]
const SHEAR: M2 = [[1, 1], [0, 1]]
const BLUE = '#60a5fa'
const ORANGE = '#f59e0b'

export const geometricMaps: Scene = {
  id: 'geometric-maps',
  title: 'Maps of the plane',
  flow: 'TB',
  nodes: [
    {
      id: 'maps',
      kind: 'plot',
      label: 'The unit square under a rotation and a shear',
      sub: 'arrows: the columns, A e₁ and A e₂',
      plot: {
        equal: true,
        x: { min: -1, max: 2.5, step: 0.5 },
        y: { min: -0.25, max: 1.5, step: 0.5 },
        series: [
          { kind: 'line', points: UNIT_SQUARE, dashed: true, label: 'unit square', labelAt: [0.55, 0.1], color: GREY },
          { kind: 'line', points: image(ROT, UNIT_SQUARE), color: BLUE },
          { kind: 'line', points: image(SHEAR, UNIT_SQUARE), color: ORANGE },
          arrow([ROT[0][0], ROT[1][0]], 'rotate e₁', BLUE),
          arrow([ROT[0][1], ROT[1][1]], 'rotate e₂', BLUE),
          { ...arrow([SHEAR[0][1], SHEAR[1][1]], 'shear e₂ = (1, 1)', ORANGE), labelAt: [1.05, 1.15] },
        ],
      },
    },
    {
      id: 'four',
      label: 'Four maps and their matrices',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'scale', label: 'Scaling', sub: '[1.5 0; 0 0.5]: stretch x, squash y', pattern: 'service', icon: 'scale' },
        { id: 'reflect', label: 'Reflection', sub: '[−1 0; 0 1]: flip across the y-axis', pattern: 'network', icon: 'swap' },
        { id: 'rotate', label: 'Rotation by θ', sub: '[cos θ −sin θ; sin θ cos θ]', pattern: 'storage', icon: 'repeat' },
        { id: 'shear', label: 'Shear', sub: '[1 1; 0 1]: slide right by height', pattern: 'user', icon: 'sortarrows' },
      ],
    },
  ],
  edges: [],
}
