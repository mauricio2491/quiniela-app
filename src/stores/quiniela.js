import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQuinielaStore = defineStore('quiniela', () => {
  const standings = ref([
    { id: 1, username: 'Juan', points: 45, matches: 10 },
    { id: 2, username: 'María', points: 42, matches: 10 },
    { id: 3, username: 'Carlos', points: 38, matches: 10 },
    { id: 4, username: 'Ana', points: 35, matches: 10 },
    { id: 5, username: 'Pedro', points: 30, matches: 10 }
  ])

  return { standings }
})
