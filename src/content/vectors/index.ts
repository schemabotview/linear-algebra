import type { Course } from '../types'
import { scalarsAndVectors } from './01-scalars-and-vectors'
import { linearCombinations } from './02-linear-combinations'
import { linesAndPlanes } from './03-lines-and-planes'
import { lengthAndAngles } from './04-length-and-angles'
import { measurementVectors } from './05-measurement-vectors'
import { linearRelationships } from './06-linear-relationships'

// Chapter 1 — Vectors, Coordinates, and Linear Relationships.
export const vectors: Course = {
  id: 'vectors',
  title: 'Vectors, coordinates and linear relationships',
  sections: [
    scalarsAndVectors,
    linearCombinations,
    linesAndPlanes,
    lengthAndAngles,
    measurementVectors,
    linearRelationships,
  ],
}
