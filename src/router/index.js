import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/DashboardComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: 'Dashboard',component: Dashboard},
    {path: '/add-property',name: 'addProperty',component: import("../components/AddPropertyComponent.vue")},
    {path: '/login',name: 'login',component: import("../components/auth/LoginComponent.vue")},
    {path: '/signup',name: 'signup',component: import("../components/auth/RegisterComponent.vue")},
    {path: '/forgetpass',name: 'forgetpass',component: import("../components/auth/ForgetPassComponent.vue")},
    
  ]
})

export default router
