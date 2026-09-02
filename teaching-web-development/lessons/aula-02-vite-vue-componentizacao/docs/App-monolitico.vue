<template>
  <div class="page-shell">
    <!-- HEADER -->
    <header class="app-header">
      <p class="eyebrow">IFMA · Projeto Integrador</p>
      <h1>Projeto Integrador Web</h1>
      <p>Interface componentizada com Vue 3 e Vite — demonstração prática de separação de responsabilidades.</p>
    </header>

    <!-- MAIN CONTENT -->
    <main>
      <article class="project-card">
        <p class="label">Desafio inicial</p>
        <h2>Identificar oportunidades</h2>
        <p>Separar responsabilidades em componentes reutilizáveis e fáceis de manter ao longo do desenvolvimento.</p>
        <button class="cta-button">Marcar interesse</button>
      </article>
    </main>

    <!-- FOOTER -->
    <footer class="app-footer">
      <small>Desenvolvimento de Sistemas Web · IFMA · 2026 · Componentizado com Vue 3</small>
    </footer>
  </div>
</template>

<style scoped>
.page-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* HEADER STYLES */
.app-header {
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  text-align: center;
}

.app-header .eyebrow {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  opacity: 0.9;
  letter-spacing: 0.05em;
}

.app-header h1 {
  margin: 0.5rem 0 1rem 0;
  font-size: 2rem;
  font-weight: 700;
}

.app-header p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

/* MAIN CONTENT STYLES */
main {
  flex: 1;
}

.project-card {
  padding: 2rem;
  margin: 2rem auto;
  max-width: 600px;
  background: white;
  border-left: 4px solid #10b981;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.project-card .label {
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: #059669;
  letter-spacing: 0.05em;
}

.project-card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.project-card p {
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

/* FOOTER STYLES */
.app-footer {
  padding: 2rem 1rem;
  background: #f3f4f6;
  border-top: 1px solid #e5e7eb;
  text-align: center;
}

.app-footer small {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
}
</style>
