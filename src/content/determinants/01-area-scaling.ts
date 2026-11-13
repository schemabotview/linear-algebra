import type { Section } from '../types'

export const areaScalingSection: Section = {
  id: 'area-scaling',
  title: 'Area, volume and orientation',
  scene: 'area-scaling',
  focus: 'areas',
  narration:
    "Volume measures how a map scales space, and this chapter interprets determinants that way, along with their useful scope and their limits. A square matrix multiplies every area by the same factor. For a two by two matrix with rows a, b and c, d, that factor is a d minus b c. On the left, the matrix with rows two, one and one, three turns the unit square into a parallelogram of area five, and every other region, whatever its shape, also has its area multiplied by five. The determinant carries a sign as well. Positive means the map preserves orientation: the first basis vector still turns counterclockwise to reach the second. Negative means the map includes a flip. The orange parallelogram, from the matrix with rows one, three and two, one, also has area five, but its determinant is minus five, because its column images have swapped sides. And a determinant of zero means the square is flattened onto a line. Next, the three properties that pin the determinant down.",
}
