<template>
  <div>
    <h1 v-show="sex === 'Masculino'">Masculino</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      sex: 'Masculino'
    }
  }
})
</script>
