import type { CallToAction } from './CallToAction'
import type { MethodStage } from './MethodStage'
import type { NavigationItem } from './NavigationItem'

export interface HeroContent {
  readonly title: string
  readonly lead: string
  readonly primaryCta: CallToAction
  readonly secondaryCta: CallToAction
}

export interface AudienceContent {
  readonly title: string
  readonly lead: string
  readonly momentsLabel: string
  readonly moments: readonly string[]
}

export interface StatementContent {
  readonly label: string
  readonly text: string
}

export interface AboutContent {
  readonly title: string
  readonly paragraphs: readonly string[]
  readonly closing: string
  readonly mission: StatementContent
  readonly vision: StatementContent
}

export interface MethodContent {
  readonly title: string
  readonly lead: string
  readonly stages: readonly MethodStage[]
}

export interface TeamCardLabels {
  readonly education: string
  readonly companies: string
  readonly linkedin: string
}

export interface TeamContent {
  readonly title: string
  readonly lead: string
  readonly emptyState: string
  readonly cardLabels: TeamCardLabels
}

export interface ContactContent {
  readonly title: string
  readonly lead: string
  readonly cta: CallToAction
  readonly emailLabel: string
}

export interface UiLabels {
  readonly skipToContent: string
  readonly openMenu: string
  readonly closeMenu: string
  readonly mainNavigation: string
  readonly homeLink: string
}

export interface FooterContent {
  readonly rights: string
}

/** Todo el contenido editorial de la landing page. */
export interface LandingContent {
  readonly navigation: readonly NavigationItem[]
  readonly headerCta: CallToAction
  readonly hero: HeroContent
  readonly audience: AudienceContent
  readonly about: AboutContent
  readonly method: MethodContent
  readonly team: TeamContent
  readonly contact: ContactContent
  readonly footer: FooterContent
  readonly ui: UiLabels
}
