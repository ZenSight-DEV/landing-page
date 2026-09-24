import type { SectionId } from '@/shared/constants'

export interface NavigationItem {
  readonly label: string
  readonly targetId: SectionId
}
