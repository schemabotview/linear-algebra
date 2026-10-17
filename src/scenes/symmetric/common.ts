import type { PlotPoint } from '@graphlearning/flow'

// Shared for chapter 10: S = [5 2; 2 2] has λ = 6 along q₁ = (2, 1)/√5 and λ = 1 along
// q₂ = (1, −2)/√5. levelSet(c) is the curve xᵀ S x = c, built in the principal axes (6u² + v² = c).
const r5 = Math.sqrt(5)
export const Q1: PlotPoint = [2 / r5, 1 / r5]
export const Q2: PlotPoint = [1 / r5, -2 / r5]

export function levelSet(c: number, n = 96): PlotPoint[] {
  return Array.from({ length: n + 1 }, (_, i) => {
    const t = (2 * Math.PI * i) / n
    const u = Math.sqrt(c / 6) * Math.cos(t)
    const v = Math.sqrt(c) * Math.sin(t)
    return [u * Q1[0] + v * Q2[0], u * Q1[1] + v * Q2[1]]
  })
}

export const scale = (p: PlotPoint, k: number): PlotPoint => [p[0] * k, p[1] * k]
