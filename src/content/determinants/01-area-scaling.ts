import type { Section } from '../types'

export const areaScalingSection: Section = {
  id: 'area-scaling',
  title: 'Area, volume and orientation',
  scene: 'area-scaling',
  focus: 'areas',
  slide: `## The determinant as signed area

A square matrix scales every area (in ℝ³, every volume) by the same factor. That factor, with a sign, is **det A**.

### Size: how much area changes
- For 2 × 2, det [a b; c d] = a d − b c
- A = [2 1; 1 3] turns the unit square into a parallelogram of area 5
- Every region, of any shape, has its area multiplied by 5

### Sign: orientation
- Positive: e₁ still turns counterclockwise to reach e₂
- Negative: the map includes a flip. B = [1 3; 2 1] has det −5
- Zero: the square is flattened onto a line, and area 0 cannot be undone

### Watch out
det is defined only for **square** matrices. A 3 × 2 map has no determinant.`,
  narration:
    "Volume measures how a map scales space, and this chapter interprets determinants that way, along with their useful scope and their limits. A square matrix multiplies every area by the same factor. For a two by two matrix with rows a, b and c, d, that factor is a d minus b c. On the left, the matrix with rows two, one and one, three turns the unit square into a parallelogram of area five, and every other region, whatever its shape, also has its area multiplied by five. The determinant carries a sign as well. Positive means the map preserves orientation: the first basis vector still turns counterclockwise to reach the second. Negative means the map includes a flip. The orange parallelogram, from the matrix with rows one, three and two, one, also has area five, but its determinant is minus five, because its column images have swapped sides. And a determinant of zero means the square is flattened onto a line. Next, the three properties that pin the determinant down.",
}
