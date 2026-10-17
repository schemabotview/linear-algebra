import type { Section } from '../types'

export const columnAndRowViews: Section = {
  id: 'column-and-row-views',
  title: 'Column and row views of A x',
  scene: 'two-views',
  focus: 'columns',
  slide: `## Column and row views of A x

The same product A x can be read two ways. Both give the same numbers; they answer different questions.

### Column view
- A x = x₁ a₁ + x₂ a₂ + … + xₙ aₙ: a **linear combination of the columns**
- On the left, A x = 2 a₁ + 1 a₂ = (3, 3), drawn head to tail
- It answers: which outputs can A produce at all?
- Every output of A is some combination of its columns, and nothing else

### Row view
- Entry i of A x is **row i dotted with x**
- (2, −1) · (2, 1) = 3 and (1, 1) · (2, 1) = 3
- It answers: what does each output measure?

### Watch out
The column view is the one that generalises. Whether A x = b has a solution is a question about the columns of A.`,
  narration:
    "Is a matrix-vector product a list of dot products, or a combination of columns? It is both, and each view answers a different question. In the column view, x supplies the weights and the columns of A are the vectors being combined. Here, two times the first column, two, one, plus one times the second column, minus one, one, lands on three, three. You can see it head to tail on the plot. In the row view, each entry of the output is one row of A dotted with x. Two, minus one dotted with two, one is three, and one, one dotted with two, one is also three. Same answer, different bookkeeping. The row view is how you compute by hand. The column view is how you think. It says that the outputs a matrix can produce are exactly the combinations of its columns, and that idea carries most of the next three chapters. Next, what it means to multiply two matrices.",
}
