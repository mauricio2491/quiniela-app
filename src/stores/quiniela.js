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

  const matches = ref([
    { id: 1, local: 'Real Madrid', visitante: 'Barcelona', scoreLocal: null, scoreVisitante: null, fecha: '2026-05-10' },
    { id: 2, local: 'Manchester United', visitante: 'Liverpool', scoreLocal: null, scoreVisitante: null, fecha: '2026-05-10' },
    { id: 3, local: 'Bayern Munich', visitante: 'Borussia Dortmund', scoreLocal: null, scoreVisitante: null, fecha: '2026-05-11' },
    { id: 4, local: 'PSG', visitante: 'Lyon', scoreLocal: null, scoreVisitante: null, fecha: '2026-05-11' },
    { id: 5, local: 'Juventus', visitante: 'Milan', scoreLocal: null, scoreVisitante: null, fecha: '2026-05-12' },
    { id: 6, local: 'Atlético Madrid', visitante: 'Valencia', scoreLocal: null, scoreVisitante: null, fecha: '2026-05-12' }
  ])

  const updateMatchScore = (matchId, scoreLocal, scoreVisitante) => {
    const match = matches.value.find(m => m.id === matchId)
    if (match) {
      match.scoreLocal = scoreLocal
      match.scoreVisitante = scoreVisitante
    }
  }

  return { standings, matches, updateMatchScore }
})
