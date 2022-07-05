<template>
  <h1>{{ person.age }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Person {
  name: string
  age: number
}

export default defineComponent({
  data() {
    return {
      // dados (string, number, array, object, boolean)
      person: {} as Person
    }
  }
})
</script>
