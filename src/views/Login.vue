<template>
  <div class="login-container">
    <div class="login-card">
      <h1>🏆 Quiniela App</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input 
            id="username"
            v-model="username" 
            type="text" 
            placeholder="admin"
            required
          >
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input 
            id="password"
            v-model="password" 
            type="password" 
            placeholder="admin"
            required
          >
        </div>
        <button type="submit" class="login-btn">Ingresar</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
      <p class="hint">Demo: admin / admin</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const authStore = useAuthStore()

const handleLogin = () => {
  error.value = ''
  if (authStore.login(username.value, password.value)) {
    router.push('/')
  } else {
    error.value = 'Usuario o contraseña incorrectos'
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
}

.login-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #667eea;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #667eea;
}

.login-btn {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s;
}

.login-btn:hover {
  transform: translateY(-2px);
}

.error {
  color: #ff6b6b;
  text-align: center;
  margin-top: 1rem;
}

.hint {
  text-align: center;
  color: #999;
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>
