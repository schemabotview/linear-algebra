import { board, caution, fact, facts } from '../frame'
import { fmt } from '../plot-kit'

// §2.7 — which rules of ordinary algebra survive. A projection A makes AB = AC with B ≠ C, so
// cancellation fails; the entrywise product is a different operation from composition.
export const matrixAlgebra = board({
  id: 'matrix-algebra',
  figure: 'Which algebra rules survive',
  diagram: [
    {
      type: 'group',
      id: 'examples',
      title: 'Three counterexamples',
      dir: 'row',
      children: [
        {
          type: 'table',
          id: 'cancel',
          title: 'A B = A C, yet B ≠ C: A keeps x₁ and drops x₂',
          columns: ['name', 'matrix'],
          rows: [
            ['A', fmt([[1, 0], [0, 0]])],
            ['B', fmt([[1, 0], [0, 1]])],
            ['C', fmt([[1, 0], [0, 2]])],
            ['A B', fmt([[1, 0], [0, 0]])],
            ['A C', fmt([[1, 0], [0, 0]])],
          ]
        },
        {
          type: 'table',
          id: 'entrywise',
          title: 'Entrywise ≠ product: A = [1 2; 3 4], B = [0 1; 1 0]',
          columns: ['operation', 'result'],
          rows: [
            ['A ∘ B (entrywise)', fmt([[0, 2], [3, 0]])],
            ['A B (compose)', fmt([[2, 1], [4, 3]])],
            ['B A (compose)', fmt([[3, 4], [1, 2]])],
          ]
        },
        {
          type: 'table',
          id: 'zero',
          title: 'A B = 0, yet A, B ≠ 0: B outputs only what A drops',
          columns: ['name', 'matrix'],
          rows: [
            ['A', fmt([[1, 0], [0, 0]])],
            ['B', fmt([[0, 0], [0, 1]])],
            ['A B', fmt([[0, 0], [0, 0]])],
          ]
        },
      ]
    },
    {
      type: 'group',
      id: 'rules',
      title: 'Rules that hold, and rules that do not',
      dir: 'grid',
      cols: 2,
      children: [
        { type: 'item', id: 'assoc', title: 'Associative', sub: '(A B) C = A (B C)', tone: 'ingest' },
        { type: 'item', id: 'distrib', title: 'Distributive', sub: 'A (B + C) = A B + A C', tone: 'ingest' },
        { type: 'item', id: 'transp', title: 'Transpose', sub: '(A B)ᵀ = Bᵀ Aᵀ', tone: 'ingest' },
        { type: 'item', id: 'commute', title: 'Commuting', sub: 'A B ≠ B A in general', tone: 'consume' },
        { type: 'item', id: 'cancellation', title: 'Cancelling', sub: 'A B = A C does not give B = C', tone: 'consume' },
        { type: 'item', id: 'zero-product', title: 'Zero product', sub: 'A B = 0 with A, B ≠ 0', tone: 'consume' },
      ]
    },
  ],
  idea: 'Algebraic identities and invalid cancellation',
  board: [
    fact('b-rule', 'Products obey most familiar rules', 'but three habits from arithmetic fail'),
    facts('b-1', 'Rules that hold', ['(A B) C = A (B C)', 'A (B + C) = A B + A C', '(A B)ᵀ = Bᵀ Aᵀ']),
    facts('b-2', 'Rules that fail', ['A B and B A usually differ', 'A B = A C does not give B = C', 'A B = 0 with A, B ≠ 0', 'A ∘ B (entrywise) is not A B']),
    caution('b-watch', 'Chapter outcome: you can predict product dimensions, explain a map through its columns, and reason about composition and linearity.'),
  ]
})
