<script setup>
import AppHeader from './components/AppHeader.vue'
import ProjectCard from './components/ProjectCard.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="page-shell">
    <AppHeader />
    <main>
      <ProjectCard />
    </main>
    <AppFooter />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #ffffff;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
