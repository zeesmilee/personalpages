<!-- src/pages/EditProfile.vue -->
<template>
  <div>
    <h2>Chỉnh sửa thông tin cá nhân</h2>
    <form @submit.prevent="updateProfile">
      <label>Tên:</label>
      <input v-model="form.name" required />

      <label>Giới thiệu:</label>
      <textarea v-model="form.bio" required></textarea>

      <label>Kỹ năng:</label>
      <input v-model="skillsInput" required />

      <button type="submit">Lưu thay đổi</button>
    </form>

    <p v-if="success" style="color: green">✅ Cập nhật thành công!</p>
    <p v-if="error" style="color: red">❌ Có lỗi xảy ra!</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({
  name: '',
  bio: '',
  skills: []
})
const skillsInput = ref('')
const success = ref(false)
const error = ref(false)

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/profile')
    const data = await res.json()
    form.value = data
    skillsInput.value = data.skills.join(', ')
  } catch (err) {
    console.error(err)
    error.value = true
  }
})

async function updateProfile() {
  try {
    const updatedData = {
      ...form.value,
      skills: skillsInput.value.split(',').map(s => s.trim())
    }

    const res = await fetch('http://localhost:3000/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    })

    if (res.ok) {
      success.value = true
      error.value = false
    } else {
      throw new Error('Update failed')
    }
  } catch (err) {
    console.error(err)
    success.value = false
    error.value = true
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
}
input, textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  width: fit-content;
  padding: 6px 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
