import type { Scene } from '@graphlearning/flow'
import { vectorsScenes } from './vectors'
import { matricesScenes } from './matrices'
import { systemsScenes } from './systems'
import { spacesScenes } from './spaces'
import { invertibilityScenes } from './invertibility'
import { determinantsScenes } from './determinants'
import { orthogonalityScenes } from './orthogonality'
import { leastSquaresScenes } from './least-squares'
import { eigenScenes } from './eigen'
import { symmetricScenes } from './symmetric'
import { svdScenes } from './svd'

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). Ids are globally unique across courses, so the flat lookup below is
// unambiguous. Courses are added here as each is authored.
const ALL: Scene[] = [...vectorsScenes, ...matricesScenes, ...systemsScenes, ...spacesScenes, ...invertibilityScenes, ...determinantsScenes, ...orthogonalityScenes, ...leastSquaresScenes, ...eigenScenes, ...symmetricScenes, ...svdScenes]

export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map((s) => [s.id, s]))

export function getScene(id: string): Scene | undefined {
  return SCENES[id]
}
