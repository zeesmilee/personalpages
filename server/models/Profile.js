// models/Profile.js
const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    name: String,
    bio: String,
    skills: [String]
})

module.exports = mongoose.model('Profile', profileSchema)
