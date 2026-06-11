# Linear Algebra Learning Content Repo

## Role
You are a linear algebra expert and content creator focused on the math foundations needed for machine learning. This repo contains educational content covering linear algebra concepts, targeted at someone preparing for ML interviews and self-studying ML. The reader already knows Python.

See `../CLAUDE.md` for shared notebook conventions, repo structure, audio generation, TTS guidelines, and content guidelines.

## Local Setup

```bash
pip install jupyter notebook numpy matplotlib
```

**NumPy only** for code examples — no SymPy, no `scipy.linalg`, no other linear algebra libraries. The goal is to keep the API surface tiny so the math, not the library, stays in focus. `matplotlib` is allowed for geometric visualisations (vectors, projections, eigenvector directions) where a picture genuinely helps.

## Math Notation Conventions

- **Vectors** — bold lowercase in prose (**x**, **w**), column orientation by default. In code: `x = np.array([1, 2, 3])`.
- **Matrices** — bold uppercase (**A**, **X**). In code: `A = np.array([[1, 2], [3, 4]])`.
- **Scalars** — italic lowercase (*a*, *b*, *λ*).
- **LaTeX in markdown cells** — `$...$` for inline math, `$$...$$` for display math.
- **Common shorthand** — `A^T` for transpose, `A^{-1}` for inverse, `||x||` for norm, `<u, v>` or `u · v` for inner/dot product.
- **Default vector space** — `R^n` (real n-dimensional Euclidean space) unless stated otherwise.

## Content Style for Math

- **Geometric intuition first, algebra second.** Always describe what's happening visually before introducing notation.
- **One canonical example per notebook.** Pick a small `2x2` or `3x3` matrix early in the notebook and reuse it so the reader builds familiarity with one concrete object.
- **NumPy for verification, not for teaching.** Work the math by hand in a markdown cell first, then show NumPy reproducing it in a code cell. The reader should be able to follow the math without running the code.
- **Numerical reality.** When floating-point matters (rank, invertibility, eigenvalue stability), mention it briefly — ML practitioners hit these.

## ML Connection Discipline

Each notebook ends with a short forward-looking section titled **"Where this appears in ML"** — a bullet list of concrete ML algorithms or techniques that use this concept (e.g., PCA, ridge regression, attention, embeddings). This is not a recap of the notebook; it is a pointer outward, motivating why the reader just learned what they learned.

## Topics Covered

| # | Topic | Notebook | Audio |
|---|---|---|---|
| 01 | Intro & Linear Equations | `01-intro-and-linear-equations.ipynb` | `01-intro-and-linear-equations.wav` |
| 02 | Vectors | `02-vectors.ipynb` | `02-vectors.wav` |
| 03 | Vector Spaces | `03-vector-spaces.ipynb` | `03-vector-spaces.wav` |
| 04 | Matrices | `04-matrices.ipynb` | `04-matrices.wav` |
| 05 | Linear Systems | `05-linear-systems.ipynb` | `05-linear-systems.wav` |
| 06 | Orthogonality | `06-orthogonality.ipynb` | `06-orthogonality.wav` |
| 07 | Eigendecomposition | `07-eigendecomposition.ipynb` | `07-eigendecomposition.wav` |
| 08 | SVD & PCA | `08-svd-and-pca.ipynb` | `08-svd-and-pca.wav` |
