import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/DashboardComponent.vue'
import AddPropertyComponent from '../components/AddPropertyComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/add-property',
      name: 'addProperty',
      component: AddPropertyComponent
    },
    
  ]
})

export default router
