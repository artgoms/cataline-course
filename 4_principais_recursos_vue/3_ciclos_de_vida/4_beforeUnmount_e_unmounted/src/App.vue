<template>
  <h1>{{ count }}</h1>

  <button @click="count++">Incrementar</button>
  <button @click="destroyComponent">Desmontar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  beforeUnmount() {
    console.log('Antes da desmontar')
  },
  unmounted() {
    console.log('Depois da desmontar')
  },
  methods: {
    destroyComponent() {
      this.$.appContext.app.unmount(this.$el)
    }
  }
})
</script>
