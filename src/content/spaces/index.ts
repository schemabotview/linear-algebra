import type { Course } from '../types'
import { vectorSpacesSection } from './01-vector-spaces'
import { subspacesSection } from './02-subspaces'
import { independenceSection } from './03-independence'
import { basesSection } from './04-bases'
import { fourSubspacesSection } from './05-four-subspaces'
import { rankNullitySection } from './06-rank-nullity'
import { solvabilitySection } from './07-solvability'

// Chapter 4 — Vector Spaces, Bases, and Rank.
export const spaces: Course = {
  id: 'spaces',
  title: 'Vector spaces, bases and rank',
  sections: [
    vectorSpacesSection,
    subspacesSection,
    independenceSection,
    basesSection,
    fourSubspacesSection,
    rankNullitySection,
    solvabilitySection,
  ],
}
