import mongoose, { Schema, model } from "mongoose"

interface User {
  username: string
  email: string
  password: string
  image?: string
  isAdmin: Boolean
  isActive: Boolean
  phone?: string
  address?: string
}


const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 12,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: String,
    default: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
}, {timestamps: true})



const User = mongoose.models.User || model<User>('User', userSchema);

export default User
