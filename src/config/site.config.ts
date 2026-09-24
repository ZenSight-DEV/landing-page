import logoLight from '@/assets/brand/logo-light.svg'
import symbolLight from '@/assets/brand/symbol-light.svg'
import symbolDark from '@/assets/brand/symbol-dark.svg'
import wordmarkLight from '@/assets/brand/wordmark-light.svg'
import wordmarkDark from '@/assets/brand/wordmark-dark.svg'
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
    /** Título y descripción por página, usados por el router al cambiar de ruta. */
    pages: {
      home: {
        title: 'ZenSight Consulting | Consultoría de procesos para pymes',
        description:
          'Ayudamos a pequeñas y medianas empresas a ver con claridad cómo trabajan, para que sus procesos sean simples, medibles y sostenibles.',
      },
      about: {
        title: 'Nosotros | ZenSight Consulting',
        description: 'Ayudamos a las organizaciones a trabajar con claridad: quiénes somos y por qué.',
      },
      services: {
        title: 'Método y servicios | ZenSight Consulting',
        description:
          'Las cinco etapas del Método ZenSight y nuestros servicios: diagnóstico de procesos, automatización con IA, indicadores y acompañamiento.',
      },
      contact: {
        title: 'Contacto | ZenSight Consulting',
        description:
          'Cuéntanos en qué momento está tu empresa. Conoce también al equipo que te acompaña en cada etapa del recorrido.',
      },
    },
  },

  /** Recursos descargables servidos como archivos estáticos (carpeta public/). */
  resources: {
    brandManual: '/brand/manual-de-marca.pdf',
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
