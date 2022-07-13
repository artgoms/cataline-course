<template>
  <Header />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Header } from '@/components/organisms'

export default defineComponent({
  components: {
    Header
  }
})
</script>

<style lang="scss" scoped>
.component {
  margin: 5rem;
}
</style>
