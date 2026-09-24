import type { RoutePath } from '@/shared/constants'

export interface NavigationItem {
  readonly label: string
  readonly to: RoutePath
}
