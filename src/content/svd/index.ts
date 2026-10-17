import type { Course } from '../types'
import { svdShapesSection } from './01-svd-shapes'
import { singularVectors } from './02-singular-vectors'
import { rankOneTerms } from './03-rank-one-terms'
import { pseudoinverseSection } from './04-pseudoinverse'
import { truncatedSvd } from './05-truncated-svd'
import { pcaSection } from './06-pca'
import { pcaLimitsSection } from './07-pca-limits'

// Chapter 11 — Singular Value Decomposition and Low-Rank Structure.
export const svd: Course = {
  id: 'svd',
  title: 'Singular value decomposition and low-rank structure',
  sections: [svdShapesSection, singularVectors, rankOneTerms, pseudoinverseSection, truncatedSvd, pcaSection, pcaLimitsSection],
}
