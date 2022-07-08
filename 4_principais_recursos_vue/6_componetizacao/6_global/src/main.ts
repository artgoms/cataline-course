import { createApp } from 'vue'
import App from './App.vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

const app = createApp(App)

app.component('ButtonStyled', ButtonStyled)

app.mount('#app')
