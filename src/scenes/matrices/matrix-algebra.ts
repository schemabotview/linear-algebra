import type { Scene } from '@graphlearning/flow'
import { fmt } from '../plot-kit'

// §2.7 — which rules of ordinary algebra survive. A projection A makes AB = AC with B ≠ C, so
// cancellation fails; the entrywise product is a different operation from composition.
export const matrixAlgebra: Scene = {
  id: 'matrix-algebra',
  title: 'Which algebra rules survive',
  flow: 'TB',
  nodes: [
    {
      id: 'examples',
      label: 'Three counterexamples',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'cancel',
          kind: 'table',
          label: 'A B = A C, yet B ≠ C',
          sub: 'A keeps x₁ and drops x₂',
          headers: ['name', 'matrix'],
          values: [
            ['A', fmt([[1, 0], [0, 0]])],
            ['B', fmt([[1, 0], [0, 1]])],
            ['C', fmt([[1, 0], [0, 2]])],
            ['A B', fmt([[1, 0], [0, 0]])],
            ['A C', fmt([[1, 0], [0, 0]])],
          ],
        },
        {
          id: 'entrywise',
          kind: 'table',
          label: 'Entrywise ≠ product',
          sub: 'A = [1 2; 3 4], B = [0 1; 1 0]',
          headers: ['operation', 'result'],
          values: [
            ['A ∘ B (entrywise)', fmt([[0, 2], [3, 0]])],
            ['A B (compose)', fmt([[2, 1], [4, 3]])],
            ['B A (compose)', fmt([[3, 4], [1, 2]])],
          ],
        },
        {
          id: 'zero',
          kind: 'table',
          label: 'A B = 0, yet A, B ≠ 0',
          sub: 'B outputs only what A drops',
          headers: ['name', 'matrix'],
          values: [
            ['A', fmt([[1, 0], [0, 0]])],
            ['B', fmt([[0, 0], [0, 1]])],
            ['A B', fmt([[0, 0], [0, 0]])],
          ],
        },
      ],
    },
    {
      id: 'rules',
      label: 'Rules that hold, and rules that do not',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'assoc', label: 'Associative', sub: '(A B) C = A (B C)', pattern: 'service', icon: 'circlecheck' },
        { id: 'distrib', label: 'Distributive', sub: 'A (B + C) = A B + A C', pattern: 'service', icon: 'circlecheck' },
        { id: 'transp', label: 'Transpose', sub: '(A B)ᵀ = Bᵀ Aᵀ', pattern: 'service', icon: 'circlecheck' },
        { id: 'commute', label: 'Commuting', sub: 'A B ≠ B A in general', pattern: 'warn', icon: 'ban' },
        { id: 'cancellation', label: 'Cancelling', sub: 'A B = A C does not give B = C', pattern: 'warn', icon: 'ban' },
        { id: 'zero-product', label: 'Zero product', sub: 'A B = 0 with A, B ≠ 0', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [],
}
