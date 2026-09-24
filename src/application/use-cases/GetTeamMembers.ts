import { isPublishableMember, type TeamMember } from '@/domain/entities'
import type { TeamRepository } from '@/domain/repositories'

/** Caso de uso: obtener los integrantes publicables, en su orden. */
export class GetTeamMembers {
  constructor(private readonly repository: TeamRepository) {}

  async execute(): Promise<readonly TeamMember[]> {
    const members = await this.repository.getMembers()
    return members.filter(isPublishableMember).sort((a, b) => a.order - b.order)
  }
}
