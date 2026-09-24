<script setup lang="ts">
import { ref } from 'vue'
import { motion, useScroll, useTransform } from 'motion-v'
import { SURFACE_TONES, type SurfaceTone } from '@/shared/constants'

/**
 * Divisor animado entre secciones. Es vertical: avanza con el scroll de la
 * página y se completa justo al llegar a la sección de abajo (no de golpe).
 * - `factory`: una S alargada — piezas sueltas que bajan, pasan por una
 *   "máquina" y salen ordenadas (de la promesa a quién es para ti).
 * - `line`: una línea recta que baja, con un punto que viaja por ella
 *   (Método→Servicios y Nosotros→Valores: un paso que lleva al siguiente).
 * - `connect`: personas que se encuentran y abren una conversación
 *   (Equipo→Contacto).
 */
type DividerVariant = 'factory' | 'line' | 'connect'

withDefaults(defineProps<{ variant: DividerVariant; tone?: SurfaceTone }>(), {
  tone: SURFACE_TONES.dark,
})

const factoryRef = ref<HTMLElement | null>(null)
const { scrollYProgress: factoryProgress } = useScroll({
  target: factoryRef,
  offset: ['start end', 'end start'],
})
const factoryPath = useTransform(factoryProgress, [0.05, 0.85], [0, 1])
const inputReveal = (start: number) => useTransform(factoryProgress, [start, start + 0.1], [0, 1])
const factoryInput1 = inputReveal(0.08)
const factoryInput2 = inputReveal(0.16)
const factoryInput3 = inputReveal(0.24)
const machineScale = useTransform(factoryProgress, [0.42, 0.54], [0.6, 1])
const machineOpacity = useTransform(factoryProgress, [0.42, 0.54], [0, 1])
const machineRotate = useTransform(factoryProgress, [0.44, 0.8], [0, 90])
const outputReveal = (start: number) => useTransform(factoryProgress, [start, start + 0.1], [0, 1])
const factoryOutput1 = outputReveal(0.6)
const factoryOutput2 = outputReveal(0.68)
const factoryOutput3 = outputReveal(0.76)
const factoryDoneScale = useTransform(factoryProgress, [0.85, 1], [0.4, 1])
const factoryDoneOpacity = useTransform(factoryProgress, [0.83, 0.95], [0, 1])

const lineRef = ref<HTMLElement | null>(null)
const { scrollYProgress: lineProgress } = useScroll({
  target: lineRef,
  offset: ['start end', 'end start'],
})
const lineDraw = useTransform(lineProgress, [0.05, 0.85], [0, 1])
const lineStartOpacity = useTransform(lineProgress, [0, 0.08], [0, 1])
const lineDotY = useTransform(lineProgress, [0.05, 0.85], [16, 584])
const lineDotOpacity = useTransform(lineProgress, [0, 0.05, 0.85, 0.92], [0, 1, 1, 0])
const waypointReveal = (start: number) => useTransform(lineProgress, [start, start + 0.12], [0, 1])
const lineWaypoint1 = waypointReveal(0.14)
const lineWaypoint2 = waypointReveal(0.34)
const lineWaypoint3 = waypointReveal(0.54)
const lineWaypoint4 = waypointReveal(0.72)
const lineEndScale = useTransform(lineProgress, [0.82, 1], [0.3, 1])
const lineEndOpacity = useTransform(lineProgress, [0.8, 0.92], [0, 1])

const connectRef = ref<HTMLElement | null>(null)
const { scrollYProgress: connectProgress } = useScroll({
  target: connectRef,
  offset: ['start 0.9', 'end 0.4'],
})
const personRise = (start: number) => useTransform(connectProgress, [start, start + 0.18], [22, 0])
const personFade = (start: number) => useTransform(connectProgress, [start, start + 0.18], [0, 1])
const person1Y = personRise(0.05)
const person1Opacity = personFade(0.05)
const person2Y = personRise(0.22)
const person2Opacity = personFade(0.22)
const person3Y = personRise(0.39)
const person3Opacity = personFade(0.39)
const arc1 = useTransform(connectProgress, [0.3, 0.5], [0, 1])
const arc2 = useTransform(connectProgress, [0.5, 0.7], [0, 1])
const sparkScale = useTransform(connectProgress, [0.72, 0.95], [0.3, 1])
const sparkOpacity = useTransform(connectProgress, [0.68, 0.85], [0, 1])
</script>

