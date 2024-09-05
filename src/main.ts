import './assets/main.css'
import { createApp, h } from 'vue'
import App from './App.vue'
import CreateTemplate from "./views/CreateTemplate.vue"
import { createRouter, createWebHistory, RouterView } from "vue-router"
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: to => {
                // the function receives the target route as the argument
                // we return a redirect path/location here.
                return { path: '/create' }
            },
        },
        {
            path: "/create",
            component: CreateTemplate
        },
    ]
})

const app = createApp(App)
app.component("v-select", vSelect);
app.use(router)
app.mount('#app')