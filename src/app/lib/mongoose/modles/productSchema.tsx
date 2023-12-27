import mongoose, { Schema, model } from "mongoose"

interface Product {
  title: string
  description: string
  price: number
  stock: number
  image: string
  color: string
  size: string
}


const productSchema = new Schema<Product>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
}, {timestamps: true})


export const User = mongoose.models.User ||  model<Product>('User', productSchema);