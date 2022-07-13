<template>
  <div class="component">
    <Service
      title="Front End"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate exercitationem tempora dolorum tempore, reprehenderit unde earum dignissimos! Necessitatibus velit doloremque non quas enim animi maiores delectus cupiditate at numquam. Nihil."
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
.component {
  margin: 5rem;
}
</style>
