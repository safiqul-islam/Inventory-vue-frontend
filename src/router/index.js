import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/DashboardComponent.vue'
import AddPropertyComponent from '../components/AddPropertyComponent.vue'
import LoginComponent from '../components/auth/LoginComponent.vue'
import RegisterComponent from '../components/auth/RegisterComponent.vue'
import ForgetPassComponent from '../components/auth/ForgetPassComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: 'Dashboard',component: Dashboard},
    {path: '/add-property',name: 'addProperty',component: AddPropertyComponent},
    {path: '/login',name: 'login',component: LoginComponent},
    {path: '/signup',name: 'signup',component: RegisterComponent},
    {path: '/forgetpass',name: 'forgetpass',component: ForgetPassComponent},
    
  ]
})

export default router
