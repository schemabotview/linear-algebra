import type { Scene } from '@graphlearning/flow'

// §8.2 — the normal equations come from one geometric fact, not from calculus: the best A x̂ is the
// projection of b onto C(A), so the residual is perpendicular to every column.
export const normalEquations: Scene = {
  id: 'normal-equations',
  title: 'The normal equations',
  flow: 'LR',
  nodes: [
    {
      id: 'derivation',
      label: 'From geometry to equations',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 'goal', label: 'Closest A x̂', sub: 'minimise ‖b − A x̂‖', pattern: 'user', icon: 'search' },
        { id: 'perp', label: 'Residual ⟂ C(A)', sub: 'projection, chapter 7', pattern: 'service', icon: 'ruler' },
        { id: 'every-column', label: 'Aᵀ e = 0', sub: 'one equation per column', pattern: 'service', icon: 'sigma' },
        { id: 'normal', label: 'AᵀA x̂ = Aᵀb', sub: 'the normal equations', pattern: 'storage', icon: 'key' },
      ],
      edges: [
        { source: 'goal', target: 'perp' },
        { source: 'perp', target: 'every-column' },
        { source: 'every-column', target: 'normal' },
      ],
    },
    {
      id: 'numbers',
      kind: 'table',
      label: 'For A = [1 0; 1 1; 1 2], b = (1, 2, 4)',
      sub: 'columns: all ones, and t',
      headers: ['quantity', 'value'],
      values: [
        ['AᵀA', '[3 3; 3 5]'],
        ['Aᵀb', '(7, 10)'],
        ['x̂ = (c, d)', '(5/6, 3/2)'],
        ['fitted A x̂', '(0.83, 2.33, 3.83)'],
        ['residual e', '(1/6, −1/3, 1/6)'],
        ['check Aᵀe', '(0, 0): e ⟂ both columns ✓'],
      ],
    },
  ],
  edges: [],
}
