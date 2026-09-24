import type { LandingContent, Service } from '@/domain/entities'
import { siteConfig } from '@/config'
import { MAILTO_SCHEME, ROUTES } from '@/shared/constants'

const contactHref = `${MAILTO_SCHEME}${siteConfig.contactEmail}?subject=${encodeURIComponent(
  siteConfig.contactEmailSubject,
)}`

/**
 * Servicios: se definen una sola vez y se reutilizan tanto agrupados por
 * etapa (Método) como en el catálogo plano (Servicios), para no duplicar texto.
 */
const diagnosticoService: Service = {
  id: 'diagnostico',
  name: 'Diagnóstico de procesos',
  description: 'Miramos cómo trabaja hoy tu organización: dónde fluye, dónde se atora y por qué.',
}

const redisenoService: Service = {
  id: 'rediseno',
  name: 'Rediseño y optimización',
  description:
    'Quitamos lo que sobra y rediseñamos lo que no funciona, para que cada proceso sea más simple.',
}

const documentacionService: Service = {
  id: 'documentacion',
  name: 'Documentación y estandarización',
  description:
    'Dejamos claro cómo se hacen las cosas, para que el conocimiento no dependa de una sola persona.',
}

const indicadoresService: Service = {
  id: 'indicadores',
  name: 'Indicadores y tableros de control',
  description:
    'Definimos qué vale la pena medir y lo convertimos en tableros que se entienden de un vistazo.',
}

const automatizacionService: Service = {
  id: 'automatizacion',
  name: 'Automatización y habilitación tecnológica',
  description: 'Automatizamos lo repetitivo con la herramienta adecuada, solo cuando aporta valor real.',
}

const cambioService: Service = {
  id: 'cambio',
  name: 'Gestión del cambio y acompañamiento',
  description: 'Acompañamos a tu equipo para que la nueva forma de trabajar se adopte y perdure.',
}

const automatizacionIaService: Service = {
  id: 'automatizacion-ia',
  name: 'Automatización de procesos con IA',
  description:
    'Sumamos inteligencia artificial donde tiene sentido: para acelerar tareas repetitivas y liberar tiempo de tu equipo, sin perder el control del proceso.',
  tag: 'Nuevo',
}

/**
 * Contenido editorial de la landing (voz de marca: serena, clara, en tuteo).
 * Para cambiar textos, edita solo este archivo.
 */
export const landingContent: LandingContent = {
  navigation: [
    { label: 'Nosotros', to: ROUTES.about },
    { label: 'Método', to: ROUTES.services },
  ],

  headerCta: { label: 'Contáctanos', href: ROUTES.contact },

  hero: {
    title: siteConfig.brand.tagline,
    lead: 'Somos una consultora de procesos para pequeñas y medianas empresas. Te ayudamos a ver cómo trabaja hoy tu organización y a volverla más simple, medible y sostenible.',
    primaryCta: { label: 'Contáctanos', href: ROUTES.contact },
    secondaryCta: { label: 'Conoce el método', href: ROUTES.services },
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
    signalsLabel: '¿Te suena familiar?',
    signals: [
      'Las reuniones se alargan y nadie sale con una decisión clara.',
      'El conocimiento clave vive en la cabeza de una sola persona.',
      'Nadie sabe con certeza quién tiene que aprobar qué.',
      'Cada persona nueva aprende el proceso de una forma distinta.',
      'Creciste, pero tu forma de trabajar sigue siendo la de hace tres años.',
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

  values: {
    title: 'Así somos, así trabajamos',
    lead: 'La misma calma con la que miramos un proceso la ponemos en cada conversación contigo.',
    concept: {
      title: 'Un nombre, dos ideas',
      zen: { label: 'Zen', text: 'Calma, atención plena, silencio.' },
      sight: { label: 'Sight', text: 'Visión, comprensión, perspectiva.' },
      promise:
        'Creemos en la claridad sin ruido: se ve con más nitidez cuando primero se hace silencio. Por eso elegimos este nombre.',
    },
    traits: [
      {
        id: 'serena',
        name: 'Serena',
        description: 'Nunca vamos apurados ni alzamos la voz. Dejamos que cada conversación respire.',
      },
      {
        id: 'clara',
        name: 'Clara',
        description: 'Decimos una cosa a la vez, y la decimos bien.',
      },
      {
        id: 'perspicaz',
        name: 'Perspicaz',
        description: 'Te mostramos algo de tu propia organización que todavía no habías visto.',
      },
      {
        id: 'humana',
        name: 'Humana',
        description: 'Cercanos y honestos, sin pretender que todo es perfecto.',
      },
    ],
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
        services: [diagnosticoService],
      },
      {
        id: 'ordenar',
        order: 2,
        name: 'Ordenar',
        summary: 'Simplificar y dejarlo claro.',
        services: [redisenoService, documentacionService],
      },
      {
        id: 'medir',
        order: 3,
        name: 'Medir',
        summary: 'Saber si va mejor.',
        services: [indicadoresService],
      },
      {
        id: 'habilitar',
        order: 4,
        name: 'Habilitar',
        summary: 'Tecnología donde aporta.',
        services: [automatizacionService],
      },
      {
        id: 'sostener',
        order: 5,
        name: 'Sostener',
        summary: 'Que el cambio perdure.',
        services: [cambioService],
      },
    ],
  },

  services: {
    title: 'Nuestros servicios',
    lead: 'Desde entender cómo trabajas hoy hasta automatizar lo que tiene sentido automatizar. Elige el punto de partida que tu organización necesita.',
    services: [
      automatizacionIaService,
      diagnosticoService,
      redisenoService,
      documentacionService,
      indicadoresService,
      automatizacionService,
      cambioService,
    ],
    cta: { label: 'Hablemos de tu proceso', href: ROUTES.contact },
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
    resource: {
      description: 'Nuestra identidad de marca: colores, tipografía y uso del logotipo.',
      cta: { label: 'Descargar manual de marca', href: siteConfig.resources.brandManual },
    },
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
