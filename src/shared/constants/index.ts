/**
 * Constantes compartidas.
 * Regla del proyecto: todo valor que se repite en 3 o más lugares vive aquí.
 */

/** Ids de las secciones: los usan las secciones (aria-labelledby, id del `<section>`). */
export const SECTION_IDS = {
  hero: 'inicio',
  about: 'nosotros',
  values: 'valores',
  method: 'metodo',
  services: 'servicios',
  team: 'equipo',
  contact: 'contacto',
} as const

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]

/**
 * Rutas del sitio: fuente única para el router, la navegación y los CTA internos.
 * Método vive junto con Servicios (/servicios) y Equipo junto con Contacto (/contacto).
 */
export const ROUTES = {
  home: '/',
  about: '/nosotros',
  services: '/servicios',
  contact: '/contacto',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]

/** Prefijo de todas las variables CSS generadas desde la configuración del tema. */
export const CSS_VAR_PREFIX = '--zs'

/** Variantes de color de los logotipos (según el fondo donde se colocan). */
export const LOGO_TONES = {
  light: 'light',
  dark: 'dark',
} as const

export type LogoTone = (typeof LOGO_TONES)[keyof typeof LOGO_TONES]

/** Tonos de superficie de una sección: oscura (navy) o clara. */
export const SURFACE_TONES = {
  dark: 'dark',
  light: 'light',
} as const

export type SurfaceTone = (typeof SURFACE_TONES)[keyof typeof SURFACE_TONES]

/** Esquema de los enlaces de correo. */
export const MAILTO_SCHEME = 'mailto:'

/** Id del contenido principal (destino del enlace "Saltar al contenido"). */
export const MAIN_CONTENT_ID = 'contenido'

/** Sufijo del id del título de cada sección (`metodo-titulo`). */
export const HEADING_ID_SUFFIX = 'titulo'

/** Id del título del bloque "Para quién" (vive dentro del hero, no es una sección navegable). */
export const AUDIENCE_HEADING_ID = 'para-quien-titulo'
