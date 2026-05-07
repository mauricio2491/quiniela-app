<template>
  <div class="login-container" :class="{ 'dark-mode': themeStore.isDarkMode }">
    <div class="login-card">
      <h1>🏆 Quiniela</h1>
      
      <div class="tabs">
        <button :class="['tab', { active: activeTab === 'login' }]" @click="activeTab = 'login">
          Ingresar
        </button>
        <button :class="['tab', { active: activeTab === 'register' }]" @click="activeTab = 'register">
          Crear Cuenta
        </button>
      </div>

      <!-- Login Tab -->
      <div v-if="activeTab === 'login'" class="tab-content">
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="login-email">Correo:</label>
            <input 
              id="login-email"
              v-model="loginForm.email" 
              type="email" 
              placeholder="admin@admin.com"
              required
            >
          </div>
          <div class="form-group">
            <label for="login-password">Contraseña:</label>
            <input 
              id="login-password"
              v-model="loginForm.password" 
              type="password" 
              placeholder="admin"
              required
            >
          </div>
          <button type="submit" class="submit-btn">Ingresar</button>
          <p v-if="loginError" class="error">{{ loginError }}</p>
        </form>
        <p class="hint">Demo: admin@admin.com / admin</p>
      </div>

      <!-- Register Tab -->
      <div v-if="activeTab === 'register'" class="tab-content">
        <form @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="register-email">Correo:</label>
            <input 
              id="register-email"
              v-model="registerForm.email" 
              type="email" 
              placeholder="tu@email.com"
              required
            >
          </div>
          <div class="form-group">
            <label for="register-nickname">Nickname:</label>
            <input 
              id="register-nickname"
              v-model="registerForm.nickname" 
              type="text" 
              placeholder="tu_nickname"
              required
            >
          </div>
          <div class="form-group">
            <label for="register-password">Contraseña:</label>
            <input 
              id="register-password"
              v-model="registerForm.password" 
              type="password" 
              placeholder="••••••••"
              required
            >
          </div>
          <div class="form-group">
            <label for="register-password-confirm">Confirmar Contraseña:</label>
            <input 
              id="register-password-confirm"
              v-model="registerForm.passwordConfirm" 
              type="password" 
              placeholder="••••••••"
              required
            >
          </div>
          <button type="submit" class="submit-btn">Crear Cuenta</button>
          <p v-if="registerError" class="error">{{ registerError }}</p>
          <p v-if="registerSuccess" class="success">{{ registerSuccess }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useThemeStore } from '../stores/theme'

const authStore = useAuthStore()
const themeStore = useThemeStore()
const router = useRouter()

const activeTab = ref('login')

const loginForm = ref({ email: '', password: '' })
const loginError = ref('')

const registerForm = ref({ email: '', nickname: '', password: '', passwordConfirm: '' })
const registerError = ref('')
const registerSuccess = ref('')

const handleLogin = () => {
  loginError.value = ''
  if (authStore.login(loginForm.value.email, loginForm.value.password)) {
    router.push('/')
  } else {
    loginError.value = 'Correo o contraseña incorrectos'
  }
}

const handleRegister = () => {
  registerError.value = ''
  registerSuccess.value = ''
  
  if (registerForm.value.password !== registerForm.value.passwordConfirm) {
    registerError.value = 'Las contraseñas no coinciden'
    return
  }
  
  if (registerForm.value.password.length < 6) {
    registerError.value = 'La contraseña debe tener al menos 6 caracteres'
    return
  }
  
  const result = authStore.register(
    registerForm.value.email,
    registerForm.value.nickname,
    registerForm.value.password
  )
  
  if (result.success) {
    registerSuccess.value = result.message
    registerForm.value = { email: '', nickname: '', password: '', passwordConfirm: '' }
    setTimeout(() => {
      activeTab.value = 'login'
    }, 1500)
  } else {
    registerError.value = result.message
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
}

.login-container.dark-mode {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
}

.login-card {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--accent);
  font-size: 1.8rem;
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--border-color);
}

.tab {
  flex: 1;
  padding: 0.75rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-weight: 600;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
}

.tab.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.tab-content {
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: var(--accent);
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

.error {
  color: #ff6b6b;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.success {
  color: #51cf66;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.hint {
  text-align: center;
  color: var(--text-secondary);
  margin-top: 1rem;
  font-size: 0.85rem;
}
</style>