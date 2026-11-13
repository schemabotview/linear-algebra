import type { Section } from '../types'

export const affineMapsSection: Section = {
  id: 'affine-maps',
  title: 'Linearity tests and affine maps',
  scene: 'affine-maps',
  focus: 'shift',
  narration:
    "Here is a map that moves every point the same way, keeps every shape intact, and still is not linear. Translation adds a fixed vector b to every input. On the left, the triangle is shifted by two, one, and it arrives unchanged. So what fails? Linearity demands that the zero vector goes to zero, because zero times anything is zero. But translation sends zero to b. That single test is enough, and it shows that no two by two matrix can translate the plane. Maps of the form A x plus b, a linear part followed by a shift, are called affine. They are everywhere: a measurement with an offset, a graphics transform, a cost with a fixed charge. There is an optional trick that brings them back into matrix form. Append a one to every vector. Then a three by three matrix whose last column holds the shift performs the translation as an ordinary product. Next, which rules of ordinary algebra survive for matrices.",
}
