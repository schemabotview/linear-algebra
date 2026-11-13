import type { SceneModel } from '@graphlearning/graphl-flow'
import type { BoardScene } from './frame'
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
import { numericalScenes } from './numerical'

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). Ids are GLOBAL: merging two chapters that both define an id would let the
// later one silently replace the earlier (calculus-optimisation lost a chain-rule scene that way), so
// a duplicate throws.
const CHAPTERS: BoardScene[][] = [vectorsScenes, matricesScenes, systemsScenes, spacesScenes, invertibilityScenes, determinantsScenes, orthogonalityScenes, leastSquaresScenes, eigenScenes, symmetricScenes, svdScenes, numericalScenes]

export const SCENES: Record<string, SceneModel> = {}
for (const chapter of CHAPTERS)
  for (const scene of chapter) {
    if (SCENES[scene.id]) throw new Error(`scene id '${scene.id}' is defined twice`)
    SCENES[scene.id] = scene
  }

export function getScene(id: string): SceneModel | undefined {
  return SCENES[id]
}
