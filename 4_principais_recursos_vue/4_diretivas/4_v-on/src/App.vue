<template>
  <input type="text" @keyup.enter="doSomething" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    doSomething() {
      console.log('Hello Cataline')
    }
  }
})
</script>
