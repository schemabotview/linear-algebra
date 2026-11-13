import type { Section } from '../types'

export const matrixVectorProducts: Section = {
  id: 'matrix-vector-products',
  title: 'Matrices and matrix-vector products',
  scene: 'matrix-anatomy',
  focus: 'product',
  narration:
    "We already know how to combine a few vectors. How do we organise many linear relationships at once? This chapter answers with matrices, and explains every matrix operation as a map rather than as an arithmetic rule. A matrix is a rectangular array of numbers, with m rows and n columns. The workshop gives us one straight away. Put the chair's needs in the first column, the table's in the second, and the shelf's in the third. Each row is then one resource across all three products. Multiplying this matrix by an order q, three chairs, one table and two shelves, gives the order's total need: thirty four kilograms of material, eleven hours of labour and eleven kilowatt hours of energy. The shapes have to match. A matrix with n columns accepts only vectors with n components, and it returns one component per row. So a matrix is not just a table. It is a rule that turns any order into what it needs. Next, two ways to compute that product.",
}