<template>
  <div class="divider" :class="[`divider--${variant}`, `surface-${tone}`]" aria-hidden="true">
    <div v-if="variant === 'factory'" ref="factoryRef" class="divider__scroll-target">
      <svg viewBox="0 0 320 700" class="divider__svg divider__svg--factory" focusable="false">
        <!-- guía siempre visible: da contexto a las piezas antes de que la línea las alcance -->
        <path
          d="M160 20 C 310 140, 310 230, 160 350 C 10 470, 10 560, 160 680"
          class="divider__track"
        />
        <motion.path
          d="M160 20 C 310 140, 310 230, 160 350 C 10 470, 10 560, 160 680"
          class="divider__line"
          :style="{ pathLength: factoryPath }"
        />

        <!-- piezas sin ordenar: bajan trazando la primera curva -->
        <motion.rect x="232" y="93" width="24" height="24" rx="6" class="divider__step" :style="{ scale: factoryInput1, opacity: factoryInput1 }" />
        <motion.rect x="261" y="173" width="24" height="24" rx="6" class="divider__step" :style="{ scale: factoryInput2, opacity: factoryInput2 }" />
        <motion.rect x="250" y="220" width="24" height="24" rx="6" class="divider__step" :style="{ scale: factoryInput3, opacity: factoryInput3 }" />

        <!-- la máquina: donde se ordena el proceso, justo donde la S cambia de lado -->
        <motion.g class="divider__machine-group" :style="{ scale: machineScale, opacity: machineOpacity, rotate: machineRotate }">
          <rect x="132" y="322" width="56" height="56" rx="16" class="divider__machine" />
          <circle cx="160" cy="350" r="5" class="divider__accent" />
        </motion.g>

        <!-- resultado: piezas ordenadas, bajando por la segunda curva -->
        <motion.circle cx="76" cy="435" r="11" class="divider__step" :style="{ scale: factoryOutput1, opacity: factoryOutput1 }" />
        <motion.circle cx="47" cy="515" r="11" class="divider__step" :style="{ scale: factoryOutput2, opacity: factoryOutput2 }" />
        <motion.circle cx="58" cy="562" r="11" class="divider__step" :style="{ scale: factoryOutput3, opacity: factoryOutput3 }" />

        <motion.circle
          cx="160"
          cy="680"
          r="30"
          class="divider__accent-fill"
          :style="{ scale: factoryDoneScale, opacity: factoryDoneOpacity }"
        />
      </svg>
    </div>

    <div v-else-if="variant === 'line'" ref="lineRef" class="divider__scroll-target">
      <svg viewBox="0 0 40 600" class="divider__svg divider__svg--line" focusable="false">
        <!-- guía siempre visible: da contexto al punto antes de que avance -->
        <line x1="20" y1="16" x2="20" y2="584" class="divider__track" />
        <motion.circle cx="20" cy="16" r="5" class="divider__accent" :style="{ opacity: lineStartOpacity }" />
        <motion.line
          x1="20"
          y1="16"
          x2="20"
          y2="584"
          class="divider__line divider__line--vertical"
          :style="{ pathLength: lineDraw }"
        />
        <motion.circle cx="20" cy="16" r="4" class="divider__pulse" :style="{ y: lineDotY, opacity: lineDotOpacity }" />

        <!-- paradas a lo largo del camino: le dan presencia a la línea en todo su alto -->
        <motion.circle cx="20" cy="130" r="10" class="divider__waypoint" :style="{ scale: lineWaypoint1, opacity: lineWaypoint1 }" />
        <motion.circle cx="20" cy="243" r="10" class="divider__waypoint" :style="{ scale: lineWaypoint2, opacity: lineWaypoint2 }" />
        <motion.circle cx="20" cy="357" r="10" class="divider__waypoint" :style="{ scale: lineWaypoint3, opacity: lineWaypoint3 }" />
        <motion.circle cx="20" cy="470" r="10" class="divider__waypoint" :style="{ scale: lineWaypoint4, opacity: lineWaypoint4 }" />

        <motion.circle
          cx="20"
          cy="584"
          r="13"
          class="divider__accent-fill"
          :style="{ scale: lineEndScale, opacity: lineEndOpacity }"
        />
      </svg>
    </div>

    <div v-else ref="connectRef" class="divider__scroll-target">
      <svg viewBox="0 0 760 220" class="divider__svg divider__svg--wide" focusable="false">
        <motion.path
          d="M170 90 Q 260 40 350 90"
          class="divider__accent-stroke"
          :style="{ pathLength: arc1 }"
        />
        <motion.path
          d="M410 90 Q 500 40 590 90"
          class="divider__accent-stroke"
          :style="{ pathLength: arc2 }"
        />

        <motion.g :style="{ y: person1Y, opacity: person1Opacity }">
          <circle cx="150" cy="70" r="16" class="divider__person-head" />
          <path d="M112 150 Q 150 42 188 150 Z" class="divider__person-body" />
        </motion.g>
        <motion.g :style="{ y: person2Y, opacity: person2Opacity }">
          <circle cx="380" cy="60" r="18" class="divider__person-head divider__person-head--accent" />
          <path d="M336 150 Q 380 26 424 150 Z" class="divider__person-body divider__person-body--accent" />
        </motion.g>
        <motion.g :style="{ y: person3Y, opacity: person3Opacity }">
          <circle cx="610" cy="70" r="16" class="divider__person-head" />
          <path d="M572 150 Q 610 42 648 150 Z" class="divider__person-body" />
        </motion.g>

        <motion.circle
          cx="380"
          cy="18"
          r="7"
          class="divider__accent-fill"
          :style="{ scale: sparkScale, opacity: sparkOpacity }"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.divider {
  display: flex;
  justify-content: center;
  padding-block: var(--zs-space-12);
}

