import mongoose from 'mongoose'

const userSchema =new mongoose.Schema({
    name: String,
    email: String,
    educationLevel: String,
    pins: Array,
})

const User = mongoose.model('user', userSchema)

export default User