import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import Skills from '../pages/Skills.vue'
import Contact from '../pages/Contact.vue'
import EditProfile from '../pages/EditProfile.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/skills', component: Skills },
    { path: '/contact', component: Contact },
    { path: '/edit-profile', component: EditProfile },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