.divider--connect {
  padding-block: var(--zs-space-16);
}

.divider__scroll-target {
  width: 100%;
  display: flex;
  justify-content: center;
}

.divider__svg {
  width: min(20rem, 70vw);
  height: auto;
  overflow: visible;
}

.divider__svg--wide {
  width: min(44rem, 92vw);
}

.divider__svg--factory {
  width: min(17rem, 48vw);
  height: var(--zs-layout-divider-height);
}

.divider__svg--line {
  width: 2.5rem;
  height: var(--zs-layout-divider-height);
}

.divider__track {
  fill: none;
  stroke: var(--surface-line);
  stroke-width: 1.5;
  opacity: 0.4;
}

.divider__line {
  fill: none;
  stroke: var(--surface-accent);
  stroke-width: 2;
  transform-box: fill-box;
  transform-origin: left center;
}

.divider__line--vertical {
  transform-origin: top center;
}

.divider__accent {
  fill: var(--surface-accent);
  transform-box: fill-box;
  transform-origin: center;
}

.divider__accent-fill {
  fill: var(--surface-accent);
  transform-box: fill-box;
  transform-origin: center;
}

.divider__accent-stroke {
  fill: none;
  stroke: var(--surface-accent);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.divider__step {
  fill: var(--surface-accent);
  transform-box: fill-box;
  transform-origin: center;
}

.divider__waypoint {
  fill: none;
  stroke: var(--surface-accent);
  stroke-width: 2;
  transform-box: fill-box;
  transform-origin: center;
}

.divider__pulse {
  fill: var(--surface-accent);
}

.divider__machine-group {
  transform-box: fill-box;
  transform-origin: center;
}

.divider__machine {
  fill: none;
  stroke: var(--surface-accent);
  stroke-width: 2;
}

.divider__person-head {
  fill: none;
  stroke: var(--surface-line);
  stroke-width: 2;
}

.divider__person-body {
  fill: none;
  stroke: var(--surface-line);
  stroke-width: 2;
  stroke-linejoin: round;
}

.divider__person-head--accent {
  stroke: var(--surface-accent);
}

.divider__person-body--accent {
  stroke: var(--surface-accent);
}
</style>
