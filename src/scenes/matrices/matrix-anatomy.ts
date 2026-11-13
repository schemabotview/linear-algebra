import { board, caution, fact, facts } from '../frame'
import { PRODUCTS, requirement, resourceTable } from '../workshop'

// §2.1 — the workshop's resource matrix A: one column per product, one row per resource. A q is the
// order's total need. The cards name the parts of A a reader has to be able to point at.
export const matrixAnatomy = board({
  id: 'matrix-anatomy',
  figure: 'A matrix, read by rows and columns',
  diagram: [
    {
      type: 'group',
      id: 'product',
      title: 'A q = b',
      sub: '3×3 times 3×1 gives 3×1',
      dir: 'row',
      children: [
        resourceTable('resource-matrix', 'Resource matrix A', 'column j: one unit of product j', [
          ['chair', PRODUCTS.chair],
          ['table', PRODUCTS.table],
          ['shelf', PRODUCTS.shelf],
        ]),
        {
          type: 'table',
          id: 'order',
          title: 'Order q: units of each',
          columns: ['product', 'q'],
          rows: [['chair', '3'], ['table', '1'], ['shelf', '2']]
        },
        resourceTable('need', 'Need b', 'b = A q', [['b', requirement({ chair: 3, table: 1, shelf: 2 })]]),
      ]
    },
    {
      type: 'group',
      id: 'parts',
      title: 'Naming the parts',
      dir: 'grid',
      cols: 2,
      children: [
        { type: 'item', id: 'shape', title: 'Shape m × n', sub: 'm rows (resources), n columns (products)', icon: 'table', tone: 'ingest' },
        { type: 'item', id: 'entry', title: 'Entry a₂₁ = 2', sub: 'row 2, column 1: labour per chair', tone: 'ingest' },
        { type: 'item', id: 'row', title: 'Row i', sub: 'one resource across all products', tone: 'store' },
        { type: 'item', id: 'column', title: 'Column j', sub: 'everything one product needs', icon: 'layers', tone: 'store' },
      ]
    },
    {
      type: 'table',
      id: 'by-hand',
      title: 'Each entry of b, by hand: row i of A dotted with q',
      columns: ['resource', 'row · q', 'b'],
      rows: [
        ['material (kg)', '4·3 + 10·1 + 6·2', '34'],
        ['labour (h)', '2·3 + 3·1 + 1·2', '11'],
        ['energy (kWh)', '1·3 + 2·1 + 3·2', '11'],
      ]
    },
  ],
  edges: [
    { from: 'resource-matrix', to: 'order', label: 'times' },
    { from: 'order', to: 'need', label: 'equals' }
  ],
  idea: 'Matrices and matrix-vector products',
  board: [
    fact('b-rule', 'A matrix has m rows and n columns', 'times an n-vector, it gives an m-vector'),
    facts('b-1', 'The workshop’s matrix', ['column j: one unit of product j', 'row i: one resource', 'A (3, 1, 2) = (34, 11, 11)']),
    facts('b-2', 'Shapes must match', ['m × n accepts only n-vectors', 'the output has m components', 'a₂₁ = 2: labour hours per chair']),
    caution('b-watch', 'A is not just a table of numbers. It is a rule that turns any order into the resources it needs.'),
  ]
})
