<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'
import { LOGO_TONES, type LogoTone } from '@/shared/constants'
import { BrandLogo, RingsGraphic } from '@/presentation/components/atoms'
import { useMotionPresets } from '@/presentation/composables'

/** El símbolo de ZenSight rodeado de sus anillos: la onda que se expande. */
const props = withDefaults(
  defineProps<{ tone?: LogoTone; animated?: boolean; startDelay?: number; symbolDelay?: number }>(),
  { tone: LOGO_TONES.light, animated: true, startDelay: 0, symbolDelay: 0 },
)

const { focusIn } = useMotionPresets()
const symbolMotion = computed(() => (props.animated ? focusIn(props.symbolDelay) : {}))
</script>

<template>
  <div class="ripple">
    <RingsGraphic :animated="animated" :start-delay="startDelay" class="ripple__layer" />
    <motion.div class="ripple__layer ripple__symbol" v-bind="symbolMotion">
      <BrandLogo variant="symbol" :tone="tone" size="fill" decorative />
    </motion.div>
  </div>
</template>

<style scoped>
.ripple {
  width: var(--zs-layout-hero-graphic-size);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
}

.ripple__layer {
  grid-area: 1 / 1;
}

.ripple__symbol {
  width: var(--zs-layout-hero-symbol-size);
}
</style>
