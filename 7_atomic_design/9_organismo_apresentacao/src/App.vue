<template>
  <Header />
  <Presentation />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Presentation, Header } from '@/components/organisms'

export default defineComponent({
  components: {
    Header,
    Presentation
  }
})
</script>

<style lang="scss" scoped>
.component {
  margin: 5rem;
}
</style>
