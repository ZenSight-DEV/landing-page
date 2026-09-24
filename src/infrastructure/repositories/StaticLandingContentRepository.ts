import type { LandingContent } from '@/domain/entities'
import type { LandingContentRepository } from '@/domain/repositories'

/** Adaptador: sirve el contenido desde un archivo local de datos. */
export class StaticLandingContentRepository implements LandingContentRepository {
  constructor(private readonly content: LandingContent) {}

  getContent(): Promise<LandingContent> {
    return Promise.resolve(this.content)
  }
}
