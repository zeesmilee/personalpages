<template>
  <div class="container">
    <nav>
      <RouterLink to="/">Trang chủ</RouterLink> |
      <RouterLink to="/projects">Dự án</RouterLink> |
      <RouterLink to="/skills">Kỹ năng</RouterLink> |
      <RouterLink to="/contact">Liên hệ</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.container {
  padding: 2rem;
}
nav {
  margin-bottom: 1rem;
}
nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #42b983;
}
</style>
