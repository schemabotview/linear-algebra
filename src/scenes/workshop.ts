import type { SceneNode } from '@graphlearning/flow'

// The recurring workshop model, shared by every chapter so the example reads the same each time it
// returns. Three products, three resources; a product's column is what ONE unit of it consumes.
// Chapter 2 turns these columns into the resource matrix A, so change a number here and it changes
// everywhere — which is the point of keeping it in one place.
export const RESOURCES = ['material (kg)', 'labour (h)', 'energy (kWh)'] as const

export const PRODUCTS = {
  chair: [4, 2, 1],
  table: [10, 3, 2],
  shelf: [6, 1, 3],
} as const

export type Product = keyof typeof PRODUCTS

/** a·p + b·q + … over product columns — the resource bundle an order consumes. */
export function requirement(order: Partial<Record<Product, number>>): number[] {
  return RESOURCES.map((_, i) =>
    Object.entries(order).reduce((sum, [p, n]) => sum + (n ?? 0) * PRODUCTS[p as Product][i], 0),
  )
}

/**
 * A resources-by-columns table: one row per resource, one column per named vector. Each column is
 * `[header, values]`, so a scene can show product columns beside a computed combination.
 */
export function resourceTable(
  id: string,
  label: string,
  sub: string,
  columns: [string, readonly number[]][],
): SceneNode {
  return {
    id,
    kind: 'table',
    label,
    sub,
    headers: ['resource', ...columns.map(([h]) => h)],
    values: RESOURCES.map((r, i) => [r, ...columns.map(([, v]) => String(v[i]))]),
  }
}
