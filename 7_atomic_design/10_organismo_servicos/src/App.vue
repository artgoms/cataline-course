<template>
  <Header />
  <Presentation />
  <Services />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Presentation, Header, Services } from '@/components/organisms'

export default defineComponent({
  components: {
    Header,
    Presentation,
    Services
  }
})
</script>

<style lang="scss" scoped>
.component {
  margin: 5rem;
}
</style>
