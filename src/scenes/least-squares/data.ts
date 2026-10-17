import type { PlotPoint } from '@graphlearning/flow'

// Shared data for chapter 8. Every fitted number in the chapter's tables was computed from these
// (numpy, double precision) and rounded for display; change a point here and those tables go stale.

/** Three measurements: the line-fitting example. */
export const T3 = [0, 1, 2]
export const Y3 = [1, 2, 4]
export const PTS3: PlotPoint[] = T3.map((t, i) => [t, Y3[i]])
/** Least-squares line through them: c + d t with c = 5/6, d = 3/2. */
export const LINE = (t: number) => 5 / 6 + 1.5 * t

/** Six curved measurements for the polynomial-feature and residual examples. */
export const T6 = [0, 1, 2, 3, 4, 5]
export const Y6 = [1.51, 0.91, 2.9, 4.61, 7.29, 10.7]
export const PTS6: PlotPoint[] = T6.map((t, i) => [t, Y6[i]])
/** Least-squares line and quadratic for the six points. */
export const FIT1 = (t: number) => -0.1181 + 1.9086 * t
export const FIT2 = (t: number) => 1.2396 - 0.128 * t + 0.4073 * t * t
