<script setup lang="ts">
import { computed } from 'vue'
import { handleBackgroundPure } from '../layoutHelper'
const props = defineProps({
  background: {
    // random image from a curated Unsplash collection by Anthony
    default: '../../img/section-2.svg',
  },
})
const style = computed(() => handleBackgroundPure(props.background, true))
</script>

<template>
  <div :style class="slidev-layout">
    <div>
      <slot />
    </div>
  </div>
</template>
