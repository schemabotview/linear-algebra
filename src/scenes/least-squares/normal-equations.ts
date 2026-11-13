import { board, caution, fact, facts } from '../frame'

// §8.2 — the normal equations come from one geometric fact, not from calculus: the best A x̂ is the
// projection of b onto C(A), so the residual is perpendicular to every column.
export const normalEquations = board({
  id: 'normal-equations',
  figure: 'The normal equations',
  diagram: [
    {
      type: 'group',
      id: 'derivation',
      title: 'From geometry to equations',
      children: [
        { type: 'item', id: 'goal', title: 'Closest A x̂', sub: 'minimise ‖b − A x̂‖', icon: 'search', tone: 'source' },
        { type: 'item', id: 'perp', title: 'Residual ⟂ C(A)', sub: 'projection, chapter 7', tone: 'ingest' },
        { type: 'item', id: 'every-column', title: 'Aᵀ e = 0', sub: 'one equation per column', tone: 'ingest' },
        { type: 'item', id: 'normal', title: 'AᵀA x̂ = Aᵀb', sub: 'the normal equations', icon: 'key', tone: 'store' },
      ]
    },
    {
      type: 'table',
      id: 'numbers',
      title: 'For A = [1 0; 1 1; 1 2], b = (1, 2, 4): columns: all ones, and t',
      columns: ['quantity', 'value'],
      rows: [
        ['AᵀA', '[3 3; 3 5]'],
        ['Aᵀb', '(7, 10)'],
        ['x̂ = (c, d)', '(5/6, 3/2)'],
        ['fitted A x̂', '(0.83, 2.33, 3.83)'],
        ['residual e', '(1/6, −1/3, 1/6)'],
        ['check Aᵀe', '(0, 0): e ⟂ both columns ✓'],
      ]
    },
  ],
  edges: [
    { from: 'goal', to: 'perp' },
    { from: 'perp', to: 'every-column' },
    { from: 'every-column', to: 'normal' }
  ],
  idea: 'The normal equations by projection',
  board: [
    fact('b-rule', 'Minimising ‖b − A x‖ is projection', 'A x̂ is the point of C(A) closest to b'),
    facts('b-1', 'The derivation', ['A x̂: b projected onto C(A)', 'so e = b − A x̂ ⟂ C(A)', 'every column: Aᵀ e = 0', 'AᵀA x̂ = Aᵀ b']),
    facts('b-2', 'For the three measurements', ['AᵀA = [3 3; 3 5], Aᵀb = (7, 10)', 'x̂ = (5/6, 3/2)', 'e = (1/6, −1/3, 1/6), Aᵀe = 0']),
    caution('b-watch', 'The normal equations are ideal for derivations. As a numerical method they can lose accuracy, as §8.4 shows.'),
  ]
})
