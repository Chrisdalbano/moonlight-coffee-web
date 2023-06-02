import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/tailwind.css';
import './assets/tailwind.css'
import router from './router'
import VueScrollTo from 'vue-scrollto';




createApp(App).use(VueScrollTo).use(router).mount('#app')
