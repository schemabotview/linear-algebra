import type { Section } from '../types'

export const measurementVectors: Section = {
  id: 'measurement-vectors',
  title: 'Vectors of measurements',
  scene: 'units',
  focus: 'distances',
  slide: `## Vectors of measurements

Many vectors are **records**: one component per measured quantity. Here n counts quantities; it is not a dimension you can see.

### Units decide the geometry
- Distance adds squared differences across all components
- A component in small units dominates: switch kWh to Wh and energy gaps grow 1000×
- On the left, A's nearest job is **B** in kWh and **C** in Wh

### Comparing honestly
- Add or subtract only matching quantities in matching units
- Before measuring distance, put components on comparable scales, and say which scales

### Watch out
The arithmetic never complains. A distance across mixed units is still a number, just not a meaningful one.`,
  narration:
    "When a vector records measurements, is the distance between two of them still meaningful? It depends on choices the arithmetic never sees. Many vectors are records, one component per measured quantity. Here each workshop job is a pair: kilograms of material and the energy it used. On the plot, energy is in kilowatt hours, and job A is closest to job B, about two point two units away, while C is about three. Now change nothing but the unit of energy. Write it in watt hours instead, and every energy difference becomes a thousand times larger. The material difference is unchanged, so energy swamps the distance, and now A is closest to C. Same jobs, same measurements, opposite answer. So two habits. Only add or subtract matching quantities in matching units. And before you measure distance across different quantities, put the components on comparable scales, and say which scales you chose. Next, we ask which relationships between vectors count as linear.",
}
