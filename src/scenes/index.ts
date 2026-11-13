import type { SceneModel } from '@graphlearning/graphl-flow'
import { vectorsScenes } from './vectors'

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). Ids are GLOBAL: merging two chapters that both define an id would let the
// later one silently replace the earlier (calculus-optimisation lost a chain-rule scene that way), so
// a duplicate throws. Courses are added here as each is ported to the board frame.
const CHAPTERS: Record<string, SceneModel>[] = [vectorsScenes]

export const SCENES: Record<string, SceneModel> = {}
for (const chapter of CHAPTERS)
  for (const [id, scene] of Object.entries(chapter)) {
    if (SCENES[id]) throw new Error(`scene id '${id}' is defined twice`)
    SCENES[id] = scene
  }

export function getScene(id: string): SceneModel | undefined {
  return SCENES[id]
}
