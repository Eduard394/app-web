/*import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app') */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Vue3Toastify from 'vue3-toastify'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-right'
})
app.mount('#app')
