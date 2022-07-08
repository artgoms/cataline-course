<template>
  <ul>
    <li @click="currentView = 'HomePage'">Home</li>
    <li @click="currentView = 'AboutPage'">Sobre</li>
    <li @click="currentView = 'ContactPage'">Contato</li>
  </ul>

  <component :is="currentView" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

export default defineComponent({
  components: {
    HomePage,
    AboutPage,
    ContactPage
  },
  data() {
    return {
      currentView: 'HomePage'
    }
  }
})
</script>
