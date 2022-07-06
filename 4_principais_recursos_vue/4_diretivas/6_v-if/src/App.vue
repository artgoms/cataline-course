<template>
  <div>
    <h1 v-if="sex === 'Masculino'">Masculino</h1>
    <h1 v-else-if="sex === 'Feminino'">Feminino</h1>
    <h1 v-else>Outro</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      sex: 'Outro'
    }
  }
})
</script>
