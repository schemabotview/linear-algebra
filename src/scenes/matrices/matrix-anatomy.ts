import type { Scene } from '@graphlearning/flow'
import { PRODUCTS, requirement, resourceTable } from '../workshop'

// §2.1 — the workshop's resource matrix A: one column per product, one row per resource. A q is the
// order's total need. The cards name the parts of A a reader has to be able to point at.
export const matrixAnatomy: Scene = {
  id: 'matrix-anatomy',
  title: 'A matrix, read by rows and columns',
  flow: 'TB',
  nodes: [
    {
      id: 'product',
      label: 'A q = b',
      sub: '3×3 times 3×1 gives 3×1',
      pattern: 'group',
      flow: 'LR',
      children: [
        resourceTable('resource-matrix', 'Resource matrix A', 'column j: one unit of product j', [
          ['chair', PRODUCTS.chair],
          ['table', PRODUCTS.table],
          ['shelf', PRODUCTS.shelf],
        ]),
        {
          id: 'order',
          kind: 'table',
          label: 'Order q',
          sub: 'units of each',
          headers: ['product', 'q'],
          values: [['chair', '3'], ['table', '1'], ['shelf', '2']],
        },
        resourceTable('need', 'Need b', 'b = A q', [['b', requirement({ chair: 3, table: 1, shelf: 2 })]]),
      ],
      edges: [
        { source: 'resource-matrix', target: 'order', label: 'times' },
        { source: 'order', target: 'need', label: 'equals' },
      ],
    },
    {
      id: 'parts',
      label: 'Naming the parts',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'shape', label: 'Shape m × n', sub: 'm rows (resources), n columns (products)', pattern: 'service', icon: 'table' },
        { id: 'entry', label: 'Entry a₂₁ = 2', sub: 'row 2, column 1: labour per chair', pattern: 'service', icon: 'hash' },
        { id: 'row', label: 'Row i', sub: 'one resource across all products', pattern: 'storage', icon: 'sortarrows' },
        { id: 'column', label: 'Column j', sub: 'everything one product needs', pattern: 'storage', icon: 'layers' },
      ],
    },
    {
      id: 'by-hand',
      kind: 'table',
      label: 'Each entry of b, by hand',
      sub: 'row i of A dotted with q',
      headers: ['resource', 'row · q', 'b'],
      values: [
        ['material (kg)', '4·3 + 10·1 + 6·2', '34'],
        ['labour (h)', '2·3 + 3·1 + 1·2', '11'],
        ['energy (kWh)', '1·3 + 2·1 + 3·2', '11'],
      ],
    },
  ],
  edges: [],
}
