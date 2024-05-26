<script setup lang="ts">
import { computed } from 'vue'
import { handleBackgroundPure } from '../layoutHelper'
const props = defineProps({
  background: {
    // random image from a curated Unsplash collection by Anthony
    default: '../../img/section-1.svg',
  },
})
const style = computed(() => handleBackgroundPure(props.background, true))
</script>

<style>
.section-layout {
  padding: 96px 108px
}
</style>

<template>
  <div :style class="slidev-layout section-layout">
    <div>
      <slot />
    </div>
  </div>
</template>
