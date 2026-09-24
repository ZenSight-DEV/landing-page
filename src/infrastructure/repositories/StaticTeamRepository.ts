import type { TeamMember } from '@/domain/entities'
import type { TeamRepository } from '@/domain/repositories'

/** Adaptador: sirve el equipo desde un archivo local de datos. */
export class StaticTeamRepository implements TeamRepository {
  constructor(private readonly members: readonly TeamMember[]) {}

  getMembers(): Promise<readonly TeamMember[]> {
    return Promise.resolve(this.members)
  }
}
