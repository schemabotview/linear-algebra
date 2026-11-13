import { board, caution, fact, facts } from '../frame'
import { arrow, UNIT_SQUARE, image, type M2, GREY } from '../plot-kit'

// §2.5 — what a 2×2 matrix does is decided by its columns, the images of e₁ and e₂. The plot draws
// two of the four maps at full size (four small plots shrank to unreadable); the cards give all four.
const c = Math.cos(Math.PI / 6)
const s = Math.sin(Math.PI / 6)
const ROT: M2 = [[c, -s], [s, c]]
const SHEAR: M2 = [[1, 1], [0, 1]]
const BLUE = 'ingest'
const ORANGE = 'infra'
export const geometricMaps = board({
  id: 'geometric-maps',
  figure: 'Maps of the plane',
  diagram: [
    {
      type: 'plot',
      id: 'maps',
      title: 'The unit square under a rotation and a shear: arrows: the columns, A e₁ and A e₂',
      equal: true,
      x: { min: -1, max: 2.5, step: 0.5 },
      y: { min: -0.25, max: 1.5, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: UNIT_SQUARE,
          dashed: true,
          label: 'unit square',
          labelAt: [0.52, 0.1],
          tone: GREY
        },
        { kind: 'line', points: image(ROT, UNIT_SQUARE), tone: BLUE },
        { kind: 'line', points: image(SHEAR, UNIT_SQUARE), tone: ORANGE },
        arrow([ROT[0][0], ROT[1][0]], 'rotate e₁', BLUE, [0, 0], [1.01, 0.5]),
        arrow([ROT[0][1], ROT[1][1]], 'rotate e₂', BLUE, [0, 0], [-0.98, 0.62]),
        { ...arrow([SHEAR[0][1], SHEAR[1][1]], 'shear e₂ = (1, 1)', ORANGE), labelAt: [1.05, 1.15] },
      ]
    },
    {
      type: 'group',
      id: 'four',
      title: 'Four maps and their matrices',
      dir: 'grid',
      cols: 2,
      children: [
        { type: 'item', id: 'scale', title: 'Scaling', sub: '[1.5 0; 0 0.5]: stretch x, squash y', tone: 'ingest' },
        { type: 'item', id: 'reflect', title: 'Reflection', sub: '[−1 0; 0 1]: flip across the y-axis', tone: 'serve' },
        { type: 'item', id: 'rotate', title: 'Rotation by θ', sub: '[cos θ −sin θ; sin θ cos θ]', tone: 'store' },
        { type: 'item', id: 'shear', title: 'Shear', sub: '[1 1; 0 1]: slide right by height', tone: 'source' },
      ]
    },
  ],
  idea: 'Scaling, reflection, rotation and shear',
  board: [
    fact('b-rule', 'A 2 × 2 matrix is decided by A e₁ and A e₂', 'those images are its columns'),
    facts('b-1', 'Four maps, four pictures', ['scaling [1.5 0; 0 0.5]', 'reflection [−1 0; 0 1]', 'rotation: (cos θ, sin θ), …', 'shear [1 1; 0 1]']),
    fact('b-2', 'Changing dimension', '2 × 3 maps ℝ³ to ℝ²; 3 × 2 places ℝ² as a plane in ℝ³'),
    caution('b-watch', 'All four keep the origin fixed and lines straight: that is what linear means geometrically. Only rotation also keeps lengths and angles.'),
  ]
})
