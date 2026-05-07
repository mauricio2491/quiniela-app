<template>
  <div id="app" :class="{ 'dark-mode': themeStore.isDarkMode }">
    <Sidebar v-if="authStore.isAuthenticated" />
    <main class="main-content" v-if="authStore.isAuthenticated">
      <router-view />
    </main>
    <router-view v-else />
  </div>
</template>

<script setup>
import { useAuthStore } from './stores/auth'
import { useThemeStore } from './stores/theme'
import Sidebar from './components/Sidebar.vue'
import { onMounted } from 'vue'

const authStore = useAuthStore()
const themeStore = useThemeStore()

onMounted(() => {
  authStore.loadUser()
  themeStore.loadTheme()
})
</script>

<style>
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --border-color: #e0e0e0;
  --accent: #667eea;
  --accent-dark: #764ba2;
}

#app.dark-mode {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --border-color: #404040;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s, color 0.3s;
}

#app {
  min-height: 100vh;
  display: flex;
}

.main-content {
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
  background-color: var(--bg-primary);
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    padding: 1rem;
  }
}
</style>