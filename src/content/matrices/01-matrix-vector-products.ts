import type { Section } from '../types'

export const matrixVectorProducts: Section = {
  id: 'matrix-vector-products',
  title: 'Matrices and matrix-vector products',
  scene: 'matrix-anatomy',
  focus: 'product',
  slide: `## Matrices and A x

A **matrix** is a rectangular array with m rows and n columns. Multiplying it by a vector with n components gives a vector with m components.

### The workshop's matrix
- Column j of A is what one unit of product j needs: chair, table, shelf
- Row i is one resource across every product
- For the order q = (3, 1, 2), **A q = (34, 11, 11)**

### Shapes must match
- An m × n matrix accepts only vectors with n components
- The output has m components, one per row
- Entry a₂₁ = 2 means row 2, column 1: labour hours per chair

### Watch out
A is not just a table of numbers. It is a rule that turns any order into the resources it needs.`,
  narration:
    "We already know how to combine a few vectors. How do we organise many linear relationships at once? This chapter answers with matrices, and explains every matrix operation as a map rather than as an arithmetic rule. A matrix is a rectangular array of numbers, with m rows and n columns. The workshop gives us one straight away. Put the chair's needs in the first column, the table's in the second, and the shelf's in the third. Each row is then one resource across all three products. Multiplying this matrix by an order q, three chairs, one table and two shelves, gives the order's total need: thirty four kilograms of material, eleven hours of labour and eleven kilowatt hours of energy. The shapes have to match. A matrix with n columns accepts only vectors with n components, and it returns one component per row. So a matrix is not just a table. It is a rule that turns any order into what it needs. Next, two ways to compute that product.",
}
