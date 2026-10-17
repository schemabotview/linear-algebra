import type { Section } from '../types'

export const pseudoinverseSection: Section = {
  id: 'pseudoinverse',
  title: 'The pseudoinverse and minimum-norm least squares',
  scene: 'pseudoinverse',
  focus: 'shortest',
  slide: `## The pseudoinverse

**A⁺ = V Σ⁺ Uᵀ**, where Σ⁺ inverts each nonzero σ and leaves zeros as zeros. It exists for every matrix.

### What A⁺ b gives
- Full column rank: the unique least-squares solution
- Rank deficient: the least-squares minimiser of **smallest length**

### Chapter 8's duplicated feature, finished
- Every (d, e) with d + 2e = 1.5 fits equally well
- A⁺ b picks (c, d, e) = (5/6, 0.3, 0.6)
- On the left, (0.3, 0.6) is the foot of the perpendicular from the origin to that line

### Why the shortest
Adding any null-space vector keeps the fit and only adds length, because N(A) is perpendicular to the row space where A⁺ b lives.

### Watch out
Inverting a tiny σ creates huge entries. In practice, σ below a tolerance is treated as zero.`,
  narration:
    "Can we invert a matrix that has no inverse? In a precise sense, yes. The pseudoinverse inverts every nonzero singular value and leaves the zeros alone: V times Sigma plus times U transpose. It exists for every matrix, and it agrees with everything we already know. For an invertible matrix it is just the inverse. With full column rank, it gives the unique least-squares solution of chapter eight. And when the columns are dependent, it gives the least-squares solution of smallest length. Remember chapter eight's duplicated feature, where every d and e with d plus two e equal to one and a half fit equally well. The pseudoinverse picks d equal to point three and e equal to point six. On the left, that point is exactly the foot of the perpendicular from the origin to the line of best fits. Why the shortest? Any other minimiser adds a null-space vector, which is perpendicular to the row space, so it can only add length. A caution: inverting a tiny singular value creates enormous numbers, so tiny ones are treated as zero. Next, approximation.",
}
