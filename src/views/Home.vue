<template>
  <div class="home-container">
    <div class="content">
      <div class="welcome-card">
        <h1>¡Bienvenido! 👋</h1>
        <p class="welcome-text">{{ authStore.user?.username }}</p>
        <div class="features">
          <div class="feature">
            <h2>📊 Tabla de Posiciones</h2>
            <p>Visualiza el ranking de todos los participantes</p>
            <router-link to="/standings" class="btn">Ver Posiciones</router-link>
          </div>
          <div class="feature">
            <h2>🎯 Participa</h2>
            <p>Realiza tus quinielas y acumula puntos</p>
            <button class="btn" disabled>Próximamente</button>
          </div>
          <div class="feature">
            <h2>🏆 Premios</h2>
            <p>Compite por los mejores premios</p>
            <button class="btn" disabled>Próximamente</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
</script>

<style scoped>
.home-container {
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.content {
  width: 100%;
  max-width: 1200px;
}

.welcome-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #667eea;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

.welcome-text {
  color: #764ba2;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.feature h2 {
  color: #333;
  margin-bottom: 0.5rem;
}

.feature p {
  color: #666;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s;
}

.btn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
