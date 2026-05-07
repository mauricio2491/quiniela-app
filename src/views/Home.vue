<template>
  <div class="home-container">
    <div class="header">
      <h1>⚽ Partidos por Jugar</h1>
    </div>

    <div class="matches-grid">
      <div v-for="match in quinielaStore.matches" :key="match.id" class="match-card">
        <div class="match-date">{{ formatDate(match.fecha) }}</div>
        
        <div class="match-body">
          <div class="team local">
            <p class="team-name">{{ match.local }}</p>
            <input 
              v-model.number="match.scoreLocal" 
              type="number" 
              min="0" 
              class="score-input"
              placeholder="0"
            >
          </div>

          <div class="vs">vs</div>

          <div class="team visitante">
            <input 
              v-model.number="match.scoreVisitante" 
              type="number" 
              min="0" 
              class="score-input"
              placeholder="0"
            >
            <p class="team-name">{{ match.visitante }}</p>
          </div>
        </div>

        <div class="match-footer">
          <button @click="saveMatch(match)" class="save-btn">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuinielaStore } from '../stores/quiniela'

const quinielaStore = useQuinielaStore()

const formatDate = (fecha) => {
  const date = new Date(fecha)
  return date.toLocaleDateString('es-ES', { weekday: 'short', month: 'short', day: 'numeric' })
}

const saveMatch = (match) => {
  quinielaStore.updateMatchScore(match.id, match.scoreLocal, match.scoreVisitante)
  // Aquí podrías hacer una llamada a una API para guardar en el servidor
  alert(`Partido guardado: ${match.local} ${match.scoreLocal || '-'} vs ${match.scoreVisitante || '-'} ${match.visitante}`)
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  margin-bottom: 2rem;
}

.header h1 {
  color: var(--accent);
  font-size: 2rem;
  margin: 0;
}

.matches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.match-card {
  background: var(--bg-secondary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid var(--border-color);
}

.match-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
}

.match-date {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
  color: white;
  padding: 0.75rem;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
}

.match-body {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.team {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.team.visitante {
  flex-direction: column-reverse;
}

.team-name {
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  font-size: 0.95rem;
  margin: 0;
}

.score-input {
  width: 60px;
  padding: 0.75rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--accent);
  transition: border-color 0.3s;
}

.score-input:focus {
  outline: none;
  border-color: var(--accent);
}

.vs {
  color: var(--text-secondary);
  font-weight: bold;
  margin: 0 0.5rem;
}

.match-footer {
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
}

.save-btn {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s;
  font-size: 0.9rem;
}

.save-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .matches-grid {
    grid-template-columns: 1fr;
  }

  .header h1 {
    font-size: 1.5rem;
  }
}
</style>