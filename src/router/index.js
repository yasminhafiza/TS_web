import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
// Import komponen baru Anda
import ServiceConsultation from '../components/ServiceConsultation/ServiceConsultation.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/consultation',
        name: 'consultation',
        component: ServiceConsultation
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router