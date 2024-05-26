<script setup lang="ts">
import { computed } from 'vue'
import { handleBackgroundPure } from '../layoutHelper'
const props = defineProps({
  background: {
    // random image from a curated Unsplash collection by Anthony
    default: '',
  },
  image: {
    default: undefined
  }
})
const style = computed(() => handleBackgroundPure(props.background, true))
</script>

<style>
.wrapper {
  display: flex;
  align-items: start;
  width: 100%
}
.col {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%
}
.col-image {
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%
}
.pr-8 {
  padding-right: 8px;
}
.col-img {
  border: #f64 solid 3px;
  border-radius: 3px;
}
</style>

<template>
<div :style class="slidev-layout">
  <slot />
  <slot name="header"/>
  <div class="wrapper">
    <div class="col pr-8">
      <slot name="left" />
    </div>
    <div v-if="!image" class="col">
      <slot name="right"/>
    </div>
    <div v-else class="col-image">
        <img class="col-img" :src="image" alt="">
    </div>
  </div>
</div>
</template>
