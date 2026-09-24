import type { SectionId } from '@/shared/constants'
import { HEADING_ID_SUFFIX } from '@/shared/constants'

/** Id del título de una sección, para enlazarlo con `aria-labelledby`. */
export const toHeadingId = (id: SectionId): string => `${id}-${HEADING_ID_SUFFIX}`
