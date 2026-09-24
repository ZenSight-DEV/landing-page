import type { LandingContent } from '@/domain/entities'
import type { LandingContentRepository } from '@/domain/repositories'

/** Caso de uso: obtener el contenido de la landing con el método ordenado. */
export class GetLandingContent {
  constructor(private readonly repository: LandingContentRepository) {}

  async execute(): Promise<LandingContent> {
    const content = await this.repository.getContent()
    const stages = [...content.method.stages].sort((a, b) => a.order - b.order)
    return { ...content, method: { ...content.method, stages } }
  }
}
