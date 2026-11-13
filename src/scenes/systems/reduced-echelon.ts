import { board, caution, fact, facts } from '../frame'
import { arrow, augmented, lineEq } from '../plot-kit'

// §3.4 — two equations, three unknowns. RREF leaves x₂ free; the solutions are a line,
// (2, 0, 3) + t(−2, 1, 0). The plot shows that line in the (x₁, x₂) plane, where x₃ = 3 throughout.
export const reducedEchelon = board({
  id: 'reduced-echelon',
  figure: 'Free variables and solution sets',
  diagram: [
    {
      type: 'group',
      id: 'rref',
      title: 'Reduce until each pivot is 1 and stands alone in its column',
      dir: 'row',
      children: [
        augmented('system', 'System', '2 equations, 3 unknowns', [[1, 2, 3, 11], [2, 4, 7, 25]]),
        augmented('reduced', 'Reduced echelon form', 'R2 − 2R1, then R1 − 3R2', [[1, 2, 0, 2], [0, 0, 1, 3]]),
      ]
    },
    {
      type: 'plot',
      id: 'family',
      title: 'x = (2, 0, 3) + t (−2, 1, 0), drawn in the (x₁, x₂) plane: x₂ = t is free; x₁ = 2 − 2t; x₃ = 3 for every t',
      equal: true,
      x: { min: -4, max: 4, step: 1, label: 'x₁' },
      y: { min: -1, max: 3, step: 1, label: 'x₂' },
      series: [
        {
          kind: 'line',
          points: lineEq(1, 2, 2, -4, 4),
          label: 'x₁ + 2x₂ = 2',
          labelAt: [-3.66, 2.73],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[2, 0]],
          label: 't = 0',
          labelAt: [2.15, 0.3],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[0, 1]],
          label: 't = 1',
          labelAt: [0.15, 1.3],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[-2, 2]],
          label: 't = 2',
          labelAt: [-1.85, 2.3],
          tone: 'store'
        },
        { ...arrow([0, 1], 'direction (−2, 1)', 'infra', [2, 0]), labelAt: [-1.5, 0.6] },
      ]
    },
  ],
  edges: [
    { from: 'system', to: 'reduced', label: 'reduce' }
  ],
  idea: 'Reduced echelon form and parameterised solutions',
  board: [
    fact('b-rule', 'Reduced echelon form: every pivot is 1', 'and the only nonzero entry in its column'),
    facts('b-1', 'Pivot and free variables', ['pivot columns: x₁ and x₃', 'no pivot: x₂ = t is free', 'pivot rows solve for x₁, x₃']),
    facts('b-2', 'Reading the solution set', ['x₁ = 2 − 2t, x₂ = t, x₃ = 3', 'x = (2, 0, 3) + t (−2, 1, 0)', 'a line in ℝ³: t = 0, 1, 2 shown']),
    caution('b-watch', 'Which variables are free comes from the pivot columns. The solution set itself does not depend on that choice.'),
  ]
})
