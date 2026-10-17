import type { Section } from '../types'

export const matrixAlgebraSection: Section = {
  id: 'matrix-algebra',
  title: 'Algebraic identities and invalid cancellation',
  scene: 'matrix-algebra',
  focus: 'rules',
  slide: `## Matrix algebra: what survives

Matrix products obey most familiar rules, but **three habits from ordinary arithmetic fail**.

### Rules that hold
- Associative: (A B) C = A (B C)
- Distributive: A (B + C) = A B + A C
- Transpose reverses order: (A B)ᵀ = Bᵀ Aᵀ

### Rules that fail
- **Commuting**: A B and B A usually differ
- **Cancelling**: A B = A C does not force B = C when A loses information
- **Zero products**: A B = 0 can happen with A ≠ 0 and B ≠ 0
- The **entrywise** product A ∘ B is a different operation from A B

### Chapter outcome
You can predict product dimensions, explain a map through its columns, and reason about composition and linearity.`,
  narration:
    "Which rules from ordinary algebra can we still use? Most of them, but not all, and the failures are where mistakes come from. Associativity holds, so a long product can be grouped any way you like. The distributive law holds. And transposing a product reverses its order. Now the failures. Products usually do not commute, as the previous sections showed. Cancellation fails too. On the left, A keeps the first coordinate and throws the second away. B and C differ only in the second coordinate, so A cannot tell them apart, and A B equals A C even though B is not C. Cancelling would need A to be reversible, which is a later chapter. And the entrywise product, multiplying matching entries, is a different operation altogether: it is not composition. That completes the chapter. You can predict product shapes, explain a map through its columns, and reason about composition. Next, we run a map backwards: which inputs produce a given output?",
}
