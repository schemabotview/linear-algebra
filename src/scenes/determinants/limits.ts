import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §6.6 — where determinants help and where they mislead. det(A − λI) = 0 finds eigenvalues (chapter
// 9's preview); but det's SIZE says little about how close to singular a matrix is.
export const limits: Scene = {
  id: 'limits',
  title: 'What a determinant can and cannot tell you',
  flow: 'TB',
  nodes: [
    {
      id: 'char-poly',
      kind: 'plot',
      label: 'Useful: det (A − λ I) for A = [2 1; 1 2]',
      sub: '(2 − λ)² − 1 = 0 at λ = 1 and λ = 3: chapter 9',
      plot: {
        x: { min: -0.5, max: 4.5, step: 1, label: 'λ' },
        y: { min: -1.5, max: 5, step: 1 },
        series: [
          { kind: 'line', points: sample(-0.5, 4.5, 80, (l) => (2 - l) ** 2 - 1), label: 'det (A − λ I)', labelAt: [3.0, 4.5], color: '#60a5fa' },
          { kind: 'marker', at: [1, 0], label: 'λ = 1', labelAt: [0.45, -0.6], color: '#34d399' },
          { kind: 'marker', at: [3, 0], label: 'λ = 3', labelAt: [3.15, -0.6], color: '#34d399' },
        ],
      },
    },
    {
      id: 'misleading',
      kind: 'table',
      label: 'Misleading: the size of det A',
      sub: 'condition number κ: big means nearly singular (chapter 12)',
      headers: ['matrix', 'det', 'κ', 'nearly singular?'],
      values: [
        ['0.1 I, 10 × 10', '10⁻¹⁰', '1', 'no: perfectly conditioned'],
        ['10 I, 100 × 100', '10¹⁰⁰', '1', 'no'],
        ['diag(1000, 0.001)', '1', '10⁶', 'yes, despite det = 1'],
      ],
    },
  ],
  edges: [],
}
