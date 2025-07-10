// index.js
const express = require('express')
const cors = require('cors')
const connectDB = require('./db.js')
const Profile = require('./models/Profile.js')

const app = express()
app.use(cors())
app.use(express.json())

connectDB()

// API: GET profile
app.get('/api/profile', async (req, res) => {
    const profile = await Profile.findOne()
    res.json(profile)
})

// API: POST profile (dùng postman hoặc form để cập nhật)
app.post('/api/profile', async (req, res) => {
    let profile = await Profile.findOne()
    if (profile) {
        profile.set(req.body)
    } else {
        profile = new Profile(req.body)
    }
    await profile.save()
    res.json({ message: 'Lưu profile thành công' })
})

app.listen(3000, () => {
    console.log('🚀 Server chạy tại http://localhost:3000')
})

// Tạo dữ liệu mẫu nếu chưa có

async function createSampleProfile() {
    const existing = await Profile.findOne()
    if (!existing) {
        const profile = new Profile({
            name: 'Minh Nguyễn',
            bio: 'Sinh viên năm 4 Bách Khoa',
            skills: ['Vue.js', 'Node.js', 'MongoDB']
        })
        await profile.save()
        console.log('✅ Đã tạo dữ liệu mẫu trong MongoDB')
    }
}

createSampleProfile()
