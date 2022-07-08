<template>
  <ButtonStyled text="Facebook">
    <template v-slot:before>
      <i class="fa-brands fa-facebook-f"></i>
    </template>

    <template v-slot:after>
      <i class="fa-brands fa-facebook"></i>
    </template>
  </ButtonStyled>
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
