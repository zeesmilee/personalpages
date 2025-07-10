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

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #eaf6ff; /* 💡 Màu nền nhẹ nhàng */
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

nav {
  margin-bottom: 1.5rem;
  text-align: center;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
