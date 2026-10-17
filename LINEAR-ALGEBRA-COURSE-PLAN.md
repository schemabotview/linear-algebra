# Linear Algebra — From Vectors to Structure and Reliable Computation

## Audience and prerequisites

For learners beginning linear algebra who can manipulate algebraic expressions, solve simple equations, work with fractions and powers, and read Cartesian graphs. Introduce summation notation, sets, functions, implication, and short proof arguments when first needed. Calculus, statistics, and programming are not prerequisites. Optional Python/NumPy illustrations require only basic array-reading support supplied alongside the example; running code is not required.

Scope: finite-dimensional linear algebra, primarily over the real numbers, combining geometric intuition, exact calculation, definitions, proof sketches, and numerical judgement. Introduce complex numbers where real matrices require complex eigenvalues; advanced complex inner-product theory is deferred. Linear algebra is taught as a general subject, with applications in measurement, graphics, resource allocation, networks, and machine learning.

Target capability: formulate linear models; explain systems, spaces, transformations, and decompositions; reason about existence and uniqueness; and justify computational choices under explicit assumptions. Demonstrations support understanding and application but do not establish assessed individual mastery.

Structure: **12 chapters, 80 sections**, distributed **6, 7, 7, 7, 6, 7, 7, 7, 6, 7, 7, 6**. Counts follow conceptual scope and do not imply equal duration.

Course ownership: This course owns vector/matrix geometry, projection-based least squares, eigensystems, and SVD/PCA foundations. Calculus owns derivatives and optimisation; Statistics owns inferential assumptions; ML owns predictive selection; Deep Learning owns neural computations. Later courses refresh these ideas briefly and apply them without repeating full derivations.

## Learning spine

Vectors and linear relationships → matrix maps → systems and elimination → spaces, bases, and rank → reversibility and coordinate changes → determinants → orthogonal geometry → least squares → eigenstructure → symmetric quadratic geometry → singular values and approximation → reliable numerical choices.

Progression rationale: begin with concrete objects and solvable questions, then abstract the patterns exposed by elimination. Introduce invertibility through information recovery before determinants so determinant calculation is not mistaken for the definition of invertibility. Orthogonality precedes least squares; eigenstructure precedes symmetric spectral geometry; both prepare SVD. Numerical caveats accompany the first relevant operation and are synthesised in the final chapter. Compared with a proof-first second course, this sequence gives beginners concrete examples before formal abstraction.

Recurring example: a small workshop combines product quantities into material, labour, and energy requirements. It develops from vectors and a resource matrix into feasible allocations, redundant constraints, noisy measurements, least-squares estimates, and low-rank summaries. Unconstrained linear solutions may include negative quantities; nonnegative allocation is a separate constrained problem, not silently solved by elimination. Geometric and network examples provide transfer where the workshop model is less natural.

Teaching method: motivating question → representation and assumptions → definition → worked calculation and diagram → explanation or short proof → counterexample/failure contrast → outcome → bridge. State dimensions, scalar field, rank conditions, and exact-versus-approximate arithmetic. Explain why a result holds and when its hypotheses matter. Use annotated code and expected outputs only when they illuminate the mathematics. No submitted exercises, grading, learner monitoring, executable lessons, or deployments are included.

## Chapter 1 — Vectors, Coordinates, and Linear Relationships

Objective: Interpret vectors as mathematical objects and connect their operations to geometric and practical meaning.

1. Scalars, vectors, points, coordinate systems, and notation
2. Vector addition, subtraction, scalar multiplication, and linear combinations
3. Lines, planes, and parametric descriptions through vectors
4. Euclidean length, distance, dot products, and angles
5. Vectors of measurements: dimensions, units, and meaningful comparisons
6. Linear relationships, superposition, and counterexamples to linearity

Worked illustrations: Draw displacement vectors and combine two resource bundles. Compare a line through the origin with a translated line. Calculate an angle, explain why it is undefined for a zero vector, and show how incompatible units distort a distance.

Outcome: Explain vector operations, interpret a linear combination, and identify the assumptions behind geometric comparisons.

Bridge: Several vector relationships can be organised and applied together using matrices.

## Chapter 2 — Matrices and Linear Transformations

Objective: Explain matrix operations as representations of linear maps rather than isolated arithmetic rules.

1. Matrix shape, entries, rows, columns, and matrix-vector products
2. Column-combination and row-dot-product views of Ax
3. Matrix multiplication as composition; dimensions and order
4. Identity, zero, diagonal, triangular, and transpose matrices
5. Scaling, reflection, rotation, shear, and dimension-changing maps
6. Linearity tests; affine maps and the role of translation
7. Algebraic identities, noncommutativity, and invalid cancellation

