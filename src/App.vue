<script setup lang="ts">
import { MotionConfig } from 'motion-v'
import { motionConfig } from '@/config'
import LandingPage from '@/presentation/components/pages/LandingPage.vue'
</script>

<template>
  <MotionConfig :reduced-motion="motionConfig.reducedMotion">
    <LandingPage />
  </MotionConfig>
</template>
