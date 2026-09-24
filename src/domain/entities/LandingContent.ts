import type { CallToAction } from './CallToAction'
import type { MethodStage } from './MethodStage'
import type { NavigationItem } from './NavigationItem'
import type { Service } from './Service'

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
  readonly signalsLabel: string
  readonly signals: readonly string[]
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

export interface ConceptContent {
  readonly title: string
  readonly zen: StatementContent
  readonly sight: StatementContent
  readonly promise: string
}

export interface ValueTrait {
  readonly id: string
  readonly name: string
  readonly description: string
}

export interface ValuesContent {
  readonly title: string
  readonly lead: string
  readonly concept: ConceptContent
  readonly traits: readonly ValueTrait[]
}

export interface MethodContent {
  readonly title: string
  readonly lead: string
  readonly stages: readonly MethodStage[]
}

export interface ServicesContent {
  readonly title: string
  readonly lead: string
  readonly services: readonly Service[]
  readonly cta: CallToAction
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

export interface ContactResourceContent {
  readonly description: string
  readonly cta: CallToAction
}

export interface ContactContent {
  readonly title: string
  readonly lead: string
  readonly cta: CallToAction
  readonly emailLabel: string
  readonly resource: ContactResourceContent
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
  readonly values: ValuesContent
  readonly method: MethodContent
  readonly services: ServicesContent
  readonly team: TeamContent
  readonly contact: ContactContent
  readonly footer: FooterContent
  readonly ui: UiLabels
}
