import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {

     const email=ref('demo email');
     const password=ref('demo pass');

   async function login(){
    const data = await axios.post('/api/auth/login',{
        email:email.value,
        password:password.value
    })
    axios.defaults.headers.common['Authorization']=`Bearer ${data.data.token}`
    document.cookie = "Authenticate=" + true

    }

    return {email, password, login}
  })
