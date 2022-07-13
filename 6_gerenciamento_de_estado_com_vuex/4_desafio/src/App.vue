<template>
  <component :is="currentView" />
</template>

<script>
import HomePage from '@/pages/HomePage.vue'

export default {
  components: {
    HomePage
  },
  data() {
    return {
      currentView: 'HomePage'
    }
  }
}
</script>
