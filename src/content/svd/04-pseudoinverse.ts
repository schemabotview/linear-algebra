import type { Section } from '../types'

export const pseudoinverseSection: Section = {
  id: 'pseudoinverse',
  title: 'The pseudoinverse and minimum-norm least squares',
  scene: 'pseudoinverse',
  focus: 'shortest',
  narration:
    "Can we invert a matrix that has no inverse? In a precise sense, yes. The pseudoinverse inverts every nonzero singular value and leaves the zeros alone: V times Sigma plus times U transpose. It exists for every matrix, and it agrees with everything we already know. For an invertible matrix it is just the inverse. With full column rank, it gives the unique least-squares solution of chapter eight. And when the columns are dependent, it gives the least-squares solution of smallest length. Remember chapter eight's duplicated feature, where every d and e with d plus two e equal to one and a half fit equally well. The pseudoinverse picks d equal to point three and e equal to point six. On the left, that point is exactly the foot of the perpendicular from the origin to the line of best fits. Why the shortest? Any other minimiser adds a null-space vector, which is perpendicular to the row space, so it can only add length. A caution: inverting a tiny singular value creates enormous numbers, so tiny ones are treated as zero. Next, approximation.",
}
