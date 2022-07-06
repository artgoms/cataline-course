<template>
  <h1 class="static" :class="{ active: isActive, 'text-danger': hasError }">
    Cataline
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: true
    }
  }
})
</script>
