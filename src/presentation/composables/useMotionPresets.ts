import { motionConfig } from '@/config'

const { ease, duration, distance, filter, scale, viewport } = motionConfig

/**
 * Presets de animación reutilizables, construidos a partir de motion.config.
 * Los componentes piden un preset en lugar de escribir valores de animación.
 */
export const useMotionPresets = () => {
  const inViewOptions = { once: viewport.once, amount: viewport.amount }

  const transition = (delay = 0, time: number = duration.base) => ({
    duration: time,
    delay,
    ease: [...ease.calm],
  })

  /** El titular "entra en foco": de desenfocado a nítido. */
  const focusIn = (delay = 0) => ({
    initial: { opacity: 0, filter: filter.unfocused },
    animate: { opacity: 1, filter: filter.focused },
    transition: transition(delay, duration.slow),
  })

  /** Aparición sutil al cargar. */
  const riseIn = (delay = 0) => ({
    initial: { opacity: 0, y: distance.rise },
    animate: { opacity: 1, y: 0 },
    transition: transition(delay),
  })

  /** Aparición al entrar en pantalla (una sola vez). */
  const revealOnView = (delay = 0) => ({
    initial: { opacity: 0, y: distance.rise },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions,
    transition: transition(delay),
  })

  /** Transición entre páginas al navegar. */
  const pageTransition = () => ({
    initial: { opacity: 0, y: distance.rise },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -distance.rise },
    transition: transition(0, duration.base),
  })

  /** Onda que se expande (anillos del símbolo). */
  const ripple = (delay = 0) => ({
    initial: { opacity: 0, scale: scale.ringFrom },
    animate: { opacity: 1, scale: 1 },
    transition: transition(delay, duration.ripple),
  })

  /** Línea que se dibuja de izquierda a derecha al entrar en pantalla. */
  const drawOnView = (delay = 0) => ({
    initial: { scaleX: 0 },
    whileInView: { scaleX: 1 },
    inViewOptions,
    transition: transition(delay, duration.ripple),
  })

  /** Respuesta a la interacción: elevar al pasar el cursor, hundir al presionar. */
  const interactive = {
    whileHover: { y: distance.hoverLift },
    whilePress: { scale: scale.press },
    transition: transition(0, duration.fast),
  }

  const menu = {
    initial: { opacity: 0, y: distance.menuSlide },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: distance.menuSlide },
    transition: transition(0, duration.fast),
  }

  return {
    focusIn,
    riseIn,
    revealOnView,
    pageTransition,
    drawOnView,
    ripple,
    interactive,
    menu,
    transition,
  }
}
