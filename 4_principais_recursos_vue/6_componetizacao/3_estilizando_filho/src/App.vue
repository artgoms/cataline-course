<template>
  <ButtonStyled />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: {
    ButtonStyled
  }
})
</script>

<style scoped>
.button-styled {
  background: red;
}

::v-deep.button-styled span {
  color: blue;
}
</style>
