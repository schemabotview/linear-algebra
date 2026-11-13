import type { Section } from '../types'

export const lengthAndAngles: Section = {
  id: 'length-and-angles',
  title: 'Length, distance and angles',
  scene: 'dot-product',
  focus: 'steps',
  narration:
    "How far apart are two vectors, and how sharply do they point away from each other? One product answers both. The dot product multiplies matching components and adds the results. For u equals four, one and v equals one, three, that is four plus three, which is seven. The dot product of a vector with itself is its squared length, so u has length root seventeen and v has length root ten. The distance between them is the length of their difference, u minus v, which here is root thirteen. And the angle comes from dividing the dot product by both lengths. That gives a cosine of about zero point five four, and an angle of about fifty seven and a half degrees. The sign alone already says something: positive means an acute angle, zero means the vectors are orthogonal, and negative means obtuse. One caution. The zero vector has no direction, so its angle with anything is undefined. Next, we ask what these distances mean when components carry units.",
}
