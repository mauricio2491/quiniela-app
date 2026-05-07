<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed }">
    <div class="sidebar-header">
      <h1 v-if="!isCollapsed" class="logo">🏆 Quiniela</h1>
      <button class="toggle-btn" @click="isCollapsed = !isCollapsed">
        {{ isCollapsed ? '→' : '←' }}
      </button>
    </div>

    <nav class="sidebar-nav">
      <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }">
        <span class="icon">⚽</span>
        <span v-if="!isCollapsed" class="label">Partidos</span>
      </router-link>
      <router-link to="/standings" class="nav-item" :class="{ active: $route.path === '/standings' }">
        <span class="icon">📊</span>
        <span v-if="!isCollapsed" class="label">Posiciones</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <button class="theme-toggle" @click="themeStore.toggleTheme()" :title="themeStore.isDarkMode ? 'Modo claro' : 'Modo oscuro'">
        {{ themeStore.isDarkMode ? '☀️' : '🌙' }}
      </button>
      
      <div v-if="!isCollapsed" class="user-info">
        <p class="user-nickname">{{ authStore.user?.nickname }}</p>
        <p class="user-role">{{ authStore.user?.role }}</p>
      </div>

      <button class="logout-btn" @click="handleLogout" :title="isCollapsed ? 'Salir' : ''">
        {{ isCollapsed ? '🚪' : 'Salir' }}
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { useThemeStore } from '../stores/theme'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const authStore = useAuthStore()
const themeStore = useThemeStore()
const router = useRouter()
const isCollapsed = ref(false)

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  transition: width 0.3s;
  z-index: 100;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.logo {
  font-size: 1.3rem;
  color: var(--accent);
  margin: 0;
}

.toggle-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text-primary);
  transition: transform 0.3s;
}

.toggle-btn:hover {
  transform: scale(1.2);
}

.sidebar-nav {
  flex: 1;
  padding: 1.5rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s;
  border-left: 3px solid transparent;
}

.nav-item:hover {
  background-color: var(--bg-primary);
  color: var(--accent);
}

.nav-item.active {
  background-color: var(--bg-primary);
  color: var(--accent);
  border-left-color: var(--accent);
}

.icon {
  font-size: 1.2rem;
  min-width: 1.5rem;
}

.label {
  white-space: nowrap;
}

.sidebar-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.theme-toggle {
  background: none;
  border: 1px solid var(--border-color);
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;
  color: var(--text-primary);
}

.theme-toggle:hover {
  background-color: var(--bg-primary);
}

.user-info {
  text-align: center;
  padding: 1rem;
  background-color: var(--bg-primary);
  border-radius: 6px;
}

.user-nickname {
  font-weight: bold;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
}

.user-role {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin: 0;
  text-transform: uppercase;
}

.logout-btn {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.3s;
}

.logout-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .sidebar {
    width: 80px;
  }

  .sidebar-nav,
  .user-info {
    display: none;
  }

  .sidebar-header {
    flex-direction: column;
    gap: 1rem;
  }

  .logo {
    font-size: 1rem;
  }
}
</style>