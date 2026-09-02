<template>
  <article class="project-card">
    <p class="label">Desafio inicial</p>
    <h2>Identificar oportunidades</h2>
    <p>Separar responsabilidades em componentes reutilizáveis e fáceis de manter ao longo do desenvolvimento.</p>
    <button class="cta-button">Marcar interesse</button>
  </article>
</template>

<style scoped>
.project-card {
  padding: 2rem;
  margin: 2rem auto;
  max-width: 600px;
  background: white;
  border-left: 4px solid #10b981;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.label {
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: #059669;
  letter-spacing: 0.05em;
}

h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

p {
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #4b5563;
}

.cta-button {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.cta-button:hover {
  background: #059669;
}

.cta-button:focus {
  outline: 2px solid #10b981;
  outline-offset: 2px;
}
</style>
