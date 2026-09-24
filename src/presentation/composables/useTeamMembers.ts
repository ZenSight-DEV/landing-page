import { GET_TEAM_MEMBERS_KEY } from '@/presentation/di/keys'
import { useUseCase } from './useUseCase'

export const useTeamMembers = () => useUseCase(GET_TEAM_MEMBERS_KEY)
