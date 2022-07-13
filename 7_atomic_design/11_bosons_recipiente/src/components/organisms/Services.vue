<template>
  <div class="services">
    <Service
      title="Front End"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, aspernatur quidem blanditiis ullam temporibus debitis ipsum nulla saepe quo repellendus est. Cum ipsum debitis eaque expedita aperiam eius iure! Dolorum!"
    />
    <Service
      title="Back End"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, aspernatur quidem blanditiis ullam temporibus debitis ipsum nulla saepe quo repellendus est. Cum ipsum debitis eaque expedita aperiam eius iure! Dolorum!"
    />
    <Service
      title="Manutenção"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, aspernatur quidem blanditiis ullam temporibus debitis ipsum nulla saepe quo repellendus est. Cum ipsum debitis eaque expedita aperiam eius iure! Dolorum!"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Service } from '@/components/molecules'

export default defineComponent({
  components: {
    Service
  }
})
</script>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
}
</style>
