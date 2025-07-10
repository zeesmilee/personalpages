// db.js
const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/personal_node', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('✅ Đã kết nối MongoDB')
    } catch (error) {
        console.error('❌ Lỗi kết nối MongoDB:', error)
    }
}

module.exports = connectDB
