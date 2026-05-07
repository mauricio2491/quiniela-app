import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('authToken'))
  const users = ref(JSON.parse(localStorage.getItem('users')) || [
    { id: 1, email: 'admin@admin.com', nickname: 'admin', password: 'admin', role: 'admin' }
  ])

  const isAuthenticated = computed(() => !!token.value)

  const login = (email, password) => {
    const foundUser = users.value.find(u => u.email === email && u.password === password)
    if (foundUser) {
      token.value = 'token-' + Date.now()
      user.value = { email: foundUser.email, nickname: foundUser.nickname, role: foundUser.role }
      localStorage.setItem('authToken', token.value)
      localStorage.setItem('user', JSON.stringify(user.value))
      return true
    }
    return false
  }

  const register = (email, nickname, password) => {
    if (users.value.find(u => u.email === email)) {
      return { success: false, message: 'El email ya está registrado' }
    }
    if (users.value.find(u => u.nickname === nickname)) {
      return { success: false, message: 'El nickname ya está en uso' }
    }
    
    const newUser = {
      id: users.value.length + 1,
      email,
      nickname,
      password,
      role: 'user'
    }
    users.value.push(newUser)
    localStorage.setItem('users', JSON.stringify(users.value))
    
    return { success: true, message: 'Usuario registrado exitosamente' }
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

  return { user, token, isAuthenticated, login, register, logout, loadUser }
})
