import type { Scene } from '@graphlearning/flow'
import { arrow, circle, image, type M2, GREY } from '../plot-kit'

// §2.4 — the special matrices. The plot shows the one with the clearest picture: a diagonal matrix
// stretches each axis independently, so the unit circle becomes an axis-aligned ellipse.
const D: M2 = [[2, 0], [0, 0.5]]

export const specialMatrices: Scene = {
  id: 'special-matrices',
  title: 'Matrices worth recognising',
  flow: 'TB',
  nodes: [
    {
      id: 'diagonal',
      kind: 'plot',
      label: 'D = diag(2, 0.5) on the unit circle',
      sub: 'each axis scales on its own',
      plot: {
        equal: true,
        x: { min: -2.5, max: 2.5, step: 1 },
        y: { min: -1.25, max: 1.25, step: 0.5 },
        series: [
          { kind: 'line', points: circle(), dashed: true, label: 'unit circle', labelAt: [-1.2, 1.05], color: GREY },
          { kind: 'line', points: image(D, circle()), label: 'D × circle', labelAt: [1.3, 0.62], color: '#60a5fa' },
          arrow([2, 0], 'D e₁ = (2, 0)', '#f59e0b'),
          arrow([0, 0.5], 'D e₂', '#34d399'),
        ],
      },
    },
    {
      id: 'kinds',
      label: 'Six shapes to recognise on sight',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'identity', label: 'Identity I', sub: 'I x = x: changes nothing', pattern: 'service', icon: 'repeat' },
        { id: 'zero', label: 'Zero 0', sub: 'sends every x to 0', pattern: 'warn', icon: 'circleslash' },
        { id: 'diag', label: 'Diagonal', sub: 'scales each axis on its own', pattern: 'service', icon: 'scale' },
        { id: 'upper', label: 'Upper triangular', sub: 'zeros below the diagonal', pattern: 'storage', icon: 'layers' },
        { id: 'lower', label: 'Lower triangular', sub: 'zeros above the diagonal', pattern: 'storage', icon: 'layers' },
        { id: 'transpose', label: 'Transpose Aᵀ', sub: 'rows become columns', pattern: 'network', icon: 'swap' },
      ],
    },
  ],
  edges: [],
}
