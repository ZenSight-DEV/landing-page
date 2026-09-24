/**
 * Configuración de animaciones (Motion for Vue).
 * Principio de marca: movimiento sereno. Un solo momento orquestado (la carga
 * del hero, donde el titular "entra en foco") y animaciones que responden a
 * lo que hace la persona.
 */
export const motionConfig = {
  /** Respeta la preferencia de "reducir movimiento" del sistema operativo. */
  reducedMotion: 'user',

  ease: {
    calm: [0.22, 1, 0.36, 1],
  },

  duration: {
    fast: 0.2,
    base: 0.6,
    slow: 1.1,
    ripple: 1.6,
  },

  delay: {
    heroStart: 0.1,
    heroStep: 0.14,
    ringStep: 0.16,
    stageStep: 0.12,
    /** Escalón de aparición para grillas de tarjetas (equipo, servicios). */
    gridStep: 0.1,
  },

  distance: {
    rise: 20,
    hoverLift: -4,
    menuSlide: -12,
  },

  scale: {
    ringFrom: 0.55,
    press: 0.97,
  },

  filter: {
    unfocused: 'blur(14px)',
    focused: 'blur(0px)',
  },

  viewport: {
    once: true,
    amount: 0.35,
  },

  rings: {
    /** Tamaños relativos de los anillos concéntricos alrededor del símbolo. */
    scales: [1, 0.78, 0.56],
    /** Radio de esquina relativo al tamaño del anillo (eco del símbolo). */
    cornerRatio: 0.32,
    strokeWidth: 1.5,
    viewBoxSize: 600,
  },
} as const

export type MotionConfigValues = typeof motionConfig
