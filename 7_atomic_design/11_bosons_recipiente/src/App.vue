<template>
  <div class="component">
    <Container>
      <Header />
      <Presentation />
      <Services />
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Presentation, Header, Services } from '@/components/organisms'
import { Container } from '@/components/bosons'

export default defineComponent({
  components: {
    Header,
    Presentation,
    Services,
    Container
  }
})
</script>

<style lang="scss" scoped>
.component {
  margin: 5rem;
}
</style>
