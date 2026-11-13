import type { Section } from '../types'

export const pcaLimitsSection: Section = {
  id: 'pca-limits',
  title: 'Scaling choices, repeated singular values and limits',
  scene: 'pca-limits',
  focus: 'scaling',
  narration:
    "Does PCA find the true structure in data? It finds the structure that its preprocessing asks for. Take the same five jobs. With labour in hours and energy in kilowatt hours, the first component mixes both. Now record energy in watt hours instead. Nothing about the jobs has changed, but energy's numbers are a thousand times larger, so its variance dominates, and the first component becomes almost exactly the energy axis. This is chapter one's unit lesson again. Standardising, dividing each column by its standard deviation, gives each variable an equal say, and the first component turns to forty five degrees. None of these is wrong, but they answer different questions, so choose deliberately and report the choice. Three more limits. When singular values repeat, any rotation of those components is equally valid. A component's sign is arbitrary. And high variance is not the same as importance: a low-variance direction can be the one that predicts what you care about. That completes the chapter. Next, how reliably we can compute any of this.",
}
