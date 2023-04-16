import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

import './assets/styles/main.scss'
const app = createApp(App)

// Install the store instance as a plugin
app.use(store)
app.mount('#app')