Worked illustrations: Use a resource matrix whose columns describe product requirements. Transform a grid, compare rotation followed by shear with the reverse order, and trace a rectangular map. Contrast entrywise multiplication with composition; introduce homogeneous coordinates only as an optional representation of affine maps.

Outcome: Predict matrix-product dimensions, explain a map through its columns, and reason about composition and linearity.

Bridge: We can apply a map; next we ask which inputs could have produced a desired output.

## Chapter 3 — Linear Systems and Elimination

Objective: Construct and solve systems while explaining consistency, free variables, and the logic of elimination.

1. Equations, augmented matrices, and row/column interpretations
2. Equivalent systems and elementary row operations
3. Echelon form, pivots, elimination, and back substitution
4. Reduced echelon form and parameterised solution sets
5. Unique solutions, inconsistent systems, and infinitely many solutions
6. Homogeneous systems and particular-plus-homogeneous solutions
7. Pivoting, exact arithmetic, and initial rounding-error awareness

Worked illustrations: Trace a small resource-allocation system and verify its solution by substitution. Change a target to expose inconsistent constraints; duplicate an equation to expose a free variable. Contrast an exact zero pivot with a small floating-point pivot. More equations alone do not guarantee uniqueness or consistency.

Outcome: Trace elimination, describe all solutions of a small system, and explain why the permitted row operations preserve its solution set.

Bridge: Solution patterns reveal the spaces and dimensions that determine what a matrix can express.

## Chapter 4 — Vector Spaces, Bases, and Rank

Objective: Generalise concrete systems into spaces of possibilities with independent coordinates.

1. Vector-space operations and axioms over the real numbers
2. Subspace tests; spans, sums, intersections, and affine sets
3. Linear dependence and independence
4. Bases, coordinates, dimension, and basis extension
5. Column space, row space, null space, and left null space
6. Rank, nullity, and dimensions of the four fundamental subspaces
7. Consistency and uniqueness revisited through subspaces

Worked illustrations: Find a basis from original pivot columns, explaining why row reduction cannot substitute its transformed columns as a basis for the original column space. Compare a plane through the origin with an affine plane. Include fixed-degree polynomial spaces to show that vectors need not be coordinate arrows. Preview orthogonal-complement relationships without relying on them until Chapter 7.

Outcome: Explain span, basis, and rank; relate free variables to nullity; and characterise system solvability in terms of the column space.

Bridge: A basis describes information; invertibility and coordinate changes explain when that information can be recovered.

## Chapter 5 — Invertibility, Factorisation, and Coordinate Changes

Objective: Explain reversible maps and use factorisation to organise repeated computations.

1. Injective and surjective maps; square versus rectangular cases
2. Inverses, isomorphisms, and equivalent invertibility conditions
3. Computing a small inverse by elimination; solving without forming it
4. Elementary matrices and LU factorisation
5. Permutation matrices and pivoted LU: PA = LU
6. Change-of-basis matrices, similarity, and representation versus transformation

Worked illustrations: Compare a reversible resource map with one that loses a dimension. Solve two right-hand sides using shared factors. Trace a required row swap and distinguish PA = LU from unpivoted LU. Express the same geometric vector in two bases, stating the coordinate conversion direction explicitly.

Outcome: Explain when a map is invertible, interpret LU factors, and distinguish a basis change from a change in the underlying map.

Bridge: Reversibility has a geometric signature: how a square map scales oriented volume.

## Chapter 6 — Determinants and Volume

Objective: Interpret determinants and recognise their useful scope and computational limitations.

1. Area and volume scaling; orientation and signed determinants
2. Multilinearity, alternating behaviour, and normalisation
3. Determinants through elimination, triangular matrices, and row operations
4. Cofactor expansion and small symbolic calculations
5. Products, transposes, inverses, and the singularity criterion
6. Determinants, eigenvalue preparation, and the limits of magnitude-based diagnostics
7. Cramer's rule as a theoretical relationship and its computational trade-offs

Worked illustrations: Track the area of a transformed unit square and explain a negative determinant. Compare determinant-preserving row additions with swaps and scaling. Contrast a large determinant with poor conditioning using a diagonal matrix, without yet assuming the formal condition-number definition. Do not use determinant thresholds as a general numerical rank test.

Outcome: Explain determinant properties through volume and elimination, use them in small calculations, and recognise when a determinant is an unsuitable computational diagnostic.

Bridge: Volume measures global scaling; inner products let us measure alignment and closest approximations.

## Chapter 7 — Inner Products, Orthogonality, and QR

