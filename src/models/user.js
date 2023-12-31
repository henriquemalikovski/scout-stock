import mongoose from "mongoose"
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  role: [{
    type: String,
    required: true,
    enum: ['admin', 'user'],
    default: 'user'
  }],
})

export default mongoose.model('User', userSchema);