<template>
  <div class="standings-container">
    <div class="standings-card">
      <h1>🏆 Tabla de Posiciones</h1>
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
          <tr v-for="(player, index) in quinielaStore.standings" :key="player.id" :class="{ highlight: index === 0 }">
            <td class="position">{{ index + 1 }}</td>
            <td>{{ player.username }}</td>
            <td class="points">{{ player.points }}</td>
            <td>{{ player.matches }}</td>
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
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.standings-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
}

h1 {
  color: #667eea;
  margin-bottom: 1.5rem;
  text-align: center;
}

.standings-table {
  width: 100%;
  border-collapse: collapse;
}

.standings-table thead {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.standings-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.standings-table td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.standings-table tbody tr:hover {
  background: #f9f9f9;
}

.standings-table tbody tr.highlight {
  background: #fff3cd;
  font-weight: bold;
}

.position {
  text-align: center;
  font-weight: bold;
  color: #667eea;
}

.points {
  font-weight: bold;
  color: #764ba2;
}
</style>
