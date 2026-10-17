import type { Scene } from '@graphlearning/flow'

// §1.6 — superposition and its counterexamples. Three cost curves over one quantity q: only 2q
// passes both tests; 2q + 3 is a straight line and still fails. The cards name each test.
const q = Array.from({ length: 41 }, (_, i) => i / 10)

export const linearity: Scene = {
  id: 'linearity',
  title: 'Which relationships are linear?',
  flow: 'TB',
  nodes: [
    {
      id: 'costs',
      kind: 'plot',
      label: 'Three ways cost can grow with q',
      sub: 'only one is a linear map',
      plot: {
        x: { min: 0, max: 4, step: 1, label: 'q' },
        y: { min: 0, max: 12, step: 2, label: 'cost' },
        series: [
          { kind: 'line', points: q.map((x): [number, number] => [x, 2 * x]), label: '2q: linear', labelAt: [0.6, 3.4] },
          { kind: 'line', points: q.map((x): [number, number] => [x, 2 * x + 3]), label: '2q + 3: setup' },
          { kind: 'line', points: q.map((x): [number, number] => [x, 0.6 * x * x]), label: '0.6q²' },
        ],
      },
    },
    {
      id: 'tests',
      label: 'The two tests, and two failures',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'additive', label: 'Additivity', sub: 'f(u + v) = f(u) + f(v)', pattern: 'service', icon: 'circlecheck' },
        { id: 'homogeneous', label: 'Homogeneity', sub: 'f(a u) = a f(u)', pattern: 'service', icon: 'circlecheck' },
        { id: 'setup', label: 'Setup cost', sub: 'f(0) = 3, but linear needs 0', pattern: 'warn', icon: 'ban' },
        { id: 'squared', label: 'Squared term', sub: 'f(2q) = 4 f(q), not 2 f(q)', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [],
}
