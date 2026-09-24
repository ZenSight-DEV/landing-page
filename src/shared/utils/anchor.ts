import type { SectionId } from '@/shared/constants'

/** Convierte el id de una sección en un enlace de ancla (`#id`). */
export const toAnchor = (id: SectionId): string => `#${id}`
