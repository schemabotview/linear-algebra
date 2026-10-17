import type { Section } from '../types'

export const affineMapsSection: Section = {
  id: 'affine-maps',
  title: 'Linearity tests and affine maps',
  scene: 'affine-maps',
  focus: 'shift',
  slide: `## Linearity tests and affine maps

A map T is linear when T(u + v) = T(u) + T(v) and T(c u) = c T(u). A quick first test: **T(0) must be 0**.

### Translation fails
- T(x) = x + b moves every point by b, keeping shape and size
- But T(0) = b, so for b ≠ 0 translation is **not linear**
- No 2 × 2 matrix can translate the plane

### Affine maps
- An **affine** map is linear plus a shift: T(x) = A x + b
- Graphics and measurement offsets are usually affine, not linear
- Composing affine maps gives another affine map: shifts accumulate

### Optional: homogeneous coordinates
Write (x, y) as (x, y, 1). Then a 3 × 3 matrix whose last column is (2, 1, 1) performs the translation by (2, 1) as a matrix product.`,
  narration:
    "Here is a map that moves every point the same way, keeps every shape intact, and still is not linear. Translation adds a fixed vector b to every input. On the left, the triangle is shifted by two, one, and it arrives unchanged. So what fails? Linearity demands that the zero vector goes to zero, because zero times anything is zero. But translation sends zero to b. That single test is enough, and it shows that no two by two matrix can translate the plane. Maps of the form A x plus b, a linear part followed by a shift, are called affine. They are everywhere: a measurement with an offset, a graphics transform, a cost with a fixed charge. There is an optional trick that brings them back into matrix form. Append a one to every vector. Then a three by three matrix whose last column holds the shift performs the translation as an ordinary product. Next, which rules of ordinary algebra survive for matrices.",
}
