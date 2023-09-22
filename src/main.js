import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import vueAxios from 'vue-axios' 

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router, axios, vueAxios)


app.mount('#app')
