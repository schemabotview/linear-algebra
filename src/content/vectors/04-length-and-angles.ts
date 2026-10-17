import type { Section } from '../types'

export const lengthAndAngles: Section = {
  id: 'length-and-angles',
  title: 'Length, distance and angles',
  scene: 'dot-product',
  focus: 'steps',
  slide: `## Length, distance and angles

The **dot product** u · v = u₁v₁ + u₂v₂ + … + uₙvₙ is a single number, and it carries both length and angle.

### Three measures from one product
- **Length**: ‖u‖ = √(u · u)
- **Distance** between u and v: ‖u − v‖
- **Angle**: cos θ = u · v / (‖u‖ ‖v‖)
- **Unit vector**: u / ‖u‖ keeps the direction and has length 1

### Reading the sign
- u · v > 0: the angle is under 90°
- u · v = 0: the vectors are **orthogonal**
- u · v < 0: the angle is over 90°
- On the left, u · v = 7 > 0, so θ ≈ 57.5° is acute

### Watch out
The zero vector has length 0, so the angle formula divides by zero. The angle between 0 and another vector is **undefined**, not 90°.`,
  narration:
    "How far apart are two vectors, and how sharply do they point away from each other? One product answers both. The dot product multiplies matching components and adds the results. For u equals four, one and v equals one, three, that is four plus three, which is seven. The dot product of a vector with itself is its squared length, so u has length root seventeen and v has length root ten. The distance between them is the length of their difference, u minus v, which here is root thirteen. And the angle comes from dividing the dot product by both lengths. That gives a cosine of about zero point five four, and an angle of about fifty seven and a half degrees. The sign alone already says something: positive means an acute angle, zero means the vectors are orthogonal, and negative means obtuse. One caution. The zero vector has no direction, so its angle with anything is undefined. Next, we ask what these distances mean when components carry units.",
}
