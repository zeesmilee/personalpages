<template>
  <form @submit.prevent="updateProfile" class="form-container">
    <h2>Cập nhật thông tin</h2>
    <label>
      Họ tên:
      <input type="text" v-model="form.name" required />
    </label>
    <label>
      Giới thiệu:
      <textarea v-model="form.bio" required></textarea>
    </label>
    <label>
      Kỹ năng (phân cách bằng dấu phẩy):
      <input type="text" v-model="form.skillsInput" />
    </label>
    <button type="submit">Lưu</button>
    <p v-if="message">{{ message }}</p>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({
  name: '',
  bio: '',
  skillsInput: ''
})

const message = ref('')

// Lấy dữ liệu hiện tại khi mở form
onMounted(async () => {
  const res = await fetch('http://localhost:3000/api/profile')
  const data = await res.json()
  form.value.name = data.name || ''
  form.value.bio = data.bio || ''
  form.value.skillsInput = data.skills?.join(', ') || ''
})

async function updateProfile() {
  const payload = {
    name: form.value.name,
    bio: form.value.bio,
    skills: form.value.skillsInput.split(',').map(s => s.trim())
  }

  const res = await fetch('http://localhost:3000/api/profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  const result = await res.json()
  message.value = result.message || 'Đã lưu!'
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px #ccc;
}
input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
}
button {
  padding: 0.5rem;
  background: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
