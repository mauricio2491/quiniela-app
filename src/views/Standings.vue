<template>
  <div class="standings-container">
    <div class="header">
      <h1>📊 Tabla de Posiciones</h1>
    </div>

    <div class="table-wrapper">
      <table class="standings-table">
        <thead>
          <tr>
            <th>Posición</th>
            <th>Usuario</th>
            <th>Puntos</th>
            <th>Partidos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in quinielaStore.standings" :key="player.id" :class="{ champion: index === 0 }">
            <td class="position">
              <span v-if="index === 0" class="medal">🥇</span>
              <span v-else-if="index === 1" class="medal">🥈</span>
              <span v-else-if="index === 2" class="medal">🥉</span>
              <span v-else>{{ index + 1 }}</span>
            </td>
            <td class="username">{{ player.username }}</td>
            <td class="points">{{ player.points }}</td>
            <td class="matches">{{ player.matches }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useQuinielaStore } from '../stores/quiniela'

const quinielaStore = useQuinielaStore()
</script>

<style scoped>
.standings-container {
  max-width: 800px;
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

.table-wrapper {
  background: var(--bg-secondary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
}

.standings-table {
  width: 100%;
  border-collapse: collapse;
}

.standings-table thead {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
  color: white;
}

.standings-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.95rem;
}

.standings-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-primary);
}

.standings-table tbody tr {
  transition: background-color 0.3s;
}

.standings-table tbody tr:hover {
  background-color: var(--bg-primary);
}

.standings-table tbody tr.champion {
  background: linear-gradient(90deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  font-weight: 600;
}

.position {
  text-align: center;
  font-weight: bold;
  color: var(--accent);
  min-width: 60px;
}

.medal {
  font-size: 1.2rem;
}

.username {
  font-weight: 600;
  color: var(--text-primary);
}

.points {
  font-weight: bold;
  color: var(--accent);
}

.matches {
  text-align: center;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .standings-container {
    margin: 0;
  }

  .header h1 {
    font-size: 1.5rem;
  }

  .standings-table th,
  .standings-table td {
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
}
</style>