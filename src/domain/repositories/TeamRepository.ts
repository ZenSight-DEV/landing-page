import type { TeamMember } from '@/domain/entities'

/** Puerto: de dónde vienen los integrantes del equipo. */
export interface TeamRepository {
  getMembers(): Promise<readonly TeamMember[]>
}
