<template>
  <div class="social-networks">
    <SocialLink name="GitHub" to="/github" icon="github.svg" />
    <SocialLink name="Twitter" to="/twitter" icon="twitter.svg" />
    <SocialLink name="Facebook" to="/facebook" icon="facebook.svg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SocialLink } from '@/components/atoms'

export default defineComponent({
  components: {
    SocialLink
  }
})
</script>

<style lang="scss" scoped>
.social-networks {
  display: grid;
  grid-gap: 1rem;
}
</style>
