import type { PlotPoint, PlotSeries } from '@graphlearning/flow'

// Small builders for the plot series every chapter repeats. Everything here computes DATA (points in
// the axes' own units) — never a position on the canvas, which stays the engine's.

export type M2 = [[number, number], [number, number]]

/** M · p for a 2×2 matrix. */
export const apply = (m: M2, p: PlotPoint): PlotPoint => [
  m[0][0] * p[0] + m[0][1] * p[1],
  m[1][0] * p[0] + m[1][1] * p[1],
]

/** A solid vector with an arrowhead — the only way this repo draws a vector. */
export function arrow(to: PlotPoint, label?: string, color?: string, from: PlotPoint = [0, 0]): PlotSeries {
  return { kind: 'segment', from, to, arrow: true, dashed: false, label, color }
}

/** The unit square, closed, as a polyline. */
export const UNIT_SQUARE: PlotPoint[] = [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]

/** The image of a closed polyline under M. */
export const image = (m: M2, pts: PlotPoint[]): PlotPoint[] => pts.map((p) => apply(m, p))

/** A circle of radius r about c, sampled closed. */
export const circle = (r = 1, c: PlotPoint = [0, 0], n = 72): PlotPoint[] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const a = (2 * Math.PI * i) / n
    return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)]
  })

/** n+1 evenly spaced samples of f over [a, b]. */
export const sample = (a: number, b: number, n: number, f: (x: number) => number): PlotPoint[] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const x = a + ((b - a) * i) / n
    return [x, f(x)]
  })

/** Format a 2×2 or m×n matrix compactly for a table cell: [a b; c d]. */
export const fmt = (m: number[][]): string =>
  '[' + m.map((r) => r.map((v) => (Object.is(v, -0) ? 0 : v)).map((v) => String(v).replace('-', '−')).join(' ')).join('; ') + ']'

export const GREY = '#9ca3af'
