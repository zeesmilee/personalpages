<template>
  <div class="card">
    <h2>{{ profile.name }}</h2>
    <p>{{ profile.bio }}</p>
    <ul>
      <li v-for="(skill, index) in profile.skills" :key="index">{{ skill }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const profile = ref({})

onMounted(async () => {
  const res = await fetch('http://localhost:3000/api/profile')
  profile.value = await res.json()
})
</script>

<style scoped>
.card {
  max-width: 500px;
  margin: 50px auto;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  font-family: sans-serif;
}
</style>
