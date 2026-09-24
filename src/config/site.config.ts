import logoLight from '@/assets/brand/logo-light.png'
import symbolLight from '@/assets/brand/symbol-light.png'
import symbolDark from '@/assets/brand/symbol-dark.png'
import wordmarkLight from '@/assets/brand/wordmark-light.png'
import wordmarkDark from '@/assets/brand/wordmark-dark.png'
import { LOGO_TONES } from '@/shared/constants'

const domain = 'zensightconsulting.com'

/** Datos generales del sitio: marca, contacto, metadatos y recursos. */
export const siteConfig = {
  brand: {
    name: 'ZenSight',
    legalName: 'ZenSight Consulting',
    tagline: 'Trabaja con claridad.',
  },

  domain,
  url: `https://${domain}`,
  contactEmail: `contact@${domain}`,
  contactEmailSubject: 'Quiero agendar un diagnóstico',

  meta: {
    lang: 'es-MX',
    title: 'ZenSight Consulting | Consultoría de procesos para pymes',
    description:
      'Ayudamos a pequeñas y medianas empresas a ver con claridad cómo trabajan, para que sus procesos sean simples, medibles y sostenibles.',
  },

  fonts: {
    stylesheet:
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap',
    preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
  },

  logos: {
    full: { [LOGO_TONES.light]: logoLight, [LOGO_TONES.dark]: logoLight },
    symbol: { [LOGO_TONES.light]: symbolLight, [LOGO_TONES.dark]: symbolDark },
    wordmark: { [LOGO_TONES.light]: wordmarkLight, [LOGO_TONES.dark]: wordmarkDark },
  },

  method: {
    /** Dígitos del número de etapa (1 → "01"). */
    stepNumberDigits: 2,
    stepNumberPad: '0',
  },

  team: {
    /** Número de letras en las iniciales del avatar sin fotografía. */
    initialsLength: 2,
  },
} as const

export type SiteConfig = typeof siteConfig
export type LogoVariant = keyof SiteConfig['logos']
