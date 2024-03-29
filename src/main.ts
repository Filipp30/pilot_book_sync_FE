import { createApp } from 'vue'
import {BootstrapVue3} from "bootstrap-vue-3"
import App from './App.vue'
import router from './router'
import store from './store/store'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

app
    .use(router)
    .use(store)
    .use(BootstrapVue3)
    .mount('#app')
