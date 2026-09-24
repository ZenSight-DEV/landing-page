import { GET_LANDING_CONTENT_KEY } from '@/presentation/di/keys'
import { useUseCase } from './useUseCase'

export const useLandingContent = () => useUseCase(GET_LANDING_CONTENT_KEY)
