import {createRouter, createWebHistory} from 'vue-router'
import App from "@/App.vue";

import './assets/main.css'
import "bootstrap/dist/js/bootstrap.min.js";

import {createApp} from 'vue'

import Home from "@/components/Home.vue";
import Book from "@/components/Book.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";

//Routes array example {path: '/', component: ComponentName}
const routes = [
    {path: '/', component: Home},
    {path: '/book', component: Book},
    {path: '/about', component: About},
    {path: '/contact', component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App)
app.use(router).mount('#app')