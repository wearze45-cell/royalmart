import mongoose, { Schema, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    category: String, // T-shirt, Hoodie
    sizes: [String], // S, M, L, XL
    colors: [String],
    image: String,
    stock: Number,
  },
  { timestamps: true }
);

export const Product =
  models.Product || mongoose.model("Product", ProductSchema);
