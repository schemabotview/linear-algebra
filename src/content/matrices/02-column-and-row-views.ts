import type { Section } from '../types'

export const columnAndRowViews: Section = {
  id: 'column-and-row-views',
  title: 'Column and row views of A x',
  scene: 'two-views',
  focus: 'columns',
  narration:
    "Is a matrix-vector product a list of dot products, or a combination of columns? It is both, and each view answers a different question. In the column view, x supplies the weights and the columns of A are the vectors being combined. Here, two times the first column, two, one, plus one times the second column, minus one, one, lands on three, three. You can see it head to tail on the plot. In the row view, each entry of the output is one row of A dotted with x. Two, minus one dotted with two, one is three, and one, one dotted with two, one is also three. Same answer, different bookkeeping. The row view is how you compute by hand. The column view is how you think. It says that the outputs a matrix can produce are exactly the combinations of its columns, and that idea carries most of the next three chapters. Next, what it means to multiply two matrices.",
}
