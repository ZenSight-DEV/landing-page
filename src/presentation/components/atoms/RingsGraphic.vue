<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'
import { motionConfig } from '@/config'
import { useMotionPresets } from '@/presentation/composables'

/** Anillos concéntricos del símbolo, como onda que se expande desde el centro. */
const props = withDefaults(defineProps<{ animated?: boolean; startDelay?: number }>(), {
  animated: true,
  startDelay: 0,
})

const { ripple } = useMotionPresets()
const { viewBoxSize, scales, cornerRatio, strokeWidth } = motionConfig.rings

const rings = computed(() =>
  scales.map((scale, index) => {
    const size = viewBoxSize * scale - strokeWidth
    const offset = (viewBoxSize - size) / 2
    const reverseIndex = scales.length - 1 - index
    return {
      key: scale,
      x: offset,
      y: offset,
      size,
      radius: size * cornerRatio,
      isInnermost: index === scales.length - 1,
      motion: props.animated
        ? ripple(props.startDelay + reverseIndex * motionConfig.delay.ringStep)
        : {},
    }
  }),
)
</script>

<template>
  <svg
    :viewBox="`0 0 ${viewBoxSize} ${viewBoxSize}`"
    class="rings"
    aria-hidden="true"
    focusable="false"
  >
    <motion.rect
      v-for="ring in rings"
      :key="ring.key"
      :x="ring.x"
      :y="ring.y"
      :width="ring.size"
      :height="ring.size"
      :rx="ring.radius"
      :stroke-width="strokeWidth"
      :class="['ring', { 'ring--accent': ring.isInnermost }]"
      v-bind="ring.motion"
    />
  </svg>
</template>

<style scoped>
.rings {
  width: 100%;
  height: auto;
  overflow: visible;
}

.ring {
  fill: none;
  stroke: var(--surface-line);
  transform-box: fill-box;
  transform-origin: center;
}

.ring--accent {
  stroke: var(--surface-accent);
}
</style>
