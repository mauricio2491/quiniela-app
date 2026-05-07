import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('authToken'))

  const isAuthenticated = computed(() => !!token.value)

  const login = (username, password) => {
    // Validar credenciales admin
    if (username === 'admin' && password === 'admin') {
      token.value = 'admin-token-' + Date.now()
      user.value = { username: 'admin', role: 'admin' }
      localStorage.setItem('authToken', token.value)
      localStorage.setItem('user', JSON.stringify(user.value))
      return true
    }
    return false
  }

  const logout = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
  }

  const loadUser = () => {
    if (token.value) {
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        user.value = JSON.parse(savedUser)
      }
    }
  }

  return { user, token, isAuthenticated, login, logout, loadUser }
})
