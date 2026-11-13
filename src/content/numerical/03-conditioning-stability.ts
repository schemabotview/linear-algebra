import type { Section } from '../types'

export const conditioningStability: Section = {
  id: 'conditioning-stability',
  title: 'Conditioning, stability and residuals',
  scene: 'conditioning',
  focus: 'errors',
  narration:
    "If a computed answer has a tiny residual, is it accurate? Not necessarily, and this is the most important idea in the chapter. There are two separate questions. Conditioning is about the problem: how much do small changes in the data move the answer? Stability is about the algorithm: does it introduce more error than the problem deserves? Take the matrix with rows one, one and one, one point zero zero zero one. Its two equations are almost the same line, and its condition number is about forty thousand. The true solution is one, one. Now try the candidate two, zero. Its residual is tiny, a few parts in a hundred thousand, because it lies almost on both lines. Yet it is completely wrong. A small residual tells you that the answer exactly solves a slightly different problem. Whether that is close to the right answer depends on the condition number. Stable algorithms like pivoted LU and Householder QR guarantee small residuals. Only good conditioning turns that into small error. Next, deciding what rank a computed matrix has.",
}
