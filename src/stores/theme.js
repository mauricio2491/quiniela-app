import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false)

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
  }

  const loadTheme = () => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      isDarkMode.value = saved === 'dark'
    }
  }

  return { isDarkMode, toggleTheme, loadTheme }
})
