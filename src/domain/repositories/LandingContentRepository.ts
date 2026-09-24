import type { LandingContent } from '@/domain/entities'

/** Puerto: de dónde viene el contenido de la landing (archivo, CMS, API…). */
export interface LandingContentRepository {
  getContent(): Promise<LandingContent>
}
