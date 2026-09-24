import type { InjectionKey } from 'vue'
import type { GetLandingContent, GetTeamMembers } from '@/application/use-cases'

export const GET_LANDING_CONTENT_KEY: InjectionKey<GetLandingContent> = Symbol('GetLandingContent')
export const GET_TEAM_MEMBERS_KEY: InjectionKey<GetTeamMembers> = Symbol('GetTeamMembers')
