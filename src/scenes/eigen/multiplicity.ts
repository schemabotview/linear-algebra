import { board, caution, fact, facts } from '../frame'
import { arrow, UNIT_SQUARE, image, type M2, GREY } from '../plot-kit'

// §9.3 — J = [2 1; 0 2] has λ = 2 twice but only one eigenvector direction, (1, 0): e₂ is sheared off
// its line. Compare 2I, where λ = 2 twice and EVERY direction is an eigenvector.
const J: M2 = [[2, 1], [0, 2]]
export const multiplicity = board({
  id: 'multiplicity',
  figure: 'Algebraic and geometric multiplicity',
  diagram: [
    {
      type: 'plot',
      id: 'shear',
      title: 'J = [2 1; 0 2]: λ = 2 twice, one eigenvector: e₁ is only stretched; e₂ is stretched and turned',
      equal: true,
      x: { min: -0.5, max: 3.5, step: 1 },
      y: { min: -0.5, max: 2.5, step: 1 },
      series: [
        { kind: 'line', points: UNIT_SQUARE, dashed: true, tone: GREY },
        {
          kind: 'line',
          points: image(J, UNIT_SQUARE),
          label: 'J × square',
          labelAt: [2.6, 2.2],
          tone: 'neutral'
        },
        { ...arrow([2, 0], 'J e₁ = 2 e₁', 'ingest'), labelAt: [2.3, 0.1] },
        { ...arrow([1, 2], 'J e₂ = (1, 2): turned', 'serve'), labelAt: [-0.4, 2.3] },
      ]
    },
    {
      type: 'table',
      id: 'counts',
      title: 'Two ways to count an eigenvalue: geometric ≤ algebraic, always',
      columns: ['matrix', 'λ', 'algebraic (root count)', 'geometric (dim of eigenspace)'],
      rows: [
        ['J = [2 1; 0 2]', '2', '2', '1: only (1, 0)'],
        ['2 I = [2 0; 0 2]', '2', '2', '2: every direction'],
        ['A = [2 1; 1 2]', '3 and 1', '1 each', '1 each'],
      ]
    },
  ],
  idea: 'Algebraic versus geometric multiplicity',
  board: [
    fact('b-rule', 'A repeated root may bring a full set of eigenvectors', 'or too few'),
    facts('b-1', 'Two counts', ['algebraic: times λ is a root', 'geometric: dim N(A − λ I)', '1 ≤ geometric ≤ algebraic']),
    facts('b-2', 'Same λ, different behaviour', ['2 I: every direction works', 'J = [2 1; 0 2]: one line only', 'J stretches e₁, turns e₂']),
    caution('b-watch', 'Distinct eigenvalues are always safe: each has an eigenvector, and eigenvectors for different eigenvalues are independent.'),
  ]
})
