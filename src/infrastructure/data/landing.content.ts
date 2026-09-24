import type { LandingContent } from '@/domain/entities'
import { siteConfig } from '@/config'
import { MAILTO_SCHEME, SECTION_IDS } from '@/shared/constants'
import { toAnchor } from '@/shared/utils'

const contactHref = `${MAILTO_SCHEME}${siteConfig.contactEmail}?subject=${encodeURIComponent(
  siteConfig.contactEmailSubject,
)}`

/**
 * Contenido editorial de la landing (voz de marca: serena, clara, en tuteo).
 * Para cambiar textos, edita solo este archivo.
 */
export const landingContent: LandingContent = {
  navigation: [
    { label: 'Nosotros', targetId: SECTION_IDS.about },
    { label: 'Método', targetId: SECTION_IDS.method },
    { label: 'Equipo', targetId: SECTION_IDS.team },
    { label: 'Contacto', targetId: SECTION_IDS.contact },
  ],

  headerCta: { label: 'Agenda un diagnóstico', href: contactHref },

  hero: {
    title: siteConfig.brand.tagline,
    lead: 'Somos una consultora de procesos para pequeñas y medianas empresas. Te ayudamos a ver cómo trabaja hoy tu organización y a volverla más simple, medible y sostenible.',
    primaryCta: { label: 'Agenda un diagnóstico', href: contactHref },
    secondaryCta: { label: 'Conoce el método', href: toAnchor(SECTION_IDS.method) },
  },

  audience: {
    title: 'Para empresas que crecieron más rápido que su forma de trabajar.',
    lead: 'Trabajamos con dueños, líderes y equipos de pymes que quieren entender a fondo cómo opera su organización y están dispuestos a cuestionar lo que siempre se ha hecho igual.',
    momentsLabel: 'Suelen llegar en un momento de cambio:',
    moments: [
      'Crecimiento',
      'Reestructura',
      'Nuevo liderazgo',
      'Nueva tecnología',
      'Es hora de mirar hacia adentro',
    ],
  },

  about: {
    title: 'Ayudamos a las organizaciones a trabajar con claridad.',
    paragraphs: [
      'Analizamos, ordenamos y rediseñamos la forma en que operan para eliminar fricciones, reducir desperdicios y devolverle tiempo a sus equipos.',
      'Unimos el pensamiento estratégico con una mirada práctica, y usamos la tecnología solo cuando aporta valor real.',
    ],
    closing: 'El resultado: procesos simples, medibles y sostenibles.',
    mission: {
      label: 'Misión',
      text: 'Ayudar a las empresas a ver con claridad cómo trabajan, para que sus procesos sean simples, medibles y mejoren de forma continua.',
    },
    vision: {
      label: 'Visión',
      text: 'Un mundo donde ninguna organización esté limitada por su propia forma de trabajar.',
    },
  },

  method: {
    title: 'Método ZenSight',
    lead: 'Cinco etapas que llevan a tu organización de ver con claridad a sostener el cambio.',
    stages: [
      {
        id: 'ver',
        order: 1,
        name: 'Ver',
        summary: 'Entender cómo trabajan hoy.',
        services: [
          {
            id: 'diagnostico',
            name: 'Diagnóstico de procesos',
            description:
              'Miramos cómo trabaja hoy tu organización: dónde fluye, dónde se atora y por qué.',
          },
        ],
      },
      {
        id: 'ordenar',
        order: 2,
        name: 'Ordenar',
        summary: 'Simplificar y dejarlo claro.',
        services: [
          {
            id: 'rediseno',
            name: 'Rediseño y optimización',
            description:
              'Quitamos lo que sobra y rediseñamos lo que no funciona, para que cada proceso sea más simple.',
          },
          {
            id: 'documentacion',
            name: 'Documentación y estandarización',
            description:
              'Dejamos claro cómo se hacen las cosas, para que el conocimiento no dependa de una sola persona.',
          },
        ],
      },
      {
        id: 'medir',
        order: 3,
        name: 'Medir',
        summary: 'Saber si va mejor.',
        services: [
          {
            id: 'indicadores',
            name: 'Indicadores y tableros de control',
            description:
              'Definimos qué vale la pena medir y lo convertimos en tableros que se entienden de un vistazo.',
          },
        ],
      },
      {
        id: 'habilitar',
        order: 4,
        name: 'Habilitar',
        summary: 'Tecnología donde aporta.',
        services: [
          {
            id: 'automatizacion',
            name: 'Automatización y habilitación tecnológica',
            description:
              'Automatizamos lo repetitivo con la herramienta adecuada, solo cuando aporta valor real.',
          },
        ],
      },
      {
        id: 'sostener',
        order: 5,
        name: 'Sostener',
        summary: 'Que el cambio perdure.',
        services: [
          {
            id: 'cambio',
            name: 'Gestión del cambio y acompañamiento',
            description:
              'Acompañamos a tu equipo para que la nueva forma de trabajar se adopte y perdure.',
          },
        ],
      },
    ],
  },

  team: {
    title: 'Equipo',
    lead: 'Las personas que te acompañan en cada etapa del recorrido.',
    emptyState: 'Pronto presentaremos a nuestro equipo.',
    cardLabels: {
      education: 'Formación',
      companies: 'Experiencia en',
      linkedin: 'Perfil de LinkedIn',
    },
  },

  contact: {
    title: 'Primero veamos cómo trabajan hoy.',
    lead: 'Cuéntanos en qué momento está tu empresa y agendamos una primera conversación.',
    cta: { label: 'Escríbenos', href: contactHref },
    emailLabel: 'O escribe directamente a',
  },

  footer: {
    rights: 'Todos los derechos reservados.',
  },

  ui: {
    skipToContent: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mainNavigation: 'Navegación principal',
    homeLink: `${siteConfig.brand.legalName}, ir al inicio`,
  },
}
