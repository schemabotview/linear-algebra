import type { Section } from '../types'

export const definitenessTests: Section = {
  id: 'definiteness-tests',
  title: 'Eigenvalue and principal-minor tests',
  scene: 'definiteness-tests',
  focus: 'minors',
  slide: `## Testing definiteness

Two tests are common. Each has an exact scope, and mixing them up is a classic error.

### Eigenvalue test
- Compute the eigenvalues of the symmetric S and read their signs
- It decides **every** class: definite, semidefinite, indefinite

### Leading principal minors (Sylvester)
- dₖ = det of the top-left k × k block
- **All dₖ > 0 ⇔ positive definite**

### The trap
- Leading minors ≥ 0 do **not** imply semidefinite
- [0 0; 0 −1] has minors 0 and 0, yet λ = −1
- Semidefiniteness needs **all** principal minors ≥ 0, not just leading ones

### Watch out
Both tests assume S = Sᵀ. For a general A, test (A + Aᵀ)/2.`,
  narration:
    "How do we check definiteness without drawing anything? Two tests are standard, and each has an exact scope. The eigenvalue test is the most direct: compute the eigenvalues of the symmetric matrix and look at their signs. It decides every class. The second test uses leading principal minors, the determinants of the top-left one by one block, two by two block, and so on. Sylvester's criterion says the matrix is positive definite exactly when all of them are positive. For our running example they are five and six, and for the three by three tridiagonal matrix they are two, three and four, so both are positive definite. Now the trap. It is tempting to say that leading minors greater than or equal to zero mean semidefinite. They do not. The matrix with diagonal zero and minus one has leading minors zero and zero, yet it has a negative eigenvalue. Semidefiniteness needs every principal minor, not just the leading ones. And both tests assume a symmetric matrix. Next, the factorisation positive definiteness unlocks.",
}
