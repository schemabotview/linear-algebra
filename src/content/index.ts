import { vectors } from './vectors'
import { matrices } from './matrices'
import { systems } from './systems'
import { spaces } from './spaces'
import { invertibility } from './invertibility'
import { determinants } from './determinants'
import { orthogonality } from './orthogonality'
import { leastSquares } from './least-squares'
import type { Course, Section } from './types'

// Course registry, in syllabus order. Courses are added here as each is authored.
export const COURSES: Record<string, Course> = {
  [vectors.id]: vectors,
  [matrices.id]: matrices,
  [systems.id]: systems,
  [spaces.id]: spaces,
  [invertibility.id]: invertibility,
  [determinants.id]: determinants,
  [orthogonality.id]: orthogonality,
  [leastSquares.id]: leastSquares,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract every recorder drives, so it cannot be a per-repo decision. Re-exported here
// because this module is what the app and the scripts import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
