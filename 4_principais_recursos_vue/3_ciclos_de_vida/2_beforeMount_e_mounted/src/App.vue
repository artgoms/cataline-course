<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello Cataline'
    }
  },
  beforeMount() {
    console.log(this.message)
  },
  mounted() {
    console.log(this.message)
  }
})
</script>