Objective: Build orthogonal representations and derive projections from geometric reasoning.

1. Real inner products, induced norms, and weighted geometry
2. Cauchy–Schwarz, triangle inequality, and equality cases
3. Orthogonal sets, orthonormal bases, and coordinate recovery
4. Orthogonal complements and the four-subspace relationships
5. Projection onto a vector or subspace; residual orthogonality
6. Gram–Schmidt, dependence detection, and reduced QR
7. Orthogonal matrices; geometric preservation and stable QR overview

Worked illustrations: Decompose a vector into parallel and perpendicular parts and verify residual dot products. Obtain an orthonormal basis and a reduced QR factorisation for a full-column-rank matrix. Show a zero Gram–Schmidt remainder for dependent columns; flag loss of orthogonality from rounding and introduce Householder reflections conceptually.

Outcome: Explain orthogonal decomposition, derive a projection, and connect orthonormal coordinates to QR factorisation.

Bridge: Projection provides the closest attainable output when a system cannot be solved exactly.

## Chapter 8 — Least Squares and Approximate Solutions

Objective: Explain least-squares fitting and distinguish unique predictions from unique coefficients.

1. Overdetermined systems, residuals, and the least-squares objective
2. Projection derivation of the normal equations
3. Full column rank, coefficient uniqueness, and rank-deficient minimisers
4. Solving full-column-rank least squares using QR
5. Design matrices, intercepts, polynomial features, and linearity in parameters
6. Weighted least squares and ridge regularisation as geometric extensions
7. Residual diagnostics, modelling assumptions, and limits of fit

Worked illustrations: Fit a line to three measurements and compare residuals with the constant-only fit. Derive normal equations using orthogonality, without requiring calculus. Add a duplicated feature to produce nonunique coefficients with the same fitted vector. Explain that normal equations are useful analytically but can amplify numerical difficulties. Define ridge with positive penalty on every coefficient for the simple uniqueness argument; label an unpenalised intercept as a separate variant.

Outcome: Explain the geometry of least squares, identify uniqueness conditions, and compare exact fitting, weighted approximation, and regularisation.

Bridge: Approximation studies one application of a map; eigenvectors reveal directions preserved when a square map acts repeatedly.

## Chapter 9 — Eigenvalues, Eigenvectors, and Dynamics

Objective: Explain invariant directions and the conditions under which diagonalisation simplifies a map.

1. Eigenvalue equation, eigenspaces, and nonzero eigenvectors
2. Characteristic polynomial, trace, and determinant relationships
3. Algebraic versus geometric multiplicity
4. Diagonalisation, independent eigenvectors, and defective matrices
5. Matrix powers and discrete linear dynamical systems
6. Complex numbers, conjugate pairs, and real rotation examples

Worked illustrations: Compare distinct eigenvalues with a repeated eigenvalue that has too few independent eigenvectors. Trace powers of a diagonalizable map and a defective contrast; do not imply eigenvalue magnitude alone bounds finite-time growth for every matrix. Introduce complex arithmetic locally before analysing a real planar rotation. Use a two-state transition model with its stochastic convention stated; do not promise convergence without the required assumptions.

Outcome: Find and interpret small eigenspaces, justify or reject diagonalisation, and explain qualitative repeated-map behaviour under stated conditions.

Bridge: Symmetry supplies stronger spectral structure and connects eigenvalues to energy and curvature.

## Chapter 10 — Symmetric Matrices and Quadratic Forms

Objective: Connect orthogonal eigendecomposition to quadratic geometry and positive definiteness.

1. Real symmetric matrices and orthogonal eigendecomposition
2. Spectral theorem, invariant axes, and repeated-eigenvalue freedom
3. Quadratic forms, cross terms, and principal axes
4. Positive definite, semidefinite, negative definite, and indefinite forms
5. Eigenvalue and principal-minor criteria with their assumptions
6. Cholesky factorisation for symmetric positive definite matrices
7. Energy, ellipsoids, and introductory covariance geometry

Worked illustrations: Rotate coordinates to remove cross terms in a quadratic form. Contrast a positive definite bowl, a semidefinite flat direction, and an indefinite saddle without using calculus. Distinguish the leading-principal-minor test for positive definiteness from semidefinite criteria. Define a centred-data Gram matrix before its covariance interpretation; statistical inference remains in the companion course.

Outcome: Explain why real symmetry enables orthogonal diagonalisation, classify quadratic forms, and identify when Cholesky applies.

Bridge: General rectangular maps need a different decomposition that separates input and output directions.

## Chapter 11 — Singular Value Decomposition and Low-Rank Structure

