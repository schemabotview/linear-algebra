import type { Scene } from '@graphlearning/flow'
import { vectorSpaces } from './vector-spaces'
import { subspaces } from './subspaces'
import { independence } from './independence'
import { bases } from './bases'
import { fourSubspaces } from './four-subspaces'
import { rankNullity } from './rank-nullity'
import { solvability } from './solvability'

// Chapter 4 — one scene per section.
export const spacesScenes: Scene[] = [vectorSpaces, subspaces, independence, bases, fourSubspaces, rankNullity, solvability]
