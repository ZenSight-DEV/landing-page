import type { App } from 'vue'
import { GetLandingContent, GetTeamMembers } from '@/application/use-cases'
import {
  StaticLandingContentRepository,
  StaticTeamRepository,
} from '@/infrastructure/repositories'
import { landingContent } from '@/infrastructure/data/landing.content'
import { teamMembers } from '@/infrastructure/data/team.data'
import { GET_LANDING_CONTENT_KEY, GET_TEAM_MEMBERS_KEY } from './keys'

/**
 * Raíz de composición: el único lugar que conoce las implementaciones concretas.
 * Para leer el contenido desde un CMS o API, crea otro repositorio y cámbialo aquí.
 */
export const registerDependencies = (app: App): void => {
  const landingRepository = new StaticLandingContentRepository(landingContent)
  const teamRepository = new StaticTeamRepository(teamMembers)

  app.provide(GET_LANDING_CONTENT_KEY, new GetLandingContent(landingRepository))
  app.provide(GET_TEAM_MEMBERS_KEY, new GetTeamMembers(teamRepository))
}