Objective: Explain SVD as a general geometric description and use it to reason about information and approximation.

1. Full and reduced SVD; shapes and orthonormal factors
2. Singular vectors, stretch factors, and relationships to AᵀA and AAᵀ
3. Rank, null spaces, and decomposition into rank-one terms
4. Moore–Penrose pseudoinverse and minimum-norm least squares
5. Truncated SVD and best rank-k approximation in spectral/Frobenius norms
6. Centred data, PCA scores, components, and explained variance
7. Scaling choices, repeated singular values, and interpretation limits

Worked illustrations: Decompose a rectangular map into input rotation, stretching, and output rotation. Revisit duplicated-feature least squares with a minimum-norm solution. Compare rank-one and rank-two reconstructions of a small measurement table. Explain why centring matters for PCA, why scaling changes its question, and why high variance need not mean predictive relevance. AᵀA explains singular values theoretically; computing it is not the universal recommended SVD algorithm.

Outcome: Interpret SVD factors, explain pseudoinverse solutions, and justify low-rank approximation and PCA under explicit preprocessing choices.

Bridge: Exact decompositions clarify structure; numerical computation determines how reliably we can recover that structure from finite-precision data.

## Chapter 12 — Numerical Reliability and Integrated Applications

Objective: Select a plausible linear-algebra method and interpret numerical evidence and its limits.

1. Floating-point representation, cancellation, and absolute/relative errors
2. Vector and matrix norms; spectral, induced, and Frobenius distinctions
3. Conditioning versus algorithmic stability; forward/backward error and residuals
4. Singular values, condition numbers, numerical rank, and tolerance selection
5. Choosing LU, QR, Cholesky, or SVD; scale, sparsity, and resource trade-offs
6. Integrated cases: resource systems, network conservation, geometric maps, and measurement compression

Worked illustrations: Contrast a small residual with a large solution error in an ill-conditioned system. Connect the 2-norm condition number of an invertible square matrix to its largest/smallest singular values and distinguish singularity from a tolerance-dependent numerical-rank decision. Revisit the resource model with perturbed measurements and compare appropriate factorisations. Show a small network incidence matrix as a transfer example. Code or supplied outputs may illustrate library routines; sparse and iterative algorithms receive orientation, not an implementation survey.

Outcome: Explain numerical sensitivity, assess a computed answer using more than its residual, and justify a factorisation for a stated problem and assumptions.

Bridge: Continue through unfamiliar systems and proof arguments, then extend into calculus and optimisation, probability and statistics, numerical linear algebra, or ML using these shared foundations.

## Sources and scope

Sources checked on **2026-10-13**. Mathematical concepts do not depend on a software release; exact library versions and numerical tolerances must be recorded when executable illustrations are developed.

[MIT 18.06 syllabus](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/syllabus/) informs the balance of computational and conceptual coverage. Its listed calculus prerequisite is not adopted here because this plan avoids calculus-dependent derivations. Gilbert Strang's [Introduction to Linear Algebra, sixth edition (2023)](https://math.mit.edu/~gs/linearalgebra/ila6/indexila6.html) was inspected through its contents/preface and selected excerpts on fundamental subspaces and conditioning, not the full book. Sheldon Axler's [Linear Algebra Done Right, fourth edition](https://linear.axler.net/LADR4e.pdf) was inspected through its contents, prefaces, and selected vector-space definitions (Section 1B, printed pp. 12–14); it supplies a contrasting abstract/proof-oriented sequence rather than the beginner teaching order. The retrieved PDF carries a 2026 revision date and 2024 copyright.

The [LAPACK Users' Guide](https://www.netlib.org/lapack/lug/), third edition, selected guidance on [least squares](https://www.netlib.org/lapack/lug/node27.html) and [error measures](https://www.netlib.org/lapack/lug/node75.html), informs numerical boundaries. These are established conceptual references, not a claim to have audited current routine implementations. Detailed evidence, coverage mapping, research limits, and review status remain in [README.md](../README.md).

Excluded specialist depth: infinite-dimensional spaces and functional analysis; quotient/dual-space theory; tensor products and multilinear algebra; Jordan-form algorithms; full complex spectral theory; differential equations and matrix calculus; numerical algorithm implementations, sparse/iterative solver surveys, and optimisation algorithms. Polynomials, complex eigenpairs, PCA, covariance, networks, and regularisation receive bounded explanatory treatment. Probability/inference, general calculus/optimisation, model evaluation, and ML architectures belong to companion concepts. Basic least squares and PCA intentionally recur there, with introductory mathematical foundations here and domain-specific reasoning there.

