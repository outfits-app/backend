import { Schema, model } from "mongoose";

export const categoriesSchema = new Schema({
  category: { type: String, required: true },
});

export const Categories = model("Categories", categoriesSchema, "categories");
