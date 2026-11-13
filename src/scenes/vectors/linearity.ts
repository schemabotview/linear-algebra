import { board, caution, fact, facts, FIG_PLOT_W } from '../frame'
import { sample, TONE } from '../plot-kit'

// §1.6 — superposition and its counterexamples. Three cost curves over one quantity q: only 2q
// passes both tests; 2q + 3 is a straight line and still fails. The table names each test.
export const linearity = board({
  id: 'linearity',
  figure: 'Which relationships are linear?',
  diagram: [
    {
      type: 'plot', id: 'costs', title: 'Three ways cost can grow with q: only one is a linear map', w: FIG_PLOT_W,
      x: { min: 0, max: 4, step: 1, label: 'q' }, y: { min: 0, max: 12, step: 2, label: 'cost' },
      series: [
        { kind: 'line', points: sample(0, 4, 40, (x) => 2 * x), label: '2q: linear', labelAt: [3.1, 5.0], tone: TONE.sum },
        { kind: 'line', points: sample(0, 4, 40, (x) => 2 * x + 3), label: '2q + 3: setup', labelAt: [2.6, 9.6], tone: TONE.v },
        { kind: 'line', points: sample(0, 4, 40, (x) => 0.6 * x * x), label: '0.6q²', labelAt: [3.1, 7.9], tone: TONE.w },
      ],
    },
    {
      type: 'table', id: 'tests', title: 'The two tests, and two failures',
      columns: ['test', 'rule', '2q', '2q + 3', '0.6q²'],
      rows: [
        ['additivity', 'f(u + v) = f(u) + f(v)', 'yes', 'no', 'no'],
        ['homogeneity', 'f(a u) = a f(u)', 'yes', 'no', 'no'],
        { cells: ['f(0)', 'a linear map gives 0', '0', '3', '0'], tone: 'consume' },
        ['f(2q) / f(q)', 'linear gives 2', '2', 'not 2', '4'],
      ],
    },
  ],
  idea: 'Linear relationships',
  board: [
    fact('rule', 'f is linear when f(u + v) = f(u) + f(v) and f(a u) = a f(u)'),
    facts('superposition', 'Superposition', ['inputs combine → outputs do', 'r(q) = q₁c + q₂t + q₃s', 'is linear in the order q']),
    facts('counter', 'Counterexamples', ['setup cost: 2q + 3 sends 0 to 3', '0.6q²: double q, cost × 4', 'a straight graph is not enough']),
    caution('outcome', 'Chapter outcome: you can interpret a linear combination, explain each vector operation, and name the assumptions behind a geometric comparison.'),
  ],
})
