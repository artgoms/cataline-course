<template>
  <h1>{{ count }}</h1>

  <button @click="count++">Incrementar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  beforeUpdate() {
    // console.log('Antes da atualização')
  },
  updated() {
    if (this.count === 5 || this.count === 9) this.count = 6
  }
})
</script>
