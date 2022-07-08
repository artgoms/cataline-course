<template>
  <button class="button-styled">
    <slot name="before" />
    {{ text }}
    <slot name="after" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.button-styled {
  color: #fff;
  background-color: #2d6cea;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
}
</style>
