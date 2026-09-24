import { motionConfig } from './motion.config'

/**
 * Tema visual de ZenSight, tomado del manual de marca.
 * Toda la paleta, tipografía y medidas se definen aquí; el plugin de tema
 * las convierte en variables CSS (`--zs-…`) que usan los componentes.
 */

/** Paleta base del manual de marca. */
const palette = {
  navyMidnight: '#111827',
  zenWhite: '#FFFFFF',
  gray800: '#1F2937',
  gray700: '#374151',
  gray500: '#6B7280',
  gray400: '#9CA3AF',
  gray200: '#E5E7EB',
  gray50: '#F9FAFB',
  brisa: '#5EEAD4',
  brisaDeep: '#0F766E',
  brisaSoft: '#134E4A',
  brisaSoftLight: '#CCFBF1',
} as const

export const themeConfig = {
  palette,

  /** Colores semánticos: los componentes usan estos, nunca la paleta directa. */
  color: {
    bg: palette.navyMidnight,
    surface: palette.gray800,
    line: palette.gray700,
    text: palette.zenWhite,
    textMuted: palette.gray400,
    accent: palette.brisa,
    accentSoft: palette.brisaSoft,
    onAccent: palette.navyMidnight,

    bgInverse: palette.gray50,
    surfaceInverse: palette.zenWhite,
    lineInverse: palette.gray200,
    textInverse: palette.navyMidnight,
    textMutedInverse: palette.gray500,
    accentInverse: palette.brisaDeep,
    accentSoftInverse: palette.brisaSoftLight,
  },

  font: {
    display: "'Poppins', ui-sans-serif, system-ui, sans-serif",
    body: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
  },

  fontSize: {
    hero: 'clamp(3rem, 9vw, 7.5rem)',
    section: 'clamp(2.125rem, 4.5vw, 3.75rem)',
    item: 'clamp(1.375rem, 2vw, 1.75rem)',
    lead: 'clamp(1.125rem, 1.6vw, 1.375rem)',
    body: '1.0625rem',
    small: '0.9375rem',
    stepNumber: 'clamp(3rem, 5vw, 4.5rem)',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },

  lineHeight: {
    display: 1.02,
    heading: 1.12,
    body: 1.6,
  },

  letterSpacing: {
    display: '-0.035em',
    heading: '-0.02em',
    normal: '0',
  },

  space: {
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
  },

  radius: {
    sm: '6px',
    md: '12px',
    lg: '24px',
    xl: '48px',
    full: '9999px',
  },

  border: {
    hairline: '1px',
    focus: '2px',
  },

  layout: {
    maxWidth: '76rem',
    proseMax: '40rem',
    gutter: 'clamp(1.25rem, 4vw, 3rem)',
    headerHeight: '4.5rem',
    sectionPadding: 'clamp(6rem, 13vw, 10.5rem)',
    cardMinWidth: '16rem',
    /** Rejilla de dos columnas que se apila en pantallas angostas. */
    splitColumns: 'repeat(auto-fit, minmax(min(100%, 32rem), 1fr))',
    stepMinWidth: '12rem',
    /** Se ajusta al eje más corto (ancho o alto) para no invadir lo que sigue en pantallas bajas. */
    heroGraphicSize: 'min(34rem, 78vw, 52vh)',
    /** Alto de los divisores verticales entre secciones (se completan al llegar a la de abajo). */
    dividerHeight: 'clamp(26rem, 55vh, 42rem)',
    heroSymbolSize: '30%',
    avatarSize: '5.5rem',
    logoHeader: '1.75rem',
    logoFooter: '1.5rem',
    tagPaddingY: '0.5rem',
    tagPaddingX: '1rem',
    buttonPaddingY: '0.875rem',
    buttonPaddingX: '1.5rem',
    menuIconSize: '1.5rem',
  },

  /** Transiciones CSS simples, derivadas de motion.config para no duplicar valores. */
  transition: {
    fast: `${motionConfig.duration.fast}s`,
  },

  zIndex: {
    header: 50,
  },

  effect: {
    headerBackdrop: 'rgba(17, 24, 39, 0.82)',
    headerBlur: '12px',
  },

  /** Puntos de quiebre en px (se leen desde TypeScript con useMediaQuery). */
  breakpoint: {
    desktopNav: 900,
  },
} as const

export type ThemeConfig = typeof themeConfig
